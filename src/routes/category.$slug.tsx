import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero, WhatsAppCta } from "@/components/site/page-sections";
import { ProductGrid } from "@/components/site/product-card";
import { getCategory, getProductsByCategory } from "@/data/catalog";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category, products: getProductsByCategory(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Collection not found | Sri Videm's Furniture" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const t = `${loaderData.category.name} | Sri Videm's Furniture, Hyderabad`;
    const d = loaderData.category.intro;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
      ],
    };
  },
  component: CategoryPage,
  errorComponent: CategoryMissing,
  notFoundComponent: CategoryMissing,
});

function CategoryMissing() {
  return (
    <div className="container-luxe flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">Collection</p>
      <h1 className="mt-4 font-display text-5xl text-foreground">Not available</h1>
      <p className="mt-3 max-w-md text-sm text-muted-foreground">
        We couldn't find that collection. Browse everything we have on the floor instead.
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

function CategoryPage() {
  const { category, products } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow="Collection"
        title={category.name}
        description={category.intro}
        image={category.banner}
      />

      <section className="container-luxe py-16 md:py-24">
        <ProductGrid products={products} />
      </section>

      <WhatsAppCta
        title={`Enquire about our ${category.name.toLowerCase()}`}
        description="Share the piece you like on WhatsApp and we'll confirm pricing, fabric and finish options, and delivery timelines."
      />
    </>
  );
}
