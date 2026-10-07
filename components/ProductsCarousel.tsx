"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRightIcon } from "./Icons";

/**
 * Carrusel con scroll-snap nativo: se arrastra con el dedo, se mueve con el trackpad y con
 * el teclado (el contenedor es enfocable), y las flechas solo agregan comodidad en desktop.
 */
export default function ProductsCarousel({ label, children }: { label: string; children: ReactNode }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [state, setState] = useState({ canPrev: false, canNext: true, progress: 0 });

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setState({
      canPrev: track.scrollLeft > 4,
      canNext: track.scrollLeft < max - 4,
      progress: max > 0 ? track.scrollLeft / max : 1,
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    update();
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => observer.disconnect();
  }, [update]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-end gap-2">
        {(["prev", "next"] as const).map((dir) => {
          const isPrev = dir === "prev";
          const disabled = isPrev ? !state.canPrev : !state.canNext;
          return (
            <button
              key={dir}
              type="button"
              disabled={disabled}
              onClick={() => scrollByCard(isPrev ? -1 : 1)}
              aria-label={isPrev ? `${label}: anterior` : `${label}: siguiente`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background-elevated/50 text-foreground transition-colors hover:border-violet/50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-border"
            >
              <ArrowRightIcon className={`h-4 w-4 ${isPrev ? "rotate-180" : ""}`} />
            </button>
          );
        })}
      </div>

      {/* El padding vertical evita que el overflow del scroll recorte el hover (sombra y elevación). */}
      <ul
        ref={trackRef}
        onScroll={update}
        tabIndex={0}
        aria-label={label}
        className="-mx-5 -my-4 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto overscroll-x-contain px-5 py-4 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-violet sm:-mx-8 sm:scroll-px-8 sm:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>

      <div aria-hidden="true" className="mx-auto mt-6 h-px w-32 overflow-hidden rounded-full bg-border">
        <div
          className="h-full origin-left rounded-full bg-gradient-to-r from-violet to-cyan transition-transform duration-200"
          style={{ transform: `scaleX(${Math.max(0.2, state.progress)})` }}
        />
      </div>
    </div>
  );
}
