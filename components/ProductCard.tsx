import type { Project } from "@/data/projects";
import ProductVisual from "./ProductVisual";

type ProductCardProps = {
  project: Project;
  variant?: "primary" | "secondary";
};

export default function ProductCard({ project, variant = "secondary" }: ProductCardProps) {
  const hasUrl = Boolean(project.url);
  const Wrapper = hasUrl ? "a" : "div";
  const isPrimary = variant === "primary";

  return (
    <Wrapper
      {...(hasUrl ? { href: project.url, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`glow-border group flex h-full flex-col rounded-2xl border border-border bg-background-elevated/40 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_20px_60px_-25px_rgba(139,107,255,0.5)] ${
        isPrimary ? "p-7 sm:p-8" : "p-6 sm:p-7"
      }`}
    >
      {isPrimary && <ProductVisual id={project.id} />}

      <span className="inline-flex w-fit items-center rounded-full border border-border bg-background/60 px-3 py-1 text-[11px] font-semibold tracking-wide text-violet">
        {project.badge}
      </span>

      <h3 className={`mt-4 font-bold text-foreground ${isPrimary ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
        {project.name}
      </h3>
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
    </Wrapper>
  );
}
