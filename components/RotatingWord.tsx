"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const WORDS = ["inmobiliarias", "fotógrafos", "gimnasios", "tiendas online", "artistas", "tu negocio"];

/**
 * Rubro que rota dentro del titular. Cada palabra corresponde a un rubro para el que ya hay
 * un desarrollo en la página. El ancho se reserva con la palabra más larga (grid de una celda)
 * para que el titular no salte al cambiar.
 */
export default function RotatingWord() {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => setIndex((current) => (current + 1) % WORDS.length), 2600);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <>
      <span className="sr-only">{WORDS.join(", ")}</span>
      <span aria-hidden="true" className="inline-grid overflow-hidden pb-[0.12em] text-left align-bottom">
        {WORDS.map((word) => (
          <span key={word} className="invisible col-start-1 row-start-1">
            {word}.
          </span>
        ))}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={WORDS[index]}
            className="text-gradient-brand col-start-1 row-start-1"
            initial={shouldReduceMotion ? false : { y: "70%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { y: "-70%", opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {WORDS[index]}.
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}
