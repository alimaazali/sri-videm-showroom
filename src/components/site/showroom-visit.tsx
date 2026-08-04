import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";
import { site, generalInquiry } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/site/section-heading";

export function ShowroomVisit() {
  return (
    <section className="container-luxe py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Visit Our Showroom"
            title="See it, sit on it, feel the finish."
            description="Photographs only go so far. Step into our Hyderabad showroom and experience every collection in person, with our team on hand to help you choose."
          />

          <Reveal delay={0.1}>
            <ul className="mt-10 space-y-6 text-sm">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.3} />
                <span className="text-muted-foreground">
                  <span className="block font-semibold text-foreground">Address</span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city}
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.3} />
                <span className="text-muted-foreground">
                  <span className="block font-semibold text-foreground">Phone</span>
                  <a href={`tel:${site.phone}`} className="hover:text-accent">
                    {site.phoneDisplay}
                  </a>
                </span>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.3} />
                <span className="text-muted-foreground">
                  <span className="block font-semibold text-foreground">
                    Business Hours
                  </span>
                  {site.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days} · {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-input px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={generalInquiry()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-shadow hover:shadow-glow"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={site.mapsDirections}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-input px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
            <iframe
              title="Sri Videm's Furniture showroom location"
              src={site.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[340px] w-full md:h-[520px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
