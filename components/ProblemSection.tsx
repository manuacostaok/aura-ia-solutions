import { painPoints } from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";

export default function ProblemSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
        <RevealOnScroll>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">El diagnóstico</span>
          <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            Hacés todo a pulmón y el negocio no te da abasto.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            No es que te falte esfuerzo. Es que cada tarea manual que sostenés a mano le resta
            tiempo a lo que realmente hace crecer el negocio.
          </p>
        </RevealOnScroll>

        <div className="space-y-3">
          {painPoints.map((point, index) => (
            <RevealOnScroll key={point.id} delay={index * 0.08}>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-background-elevated/40 p-5">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">{point.text}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
