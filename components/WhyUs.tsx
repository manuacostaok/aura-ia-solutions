import { differentiators } from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";

export default function WhyUs() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <RevealOnScroll>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Por qué Aura</span>
          <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            No somos una agencia más.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Trabajamos con pocos clientes a la vez para poder prestar atención real a cada
            proyecto, de principio a fin.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {differentiators.map((item, index) => (
            <RevealOnScroll key={item.id} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-background-elevated/40 p-6">
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
