"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";

const BRANCHES = 5;
const SPIN = 1.35;
const RANDOMNESS = 0.38;
const RANDOMNESS_POWER = 3;
const RADIUS = 2.6;

function buildGalaxyGeometry(count: number) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const insideColor = new THREE.Color("#7fe6ff");
  const outsideColor = new THREE.Color("#8b6bff");
  const mixedColor = new THREE.Color();

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const radius = Math.pow(Math.random(), 1.6) * RADIUS;
    const spinAngle = radius * SPIN;
    const branchAngle = ((i % BRANCHES) / BRANCHES) * Math.PI * 2;

    const randomX = Math.pow(Math.random(), RANDOMNESS_POWER) * (Math.random() < 0.5 ? 1 : -1) * RANDOMNESS * radius;
    const randomY =
      Math.pow(Math.random(), RANDOMNESS_POWER) * (Math.random() < 0.5 ? 1 : -1) * RANDOMNESS * radius * 0.4;
    const randomZ = Math.pow(Math.random(), RANDOMNESS_POWER) * (Math.random() < 0.5 ? 1 : -1) * RANDOMNESS * radius;

    positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

    mixedColor.copy(insideColor).lerp(outsideColor, radius / RADIUS);
    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  return geometry;
}

export default function NeuralGalaxy() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.clientWidth === 0) return;

    const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCompact = window.matchMedia("(max-width: 640px)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.6, 6.2);
    camera.lookAt(0, 0, 0);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearAlpha(0);
    container.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      0.45,
      0.3,
      0.42
    );
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());

    const geometry = buildGalaxyGeometry(isCompact ? 4200 : 7200);
    const material = new THREE.PointsMaterial({
      size: 0.05,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const points = new THREE.Points(geometry, material);

    const spinGroup = new THREE.Group();
    spinGroup.rotation.x = -0.5;
    spinGroup.rotation.z = 0.18;
    spinGroup.add(points);

    const tiltGroup = new THREE.Group();
    tiltGroup.add(spinGroup);
    scene.add(tiltGroup);

    composer.render();

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
      composer.setSize(width, height);
      bloomPass.setSize(width, height);
      composer.render();
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

        points.rotation.y += delta * 0.12;
        tiltGroup.rotation.y += (pointer.x * 0.2 - tiltGroup.rotation.y) * 0.04;
        tiltGroup.rotation.x += (pointer.y * 0.12 - tiltGroup.rotation.x) * 0.04;

        composer.render();
      };
      frameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      composer.dispose();
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
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[42%] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_20%,#000_62%,transparent_100%)] sm:h-[58%]"
    />
  );
}
