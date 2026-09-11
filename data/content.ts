export type PainPoint = {
  id: string;
  text: string;
};

export const painPoints: PainPoint[] = [
  { id: "manual", text: "Perdés horas en tareas que un sistema podría resolver solo." },
  { id: "competencia", text: "Tu competencia ya tiene una web o un sistema que vende mientras vos dormís." },
  { id: "tiempo", text: "No tenés tiempo de aprender a programar mientras administrás el negocio." },
  { id: "agencias", text: "Las agencias grandes te tratan como un ticket más, no como un negocio real." },
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
    description: "Entendemos tu negocio, tu operación actual y qué te está frenando.",
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
    description: "Construimos el software, con avances que podés ver y probar en el camino.",
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
    title: "Productos propios funcionando",
    description: "No solo prometemos: Torneame, Hay Cancha, Turnos Ahora y GrowTrack Pro ya están online.",
  },
  {
    id: "medida",
    title: "Hecho a medida",
    description: "Nada de plantillas genéricas. Cada sistema se piensa para tu negocio puntual.",
  },
  {
    id: "comunicacion",
    title: "Comunicación clara",
    description: "Todo por WhatsApp, con tiempos y alcance definidos desde el principio.",
  },
];
