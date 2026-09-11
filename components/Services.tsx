import { services } from "@/data/services";
import { iconByKey } from "./Icons";
import RevealOnScroll from "./RevealOnScroll";

export default function Services() {
  return (
    <section id="servicios" className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <RevealOnScroll className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Servicios</span>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
          Soluciones concretas, no herramientas sueltas.
        </h2>
        <p className="mt-3 text-base text-muted sm:text-lg">
          Cada servicio resuelve un problema puntual del negocio y entrega un resultado claro.
        </p>
      </RevealOnScroll>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-2">
        {services.map((service, index) => {
          const Icon = iconByKey[service.icon];
          return (
            <RevealOnScroll key={service.id} delay={index * 0.05}>
              <div className="glow-border group flex h-full flex-col gap-5 rounded-2xl border border-border bg-background-elevated/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background/60 text-violet transition-transform group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                </div>

                <dl className="grid grid-cols-1 gap-4 border-t border-border pt-5 sm:grid-cols-3">
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted/70">
                      Problema
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-muted">{service.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.15em] text-cyan">
                      Solución
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-foreground/90">{service.solution}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.15em] text-violet">
                      Resultado
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-foreground/90">{service.result}</dd>
                  </div>
                </dl>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
