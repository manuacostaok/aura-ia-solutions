export type PrimaryService = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  icon: "web" | "catalog" | "systems";
  rubros: string[];
  /** Proyecto real (data/projects.ts) que se muestra como prueba en el preview. */
  exampleId: string;
};

export const primaryServices: PrimaryService[] = [
  {
    id: "web",
    title: "Páginas web a medida",
    problem: "Una web linda que no convierte visitas en clientes.",
    solution: "Sitios rápidos y claros, con tu identidad, pensados para que te escriban, reserven o compren.",
    result: "Una web que trabaja para vos, no un folleto digital.",
    icon: "web",
    rubros: ["Inmobiliarias", "Fotografía", "Gimnasios", "Artistas"],
    exampleId: "de-paola",
  },
  {
    id: "catalogos",
    title: "Catálogos y tiendas online",
    problem: "Tus productos viven en fotos de Instagram y capturas por WhatsApp.",
    solution: "Catálogo con fichas, filtros y botón de WhatsApp, o checkout con Mercado Pago.",
    result: "Vendés ordenado, con un link que compartís en un toque.",
    icon: "catalog",
    rubros: ["Tiendas", "Marcas", "Distribuidores"],
    exampleId: "guapeton",
  },
  {
    id: "paneles",
    title: "Paneles de gestión",
    problem: "Turnos en un cuaderno, precios de memoria, clientes sin historial.",
    solution: "Paneles con reservas, clientes, estadísticas y toda la operación en un solo lugar.",
    result: "Control real del negocio, desde el celular o la compu.",
    icon: "systems",
    rubros: ["Turnos y reservas", "Canchas y clubes", "Torneos"],
    exampleId: "hay-cancha",
  },
];

export type SecondaryService = {
  id: string;
  title: string;
  description: string;
  icon: "automation" | "bot" | "ai" | "saas";
};

export const secondaryServices: SecondaryService[] = [
  {
    id: "automatizaciones",
    title: "Automatización de consultas",
    description: "Respuestas y seguimiento automático para que ninguna consulta se pierda.",
    icon: "automation",
  },
  {
    id: "whatsapp-bots",
    title: "WhatsApp Bots",
    description: "Atención, turnos y pedidos por WhatsApp, también cuando no estás.",
    icon: "bot",
  },
  {
    id: "ia",
    title: "IA aplicada",
    description: "Inteligencia artificial integrada a la atención y a los procesos del negocio.",
    icon: "ai",
  },
  {
    id: "software",
    title: "Software y SaaS a medida",
    description: "Si tu idea necesita algo más grande, la convertimos en producto.",
    icon: "saas",
  },
];
