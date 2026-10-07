# Aura Soft Solutions — Link in Bio

Landing "link in bio" premium para Aura Soft Solutions, pensada como único link del perfil de Instagram. Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion.

## Desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Configuración — [`data/site-config.ts`](data/site-config.ts)

| Variable | Estado |
| --- | --- |
| `WHATSAPP_NUMBER` | ✅ Completado: `5491165028141` |
| `INSTAGRAM_URL` | ✅ Completado: `https://instagram.com/aura.soft.solutions` |
| `TURNOS_AHORA_URL` | ✅ Completado: `https://turnosahora.vercel.app/` |
| `GROWTRACK_PRO_URL` | ✅ Completado: `https://growtrackpro.vercel.app/` |

Antes de deployar, actualizar también `siteConfig.url` con el dominio real de producción.

## Activar Soulmates

En `data/projects.ts`, el proyecto `soulmates` tiene `enabled: false` y no se muestra en la sección de productos. Cambiar a `true` cuando esté listo para publicarse.

## Cargar un desarrollo nuevo

Todo sale de [`data/projects.ts`](data/projects.ts):

- **Sitios web y catálogos por rubro** → agregar un objeto a `works` (aparece en "Desarrollos reales", con filtro por rubro y en la tira de capturas). Si el rubro no existe, sumarlo a `rubros`.
- **Plataformas y paneles propios** → agregar a `projects` (sección "Plataformas").
- Captura: `public/screenshots/<nombre>.webp`, 1200×750, comprimida (~40 KB) antes de commitear.

Solo publicar acá sitios que estén online y terminados: los que dicen "ejemplo" o tienen contenido pendiente quedan afuera.

## Estructura

```
app/            Rutas, layout, metadata, favicon y OG image (generados con next/og)
components/     Hero, Nav, Services, ProductCard, CatalogSection, CaseStudies, IdeaCTA, Footer, etc.
data/           site-config.ts (marca, WhatsApp, Instagram), projects.ts, services.ts
```

## Deploy

Pensado para Vercel. Antes de deployar, actualizar `siteConfig.url` en `data/site-config.ts` con el dominio real (se usa para metadata, Open Graph, canonical, robots.txt y sitemap.xml).
