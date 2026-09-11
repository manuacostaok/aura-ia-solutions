"use client";

import { animate, createScope, stagger, type Scope } from "animejs";
import { useEffect, useRef } from "react";

const BLOBS = [
  { key: "1", className: "h-[34rem] w-[26rem] bg-violet/35", style: { top: "-6rem", left: "-14rem" } },
  { key: "3", className: "h-[30rem] w-[24rem] bg-blue/25", style: { bottom: "-10rem", left: "-12rem" } },
  { key: "2", className: "h-[34rem] w-[26rem] bg-blue/30", style: { top: "-4rem", right: "-14rem" } },
  { key: "4", className: "h-[28rem] w-[22rem] bg-cyan/15", style: { bottom: "-8rem", right: "-10rem" } },
];

export default function AuroraBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<Scope | null>(null);

  useEffect(() => {
    const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (shouldReduceMotion) return;

    scopeRef.current = createScope({ root: rootRef }).add(() => {
      animate("[data-aurora-blob]", {
        translateX: () => [0, randomBetween(-140, 140), randomBetween(-90, 110), 0],
        translateY: () => [0, randomBetween(-100, 100), randomBetween(-120, 120), 0],
        rotate: () => [0, randomBetween(-18, 18), randomBetween(-10, 10), 0],
        scale: () => [1, randomBetween(1.08, 1.32), 1],
        opacity: () => [0.9, randomBetween(0.45, 0.95), 0.9],
        duration: () => randomBetween(9000, 15000),
        loop: true,
        ease: "inOutSine",
        delay: stagger(400),
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
