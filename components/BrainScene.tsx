"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function buildBrainGeometry() {
  const geometry = new THREE.IcosahedronGeometry(1.9, 3);
  const position = geometry.attributes.position;
  const colorStart = new THREE.Color("#8b6bff");
  const colorEnd = new THREE.Color("#4fd1ff");
  const colors = new Float32Array(position.count * 3);
  const vertex = new THREE.Vector3();
  const tmpColor = new THREE.Color();

  for (let i = 0; i < position.count; i++) {
    vertex.fromBufferAttribute(position, i);
    const { x: nx, y: ny, z: nz } = vertex;

    const fold =
      Math.sin(nx * 2.4 + ny * 1.6) * 0.5 +
      Math.sin(ny * 3.1 - nz * 2.0) * 0.32 +
      Math.sin(nz * 2.7 + nx * 1.2) * 0.24;
    const fissure = Math.exp(-(nx * nx) / 0.05) * 0.55;

    const offset = fold * 0.22 - fissure;
    vertex.multiplyScalar(1 + offset / vertex.length());
    vertex.y *= 0.82;
    vertex.x *= 1.05;
    position.setXYZ(i, vertex.x, vertex.y, vertex.z);

    const t = THREE.MathUtils.clamp((vertex.x + 1.6) / 3.2, 0, 1);
    tmpColor.copy(colorStart).lerp(colorEnd, t);
    colors[i * 3] = tmpColor.r;
    colors[i * 3 + 1] = tmpColor.g;
    colors[i * 3 + 2] = tmpColor.b;
  }

  geometry.computeVertexNormals();
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  return geometry;
}

export default function BrainScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.clientWidth === 0) return;

    const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 6.2);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const geometry = buildBrainGeometry();

    const wireMaterial = new THREE.MeshBasicMaterial({
      vertexColors: true,
      wireframe: true,
      transparent: true,
      opacity: 0.34,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const pointsMaterial = new THREE.PointsMaterial({
      vertexColors: true,
      size: 0.032,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const spinGroup = new THREE.Group();
    spinGroup.add(new THREE.Mesh(geometry, wireMaterial));
    spinGroup.add(new THREE.Points(geometry, pointsMaterial));

    const tiltGroup = new THREE.Group();
    tiltGroup.add(spinGroup);
    scene.add(tiltGroup);

    renderer.render(scene, camera);

    const pointer = { x: 0, y: 0 };
    function handlePointerMove(event: PointerEvent) {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    }

    let isVisible = true;
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    intersectionObserver.observe(container);

    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.render(scene, camera);
    });
    resizeObserver.observe(container);

    let frameId = 0;
    const clock = new THREE.Clock();

    if (!shouldReduceMotion) {
      window.addEventListener("pointermove", handlePointerMove);

      const animate = () => {
        frameId = requestAnimationFrame(animate);
        if (!isVisible || document.hidden) return;
        const delta = clock.getDelta();

        spinGroup.rotation.y += delta * 0.16;
        tiltGroup.rotation.x += (pointer.y * 0.22 - tiltGroup.rotation.x) * 0.04;
        tiltGroup.rotation.z += (pointer.x * 0.12 - tiltGroup.rotation.z) * 0.04;

        renderer.render(scene, camera);
      };
      frameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      geometry.dispose();
      wireMaterial.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[38%] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_20%,#000_62%,transparent_100%)] sm:h-[54%]"
    />
  );
}
