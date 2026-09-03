import Link from "next/link";
import { getWhatsAppUrl } from "@/data/site-config";
import { WhatsAppIcon } from "./Icons";

export default function Nav() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="#top"
          className="text-sm font-bold tracking-[0.2em] text-foreground"
          aria-label="Aura IA Solutions - Inicio"
        >
          AURA
        </Link>

        <div className="hidden items-center gap-8 rounded-full border border-border bg-background-elevated/60 px-6 py-2.5 backdrop-blur-md sm:flex">
          <a href="#productos" className="text-sm text-muted transition-colors hover:text-foreground">
            Productos
          </a>
          <a href="#servicios" className="text-sm text-muted transition-colors hover:text-foreground">
            Servicios
          </a>
          <a href="#contacto" className="text-sm text-muted transition-colors hover:text-foreground">
            Contacto
          </a>
        </div>

        <a
          href={whatsappUrl}
          aria-label="Hablar por WhatsApp"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background-elevated/60 text-foreground backdrop-blur-md transition-colors hover:border-violet/60 sm:hidden"
        >
          <WhatsAppIcon className="h-[18px] w-[18px]" />
        </a>

        <a
          href={whatsappUrl}
          className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03] sm:flex"
        >
          Contactar
        </a>
      </nav>
    </header>
  );
}
