import { projects } from "@/data/projects";
import ProductCard from "./ProductCard";
import RevealOnScroll from "./RevealOnScroll";

export default function Products() {
  const visibleProjects = projects.filter((project) => project.enabled && project.featured);

  return (
    <section id="productos" className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <RevealOnScroll className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
          Productos que ya están funcionando.
        </h2>
        <p className="mt-3 text-base text-muted sm:text-lg">
          No solo desarrollamos ideas. Construimos productos reales.
        </p>
      </RevealOnScroll>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <RevealOnScroll key={project.id} delay={index * 0.08}>
            <ProductCard project={project} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
