import { getWhatsAppUrl, INSTAGRAM_URL, WHATSAPP_MESSAGES } from "@/data/site-config";
import { InstagramIcon, WhatsAppIcon } from "./Icons";
import RevealOnScroll from "./RevealOnScroll";

export default function IdeaCTA() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.desarrollo);
  const hasInstagram = Boolean(INSTAGRAM_URL);

  return (
    <section id="contacto" className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <RevealOnScroll>
        <div className="glow-border relative overflow-hidden rounded-3xl border border-border-strong bg-background-elevated/60 px-6 py-16 text-center sm:px-12 sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet/30 to-blue/30 blur-[100px]"
          />

          <h2 className="relative mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            ¿Tenés una idea?
            <br />
            <span className="text-gradient-brand">Hagámosla realidad.</span>
          </h2>

          <p className="relative mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Desde una landing hasta una plataforma completa. Contanos qué necesitás y diseñamos la
            solución.
          </p>

          <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background shadow-[0_0_50px_-10px_rgba(139,107,255,0.7)] transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Hablar con Aura
            </a>

            {hasInstagram ? (
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-border-strong bg-background/50 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:border-violet/50 sm:w-auto"
              >
                <InstagramIcon className="h-4 w-4" />
                Ver Instagram
              </a>
            ) : (
              <span className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background/30 px-8 py-4 text-sm font-medium text-muted/60 sm:w-auto">
                <InstagramIcon className="h-4 w-4" />
                Instagram próximamente
              </span>
            )}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
