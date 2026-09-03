import { getWhatsAppUrl, INSTAGRAM_URL } from "@/data/site-config";
import { InstagramIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  const whatsappUrl = getWhatsAppUrl();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <div className="flex flex-col items-center gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm font-bold tracking-[0.15em] text-foreground">AURA IA SOLUTIONS</p>
          <p className="mt-1 text-xs text-muted">Software · IA · Automatización</p>
        </div>

        <div className="flex items-center gap-3">
          {INSTAGRAM_URL && (
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Aura IA Solutions"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          )}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de Aura IA Solutions"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-muted">© {year} Aura IA Solutions</p>
      </div>
    </footer>
  );
}
