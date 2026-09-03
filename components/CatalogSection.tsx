import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/data/site-config";
import { WhatsAppIcon } from "./Icons";
import RevealOnScroll from "./RevealOnScroll";

const FLOW_STEPS = ["Productos", "Catálogo", "WhatsApp", "Venta"];

export default function CatalogSection() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.catalogo);

  return (
    <section className="relative mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
      <RevealOnScroll>
        <div className="glow-border relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-background-elevated via-background-elevated to-background p-8 sm:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet/20 blur-[100px]"
          />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-3 py-1 text-[11px] font-semibold tracking-wide text-cyan">
                AURA CATÁLOGOS · PRODUCTO
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                Tu catálogo también puede vender por vos.
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
                Una experiencia digital profesional para mostrar tus productos, recibir consultas
                y convertir visitas en ventas.
              </p>

              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted sm:max-w-md">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-cyan" /> Catálogo online
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-cyan" /> Conectado a WhatsApp
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-cyan" /> Diseño profesional
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-cyan" /> 100% responsive
                </li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={whatsappUrl}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03] sm:w-auto"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Quiero mi catálogo →
                </a>
                <a
                  href="https://aura-catalogos-site.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border-strong px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-cyan/50 sm:w-auto"
                >
                  Ver demo →
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background/60 p-5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <div className="mt-4 space-y-2.5">
                <div className="h-3 w-2/3 rounded-full bg-gradient-to-r from-white/20 to-white/5" />
                <div className="h-20 w-full rounded-xl bg-gradient-to-br from-cyan/20 via-violet/15 to-transparent" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-12 rounded-lg bg-white/5" />
                  <div className="h-12 rounded-lg bg-white/5" />
                  <div className="h-12 rounded-lg bg-white/5" />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                {FLOW_STEPS.map((step, index) => (
                  <div key={step} className="flex items-center gap-1.5">
                    <span className="text-[11px] font-medium text-muted">{step}</span>
                    {index < FLOW_STEPS.length - 1 && <span className="text-[11px] text-muted/40">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
