/**
 * Configuración central del sitio.
 * Completar WHATSAPP_NUMBER e INSTAGRAM_URL antes de publicar.
 */

// Número de WhatsApp en formato internacional sin signos: 54 9 + código de área + número.
export const WHATSAPP_NUMBER = "5491165028141";

// URL completa del perfil de Instagram.
export const INSTAGRAM_URL = "https://instagram.com/aura.ia.solutions";

export const TURNOS_AHORA_URL = "https://turnosahora.vercel.app/";
export const GROWTRACK_PRO_URL = "https://growtrackpro.vercel.app/";

export const siteConfig = {
  brand: "Aura IA Solutions",
  tagline: "Software · IA · Automatización",
  headline: "Creamos soluciones digitales que hacen crecer negocios.",
  subheadline:
    "Software, automatizaciones y experiencias digitales diseñadas para transformar ideas en productos reales.",
  description:
    "Desarrollo de software, automatizaciones, inteligencia artificial y soluciones digitales para negocios.",
  url: "https://aura-ia-solutions.vercel.app",
  whatsapp: WHATSAPP_NUMBER,
  instagram: INSTAGRAM_URL,
};

export const WHATSAPP_MESSAGES = {
  general: "Hola Aura IA Solutions, quiero consultar por una solución digital.",
  catalogo: "Hola, quiero consultar por un catálogo digital.",
  desarrollo: "Hola, tengo una idea y quiero consultar por un desarrollo a medida.",
} as const;

/**
 * Genera la URL de WhatsApp con el mensaje precargado.
 * Si no hay número configurado, devuelve "#" para no romper el render.
 */
export function getWhatsAppUrl(message: string = WHATSAPP_MESSAGES.general): string {
  if (!WHATSAPP_NUMBER) return "#";
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
