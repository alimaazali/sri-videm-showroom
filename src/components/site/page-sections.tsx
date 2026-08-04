import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { generalInquiry } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative flex min-h-[56vh] items-end overflow-hidden pt-28 pb-14 md:min-h-[64vh] md:pb-20">
      {image ? (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/45 to-black/40" />
        </>
      ) : (
        <div className="absolute inset-0 bg-sand" />
      )}

      <div className="container-luxe relative z-10">
        <Reveal>
          {eyebrow ? (
            <p
              className={
                image
                  ? "text-[0.65rem] font-semibold tracking-[0.32em] text-white/70 uppercase"
                  : "eyebrow"
              }
            >
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={`mt-4 max-w-3xl font-display text-4xl leading-[1.05] sm:text-6xl ${
              image ? "text-white" : "text-foreground"
            }`}
          >
            {title}
          </h1>
          {description ? (
            <p
              className={`mt-5 max-w-2xl text-sm leading-relaxed sm:text-base ${
                image ? "text-white/80" : "text-muted-foreground"
              }`}
            >
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

export function WhatsAppCta({
  title = "Found something you like?",
  description = "Send us a message on WhatsApp and our team will share pricing, fabric options and delivery timelines for any piece.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="container-luxe pb-24">
      <Reveal>
        <div className="overflow-hidden rounded-3xl bg-footer px-7 py-14 text-center text-footer-foreground md:px-16 md:py-20">
          <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-footer-foreground/60 sm:text-base">
            {description}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={generalInquiry()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-shadow hover:shadow-glow"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-footer-foreground transition-colors hover:bg-white/10"
            >
              Visit the Showroom
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
