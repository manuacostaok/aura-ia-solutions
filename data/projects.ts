import { TURNOS_AHORA_URL, GROWTRACK_PRO_URL } from "./site-config";

export type Project = {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  features: string[];
  url: string;
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
  ctaLabel: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "de-paola",
    name: "De Paola Propiedades",
    badge: "CASO DE DESARROLLO",
    description: "Desarrollo web profesional para una empresa inmobiliaria.",
    url: "https://de-paola-prop.vercel.app/",
    ctaLabel: "Ver desarrollo →",
  },
];
