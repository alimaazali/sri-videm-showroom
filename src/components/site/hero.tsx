import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { showroomImages } from "@/data/catalog";
import { generalInquiry } from "@/data/site";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % showroomImages.length),
      8000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex h-[100svh] min-h-[600px] items-center overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={showroomImages[index]}
            alt="Sri Videm's Furniture showroom in Hyderabad"
            fetchPriority="high"
            decoding="async"
            className={`h-full w-full origin-center object-cover animate-kenburns max-[768px]:animate-none ${
              index === 0
                ? "max-[768px]:object-[27%_center]"
                : "max-[768px]:object-[52%_48%]"
            }`}
          />
        </motion.div>
      </AnimatePresence>

      {/* warm gradient + vignette */}
      <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/35 to-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />

      <div className="container-luxe relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl rounded-3xl glass-panel p-7 sm:p-10 md:p-14"
        >
          <p className="text-[0.65rem] font-semibold tracking-[0.32em] text-white/70 uppercase">
            VIDEM'S · Digital Showroom
          </p>
          <h1 className="mt-5 font-display text-[2.6rem] leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Furniture That Completes Every Home
          </h1>
          {/* <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            Discover beautifully crafted furniture collections for every room—from
            luxurious sofas and elegant dining sets to stylish bedrooms, office furniture
            and handcrafted wooden collections—all under one roof.
          </p> */}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {[
              <Link
                key="browse"
                to="/collections"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-shadow duration-300 hover:shadow-glow"
              >
                Browse Collections
              </Link>,
              <a
                key="wa"
                href={generalInquiry()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
              </a>,
            ].map((child, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 + i * 0.15 }}
              >
                {child}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-7 z-10 flex justify-center">
        <ChevronDown className="h-6 w-6 text-white/70 animate-scroll-bounce" strokeWidth={1.25} />
      </div>
    </section>
  );
}
