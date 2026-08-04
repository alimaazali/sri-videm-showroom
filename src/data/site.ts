/**
 * Central business configuration.
 * Single source of truth for contact details, WhatsApp and showroom info.
 * Swap these values later for Supabase-backed multi-branch data.
 */

export const site = {
  name: "Sri Videm's Furniture",
  shortName: "Videm's",
  tagline: "Best Furniture. Best Rate.",
  city: "Hyderabad",
  phoneDisplay: "+91 91000 00000",
  phone: "+919100000000",
  whatsapp: "919100000000",
  email: "care@srividemsfurniture.com",
  address: {
    line1: "Sri Videm's Furniture Showroom",
    line2: "Main Road, Kukatpally",
    city: "Hyderabad, Telangana 500072",
  },
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 9:00 PM" },
    { days: "Sunday", time: "10:30 AM – 8:30 PM" },
  ],
  mapsEmbed:
    "https://www.google.com/maps?q=furniture+showroom+Kukatpally+Hyderabad&output=embed",
  mapsDirections:
    "https://www.google.com/maps/search/?api=1&query=Sri+Videms+Furniture+Hyderabad",
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function productInquiry(name: string): string {
  return whatsappLink(
    `Hello ${site.name}, I would like to know more about "${name}". Could you share the price and availability?`,
  );
}

export const generalInquiry = () =>
  whatsappLink(
    `Hello ${site.name}, I'd like to enquire about your furniture collections.`,
  );
