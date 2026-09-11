"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="proceso" className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <RevealOnScroll className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Cómo trabajamos</span>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
          Sin vueltas, de la idea al sistema funcionando.
        </h2>
      </RevealOnScroll>

      <div ref={containerRef} className="relative mt-14 sm:mt-20">
        <div
          aria-hidden="true"
          className="absolute left-[15px] top-2 bottom-2 w-px bg-border sm:left-1/2 sm:-translate-x-1/2"
        />
        <motion.div
          aria-hidden="true"
          className="absolute left-[15px] top-2 w-px origin-top bg-gradient-to-b from-violet via-blue to-cyan sm:left-1/2 sm:-translate-x-1/2"
          style={{
            scaleY: shouldReduceMotion ? 1 : lineScale,
            height: "calc(100% - 1rem)",
          }}
        />

        <ol className="relative space-y-10 sm:space-y-14">
          {processSteps.map((step, index) => {
            const isEven = index % 2 === 1;
            return (
              <li
                key={step.id}
                className="relative pl-10 sm:grid sm:grid-cols-2 sm:gap-10 sm:pl-0"
              >
                <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-border-strong bg-background text-[11px] font-bold text-violet sm:left-1/2 sm:-translate-x-1/2">
                  {step.number}
                </span>

                <div className={isEven ? "sm:col-start-2" : "sm:col-start-1 sm:row-start-1 sm:text-right"}>
                  <RevealOnScroll delay={index * 0.04}>
                    <div
                      className={`rounded-2xl border border-border bg-background-elevated/40 p-6 sm:max-w-sm ${
                        isEven ? "sm:ml-auto" : "sm:mr-auto"
                      }`}
                    >
                      <h3 className="text-base font-bold text-foreground sm:text-lg">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                    </div>
                  </RevealOnScroll>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
