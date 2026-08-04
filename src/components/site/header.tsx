import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/LOGO.png";
import { site, generalInquiry } from "@/data/site";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", to: "/" },
  { label: "Collections", to: "/collections" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const transparent = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        transparent
          ? "bg-transparent"
          : "border-b border-border bg-background/85 backdrop-blur-xl",
      )}
    >
      <div className="container-luxe grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 md:py-5">
        <Link to="/" className="shrink-0" aria-label="Sri Videm's Furniture home">
          <img
            src={logo}
            alt="Sri Videm's Furniture"
            className="h-12 w-auto rounded-sm object-contain md:h-14"
          />
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative text-sm font-medium transition-colors",
                  transparent
                    ? "text-white/85 hover:text-white"
                    : "text-muted-foreground hover:text-foreground",
                )}
                activeProps={{
                  className: transparent ? "!text-white" : "!text-accent",
                }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={generalInquiry()}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "hidden rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 md:inline-flex",
              transparent
                ? "border-white/40 text-white hover:bg-white hover:text-foreground"
                : "border-accent bg-accent text-accent-foreground hover:shadow-glow",
            )}
          >
            Enquire
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className={cn(
              "grid h-11 w-11 shrink-0 place-items-center rounded-full border lg:hidden",
              transparent ? "border-white/40 text-white" : "border-border text-foreground",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="container-luxe flex flex-col py-4">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="py-3.5 font-display text-2xl text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`tel:${site.phone}`}
                className="mt-2 inline-flex items-center gap-2 py-3 text-sm font-semibold text-accent"
              >
                <Phone className="h-4 w-4" /> {site.phoneDisplay}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
