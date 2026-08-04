import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { site, generalInquiry } from "@/data/site";
import { categories } from "@/data/catalog";

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container-luxe grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-display text-3xl leading-tight">Sri Videm's Furniture</p>
          <p className="mt-1 text-xs tracking-[0.28em] text-accent uppercase">
            {site.tagline}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-footer-foreground/60">
            A digital showroom for our {site.city} store. Explore collections online,
            then visit us to sit, feel and choose.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.28em] text-footer-foreground/50 uppercase">
            Collections
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-sm lg:grid-cols-1">
            {categories.slice(0, 8).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  className="text-footer-foreground/70 transition-colors hover:text-accent"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.28em] text-footer-foreground/50 uppercase">
            Explore
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              { label: "Home", to: "/" },
              { label: "All Collections", to: "/collections" },
              { label: "About Us", to: "/about" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-footer-foreground/70 transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.28em] text-footer-foreground/50 uppercase">
            Visit
          </p>
          <ul className="mt-6 space-y-4 text-sm text-footer-foreground/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.city}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${site.phone}`} className="hover:text-accent">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-accent">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                {site.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
          <a
            href={generalInquiry()}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full border border-accent px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-luxe flex flex-col gap-2 py-6 text-xs text-footer-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sri Videm's Furniture. All rights reserved.</p>
          <p>Digital showroom — enquiries via WhatsApp, purchases in store.</p>
        </div>
      </div>
    </footer>
  );
}
