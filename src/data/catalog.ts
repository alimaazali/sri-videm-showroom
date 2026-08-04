/**
 * Product & category catalog.
 *
 * This module is intentionally shaped like an API response so it can be
 * swapped for a Supabase query (or an admin-managed table) without touching
 * any component. Keep all reads going through the helper functions below.
 */

import lShapeSofa from "@/assets/L_shape_corner_sofa_4.png.asset.json";
import royalSofaSet from "@/assets/Sofa_Set_2_2_2_along_with_centre_table.png.asset.json";
import bedDressing from "@/assets/Bed_Dressing_table.png.asset.json";
import designerBed from "@/assets/Designer_Bed.png.asset.json";
import diningTable from "@/assets/Dining_Table.webp.asset.json";
import diningTable2 from "@/assets/Dining_Table_2.webp.asset.json";
import swingSofa from "@/assets/Wooden_Swing_Sofa.webp.asset.json";
import showroom1 from "@/assets/Showroom1.png.asset.json";
import showroom2 from "@/assets/Showroom2.png.asset.json";

export const showroomImages = [showroom1.url, showroom2.url];

export type Category = {
  slug: string;
  name: string;
  icon: string;
  intro: string;
  banner: string;
};

export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  images: string[];
  features: string[];
  materials: string[];
};

export const categories: Category[] = [
  {
    slug: "sofas",
    name: "Sofas",
    icon: "sofa",
    intro:
      "Corner sets, recliners and classic three-seaters — upholstered in premium fabrics and built on seasoned hardwood frames.",
    banner: lShapeSofa.url,
  },
  {
    slug: "beds",
    name: "Beds",
    icon: "bed",
    intro:
      "Designer beds with hydraulic and box storage, cushioned headboards and finishes that anchor the whole bedroom.",
    banner: designerBed.url,
  },
  {
    slug: "dining",
    name: "Dining Sets",
    icon: "utensils",
    intro:
      "Marble-top and solid wood dining tables paired with sculpted chairs, sized for four, six and eight.",
    banner: diningTable.url,
  },
  {
    slug: "wardrobes",
    name: "Wardrobes",
    icon: "door-closed",
    intro:
      "Sliding and hinged wardrobes with mirrored panels, soft-close fittings and intelligent internal storage.",
    banner: bedDressing.url,
  },
  {
    slug: "dressing",
    name: "Dressing Tables",
    icon: "sparkles",
    intro:
      "Mirror units with lit vanities, drawers and display shelving — finished to match your bedroom set.",
    banner: bedDressing.url,
  },
  {
    slug: "tv-units",
    name: "TV Units",
    icon: "tv",
    intro:
      "Wall-mounted and floor-standing media consoles with concealed cable management and display niches.",
    banner: designerBed.url,
  },
  {
    slug: "coffee-tables",
    name: "Coffee Tables",
    icon: "table",
    intro:
      "Marble, glass and hardwood centre tables designed to sit beautifully at the heart of your living room.",
    banner: royalSofaSet.url,
  },
  {
    slug: "office",
    name: "Office Furniture",
    icon: "briefcase",
    intro:
      "Executive desks, workstations and ergonomic seating for home studies and commercial floors.",
    banner: diningTable2.url,
  },
  {
    slug: "swing",
    name: "Swing Sofas",
    icon: "waves",
    intro:
      "Hand-carved teak jhoolas with brass chains and free-standing frames — a heritage centrepiece.",
    banner: swingSofa.url,
  },
  {
    slug: "wooden",
    name: "Wooden Furniture",
    icon: "tree-pine",
    intro:
      "Solid teak and sheesham pieces, hand-finished by craftsmen and made to be handed down.",
    banner: swingSofa.url,
  },
  {
    slug: "display-units",
    name: "Display Units",
    icon: "layout-grid",
    intro:
      "Crockery cabinets, bookshelves and open display systems in glass, wood and metal.",
    banner: bedDressing.url,
  },
  {
    slug: "drawers",
    name: "Drawers",
    icon: "archive",
    intro:
      "Chests of drawers and bedside storage with smooth channel runners and durable laminates.",
    banner: designerBed.url,
  },
  {
    slug: "chairs",
    name: "Chairs",
    icon: "armchair",
    intro:
      "Accent chairs, dining chairs and lounge seating in velvet, leatherette and woven fabric.",
    banner: diningTable2.url,
  },
  {
    slug: "home-decor",
    name: "Home Decor",
    icon: "flower",
    intro:
      "Mirrors, lighting, artefacts and finishing touches curated alongside our furniture collections.",
    banner: royalSofaSet.url,
  },
];

export const products: Product[] = [
  {
    slug: "l-shape-corner-sofa",
    name: "L-Shape Corner Sofa",
    categorySlug: "sofas",
    shortDescription:
      "Six-seater corner sofa with adjustable headrests and diamond-quilted back.",
    description:
      "A generous corner arrangement built for family evenings. The seat cushions are high-density foam wrapped in soft suede-finish fabric, while adjustable headrests let each person find their own angle. Quilted detailing on the backrest adds quiet structure without shouting for attention.",
    images: [lShapeSofa.url, royalSofaSet.url],
    features: [
      "Adjustable ratchet headrests",
      "High-density foam seating",
      "Diamond-quilted back panels",
      "Deep seat depth for lounging",
    ],
    materials: ["Seasoned hardwood frame", "Suede-finish upholstery", "S-spring suspension"],
  },
  {
    slug: "royal-carved-sofa-set",
    name: "Royal Carved Sofa Set 3+2+2",
    categorySlug: "sofas",
    shortDescription:
      "Hand-carved traditional sofa set finished in champagne gold with centre table.",
    description:
      "A statement drawing-room set with hand-carved crowns, scrolled arms and antique gold leafing. Supplied as three-seater, two-seater and settee with a matching glass-top centre table.",
    images: [royalSofaSet.url, lShapeSofa.url],
    features: [
      "Hand-carved crown and arms",
      "Champagne gold leaf finish",
      "Matching centre table included",
      "Brocade jacquard upholstery",
    ],
    materials: ["Solid wood carving", "Jacquard fabric", "Tempered glass table top"],
  },
  {
    slug: "marble-top-centre-table",
    name: "Marble-Top Centre Table",
    categorySlug: "coffee-tables",
    shortDescription:
      "Onyx-pattern marble top on a two-tone base with hidden lower shelf.",
    description:
      "A low, wide centre table with a polished onyx-pattern top and a curved two-tone base. The recessed lower shelf keeps remotes and magazines out of sight.",
    images: [lShapeSofa.url],
    features: ["Polished marble top", "Concealed lower shelf", "Rounded safety edges"],
    materials: ["Natural marble", "Engineered wood base", "PU high-gloss finish"],
  },
  {
    slug: "designer-storage-bed",
    name: "Designer Emerald Storage Bed",
    categorySlug: "beds",
    shortDescription:
      "King bed with emerald velvet headboard, brass inlay and drawer storage.",
    description:
      "A contemporary king-size bed with a deep emerald velvet headboard divided by slim brass inlays. Side drawers and a lift-up base give you full-width storage without disturbing the silhouette.",
    images: [designerBed.url, bedDressing.url],
    features: [
      "Brass inlay diamond panelling",
      "Side drawer + box storage",
      "King size 72\" x 78\"",
      "Matching footboard panel",
    ],
    materials: ["Solid wood frame", "Velvet upholstery", "Brass profile inlay"],
  },
  {
    slug: "bed-with-dressing-unit",
    name: "Bed with Dressing Unit",
    categorySlug: "beds",
    shortDescription:
      "Glossy white storage bed with tan tufted headboard and mirrored dresser.",
    description:
      "A complete bedroom pairing — a high-gloss white box-storage bed with a button-tufted tan headboard, matched with a mirrored dressing unit that offers hanging space, drawers and open display shelves.",
    images: [bedDressing.url, designerBed.url],
    features: [
      "Button-tufted headboard",
      "Full box storage base",
      "Mirrored dressing unit included",
      "Soft-close drawer runners",
    ],
    materials: ["Engineered wood", "High-gloss laminate", "Leatherette upholstery"],
  },
  {
    slug: "mirrored-dressing-unit",
    name: "Mirrored Dressing Unit",
    categorySlug: "dressing",
    shortDescription:
      "Full-length mirror dresser with drawers, cabinet and glass display shelving.",
    description:
      "A slim-footprint dressing unit combining a full-length mirror, glazed display column, two drawers and a closed cabinet — finished in a light oak and white two-tone palette.",
    images: [bedDressing.url],
    features: ["Full-length mirror", "Glass display column", "Two drawers + cabinet"],
    materials: ["Engineered wood", "Textured oak laminate", "Toughened mirror"],
  },
  {
    slug: "royal-marble-dining-six",
    name: "Royal Marble Dining Set (6 Seater)",
    categorySlug: "dining",
    shortDescription:
      "Marble-top six-seater with Greek-key inlay and high-back carved chairs.",
    description:
      "A formal dining set with an inlaid marble top, turned stone pedestals and six carved high-back chairs upholstered in a damask weave. Built for long dinners and larger families.",
    images: [diningTable.url, diningTable2.url],
    features: [
      "Greek-key brass inlay",
      "Six carved high-back chairs",
      "Stain-resistant marble top",
      "Reinforced pedestal base",
    ],
    materials: ["Natural marble", "Solid wood carving", "Damask upholstery"],
  },
  {
    slug: "classic-marble-dining-four",
    name: "Classic Marble Dining Set (4 Seater)",
    categorySlug: "dining",
    shortDescription:
      "Compact marble dining table with scroll-motif inlay and four cushioned chairs.",
    description:
      "A four-seater built for apartments — a beige marble top with subtle scroll inlays, carved legs, and four cushioned chairs with polished walnut frames.",
    images: [diningTable2.url, diningTable.url],
    features: ["Apartment-friendly footprint", "Scroll-motif inlay", "Four cushioned chairs"],
    materials: ["Natural marble", "Walnut-finish hardwood", "Linen-blend upholstery"],
  },
  {
    slug: "carved-teak-swing-sofa",
    name: "Carved Teak Swing Sofa",
    categorySlug: "swing",
    shortDescription:
      "Free-standing hand-carved jhoola with brass chains and floral upholstery.",
    description:
      "A heritage jhoola carved from solid teak, suspended on heavy brass chains from a free-standing canopy frame — no ceiling drilling required. Upholstered in a floral silk-finish fabric with bolster cushions.",
    images: [swingSofa.url],
    features: [
      "Free-standing canopy frame",
      "Heavy-duty brass chains",
      "Hand-carved shell crest",
      "Bolster cushions included",
    ],
    materials: ["Solid teak wood", "Brass hardware", "Silk-finish upholstery"],
  },
  {
    slug: "handcrafted-teak-collection",
    name: "Handcrafted Teak Collection",
    categorySlug: "wooden",
    shortDescription:
      "Solid teak seating and frames finished by hand in a traditional carved idiom.",
    description:
      "Our wooden collection is built the slow way — seasoned teak, hand-carved detailing and a hand-rubbed polish that deepens with age.",
    images: [swingSofa.url, royalSofaSet.url],
    features: ["Seasoned solid teak", "Hand-carved detailing", "Hand-rubbed polish"],
    materials: ["Teak wood", "Natural wax polish"],
  },
  {
    slug: "executive-office-table",
    name: "Executive Office Table",
    categorySlug: "office",
    shortDescription:
      "Stone-top executive desk with concealed storage and cushioned visitor chairs.",
    description:
      "A boardroom-grade desk with a polished stone top, cable routing, lockable pedestal storage and a pair of matching cushioned visitor chairs.",
    images: [diningTable2.url],
    features: ["Lockable pedestal storage", "Integrated cable routing", "Two visitor chairs"],
    materials: ["Engineered wood", "Polished stone top", "Fabric upholstery"],
  },
  {
    slug: "glass-display-cabinet",
    name: "Glass Display Cabinet",
    categorySlug: "display-units",
    shortDescription:
      "Glazed display column with adjustable shelving and a closed base cabinet.",
    description:
      "A tall display unit with toughened glass doors, adjustable shelves and a closed base for the things you'd rather not show.",
    images: [bedDressing.url],
    features: ["Toughened glass doors", "Adjustable shelving", "Closed base storage"],
    materials: ["Engineered wood", "Toughened glass", "Metal fittings"],
  },
  {
    slug: "bedside-drawer-chest",
    name: "Bedside Drawer Chest",
    categorySlug: "drawers",
    shortDescription:
      "Three-drawer bedside chest with channel runners and a wipe-clean top.",
    description:
      "A compact three-drawer chest that sits neatly beside any of our beds, with smooth channel runners and a durable wipe-clean surface.",
    images: [designerBed.url],
    features: ["Three deep drawers", "Smooth channel runners", "Scratch-resistant top"],
    materials: ["Engineered wood", "Laminate finish", "Steel runners"],
  },
  {
    slug: "carved-accent-chair",
    name: "Carved Accent Chair",
    categorySlug: "chairs",
    shortDescription:
      "High-back accent chair with carved crest and damask upholstery.",
    description:
      "A single carved accent chair that works at the head of a dining table or on its own beside a window.",
    images: [diningTable.url],
    features: ["Carved crest rail", "Deep cushioned seat", "Solid wood legs"],
    materials: ["Hardwood frame", "Damask upholstery"],
  },
];

/* ---------------------------------- reads --------------------------------- */

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.categorySlug === slug);

export const getRelatedProducts = (product: Product, limit = 4) =>
  products
    .filter((p) => p.slug !== product.slug)
    .sort((a, b) =>
      Number(b.categorySlug === product.categorySlug) -
      Number(a.categorySlug === product.categorySlug),
    )
    .slice(0, limit);

export const categoryName = (slug: string) =>
  getCategory(slug)?.name ?? "Collection";

export const featuredCollections = [
  {
    title: "Living Room Collection",
    caption: "Sofas, centre tables and seating",
    href: "/category/sofas",
    image: lShapeSofa.url,
    span: "tall" as const,
  },
  {
    title: "Bedroom Collection",
    caption: "Beds, wardrobes and dressers",
    href: "/category/beds",
    image: designerBed.url,
    span: "wide" as const,
  },
  {
    title: "Dining Collection",
    caption: "Marble dining sets and chairs",
    href: "/category/dining",
    image: diningTable.url,
    span: "wide" as const,
  },
];
