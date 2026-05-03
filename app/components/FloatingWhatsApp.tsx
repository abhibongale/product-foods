"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.sellerPlatforms.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group flex items-center gap-3"
      aria-label="Contact us on WhatsApp"
    >
      {/* Icon */}
      <MessageCircle className="w-7 h-7" />

      {/* Text - Hidden on small screens, shows on hover on larger screens */}
      <span className="hidden md:group-hover:block md:max-w-0 md:group-hover:max-w-xs overflow-hidden transition-all duration-300 font-semibold whitespace-nowrap">
        Chat with us
      </span>

      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
    </a>
  );
}
