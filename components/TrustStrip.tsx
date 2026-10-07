import Image from "next/image";
import { projects, works } from "@/data/projects";

type Item = { id: string; name: string; url: string; image: string };

function buildItems(): Item[] {
  const sites: Item[] = works.map(({ id, name, url, image }) => ({ id, name, url, image }));
  const platforms: Item[] = projects
    .filter((project) => project.enabled && project.image)
    .map(({ id, name, url, image }) => ({ id, name, url, image }));

  // Alterna sitios web y plataformas para que la tira no agrupe un solo tipo de trabajo.
  const mixed: Item[] = [];
  const longest = Math.max(sites.length, platforms.length);
  for (let i = 0; i < longest; i += 1) {
    if (sites[i]) mixed.push(sites[i]);
    if (platforms[i]) mixed.push(platforms[i]);
  }
  return mixed;
}

function Row({ items, hidden }: { items: Item[]; hidden?: boolean }) {
  return (
    <div className="flex shrink-0" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={hidden ? -1 : undefined}
          aria-label={`${item.name} (se abre en una pestaña nueva)`}
          className="group mr-4 block w-56 shrink-0 overflow-hidden rounded-xl border border-border bg-background-elevated/50 transition-colors hover:border-violet/50 sm:mr-5 sm:w-72"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-background">
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(min-width: 640px) 288px, 224px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
          <p className="truncate px-3 py-2 text-xs font-semibold text-foreground/90">{item.name}</p>
        </a>
      ))}
    </div>
  );
}

export default function TrustStrip() {
  const items = buildItems();

  return (
    <section aria-label="Sitios y plataformas que desarrollamos" className="relative border-y border-border/60 py-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted/70 sm:text-left">
          Sitios y plataformas ya online
        </p>
      </div>

      <div className="marquee-fade overflow-hidden">
        <div className="marquee-track marquee-track-slow">
          <Row items={items} />
          <Row items={items} hidden />
        </div>
      </div>
    </section>
  );
}
