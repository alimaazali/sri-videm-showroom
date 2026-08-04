import { useState } from "react";
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MessageCircle, Check, ChevronLeft } from "lucide-react";
import { ProductCard } from "@/components/site/product-card";
import { WhatsAppCta } from "@/components/site/page-sections";
import { Reveal } from "@/components/ui/reveal";
import {
  getProduct,
  getRelatedProducts,
  categoryName,
} from "@/data/catalog";
import { productInquiry } from "@/data/site";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product, related: getRelatedProducts(product) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product not found | Sri Videm's Furniture" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const t = `${loaderData.product.name} | Sri Videm's Furniture`;
    const d = loaderData.product.shortDescription;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
      ],
    };
  },
  component: ProductPage,
  errorComponent: ProductMissing,
  notFoundComponent: ProductMissing,
});

function ProductMissing() {
  return (
    <div className="container-luxe flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">Product</p>
      <h1 className="mt-4 font-display text-5xl text-foreground">Not available</h1>
      <p className="mt-3 max-w-md text-sm text-muted-foreground">
        This piece may have moved or sold out. Explore the rest of our floor.
      </p>
      <Link
        to="/collections"
        className="mt-8 inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground"
      >
        All Collections
      </Link>
    </div>
  );
}

function ProductPage() {
  const { product, related } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState({ on: false, x: 50, y: 50 });

  return (
    <>
      <section className="container-luxe pt-28 pb-14 md:pt-36">
        <Link
          to="/category/$slug"
          params={{ slug: product.categorySlug }}
          className="inline-flex items-center gap-1.5 text-xs tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-accent"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          {categoryName(product.categorySlug)}
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          {/* Gallery */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-4/3 overflow-hidden rounded-3xl border border-border bg-sand shadow-soft"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                setZoom({
                  on: true,
                  x: ((e.clientX - r.left) / r.width) * 100,
                  y: ((e.clientY - r.top) / r.height) * 100,
                });
              }}
              onMouseLeave={() => setZoom((z) => ({ ...z, on: false }))}
            >
              <img
                src={product.images[active]}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 ease-out"
                style={{
                  transform: zoom.on ? "scale(1.7)" : "scale(1)",
                  transformOrigin: `${zoom.x}% ${zoom.y}%`,
                }}
              />
            </motion.div>

            {product.images.length > 1 ? (
              <div className="mt-4 flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={img + i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`aspect-4/3 w-24 overflow-hidden rounded-xl border transition-colors md:w-28 ${
                      i === active ? "border-accent" : "border-border"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          {/* Info */}
          <div className="lg:pt-4">
            <p className="eyebrow">{categoryName(product.categorySlug)}</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] text-foreground sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {product.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={productInquiry(product.name)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-shadow hover:shadow-glow"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-input px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
              >
                See it in store
              </Link>
            </div>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              <div>
                <p className="text-xs tracking-[0.24em] text-muted-foreground uppercase">
                  Features
                </p>
                <ul className="mt-5 space-y-3">
                  {product.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs tracking-[0.24em] text-muted-foreground uppercase">
                  Materials
                </p>
                <ul className="mt-5 space-y-3">
                  {product.materials.map((m) => (
                    <li
                      key={m}
                      className="border-b border-border pb-3 text-sm text-muted-foreground"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="container-luxe py-16 md:py-24">
          <Reveal>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              You may also like
            </h2>
          </Reveal>
          <div className="product-grid mt-10">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </section>
      ) : null}

      <WhatsAppCta />
    </>
  );
}
