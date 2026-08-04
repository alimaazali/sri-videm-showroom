import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/data/catalog";
import { categoryName } from "@/data/catalog";
import { productInquiry } from "@/data/site";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: Math.min(index, 7) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-lift md:rounded-3xl"
    >
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="relative block aspect-4/3 overflow-hidden bg-sand"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-107"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4 md:p-6">
        <p className="text-[0.6rem] tracking-[0.24em] text-accent uppercase md:text-[0.65rem]">
          {categoryName(product.categorySlug)}
        </p>
        <h3 className="mt-2 font-display text-xl leading-snug text-foreground md:text-2xl">
          <Link to="/product/$slug" params={{ slug: product.slug }}>
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
          {product.shortDescription}
        </p>

        <div className="mt-5 flex flex-col gap-2 md:mt-6 md:flex-row">
          <Link
            to="/product/$slug"
            params={{ slug: product.slug }}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-input px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-foreground md:text-sm"
          >
            View Details
          </Link>
          <a
            href={productInquiry(product.name)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-accent-foreground transition-shadow hover:shadow-glow md:text-sm"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Inquiry
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-muted-foreground">
        New pieces for this collection are arriving shortly. Message us on WhatsApp for
        current stock.
      </p>
    );
  }
  return (
    <div className="product-grid">
      {products.map((p, i) => (
        <ProductCard key={p.slug} product={p} index={i} />
      ))}
    </div>
  );
}
