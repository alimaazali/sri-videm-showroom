import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Gem,
  Lightbulb,
  BadgeIndianRupee,
  Truck,
  HeartHandshake,
} from "lucide-react";
import { Hero } from "@/components/site/hero";
import { CategoryCarousel } from "@/components/site/category-carousel";
import { SectionHeading } from "@/components/site/section-heading";
import { ShowroomVisit } from "@/components/site/showroom-visit";
import { Reveal } from "@/components/ui/reveal";
import { featuredCollections } from "@/data/catalog";

const title = "Sri Videm's Furniture | Premium Furniture Showroom, Hyderabad";
const description =
  "Explore sofas, beds, dining sets, wardrobes and handcrafted wooden furniture at Sri Videm's Furniture, Hyderabad. Browse our digital showroom and enquire on WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

const whyCards = [
  {
    icon: Gem,
    title: "Premium Quality",
    body: "Seasoned hardwood frames, high-density foam and finishes that hold up for years.",
  },
  {
    icon: Lightbulb,
    title: "Modern Designs",
    body: "Contemporary silhouettes alongside traditional carved craftsmanship.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Affordable Luxury",
    body: "Showroom-direct pricing — the best furniture at the best rate.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    body: "Careful handling, on-time delivery and in-home assembly across Hyderabad.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction",
    body: "Thousands of families furnished, and after-sales support that answers.",
  },
];

function Index() {
  return (
    <>
      <Hero />

      {/* Categories */}
      <section className="py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Collections"
            title="Browse Collections"
            description="Fourteen curated collections, each with its own dedicated space. Take your time."
          />
        </div>
        <div className="mt-12 pl-5 md:mt-16 md:pl-0">
          <CategoryCarousel />
        </div>
      </section>

      {/* Featured */}
      <section className="container-luxe py-20 md:py-28">
        <SectionHeading
          eyebrow="Featured"
          title="Rooms, fully considered"
          description="Three signature collections photographed on our showroom floor."
        />

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:grid-rows-2 md:gap-6">
          {featuredCollections.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 0.1}
              className={
                f.span === "tall" ? "md:row-span-2" : ""
              }
            >
              <Link
                to={f.href}
                className="group relative block h-full min-h-[280px] overflow-hidden rounded-3xl shadow-soft transition-shadow duration-500 hover:shadow-lift md:min-h-[300px]"
              >
                <img
                  src={f.image}
                  alt={f.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-107"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative flex h-full min-h-[280px] flex-col justify-end p-7 md:min-h-[300px] md:p-10">
                  <p className="text-[0.6rem] tracking-[0.28em] text-white/70 uppercase">
                    {f.caption}
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-white md:text-4xl">
                    {f.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Videm's */}
      <section className="bg-sand py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Why Videm's"
            title="Best furniture. Best rate."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group h-full rounded-3xl border border-border bg-card p-8 shadow-soft"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-accent/30 text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                    <c.icon className="h-6 w-6" strokeWidth={1.1} />
                  </span>
                  <h3 className="mt-8 font-display text-2xl text-foreground">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ShowroomVisit />
    </>
  );
}
