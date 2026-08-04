import { createFileRoute } from "@tanstack/react-router";
import { PageHero, WhatsAppCta } from "@/components/site/page-sections";
import { ShowroomVisit } from "@/components/site/showroom-visit";

const title = "Contact & Showroom | Sri Videm's Furniture, Hyderabad";
const description =
  "Visit Sri Videm's Furniture in Hyderabad. Address, phone, business hours, directions and WhatsApp enquiries for our furniture showroom.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come and see us"
        description="Our showroom team is on the floor every day of the week. Call, message or simply walk in."
      />
      <ShowroomVisit />
      <WhatsAppCta
        title="Prefer to message first?"
        description="Send us a WhatsApp with the room you're furnishing and your budget — we'll shortlist pieces before you arrive."
      />
    </>
  );
}
