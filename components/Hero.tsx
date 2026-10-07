import type { CSSProperties } from "react";
import { getWhatsAppUrl, siteConfig, WHATSAPP_MESSAGES } from "@/data/site-config";
import { ArrowRightIcon, CatalogIcon, SystemsIcon, WebIcon, WhatsAppIcon } from "./Icons";
import NeuralGalaxy from "./NeuralGalaxy";
import RotatingWord from "./RotatingWord";

const step = (index: number) => ({ "--i": index }) as CSSProperties;

const offers = [
  { label: "Páginas web a medida", Icon: WebIcon },
  { label: "Catálogos y tiendas online", Icon: CatalogIcon },
  { label: "Paneles de gestión", Icon: SystemsIcon },
];

export default function Hero() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.web);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 pt-24 pb-16 text-center sm:px-8"
    >
      <NeuralGalaxy />

      <div className="relative z-10 flex flex-col items-center">
        <div
          style={step(0)}
          className="hero-in mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background-elevated/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          {siteConfig.brand} · {siteConfig.tagline}
        </div>

        <h1
          style={step(1)}
          className="hero-in mx-auto max-w-4xl font-bold leading-[1.08] tracking-tight text-foreground [text-shadow:0_2px_32px_rgba(5,5,7,0.9)]"
        >
          <span className="block text-4xl sm:text-6xl">Páginas web a medida</span>
          <span className="mt-1 block whitespace-nowrap text-[clamp(1.6rem,6.6vw,3.6rem)]">
            para <RotatingWord />
          </span>
        </h1>

        <p
          style={step(2)}
          className="hero-in mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          <strong className="font-semibold text-foreground">{siteConfig.promise}</strong> {siteConfig.subheadline}
        </p>

        <ul style={step(3)} className="hero-in mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {offers.map(({ label, Icon }) => (
            <li
              key={label}
              className="flex items-center gap-2 rounded-full border border-border bg-background-elevated/50 px-4 py-2 text-sm font-medium text-foreground/90 backdrop-blur-md"
            >
              <Icon className="h-4 w-4 text-violet" />
              {label}
            </li>
          ))}
        </ul>

        <div
          style={step(4)}
          className="hero-in mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:justify-center"
        >
          <a
            href={whatsappUrl}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-[0_0_40px_-10px_rgba(139,107,255,0.6)] transition-transform hover:scale-[1.03] sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Quiero mi web
          </a>
          <a
            href="#desarrollos"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-border-strong bg-background-elevated/50 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:border-violet/50 sm:w-auto"
          >
            Mirá nuestros desarrollos
            <ArrowRightIcon className="h-4 w-4 rotate-90" />
          </a>
        </div>

        <p style={step(5)} className="hero-in mt-8 max-w-md text-xs leading-relaxed text-muted/70 sm:text-sm">
          Además: automatizaciones de consultas, WhatsApp Bots e IA para atender mejor a tus clientes.
        </p>
      </div>
    </section>
  );
}
