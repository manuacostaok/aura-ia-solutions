import { TURNOS_AHORA_URL, GROWTRACK_PRO_URL } from "./site-config";

/* -------------------------------------------------------------------------- */
/* Plataformas y paneles propios (productos)                                  */
/* -------------------------------------------------------------------------- */

export type Project = {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  features: string[];
  url: string;
  image: string;
  ctaLabel: string;
  featured: boolean;
  enabled: boolean;
};

export const projects: Project[] = [
  {
    id: "torneame",
    name: "Torneame",
    category: "Sports Platform",
    badge: "SPORTS PLATFORM",
    description: "Gestión de torneos y competencias sin complicaciones.",
    features: ["Creación de torneos", "Inscripciones y brackets", "Resultados en vivo"],
    url: "https://torneame.vercel.app/",
    image: "/screenshots/torneame.webp",
    ctaLabel: "Ver proyecto →",
    featured: true,
    enabled: true,
  },
  {
    id: "hay-cancha",
    name: "Hay Cancha",
    category: "Sports Venue Management",
    badge: "VENUE MANAGEMENT",
    description: "Reservas y gestión completa para complejos deportivos.",
    features: ["Turnos y reservas", "Clientes y estadísticas", "Promociones"],
    url: "https://hay-cancha-ahora.vercel.app/",
    image: "/screenshots/hay-cancha.webp",
    ctaLabel: "Ver proyecto →",
    featured: true,
    enabled: true,
  },
  {
    id: "turnos-ahora",
    name: "Turnos Ahora",
    category: "Booking System",
    badge: "BOOKING SYSTEM",
    description: "Sistema de reservas y turnos online para negocios.",
    features: ["Clientes y profesionales", "Horarios y servicios", "Panel de administración"],
    url: TURNOS_AHORA_URL,
    image: "/screenshots/turnos-ahora.webp",
    ctaLabel: "Ver proyecto →",
    featured: true,
    enabled: true,
  },
  {
    id: "growtrack-pro",
    name: "GrowTrack Pro",
    category: "Digital Tracking",
    badge: "DIGITAL PLATFORM",
    description: "Plataforma digital para seguimiento y gestión de cultivos.",
    features: ["Seguimiento en tiempo real", "Panel de control", "Gestión centralizada"],
    url: GROWTRACK_PRO_URL,
    image: "/screenshots/growtrack-pro.webp",
    ctaLabel: "Ver proyecto →",
    featured: true,
    enabled: true,
  },
  {
    id: "el-detalle",
    name: "El Detalle",
    category: "Digital Gifts",
    badge: "GESTOS DIGITALES",
    description: "Regalos digitales para pareja, amigos y familia, que se entregan con un link o un código QR.",
    features: ["Contador en vivo del tiempo juntos", "Link o QR para imprimir", "Sin registro, listo en minutos"],
    url: "https://soulmates-site.vercel.app/",
    image: "/screenshots/soulmates.webp",
    ctaLabel: "Ver proyecto →",
    featured: true,
    enabled: true,
  },
];

/* -------------------------------------------------------------------------- */
/* Desarrollos reales: sitios web, catálogos y plataformas por rubro          */
/* -------------------------------------------------------------------------- */

export type RubroId = "inmobiliarias" | "fotografia" | "tiendas" | "fitness" | "musica" | "marketing";

export const rubros: { id: RubroId; label: string }[] = [
  { id: "inmobiliarias", label: "Inmobiliarias y arquitectura" },
  { id: "tiendas", label: "Tiendas y catálogos" },
  { id: "marketing", label: "Marketing y publicidad" },
  { id: "fotografia", label: "Fotografía" },
  { id: "fitness", label: "Gimnasios y clubes" },
  { id: "musica", label: "Música y eventos" },
];

export type Work = {
  id: string;
  name: string;
  rubro: RubroId;
  description: string;
  url: string;
  image: string;
};

export const works: Work[] = [
  {
    id: "de-paola",
    name: "De Paola Propiedades",
    rubro: "inmobiliarias",
    description: "Sitio inmobiliario con inventario propio, guía de zonas y tasación online.",
    url: "https://de-paola-prop.vercel.app/",
    image: "/screenshots/de-paola.webp",
  },
  {
    id: "reciclaprop",
    name: "ReciclaProp",
    rubro: "inmobiliarias",
    description: "Plataforma de flipping inmobiliario: búsqueda, calculadora de rentabilidad e IA de diseño.",
    url: "https://recicla-prop-demo.vercel.app/",
    image: "/screenshots/reciclaprop.webp",
  },
  {
    id: "christian-sebastian",
    name: "Christian Sebastián",
    rubro: "fotografia",
    description: "Portfolio, disponibilidad y presupuesto online para un fotógrafo profesional.",
    url: "https://cristian-sebastian-fotografo.vercel.app/",
    image: "/screenshots/christian-sebastian.webp",
  },
  {
    id: "guapeton",
    name: "Guapetón",
    rubro: "tiendas",
    description: "Catálogo online y checkout con Mercado Pago para una marca de camas para mascotas.",
    url: "https://guapet-on.vercel.app/",
    image: "/screenshots/guapeton.webp",
  },
  {
    id: "her-off",
    name: "HER OFF",
    rubro: "fitness",
    description: "Sitio para un gimnasio de entrenamiento funcional en Rosario: método, horarios y postulaciones.",
    url: "https://herox-gym.vercel.app/",
    image: "/screenshots/herox-gym.webp",
  },
  {
    id: "arena-pro-gaming-club",
    name: "Arena Pro Gaming Club",
    rubro: "fitness",
    description: "Sitio para un gaming club en Buenos Aires: torneos, eventos, zonas del local y reservas.",
    url: "https://arenaprogaming-club.vercel.app/",
    image: "/screenshots/arena-pro-gaming-club.webp",
  },
  {
    id: "guacamaya-music",
    name: "Guacamaya Music",
    rubro: "musica",
    description: "Landing de venta para una agencia de mentoría, distribución y marketing para artistas.",
    url: "https://guacamayomusica.vercel.app/",
    image: "/screenshots/guacamaya.webp",
  },
  {
    id: "arqcam",
    name: "ARQ.CAM",
    rubro: "inmobiliarias",
    description: "Sitio para un estudio de arquitectura: obras filtrables, slider del plano a la casa y pedido de presupuesto.",
    url: "https://arqcam-demo-aura.vercel.app/",
    image: "/screenshots/arqcam.webp",
  },
  {
    id: "reld",
    name: "Reld Refrigeración",
    rubro: "tiendas",
    description: "Tienda online de equipos e insumos de refrigeración: catálogo por rubro, carrito, cotización y precios en pesos o dólares.",
    url: "https://reld-web-demo.vercel.app/",
    image: "/screenshots/reld.webp",
  },
  {
    id: "boutique-flower-baskets",
    name: "Boutique Flower Baskets",
    rubro: "tiendas",
    description: "Sitio bilingüe (ES/EN) para una florería de Edmonton: galería de trabajos y armado de regalos por WhatsApp.",
    url: "https://boutiqueflowerbaskets.vercel.app/",
    image: "/screenshots/boutique-flowers.webp",
  },
  {
    id: "condes",
    name: "Condes Marketing Digital",
    rubro: "marketing",
    description: "Sitio para una agencia de marketing digital y diseño de Uruguay: servicios, trabajos y presupuesto por WhatsApp.",
    url: "https://condes-demoweb.vercel.app/",
    image: "/screenshots/condes.webp",
  },
  {
    id: "creart-publicidad",
    name: "CreArt Publicidad",
    rubro: "marketing",
    description: "Catálogo para una empresa de publicidad: gigantografía, textil, stands e inflables, con cotización por WhatsApp.",
    url: "https://creart-publicidad.vercel.app/",
    image: "/screenshots/creart.webp",
  },
  {
    id: "dj-panda",
    name: "DJ Panda",
    rubro: "musica",
    description: "Sitio para un DJ de bodas, corporativos y fiestas: servicios, sets y presupuesto por WhatsApp.",
    url: "https://djpanda-aura-demo.vercel.app/",
    image: "/screenshots/djpanda.webp",
  },
];

export const rubroLabel = (id: RubroId) => rubros.find((rubro) => rubro.id === id)?.label ?? id;

/** Resuelve un proyecto (web o plataforma) a un formato común para previews. */
export type Showcase = { id: string; name: string; url: string; image: string };

export function findShowcase(id: string): Showcase | undefined {
  const work = works.find((item) => item.id === id);
  if (work) return { id: work.id, name: work.name, url: work.url, image: work.image };
  const project = projects.find((item) => item.id === id && item.enabled);
  if (project) return { id: project.id, name: project.name, url: project.url, image: project.image };
  return undefined;
}
