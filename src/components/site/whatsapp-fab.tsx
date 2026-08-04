import { MessageCircle } from "lucide-react";
import { generalInquiry } from "@/data/site";

/**
 * Sticky WhatsApp call-to-action, rendered once in the root layout.
 */
export function WhatsAppFab() {
  return (
    <a
      href={generalInquiry()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-4 bottom-4 z-50 flex h-14 items-center gap-0 overflow-hidden rounded-full bg-whatsapp pr-0 pl-0 text-white shadow-lift transition-[padding] duration-300 animate-soft-pulse md:right-8 md:bottom-8"
    >
      <span className="grid h-14 w-14 shrink-0 place-items-center">
        <MessageCircle className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-52 group-hover:pr-6 group-hover:opacity-100">
        WhatsApp Inquiry
      </span>
    </a>
  );
}
