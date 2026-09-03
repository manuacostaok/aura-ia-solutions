import { getWhatsAppUrl, siteConfig } from "@/data/site-config";
import { ArrowRightIcon, WhatsAppIcon } from "./Icons";
import HeroReveal from "./HeroReveal";

export default function Hero() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 pt-24 pb-16 text-center sm:px-8">
      <HeroReveal>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background-elevated/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          {siteConfig.tagline}
        </div>

        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-gradient sm:text-6xl">
          AURA IA SOLUTIONS
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-xl font-semibold leading-snug text-foreground sm:text-3xl">
          {siteConfig.headline}
        </p>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {siteConfig.subheadline}
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:justify-center">
          <a
            href={whatsappUrl}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-[0_0_40px_-10px_rgba(139,107,255,0.6)] transition-transform hover:scale-[1.03] sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Hablemos por WhatsApp
          </a>
          <a
            href="#productos"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-border-strong bg-background-elevated/50 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:border-violet/50 sm:w-auto"
          >
            Ver nuestros desarrollos
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </HeroReveal>
    </section>
  );
}
