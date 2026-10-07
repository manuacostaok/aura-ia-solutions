import { projects } from "@/data/projects";
import ProductCard from "./ProductCard";
import ProductsCarousel from "./ProductsCarousel";
import RevealOnScroll from "./RevealOnScroll";

export default function Products() {
  const visibleProjects = projects.filter((project) => project.enabled && project.featured);

  return (
    <section id="productos" className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <RevealOnScroll className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
          Plataformas y paneles que ya están funcionando.
        </h2>
        <p className="mt-3 text-base text-muted sm:text-lg">
          Además de webs, construimos sistemas propios: turnos, torneos, canchas, cultivos y regalos digitales.
        </p>
      </RevealOnScroll>

      <div className="mt-10 sm:mt-14">
        <ProductsCarousel label="Plataformas y paneles">
          {visibleProjects.map((project) => (
            <li
              key={project.id}
              className="flex shrink-0 basis-[82%] snap-start sm:basis-[calc((100%-1.25rem)/2)] lg:basis-[calc((100%-2.5rem)/3)]"
            >
              <ProductCard project={project} />
            </li>
          ))}
        </ProductsCarousel>
      </div>
    </section>
  );
}
