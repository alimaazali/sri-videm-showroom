import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, WhatsAppCta } from "@/components/site/page-sections";
import { Reveal } from "@/components/ui/reveal";
import { categories, getProductsByCategory } from "@/data/catalog";

const title = "All Collections | Sri Videm's Furniture, Hyderabad";
const description =
  "Fourteen furniture collections — sofas, beds, dining sets, wardrobes, swing sofas, office furniture and more. Explore each collection in our Hyderabad digital showroom.";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Showroom"
        title="Every collection, one floor"
        description="Walk through our collections the way you would in store — room by room, piece by piece."
      />

      <section className="container-luxe py-16 md:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={Math.min(i, 6) * 0.06}>
              <Link
                to="/category/$slug"
                params={{ slug: c.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="aspect-4/3 overflow-hidden bg-sand">
                  <img
                    src={c.banner}
                    alt={c.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-107"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="font-display text-2xl text-foreground">{c.name}</h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {c.intro}
                  </p>
                  <p className="mt-6 text-[0.65rem] tracking-[0.24em] text-accent uppercase">
                    {getProductsByCategory(c.slug).length} pieces · View →
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <WhatsAppCta />
    </>
  );
}
