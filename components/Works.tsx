"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/data/site-config";
import { rubroLabel, rubros, works, type RubroId } from "@/data/projects";
import { ArrowRightIcon, WhatsAppIcon } from "./Icons";
import RevealOnScroll from "./RevealOnScroll";

type Filter = RubroId | "all";

// Índice = cantidad de tarjetas que ya hay en la última fila (visible.length % columnas).
const lgSpan = ["lg:col-span-3", "lg:col-span-2", "lg:col-span-1"] as const;
const smSpan = ["sm:col-span-2", "sm:col-span-1"] as const;

export default function Works() {
  const shouldReduceMotion = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () => (filter === "all" ? works : works.filter((work) => work.rubro === filter)),
    [filter],
  );

  const counts = useMemo(() => {
    const map = new Map<RubroId, number>();
    works.forEach((work) => map.set(work.rubro, (map.get(work.rubro) ?? 0) + 1));
    return map;
  }, []);

  // La tarjeta final de contacto completa la última fila de la grilla, sin huecos.
  const ctaClass = `${smSpan[visible.length % 2]} ${lgSpan[visible.length % 3]}`;

  const spring = shouldReduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 420, damping: 38, mass: 0.8 };

  return (
    <section id="desarrollos" className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <RevealOnScroll className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Trabajos</span>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">Desarrollos reales.</h2>
        <p className="mt-3 text-base text-muted sm:text-lg">
          Sitios y plataformas online, para rubros distintos. Elegí el tuyo y mirá cómo lo resolvimos.
        </p>
      </RevealOnScroll>

      <div role="group" aria-label="Filtrar desarrollos por rubro" className="mt-8 flex flex-wrap gap-2">
        {[{ id: "all" as const, label: "Todos", count: works.length }, ...rubros.map((rubro) => ({ ...rubro, count: counts.get(rubro.id) ?? 0 }))].map(
          (chip) => {
            const isActive = filter === chip.id;
            return (
              <button
                key={chip.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setFilter(chip.id)}
                className={`relative rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-transparent text-background"
                    : "border-border bg-background-elevated/40 text-muted hover:border-border-strong hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="works-filter-pill"
                    transition={spring}
                    className="absolute inset-0 rounded-full bg-foreground"
                  />
                )}
                <span className="relative">
                  {chip.label} <span className={isActive ? "text-background/60" : "text-muted/60"}>{chip.count}</span>
                </span>
              </button>
            );
          },
        )}
      </div>

      <motion.ul layout className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((work) => (
            <motion.li
              key={work.id}
              layout
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
              transition={spring}
              className="group/work relative"
            >
              {/* El aura: el halo del logo reaparece detrás del sitio que estás mirando. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet/30 via-blue/15 to-cyan/25 opacity-0 blur-2xl transition-opacity duration-500 group-hover/work:opacity-100 group-focus-within/work:opacity-100"
              />
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${work.name} — ${rubroLabel(work.rubro)} (se abre en una pestaña nueva)`}
                className="glow-border group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated/70 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-background">
                  <Image
                    src={work.image}
                    alt={`Captura de pantalla de ${work.name}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <span className="inline-flex w-fit items-center rounded-full border border-border bg-background/60 px-3 py-1 text-[11px] font-semibold tracking-wide text-violet">
                    {rubroLabel(work.rubro)}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-foreground sm:text-xl">{work.name}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{work.description}</p>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="truncate text-xs text-muted/60">
                      {work.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-violet">
                      Ver sitio
                      <ArrowRightIcon className="h-3.5 w-3.5 -rotate-45 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.li>
          ))}

          <motion.li
            key="works-cta"
            layout
            transition={spring}
            className={ctaClass}
          >
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.web)}
              className="group flex h-full min-h-48 flex-col justify-between gap-6 rounded-2xl border border-dashed border-border-strong bg-background-elevated/20 p-6 transition-colors hover:border-violet/60 sm:p-8"
            >
              <div>
                <p className="text-lg font-bold text-foreground sm:text-xl">¿Tu rubro no está acá?</p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                  Si vendés, mostrás trabajos o atendés clientes, podemos hacer tu web. Contanos qué hacés.
                </p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform group-hover:scale-[1.03]">
                <WhatsAppIcon className="h-4 w-4" />
                Contanos tu proyecto
              </span>
            </a>
          </motion.li>
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}
