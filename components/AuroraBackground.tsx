"use client";

import { animate, createScope, type Scope } from "animejs";
import { useEffect, useRef } from "react";

const BLOBS = [
  { key: "left", className: "h-[130vh] w-[24rem] bg-violet/45", style: { top: "-15vh", left: "-4rem" } },
  { key: "right", className: "h-[130vh] w-[24rem] bg-cyan/35", style: { top: "-15vh", right: "-4rem" } },
];

export default function AuroraBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<Scope | null>(null);

  useEffect(() => {
    const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (shouldReduceMotion) return;

    scopeRef.current = createScope({ root: rootRef }).add(() => {
      animate("[data-aurora-blob]", {
        translateX: () => [0, randomBetween(-24, 24), randomBetween(-16, 16), 0],
        translateY: () => [0, randomBetween(-50, 50), randomBetween(-60, 60), 0],
        opacity: () => [0.55, randomBetween(0.4, 0.75), 0.55],
        duration: () => randomBetween(18000, 26000),
        loop: true,
        ease: "inOutSine",
      });
    });

    return () => scopeRef.current?.revert();
  }, []);

  return (
    <div ref={rootRef} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {BLOBS.map((blob) => (
        <div
          key={blob.key}
          data-aurora-blob
          className={`aurora-blob ${blob.className}`}
          style={blob.style}
        />
      ))}
    </div>
  );
}

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
