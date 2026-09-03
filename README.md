# Aura IA Solutions — Link in Bio

Landing "link in bio" premium para Aura IA Solutions, pensada como único link del perfil de Instagram. Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion.

## Desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Antes de publicar — completar en [`data/site-config.ts`](data/site-config.ts) y [`data/projects.ts`](data/projects.ts)

| Variable | Dónde | Estado |
| --- | --- | --- |
| `WHATSAPP_NUMBER` | `data/site-config.ts` | Vacío — sin esto los CTA de WhatsApp apuntan a `#`. Formato: código de país + número, sin signos (ej. `5491122334455`). |
| `INSTAGRAM_URL` | `data/site-config.ts` | Vacío — sin esto el botón de Instagram se muestra deshabilitado ("Instagram próximamente"). |
| `TURNOS_AHORA_URL` | `data/site-config.ts` | ✅ Completado: `https://turnosahora.vercel.app/` |
| `GROWTRACK_PRO_URL` | `data/site-config.ts` | ✅ Completado: `https://growtrackpro.vercel.app/` |

## Activar Soulmates

En `data/projects.ts`, el proyecto `soulmates` tiene `enabled: false` y no se muestra en la sección de productos. Cambiar a `true` cuando esté listo para publicarse.

## Estructura

```
app/            Rutas, layout, metadata, favicon y OG image (generados con next/og)
components/     Hero, Nav, Services, ProductCard, CatalogSection, CaseStudies, IdeaCTA, Footer, etc.
data/           site-config.ts (marca, WhatsApp, Instagram), projects.ts, services.ts
```

## Deploy

Pensado para Vercel. Antes de deployar, actualizar `siteConfig.url` en `data/site-config.ts` con el dominio real (se usa para metadata, Open Graph, canonical, robots.txt y sitemap.xml).
