# DESIGN.md — Aura Soft Solutions

Fuente de verdad del rediseño (2026-09-11). Landing "link in bio" — Next.js 16 + Tailwind v4 + Framer Motion.

## Por qué este rediseño

El sitio (V2 actual) es funcional pero le falta estructura de venta: es una lista de servicios y
productos sin narrativa. Referencia externa: **siwol.com.ar** (agencia de marketing + IA) vende
mucho mejor con una estructura clásica de copywriting (dolor → solución → resultado → prueba →
proceso → por qué elegirlos) que acá no existe. Tomamos esa **estructura de venta**, no su
identidad visual (esa es genérica IA-azul/celeste con foto de stock).

No se copian números ni testimonios de siwol — son de otro negocio. Los datos de Aura (productos,
resultados) son solo los reales que ya existen en `data/projects.ts`.

## Qué se mantiene

- Paleta oscura violeta/azul/cian, tipografía Plus Jakarta Sans, glass cards — es una identidad
  ya asentada (shippeada como "V2") y coherente con un estudio de software/IA. No se tira todo.
- Framer Motion como única librería de animación (ya está instalada; no sumamos anime.js para no
  duplicar dependencias de animación).

## Qué cambia

1. **Menos "aurora blob genérico"**: blobs más chicos/sutiles + textura de grid/dots de fondo
   (look editorial de dev-tool premium, no "gradiente IA de stock").
2. **Titulares con palabra clave resaltada** (técnica de siwol) en vez de bloques de texto plano.
3. **Nueva narrativa de secciones**, en este orden:
   - Hero
   - Franja de prueba ("Productos reales, ya funcionando") — nombres reales, sin logos inventados
   - Problema/Agitación — dolores reales de un negocio sin software a medida
   - Servicios en formato **Problema → Solución → Resultado** (antes: solo descripción)
   - Productos (portfolio) — se mantiene, se agrega interacción sutil (tilt/hover)
   - Catálogo digital (producto propio destacado) — se mantiene
   - Proceso — cómo se trabaja, línea de tiempo animada
   - Por qué Aura — diferenciales reales (trato directo, productos propios funcionando, sin letra chica)
   - Casos de desarrollo (De Paola) + CTA final
4. **Sin métricas inventadas**: donde no hay dato real (ej. "+50% consultas" de siwol) se usa
   copy cualitativo, no un número falso.

## Componentes nuevos

- `TrustStrip.tsx` — marquee de productos reales
- `ProblemSection.tsx` — dolores + frase de identificación
- `ProcessSection.tsx` — timeline animado (framer-motion, scroll-linked line draw)
- `WhyUs.tsx` — diferenciales

## Componentes que cambian de forma relevante

- `Hero.tsx` — headline con palabra resaltada, composición más editorial
- `Services.tsx` / `data/services.ts` — estructura problema/solución/resultado
- `globals.css` — aurora más sutil, textura de grid de fondo, utilidades de marquee

## Responsive

Mobile-first real (se abre desde bio de Instagram, tráfico mayormente mobile): timeline y franja
de prueba colapsan a columna/scroll horizontal en mobile, nunca solo "achicar desktop".
