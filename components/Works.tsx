"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/data/site-config";
import { rubroLabel, rubros, works, type RubroId, type Work } from "@/data/projects";
import { ArrowRightIcon, WhatsAppIcon } from "./Icons";
import RevealOnScroll from "./RevealOnScroll";

type Filter = RubroId | "all";

/**
 * Bento de 4 columnas: un ciclo de 7 teselas cubre 12 celdas (4 × 3) sin huecos.
 * 0 = destacada 2×2, 3 y 5 = anchas, el resto 1×1. Con 13 sitios + la tarjeta de contacto
 * son exactamente dos ciclos. En pantallas chicas solo la destacada ocupa 2 columnas.
 */
const BENTO = [
  "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  "",
  "",
  "lg:col-span-2",
  "",
  "lg:col-span-2",
  "",
] as const;

const hostOf = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

function WorkTile({
  work,
  bentoClass,
  isBento,
}: {
  work: Work;
  bentoClass: string;
  isBento: boolean;
}) {
  const isFeatured = isBento && bentoClass.includes("row-span-2");
  const isWide = bentoClass.includes("col-span-2");
  // En bento, las teselas chicas muestran la descripción al pasar el mouse; las demás, siempre.
  const revealOnHover = isBento && !isFeatured;

  return (
    <a
      href={work.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${work.name} — ${rubroLabel(work.rubro)} (se abre en una pestaña nueva)`}
      className={`glow-border group relative flex h-full overflow-hidden rounded-2xl border border-border bg-background-elevated transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-border-strong ${isBento ? "" : "min-h-[15rem] lg:min-h-[17rem]"}`}
    >
      <Image
        src={work.image}
        alt={`Captura de pantalla de ${work.name}`}
        fill
        sizes={
          isWide
            ? "(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
            : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        }
        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent ${
          revealOnHover ? "lg:via-background/45" : ""
        }`}
      />
      {revealOnHover && (
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-background/65 opacity-0 transition-opacity duration-300 lg:block lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100"
        />
      )}

      <span
        aria-hidden="true"
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-border-strong bg-background/70 text-foreground opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        <ArrowRightIcon className="h-3.5 w-3.5 -rotate-45" />
      </span>

      <div className="relative mt-auto w-full p-4 sm:p-5">
        <span className="inline-flex w-fit items-center rounded-full border border-border bg-background/70 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-violet backdrop-blur-md">
          {rubroLabel(work.rubro)}
        </span>
        <h3
          className={`mt-2 font-bold text-foreground ${
            isFeatured ? "text-xl sm:text-3xl" : "text-base sm:text-lg"
          }`}
        >
          {work.name}
        </h3>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
            revealOnHover
              ? "grid-rows-[1fr] lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100 lg:group-focus-visible:grid-rows-[1fr] lg:group-focus-visible:opacity-100"
              : "grid-rows-[1fr]"
          }`}
        >
          <div className="overflow-hidden">
            <p
              className={`mt-1.5 text-sm leading-relaxed text-muted ${
                isFeatured ? "max-w-md sm:text-base" : "line-clamp-3"
              }`}
            >
              {work.description}
            </p>
            {(isFeatured || !isBento) && <p className="mt-2 truncate text-xs text-muted/70">{hostOf(work.url)}</p>}
          </div>
        </div>
      </div>
    </a>
  );
}

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

  // Bento solo con "Todos": filtrado a 1-3 sitios, una grilla pareja se ve mejor que un bento a medias.
  const isBento = filter === "all";

  // En la grilla pareja, la tarjeta de contacto completa la última fila (índice = tarjetas ya en la fila).
  const smSpan = ["sm:col-span-2", "sm:col-span-1"] as const;
  const lgSpan = ["lg:col-span-3", "lg:col-span-2", "lg:col-span-1"] as const;
  const ctaUniformClass = `${smSpan[visible.length % 2]} ${lgSpan[visible.length % 3]}`;

  const spring = shouldReduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 420, damping: 38, mass: 0.8 };

  const chips = [
    { id: "all" as const, label: "Todos", count: works.length },
    ...rubros.map((rubro) => ({ ...rubro, count: counts.get(rubro.id) ?? 0 })),
  ];

  const ctaIndex = visible.length;
  const ctaClass = isBento ? BENTO[ctaIndex % BENTO.length] : ctaUniformClass;
  const ctaWide = !isBento && visible.length % 3 === 0;

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
        {chips.map((chip) => {
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
        })}
      </div>

      <motion.ul
        layout="position"
        className={`mt-8 grid auto-rows-[15rem] grid-flow-dense grid-cols-1 gap-4 sm:grid-cols-2 ${
          isBento ? "lg:auto-rows-[12.5rem] lg:grid-cols-4" : "lg:auto-rows-auto lg:grid-cols-3"
        }`}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((work, index) => {
            const bentoClass = isBento ? BENTO[index % BENTO.length] : "";
            return (
              <motion.li
                key={work.id}
                layout="position"
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                transition={spring}
                className={`group/work relative ${bentoClass}`}
              >
                {/* El aura: el halo del logo reaparece detrás del sitio que estás mirando. */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet/30 via-blue/15 to-cyan/25 opacity-0 blur-2xl transition-opacity duration-500 group-hover/work:opacity-100 group-focus-within/work:opacity-100"
                />
                <WorkTile work={work} bentoClass={bentoClass} isBento={isBento} />
              </motion.li>
            );
          })}

          <motion.li key="works-cta" layout="position" transition={spring} className={ctaClass}>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.web)}
              className={`group flex h-full flex-col justify-between gap-4 rounded-2xl border border-dashed border-border-strong bg-background-elevated/20 p-5 transition-colors hover:border-violet/60 sm:p-6 ${ctaWide ? "lg:flex-row lg:items-center" : ""}`}
            >
              <div>
                <p className="text-lg font-bold text-foreground">¿Tu rubro no está acá?</p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                  Si vendés, mostrás trabajos o atendés clientes, podemos hacer tu web.
                </p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform group-hover:scale-[1.03]">
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
