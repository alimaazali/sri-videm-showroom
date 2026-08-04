import { createFileRoute } from "@tanstack/react-router";
import { PageHero, WhatsAppCta } from "@/components/site/page-sections";
import { Reveal } from "@/components/ui/reveal";
import { showroomImages } from "@/data/catalog";

const title = "About Us | Sri Videm's Furniture, Hyderabad";
const description =
  "Sri Videm's Furniture is a Hyderabad furniture showroom offering sofas, beds, dining sets and handcrafted wooden furniture — best furniture at the best rate.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "20,000+", label: "sq ft of showroom floor" },
  { value: "14", label: "curated collections" },
  { value: "10,000+", label: "homes furnished" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A furniture house, not a warehouse"
        description="Best Furniture. Best Rate. It's been on our signboard since day one, and it still decides how we buy, price and deliver."
        image={showroomImages[1]}
      />

      <section className="container-luxe py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Furniture chosen the way you'd choose it for your own home.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Sri Videm's Furniture began as a single Hyderabad showroom with a simple
                belief: good furniture shouldn't be reserved for a handful of homes. We
                stock what we would live with — seasoned hardwood frames, honest
                upholstery, finishes that survive a family.
              </p>
              <p>
                Every collection on this site sits on our floor today. We photograph it
                ourselves, exactly as you'll find it, so nothing surprises you when you
                walk in.
              </p>
              <p>
                This is a digital showroom, not a checkout. Browse at your own pace, send
                us the pieces you like on WhatsApp, and we'll take it from there — pricing,
                fabric options, delivery and assembly across the city.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
                <p className="font-display text-5xl text-accent">{s.value}</p>
                <p className="mt-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-luxe pb-24">
        <Reveal>
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src={showroomImages[0]}
              alt="Sri Videm's Furniture showroom facade at dusk"
              loading="lazy"
              className="h-[260px] w-full object-cover md:h-[460px]"
            />
          </div>
        </Reveal>
      </section>

      <WhatsAppCta />
    </>
  );
}
