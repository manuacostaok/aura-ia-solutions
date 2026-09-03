export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "code" | "automation" | "ai" | "web" | "systems" | "saas";
};

export const services: Service[] = [
  {
    id: "software",
    title: "Software a medida",
    description: "Sistemas y aplicaciones diseñados específicamente para cada negocio.",
    icon: "code",
  },
  {
    id: "automation",
    title: "Automatización",
    description: "Eliminamos tareas repetitivas y conectamos herramientas.",
    icon: "automation",
  },
  {
    id: "ai",
    title: "Inteligencia Artificial",
    description: "Integramos IA para mejorar procesos, atención y productividad.",
    icon: "ai",
  },
  {
    id: "web",
    title: "Desarrollo Web",
    description: "Landing pages, sitios corporativos y experiencias digitales modernas.",
    icon: "web",
  },
  {
    id: "systems",
    title: "Sistemas de Gestión",
    description: "Paneles, reservas, clientes, estadísticas y operaciones.",
    icon: "systems",
  },
  {
    id: "saas",
    title: "Productos SaaS",
    description: "Convertimos ideas en productos digitales escalables.",
    icon: "saas",
  },
];
