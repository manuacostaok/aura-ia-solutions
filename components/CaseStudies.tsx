import { caseStudies } from "@/data/projects";
import RevealOnScroll from "./RevealOnScroll";

export default function CaseStudies() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
      <RevealOnScroll className="mb-8 max-w-xl">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Desarrollos reales.
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-4">
        {caseStudies.map((study) => (
          <RevealOnScroll key={study.id}>
            <a
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-background-elevated/30 p-6 transition-colors hover:border-border-strong sm:flex-row sm:items-center sm:p-8"
            >
              <div>
                <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-3 py-1 text-[11px] font-semibold tracking-wide text-muted">
                  {study.badge}
                </span>
                <h3 className="mt-3 text-lg font-bold text-foreground sm:text-xl">{study.name}</h3>
                <p className="mt-1 text-sm text-muted">{study.description}</p>
              </div>

              <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-violet">
                {study.ctaLabel}
              </span>
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
