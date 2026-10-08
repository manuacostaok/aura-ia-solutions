"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export type OrbitSite = { id: string; name: string; image: string; url: string };

const COMPACT_QUERY = "(max-width: 640px)";
const COMPACT_COUNT = 8;
/** Vuelta completa en ~33 s a régimen; arranca casi quieta y acelera de a poco. */
const CRUISE_SPEED = 0.19;
const START_SPEED = 0.025;
const RAMP_SECONDS = 9;
const DRAG_THRESHOLD = 6;

const smoothstep = (t: number) => t * t * (3 - 2 * t);

export default function SitesOrbit({ sites }: { sites: OrbitSite[] }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const cards = cardRefs.current.filter((card): card is HTMLAnchorElement => card !== null);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactMedia = window.matchMedia(COMPACT_QUERY);

    let angle = -Math.PI / 2 + 0.35; // arranca con un sitio al frente
    let velocity = 0; // rad/s extra aportado por el arrastre
    let elapsed = 0;
    let dragging = false;
    let hovering = false;
    let moved = 0;
    let lastX = 0;
    let lastT = 0;
    let visible = true;
    let frameId = 0;

    const layout = () => {
      const width = stage.clientWidth;
      const height = stage.clientHeight;
      const compact = compactMedia.matches;
      const count = compact ? Math.min(COMPACT_COUNT, cards.length) : cards.length;
      const rx = Math.min(width * (compact ? 0.4 : 0.42), 540);
      const ry = height * (compact ? 0.24 : 0.22);
      const cx = width / 2;
      const cy = height * 0.5;

      cards.forEach((card, i) => {
        if (i >= count) {
          card.style.display = "none";
          return;
        }
        card.style.display = "";
        const a = angle + (i / count) * Math.PI * 2;
        const depth = (Math.sin(a) + 1) / 2; // 1 = adelante, 0 = atrás
        const scale = 0.6 + 0.46 * depth;
        const x = cx + Math.cos(a) * rx - card.offsetWidth / 2;
        const y = cy + Math.sin(a) * ry - card.offsetHeight / 2;
        card.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
        card.style.opacity = (0.4 + 0.6 * depth).toFixed(2);
        card.style.filter = depth < 0.45 ? `blur(${((0.45 - depth) * 2.4).toFixed(1)}px)` : "none";
        card.style.zIndex = depth > 0.5 ? "3" : "1";
        card.tabIndex = depth > 0.5 ? 0 : -1;
      });
    };

    let lastFrame = performance.now();
    const tick = (now: number) => {
      frameId = requestAnimationFrame(tick);
      const dt = Math.min((now - lastFrame) / 1000, 0.05);
      lastFrame = now;
      if (!visible || document.hidden) return;

      if (!dragging) {
        // Inercia del arrastre + giro automático con arranque suave.
        velocity *= Math.pow(0.04, dt);
        if (!reduceMotion.matches) {
          elapsed += dt;
          const ramp = START_SPEED + (CRUISE_SPEED - START_SPEED) * smoothstep(Math.min(elapsed / RAMP_SECONDS, 1));
          angle += (hovering ? ramp * 0.15 : ramp) * dt;
        }
        angle += velocity * dt;
      }
      layout();
    };

    const onPointerDown = (event: PointerEvent) => {
      dragging = true;
      moved = 0;
      lastX = event.clientX;
      lastT = event.timeStamp;
      velocity = 0;
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const dx = event.clientX - lastX;
      moved += Math.abs(dx);
      // Recién al superar el umbral se captura el puntero: un toque simple sigue abriendo el link.
      if (moved > DRAG_THRESHOLD && !stage.hasPointerCapture(event.pointerId)) {
        stage.setPointerCapture(event.pointerId);
      }
      if (moved > DRAG_THRESHOLD) {
        const dtMs = Math.max(event.timeStamp - lastT, 1);
        angle += dx * 0.006;
        velocity = (dx * 0.006 * 1000) / dtMs;
        lastX = event.clientX;
        lastT = event.timeStamp;
      }
    };
    const onPointerEnd = () => {
      dragging = false;
    };
    const onClickCapture = (event: MouseEvent) => {
      if (moved > DRAG_THRESHOLD) {
        event.preventDefault();
        event.stopPropagation();
        moved = 0;
      }
    };
    const onEnter = () => (hovering = true);
    const onLeave = () => (hovering = false);

    stage.addEventListener("pointerdown", onPointerDown);
    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerup", onPointerEnd);
    stage.addEventListener("pointercancel", onPointerEnd);
    stage.addEventListener("click", onClickCapture, true);
    stage.addEventListener("mouseenter", onEnter);
    stage.addEventListener("mouseleave", onLeave);

    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    intersection.observe(stage);
    const resize = new ResizeObserver(layout);
    resize.observe(stage);

    layout();
    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      stage.removeEventListener("pointerdown", onPointerDown);
      stage.removeEventListener("pointermove", onPointerMove);
      stage.removeEventListener("pointerup", onPointerEnd);
      stage.removeEventListener("pointercancel", onPointerEnd);
      stage.removeEventListener("click", onClickCapture, true);
      stage.removeEventListener("mouseenter", onEnter);
      stage.removeEventListener("mouseleave", onLeave);
      intersection.disconnect();
      resize.disconnect();
    };
  }, []);

  return (
    <div
      ref={stageRef}
      role="list"
      aria-label="Sitios que desarrollamos. Arrastrá para girar."
      className="relative h-[16rem] w-full cursor-grab touch-pan-y select-none active:cursor-grabbing sm:h-[17.5rem]"
    >
      {sites.map((site, index) => (
        <a
          key={site.id}
          ref={(node) => {
            cardRefs.current[index] = node;
          }}
          role="listitem"
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          draggable={false}
          aria-label={`${site.name} (se abre en una pestaña nueva)`}
          className="absolute left-0 top-0 aspect-[16/10] w-[7.5rem] overflow-hidden rounded-lg border border-white/20 bg-background-elevated opacity-0 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.8)] will-change-transform sm:w-[11.5rem] sm:rounded-xl"
        >
          <Image
            src={site.image}
            alt=""
            fill
            sizes="(min-width: 640px) 184px, 120px"
            draggable={false}
            loading={index < 4 ? "eager" : "lazy"}
            className="pointer-events-none object-cover object-top"
          />
          <span className="absolute bottom-1.5 left-1.5 max-w-[calc(100%-0.75rem)] truncate rounded-full bg-background/75 px-2 py-0.5 text-[10px] font-semibold text-foreground backdrop-blur-md">
            {site.name}
          </span>
        </a>
      ))}
    </div>
  );
}
