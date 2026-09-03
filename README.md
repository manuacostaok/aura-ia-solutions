# Aura IA Solutions — Link in Bio

Landing "link in bio" premium para Aura IA Solutions, pensada como único link del perfil de Instagram. Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion.

## Desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Configuración — [`data/site-config.ts`](data/site-config.ts)

| Variable | Estado |
| --- | --- |
| `WHATSAPP_NUMBER` | ✅ Completado: `5491165028141` |
| `INSTAGRAM_URL` | ✅ Completado: `https://instagram.com/aura.ia.solutions` |
| `TURNOS_AHORA_URL` | ✅ Completado: `https://turnosahora.vercel.app/` |
| `GROWTRACK_PRO_URL` | ✅ Completado: `https://growtrackpro.vercel.app/` |

Antes de deployar, actualizar también `siteConfig.url` con el dominio real de producción.

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
