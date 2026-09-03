import { services } from "@/data/services";
import { iconByKey } from "./Icons";
import RevealOnScroll from "./RevealOnScroll";

export default function Services() {
  return (
    <section id="servicios" className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <RevealOnScroll className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
          Soluciones digitales para negocios reales.
        </h2>
      </RevealOnScroll>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = iconByKey[service.icon];
          return (
            <RevealOnScroll key={service.id} delay={index * 0.06}>
              <div className="glow-border group h-full rounded-2xl border border-border bg-background-elevated/40 p-6 transition-colors hover:border-border-strong">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/60 text-violet transition-transform group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
