"use client";

import { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/data/site-config";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloatingButton() {
  const [visible, setVisible] = useState(false);
  const whatsappUrl = getWhatsAppUrl();

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      rootMargin: "-10% 0px 0px 0px",
    });
    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={whatsappUrl}
      aria-label="Escribinos por WhatsApp"
      className={`glass fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full text-[#25D366] shadow-[0_10px_30px_-8px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 sm:bottom-7 sm:right-7 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
