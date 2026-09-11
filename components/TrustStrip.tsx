import { projects } from "@/data/projects";

export default function TrustStrip() {
  const items = projects.filter((project) => project.enabled);
  const loop = [...items, ...items];

  return (
    <section aria-label="Productos reales que desarrollamos" className="relative border-y border-border/60 py-6">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted/70 sm:text-left">
          Productos reales, ya funcionando
        </p>
      </div>

      <div className="marquee-fade overflow-hidden">
        <div className="marquee-track gap-10 sm:gap-14">
          {loop.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="flex shrink-0 items-baseline gap-2 whitespace-nowrap"
            >
              <span className="text-base font-bold tracking-tight text-foreground/90 sm:text-lg">
                {project.name}
              </span>
              <span className="text-xs font-medium text-muted/60">{project.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
