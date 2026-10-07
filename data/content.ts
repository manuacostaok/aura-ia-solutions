export type PainPoint = {
  id: string;
  text: string;
};

export const painPoints: PainPoint[] = [
  { id: "competencia", text: "Tu competencia ya muestra sus trabajos y recibe consultas online mientras vos dormís." },
  { id: "busqueda", text: "Te buscan en Google o Instagram y no encuentran fotos, precios ni cómo contactarte." },
  { id: "plantilla", text: "Tu web de plantilla se ve igual que la de todos, y por eso nadie la recuerda." },
  { id: "agencias", text: "Las agencias grandes te tratan como un ticket más, no como un negocio real." },
  { id: "manual", text: "Perdés horas respondiendo siempre las mismas consultas a mano." },
];

export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "diagnostico",
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos tu negocio, tu rubro y qué necesita tu web para traerte clientes.",
  },
  {
    id: "propuesta",
    number: "02",
    title: "Propuesta",
    description: "Te mostramos exactamente qué vamos a construir, con alcance y tiempos claros.",
  },
  {
    id: "desarrollo",
    number: "03",
    title: "Desarrollo",
    description: "Diseñamos y construimos, con avances que podés ver y probar en el camino.",
  },
  {
    id: "entrega",
    number: "04",
    title: "Entrega",
    description: "Lanzamos, te mostramos cómo usarlo y ajustamos lo que haga falta.",
  },
  {
    id: "acompanamiento",
    number: "05",
    title: "Acompañamiento",
    description: "Seguimos disponibles para soporte, mejoras y lo que el negocio necesite después.",
  },
];

export type Differentiator = {
  id: string;
  title: string;
  description: string;
};

export const differentiators: Differentiator[] = [
  {
    id: "trato-directo",
    title: "Trato directo",
    description: "Hablás con quien desarrolla, no con un intermediario que traduce el pedido.",
  },
  {
    id: "productos-propios",
    title: "Todo lo que mostramos funciona",
    description: "Cada sitio y plataforma de esta página está online: podés abrirlo y usarlo ahora.",
  },
  {
    id: "medida",
    title: "Hecho a medida",
    description: "Nada de plantillas genéricas. Cada web se piensa para tu negocio y tu rubro puntual.",
  },
  {
    id: "comunicacion",
    title: "Comunicación clara",
    description: "Todo por WhatsApp, con tiempos y alcance definidos desde el principio.",
  },
];
