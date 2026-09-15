import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProductCard({ project }: { project: Project }) {
  const hasUrl = Boolean(project.url);
  const Wrapper = hasUrl ? "a" : "div";

  return (
    <Wrapper
      {...(hasUrl ? { href: project.url, target: "_blank", rel: "noopener noreferrer" } : {})}
      className="glow-border group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated/40 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_20px_60px_-25px_rgba(139,107,255,0.5)]"
    >
      {project.image && (
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-background">
          <Image
            src={project.image}
            alt={`Captura de pantalla de ${project.name}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={`object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] ${
              hasUrl ? "" : "opacity-60 grayscale"
            }`}
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <span className="inline-flex w-fit items-center rounded-full border border-border bg-background/60 px-3 py-1 text-[11px] font-semibold tracking-wide text-violet">
          {project.badge}
        </span>

        <h3 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{project.description}</p>

        {project.features.length > 0 && (
          <ul className="mt-5 space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                <span className="h-1 w-1 shrink-0 rounded-full bg-blue" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex-1" />

        {hasUrl ? (
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors group-hover:text-violet">
            <span className="transition-transform group-hover:translate-x-0.5">{project.ctaLabel}</span>
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted/70">
            Muy pronto
          </span>
        )}
      </div>
    </Wrapper>
  );
}
