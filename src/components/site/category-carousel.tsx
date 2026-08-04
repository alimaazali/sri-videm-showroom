import { Link } from "@tanstack/react-router";
import {
  Sofa,
  BedDouble,
  Utensils,
  DoorClosed,
  Sparkles,
  Tv,
  Table,
  Briefcase,
  Waves,
  TreePine,
  LayoutGrid,
  Archive,
  Armchair,
  Flower2,
  type LucideIcon,
} from "lucide-react";
import { categories, type Category } from "@/data/catalog";

const icons: Record<string, LucideIcon> = {
  sofa: Sofa,
  bed: BedDouble,
  utensils: Utensils,
  "door-closed": DoorClosed,
  sparkles: Sparkles,
  tv: Tv,
  table: Table,
  briefcase: Briefcase,
  waves: Waves,
  "tree-pine": TreePine,
  "layout-grid": LayoutGrid,
  archive: Archive,
  armchair: Armchair,
  flower: Flower2,
};

export function CategoryTile({ category }: { category: Category }) {
  const Icon = icons[category.icon] ?? Sofa;
  return (
    <Link
      to="/category/$slug"
      params={{ slug: category.slug }}
      className="group flex w-56 shrink-0 flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-soft transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-glow sm:w-64"
    >
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-sand text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon className="h-6 w-6" strokeWidth={1.2} />
      </span>
      <span className="mt-10 block font-display text-2xl text-foreground">
        {category.name}
      </span>
      <span className="mt-1 block text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
        Explore →
      </span>
    </Link>
  );
}

/**
 * Continuously drifting marquee of categories.
 * Pure CSS animation (GPU transform) — pauses on hover, and the whole strip
 * remains horizontally draggable/scrollable by touch.
 */
export function CategoryCarousel() {
  const loop = [...categories, ...categories];
  return (
    <div className="group/marquee relative">
      <div className="overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div
          className="flex w-max gap-5 py-2 animate-marquee group-hover/marquee:[animation-play-state:paused]"
          style={{ ["--marquee-duration" as string]: "70s" }}
        >
          {loop.map((c, i) => (
            <CategoryTile key={`${c.slug}-${i}`} category={c} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-background to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-background to-transparent md:w-24" />
    </div>
  );
}
