"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { primaryServices, secondaryServices } from "@/data/services";
import { findShowcase } from "@/data/projects";
import { ArrowRightIcon, iconByKey } from "./Icons";
import RevealOnScroll from "./RevealOnScroll";

function BrowserFrame({ children, url }: { children: React.ReactNode; url?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border-strong bg-background-elevated shadow-[0_30px_80px_-40px_rgba(139,107,255,0.45)]">
      <div className="flex items-center gap-1.5 border-b border-border bg-background/60 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        {url && (
          <span className="ml-3 truncate rounded-md bg-background/70 px-3 py-0.5 text-[11px] text-muted/80">
            {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </span>
        )}
      </div>
      <div className="relative aspect-[16/10] w-full bg-background">{children}</div>
    </div>
  );
}

export default function Services() {
  const shouldReduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(primaryServices[0].id);
  const active = primaryServices.find((service) => service.id === activeId) ?? primaryServices[0];
  const activeShowcase = findShowcase(active.exampleId);

  return (
    <section id="servicios" className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <RevealOnScroll className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Qué hacemos</span>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
          Webs, catálogos y paneles hechos a medida de tu negocio.
        </h2>
        <p className="mt-3 text-base text-muted sm:text-lg">
          Cada proyecto empieza por entender cómo vende tu rubro. Tocá un servicio para ver un trabajo real.
        </p>
      </RevealOnScroll>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-14">
        <ol className="space-y-3">
          {primaryServices.map((service, index) => {
            const Icon = iconByKey[service.icon];
            const isActive = service.id === activeId;
            const showcase = findShowcase(service.exampleId);

            return (
              <li key={service.id}>
                <RevealOnScroll delay={index * 0.06}>
                  <div
                    className={`rounded-2xl border transition-colors duration-300 ${
                      isActive
                        ? "border-violet/50 bg-background-elevated/70"
                        : "border-border bg-background-elevated/30 hover:border-border-strong"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isActive}
                      onClick={() => setActiveId(service.id)}
                      onMouseEnter={() => setActiveId(service.id)}
                      onFocus={() => setActiveId(service.id)}
                      className="flex w-full items-start gap-4 rounded-2xl p-5 text-left sm:p-6"
                    >
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                          isActive ? "border-violet/50 bg-violet/10 text-violet" : "border-border bg-background/60 text-muted"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex-1">
                        <span className="text-[11px] font-bold tracking-[0.15em] text-muted/60">
                          0{index + 1}
                        </span>
                        <span className="block text-lg font-bold text-foreground sm:text-xl">{service.title}</span>
                        <span className="mt-1.5 block text-sm leading-relaxed text-muted">{service.solution}</span>
                      </span>
                    </button>

                    {/* Detalle: en desktop siempre visible en la fila activa; el preview vive en la columna derecha. */}
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ${
                        isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-4 px-5 pb-5 sm:px-6 sm:pb-6">
                          <dl className="grid grid-cols-1 gap-3 border-t border-border pt-4 sm:grid-cols-2">
                            <div>
                              <dt className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted/70">Problema</dt>
                              <dd className="mt-1 text-sm leading-relaxed text-muted">{service.problem}</dd>
                            </div>
                            <div>
                              <dt className="text-[10px] font-bold uppercase tracking-[0.15em] text-violet">Resultado</dt>
                              <dd className="mt-1 text-sm leading-relaxed text-foreground/90">{service.result}</dd>
                            </div>
                          </dl>
                          <ul className="flex flex-wrap gap-2">
                            {service.rubros.map((rubro) => (
                              <li
                                key={rubro}
                                className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted"
                              >
                                {rubro}
                              </li>
                            ))}
                          </ul>

                          {/* Mobile: el preview va dentro de la fila para no obligar a scrollear hacia arriba. */}
                          {showcase && (
                            <div className="lg:hidden">
                              <BrowserFrame url={showcase.url}>
                                <Image
                                  src={showcase.image}
                                  alt={`Captura de pantalla de ${showcase.name}`}
                                  fill
                                  sizes="(min-width: 640px) 560px, 90vw"
                                  className="object-cover object-top"
                                />
                              </BrowserFrame>
                              <a
                                href={showcase.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground"
                              >
                                Ver {showcase.name}
                                <ArrowRightIcon className="h-3.5 w-3.5" />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </li>
            );
          })}
        </ol>

        {/* Desktop: preview fijo que cambia con el servicio activo. */}
        {activeShowcase && (
          <div className="hidden lg:sticky lg:top-24 lg:block">
            <BrowserFrame url={activeShowcase.url}>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={activeShowcase.id}
                  className="absolute inset-0"
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <Image
                    src={activeShowcase.image}
                    alt={`Captura de pantalla de ${activeShowcase.name}`}
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover object-top"
                  />
                </motion.div>
              </AnimatePresence>
            </BrowserFrame>
            <a
              href={activeShowcase.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-violet"
            >
              Ver {activeShowcase.name} en vivo
              <ArrowRightIcon className="h-4 w-4 -rotate-45 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        )}
      </div>

      {/* Servicios secundarios: menos peso visual a propósito. */}
      <RevealOnScroll className="mt-14 sm:mt-20">
        <div className="rounded-2xl border border-border bg-background-elevated/20 p-6 sm:p-8">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-base font-bold text-foreground sm:text-lg">Y cuando hace falta, automatizamos.</h3>
            <p className="text-sm text-muted">Un complemento para que la web también atienda por vos.</p>
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {secondaryServices.map((service) => {
              const Icon = iconByKey[service.icon];
              return (
                <li key={service.id} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{service.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{service.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </RevealOnScroll>
    </section>
  );
}
