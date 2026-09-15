import Image from "next/image";
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
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated/30 transition-colors hover:border-border-strong sm:flex-row sm:items-center"
            >
              {study.image && (
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden sm:aspect-auto sm:h-56 sm:w-80">
                  <Image
                    src={study.image}
                    alt={`Captura de pantalla de ${study.name}`}
                    fill
                    sizes="(min-width: 640px) 320px, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}

              <div className="flex flex-1 items-center justify-between gap-4 p-6 sm:p-8">
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
              </div>
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
