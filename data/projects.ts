import { TURNOS_AHORA_URL, GROWTRACK_PRO_URL } from "./site-config";

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
    id: "guapeton",
    name: "Guapetón",
    category: "Catalog & Commerce",
    badge: "CATALOG & COMMERCE",
    description: "Catálogo online y checkout con Mercado Pago para una marca de camas para mascotas.",
    features: ["Catálogo de productos", "Checkout con Mercado Pago", "Panel administrativo"],
    url: "https://guapet-on.vercel.app/",
    image: "/screenshots/guapeton.webp",
    ctaLabel: "Ver proyecto →",
    featured: true,
    enabled: true,
  },
  {
    id: "christian-sebastian",
    name: "Christian Sebastián",
    category: "Photography Platform",
    badge: "PORTFOLIO & BOOKING",
    description: "Portfolio, consulta de disponibilidad y presupuesto online para un fotógrafo profesional.",
    features: ["Portfolio y galerías privadas", "Presupuesto y disponibilidad online", "CRM de leads y clientes"],
    url: "https://cristian-sebastian-fotografo.vercel.app/",
    image: "/screenshots/christian-sebastian.webp",
    ctaLabel: "Ver proyecto →",
    featured: true,
    enabled: true,
  },
  {
    id: "arena-pro-gaming-club",
    name: "Arena Pro Gaming Club",
    category: "Gaming Venue",
    badge: "GAMING CLUB",
    description: "Demo comercial para un gaming club: torneos, eventos y comunidad en una web propia.",
    features: ["Torneos y eventos", "Zonas del local", "Comunidad y galería"],
    url: "https://arenaprogaming-club.vercel.app/",
    image: "/screenshots/arena-pro-gaming-club.webp",
    ctaLabel: "Ver proyecto →",
    featured: true,
    enabled: true,
  },
  {
    id: "guacamaya-music",
    name: "Guacamaya Music",
    category: "Music Business Agency",
    badge: "CREATIVE AGENCY",
    description: "Landing de venta para una agencia de mentoría, distribución y marketing para artistas independientes.",
    features: ["Método en pasos", "Reserva de masterclass", "Agenda de diagnóstico"],
    url: "https://guacamayomusica.vercel.app/",
    image: "/screenshots/guacamaya.webp",
    ctaLabel: "Ver proyecto →",
    featured: true,
    enabled: true,
  },
  {
    id: "de-paola",
    name: "De Paola Propiedades",
    category: "Real Estate Platform",
    badge: "REAL ESTATE",
    description: "Portal inmobiliario para una inmobiliaria líder en Zona Norte, con inventario propio y guía de barrios.",
    features: ["Listado de propiedades", "Guía de zonas y barrios", "Tasación online"],
    url: "https://de-paola-prop.vercel.app/",
    image: "/screenshots/de-paola.webp",
    ctaLabel: "Ver proyecto →",
    featured: true,
    enabled: true,
  },
  {
    id: "soulmates",
    name: "Soulmates",
    category: "Social Platform",
    badge: "SOCIAL PLATFORM",
    description: "Próximamente.",
    features: [],
    url: "https://soulmates-site.vercel.app/",
    image: "",
    ctaLabel: "Ver proyecto →",
    featured: false,
    enabled: false,
  },
];

export type CaseStudy = {
  id: string;
  name: string;
  badge: string;
  description: string;
  url: string;
  image: string;
  ctaLabel: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "de-paola",
    name: "De Paola Propiedades",
    badge: "CASO DE DESARROLLO",
    description: "Desarrollo web profesional para una empresa inmobiliaria.",
    url: "https://de-paola-prop.vercel.app/",
    image: "/screenshots/de-paola.webp",
    ctaLabel: "Ver desarrollo →",
  },
];
