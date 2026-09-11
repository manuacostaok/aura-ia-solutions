export type Service = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  icon: "code" | "automation" | "ai" | "web" | "systems" | "saas";
};

export const services: Service[] = [
  {
    id: "software",
    title: "Software a medida",
    problem: "Manejás el negocio con planillas, WhatsApp y procesos manuales que no escalan.",
    solution: "Un sistema hecho para cómo trabajás realmente, no una plantilla genérica.",
    result: "Menos fricción operativa y una herramienta que crece con el negocio.",
    icon: "code",
  },
  {
    id: "automation",
    title: "Automatización",
    problem: "Tareas repetitivas —cargar datos, responder lo mismo, armar reportes— te comen el día.",
    solution: "Conectamos tus herramientas y automatizamos lo que ya no debería hacerse a mano.",
    result: "Más tiempo para el negocio y menos errores humanos.",
    icon: "automation",
  },
  {
    id: "ai",
    title: "Inteligencia Artificial",
    problem: "Consultas sin responder a tiempo y procesos que dependen de que alguien esté disponible.",
    solution: "Integramos IA en la atención, la carga de datos y la toma de decisiones.",
    result: "Atención más rápida y procesos que funcionan aunque nadie esté mirando.",
    icon: "ai",
  },
  {
    id: "web",
    title: "Desarrollo Web",
    problem: "Una web linda que no convierte visitas en clientes.",
    solution: "Sitios rápidos y claros, pensados para llevar a la acción: WhatsApp, reserva o compra.",
    result: "Una web que trabaja para vos, no solo un folleto digital.",
    icon: "web",
  },
  {
    id: "systems",
    title: "Sistemas de Gestión",
    problem: "Turnos en un cuaderno, precios de memoria, clientes sin historial.",
    solution: "Paneles con reservas, clientes, estadísticas y operación centralizada.",
    result: "Control real del negocio desde un solo lugar.",
    icon: "systems",
  },
  {
    id: "saas",
    title: "Productos SaaS",
    problem: "Tenés una idea de producto pero no sabés por dónde arrancar a construirla.",
    solution: "La convertimos en un producto digital real, escalable y listo para usuarios.",
    result: "De idea a producto funcionando, sin perderte en el camino.",
    icon: "saas",
  },
];
