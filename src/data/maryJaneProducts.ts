// Mary Jane specific images
import maryJaneFlatImg from "@/assets/mary-jane-flat.png";
import maryJaneBlockHeelImg from "@/assets/mary-jane-block-heel.png";
import maryJanePlatformImg from "@/assets/mary-jane-platform.png";
import maryJaneHighHeelImg from "@/assets/mary-jane-high-heel.png";
import maryJaneSquareToeImg from "@/assets/mary-jane-square-toe.png";
import maryJaneChunkyImg from "@/assets/mary-jane-chunky.png";
import maryJaneBalletImg from "@/assets/mary-jane-ballet.png";
import maryJaneMetallicImg from "@/assets/mary-jane-metallic.png";
// Existing mary jane images
import maryJanesImg from "@/assets/mary-janes.png";
import maryJanesImg2 from "@/assets/mary-janes-2.png";
import maryJanesImg3 from "@/assets/mary-janes-3.png";

// ============== TYPES ==============

export interface MaryJaneProduct {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[]; // Multiple images for product detail
  category: string; // Main category - always "Mary Jane Shoes"
  subcategory: string; // Subcategory like "Flat Mary Janes"
  gender: "women" | "men" | "unisex"; // Required for cart compatibility
  
  // Filter attributes
  heelType: HeelType;
  soleStyle: SoleStyle;
  strapDesign: StrapDesign;
  toeShape: ToeShape;
  occasion: Occasion[];
  material: Material;
  audience: Audience;
  collection: Collection[];
  color: string;
  sizes: number[];
  width: Width;
  
  // Status flags
  isNew?: boolean;
  isSale?: boolean;
  isBestSeller?: boolean;
  isEditorsPick?: boolean;
  isLimitedEdition?: boolean;
  
  // SEO
  slug: string;
  description: string;
  fullDescription?: string; // Longer description for product detail page
}

export type HeelType = "flat" | "low-heel" | "block-heel" | "high-heel";
export type SoleStyle = "classic" | "platform" | "chunky-lug";
export type StrapDesign = "single" | "double" | "multi" | "t-strap" | "elastic";
export type ToeShape = "round" | "square" | "pointed";
export type Occasion = "casual" | "office" | "party" | "school" | "wedding";
export type Material = "leather" | "patent-leather" | "suede" | "vegan" | "mesh";
export type Audience = "women" | "girls" | "wide-fit" | "comfort";
export type Collection = "new-arrivals" | "best-sellers" | "editors-picks" | "limited-edition";
export type Width = "standard" | "wide" | "narrow";

// ============== FILTER OPTIONS ==============

export const heelTypeOptions: { value: HeelType; label: string }[] = [
  { value: "flat", label: "Flat" },
  { value: "low-heel", label: "Low Heel" },
  { value: "block-heel", label: "Block Heel" },
  { value: "high-heel", label: "High Heel" },
];

export const soleStyleOptions: { value: SoleStyle; label: string }[] = [
  { value: "classic", label: "Classic Sole" },
  { value: "platform", label: "Platform" },
  { value: "chunky-lug", label: "Chunky / Lug-Sole" },
];

export const strapDesignOptions: { value: StrapDesign; label: string }[] = [
  { value: "single", label: "Single-Strap" },
  { value: "double", label: "Double-Strap" },
  { value: "multi", label: "Multi-Strap" },
  { value: "t-strap", label: "T-Strap" },
  { value: "elastic", label: "Elastic-Strap" },
];

export const toeShapeOptions: { value: ToeShape; label: string }[] = [
  { value: "round", label: "Round-Toe" },
  { value: "square", label: "Square-Toe" },
  { value: "pointed", label: "Pointed-Toe" },
];

export const occasionOptions: { value: Occasion; label: string }[] = [
  { value: "casual", label: "Casual / Everyday" },
  { value: "office", label: "Office / Work" },
  { value: "party", label: "Party / Evening" },
  { value: "school", label: "School / Uniform" },
  { value: "wedding", label: "Wedding / Formal" },
];

export const materialOptions: { value: Material; label: string }[] = [
  { value: "leather", label: "Leather" },
  { value: "patent-leather", label: "Patent Leather" },
  { value: "suede", label: "Suede" },
  { value: "vegan", label: "Vegan / Eco-Leather" },
  { value: "mesh", label: "Mesh / Transparent" },
];

export const audienceOptions: { value: Audience; label: string }[] = [
  { value: "women", label: "Women" },
  { value: "girls", label: "Girls / Kids" },
  { value: "wide-fit", label: "Wide-Fit" },
  { value: "comfort", label: "Comfort / Orthopedic" },
];

export const collectionOptions: { value: Collection; label: string }[] = [
  { value: "new-arrivals", label: "New Arrivals" },
  { value: "best-sellers", label: "Best Sellers" },
  { value: "editors-picks", label: "Editor's Picks" },
  { value: "limited-edition", label: "Limited Edition" },
];

export const colorOptions = [
  "Black", "White", "Red", "Navy", "Beige", "Nude", "Brown", "Burgundy",
  "Pink", "Blush", "Silver", "Gold", "Rose Gold", "Champagne", "Cream",
  "Forest Green", "Olive", "Coral", "Lavender", "Taupe"
];

export const sizeOptions = [35, 36, 37, 38, 39, 40, 41, 42, 43];

export const widthOptions: { value: Width; label: string }[] = [
  { value: "narrow", label: "Narrow" },
  { value: "standard", label: "Standard" },
  { value: "wide", label: "Wide" },
];

export const priceRangeOptions = [
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 - $150", min: 100, max: 150 },
  { label: "$150 - $200", min: 150, max: 200 },
  { label: "$200 - $300", min: 200, max: 300 },
  { label: "$300+", min: 300, max: 999 },
];

// ============== TRENDING COLLECTIONS ==============

export interface TrendCollection {
  id: string;
  title: string;
  description: string;
  slug: string;
  filterKey: keyof MaryJaneFilters;
  filterValue: string | string[];
  image: string;
}

export const trendingCollections: TrendCollection[] = [
  {
    id: "platform",
    title: "Platform Mary Janes",
    description: "Bold, Y2K-inspired platforms that elevate your style. The ultimate statement piece for fashion-forward looks.",
    slug: "platform-mary-janes",
    filterKey: "soleStyles",
    filterValue: "platform",
    image: maryJanePlatformImg,
  },
  {
    id: "chunky",
    title: "Chunky / Lug-Sole Mary Janes",
    description: "Combat-style Mary Janes with thick rubber soles. Edgy, durable, and on-trend.",
    slug: "chunky-mary-janes",
    filterKey: "soleStyles",
    filterValue: "chunky-lug",
    image: maryJaneChunkyImg,
  },
  {
    id: "square-toe",
    title: "Square-Toe Mary Janes",
    description: "Minimal and modern. The square toe silhouette brings a contemporary edge to classic design.",
    slug: "square-toe-mary-janes",
    filterKey: "toeShapes",
    filterValue: "square",
    image: maryJaneSquareToeImg,
  },
  {
    id: "double-strap",
    title: "Double-Strap Mary Janes",
    description: "Vintage-inspired elegance with dual straps for extra charm and secure fit.",
    slug: "double-strap-mary-janes",
    filterKey: "strapDesigns",
    filterValue: "double",
    image: maryJaneBlockHeelImg,
  },
  {
    id: "ballet-core",
    title: "Ballet-Core Mary Janes",
    description: "Soft leather in pastel colors. Embrace the feminine ballet aesthetic that's taking over fashion.",
    slug: "ballet-core-mary-janes",
    filterKey: "heelTypes",
    filterValue: "flat",
    image: maryJaneBalletImg,
  },
  {
    id: "patent-leather",
    title: "Patent Leather Mary Janes",
    description: "Glossy finish that catches the light. Perfect for making a polished statement.",
    slug: "patent-leather-mary-janes",
    filterKey: "materials",
    filterValue: "patent-leather",
    image: maryJaneHighHeelImg,
  },
  {
    id: "metallic",
    title: "Metallic & Two-Tone Mary Janes",
    description: "Silver, gold, and contrast designs for show-stopping looks.",
    slug: "metallic-mary-janes",
    filterKey: "colors",
    filterValue: ["Silver", "Gold", "Rose Gold"],
    image: maryJaneMetallicImg,
  },
  {
    id: "comfort",
    title: "Comfort Mary Janes",
    description: "Cushioned soles and arch support for all-day wear. Style meets comfort.",
    slug: "comfort-mary-janes",
    filterKey: "audiences",
    filterValue: "comfort",
    image: maryJaneFlatImg,
  },
];

// ============== FILTER STATE ==============

export interface MaryJaneFilters {
  search: string;
  heelTypes: HeelType[];
  soleStyles: SoleStyle[];
  strapDesigns: StrapDesign[];
  toeShapes: ToeShape[];
  occasions: Occasion[];
  materials: Material[];
  audiences: Audience[];
  collections: Collection[];
  colors: string[];
  sizes: number[];
  widths: Width[];
  priceRange: { min: number; max: number } | null;
  sortBy: "newest" | "price-low" | "price-high" | "bestsellers";
}

export const initialFilters: MaryJaneFilters = {
  search: "",
  heelTypes: [],
  soleStyles: [],
  strapDesigns: [],
  toeShapes: [],
  occasions: [],
  materials: [],
  audiences: [],
  collections: [],
  colors: [],
  sizes: [],
  widths: [],
  priceRange: null,
  sortBy: "newest",
};

// ============== IMAGE MAPPING ==============

const styleImages: Record<string, string[]> = {
  "flat": [maryJaneFlatImg, maryJaneBalletImg, maryJanesImg],
  "low-heel": [maryJaneSquareToeImg, maryJanesImg2, maryJanesImg3],
  "block-heel": [maryJaneBlockHeelImg, maryJanesImg2, maryJanesImg3],
  "high-heel": [maryJaneHighHeelImg, maryJanesImg, maryJanesImg2],
  "platform": [maryJanePlatformImg, maryJanesImg, maryJanesImg3],
  "chunky-lug": [maryJaneChunkyImg, maryJanesImg2, maryJanesImg],
  "metallic": [maryJaneMetallicImg, maryJanesImg3, maryJanesImg],
  "ballet": [maryJaneBalletImg, maryJaneFlatImg, maryJanesImg],
  "default": [maryJanesImg, maryJanesImg2, maryJanesImg3],
};

// ============== PRODUCT GENERATION ==============

const brands = [
  "STRIDE", "LuxeStep", "VelvetSole", "ChicWalk", "GlamFoot",
  "EleganceX", "SophiaSteps", "BellaShoes", "VogueKicks", "DivaWalk",
  "ClassyStride", "RoyalSole", "GraceWalk", "PrimaSteps", "Velour",
];

const nameTemplates = {
  flat: ["Cloud", "Serene", "Gentle", "Easy", "Classic", "Everyday", "Simple", "Pure", "Soft", "Light"],
  "low-heel": ["Charm", "Grace", "Elegant", "Refined", "Petite", "Dainty", "Subtle", "Modest", "Sweet", "Gentle"],
  "block-heel": ["Power", "Bold", "Statement", "Confidence", "Authority", "Strong", "Modern", "Striking", "Impact", "Force"],
  "high-heel": ["Glamour", "Diva", "Luxe", "Radiance", "Sparkle", "Dazzle", "Starlight", "Midnight", "Velvet", "Crystal"],
};

function seededRandom(seed: number): () => number {
  return function() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

function createSlug(name: string, id: number): string {
  return `${name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}-${id}`;
}

function generateMaryJaneProducts(): MaryJaneProduct[] {
  const products: MaryJaneProduct[] = [];
  const random = seededRandom(123);
  
  const heelTypes: HeelType[] = ["flat", "low-heel", "block-heel", "high-heel"];
  const soleStyles: SoleStyle[] = ["classic", "platform", "chunky-lug"];
  const strapDesigns: StrapDesign[] = ["single", "double", "multi", "t-strap", "elastic"];
  const toeShapes: ToeShape[] = ["round", "square", "pointed"];
  const occasions: Occasion[] = ["casual", "office", "party", "school", "wedding"];
  const materials: Material[] = ["leather", "patent-leather", "suede", "vegan", "mesh"];
  const audiences: Audience[] = ["women", "girls", "wide-fit", "comfort"];
  const widths: Width[] = ["standard", "wide", "narrow"];
  
  let id = 1;
  
  // Generate 200 Mary Jane products
  for (let i = 0; i < 200; i++) {
    const heelType = heelTypes[Math.floor(random() * heelTypes.length)];
    const soleStyle = soleStyles[Math.floor(random() * soleStyles.length)];
    const strapDesign = strapDesigns[Math.floor(random() * strapDesigns.length)];
    const toeShape = toeShapes[Math.floor(random() * toeShapes.length)];
    const material = materials[Math.floor(random() * materials.length)];
    const audience = audiences[Math.floor(random() * audiences.length)];
    const width = widths[Math.floor(random() * widths.length)];
    const color = colorOptions[Math.floor(random() * colorOptions.length)];
    const brand = brands[Math.floor(random() * brands.length)];
    
    // Select 1-2 occasions
    const productOccasions: Occasion[] = [];
    const numOccasions = Math.floor(random() * 2) + 1;
    for (let j = 0; j < numOccasions; j++) {
      const occ = occasions[Math.floor(random() * occasions.length)];
      if (!productOccasions.includes(occ)) productOccasions.push(occ);
    }
    
    // Collections based on product attributes
    const collections: Collection[] = [];
    if (random() < 0.2) collections.push("new-arrivals");
    if (random() < 0.15) collections.push("best-sellers");
    if (random() < 0.1) collections.push("editors-picks");
    if (random() < 0.05) collections.push("limited-edition");
    
    const isNew = collections.includes("new-arrivals");
    const isBestSeller = collections.includes("best-sellers");
    const isEditorsPick = collections.includes("editors-picks");
    const isLimitedEdition = collections.includes("limited-edition");
    const isSale = !isNew && random() < 0.25;
    
    // Price based on heel type and material - varied distribution
    let basePrice = 45 + Math.floor(random() * 40); // Start between $45-85
    if (heelType === "high-heel") basePrice += 20;
    if (heelType === "block-heel") basePrice += 10;
    if (soleStyle === "platform") basePrice += 15;
    if (soleStyle === "chunky-lug") basePrice += 12;
    if (material === "leather" || material === "patent-leather") basePrice += 25;
    if (material === "suede") basePrice += 15;
    if (isLimitedEdition) basePrice += 40;
    basePrice += Math.floor(random() * 50);
    
    const originalPrice = isSale ? Math.floor(basePrice * (1.3 + random() * 0.3)) : undefined;
    
    // Generate name
    const names = nameTemplates[heelType] || nameTemplates.flat;
    const baseName = names[Math.floor(random() * names.length)];
    const name = `${color} ${baseName} Mary Jane`;
    
    // Get subcategory name
    const heelTypeLabel = heelTypeOptions.find(h => h.value === heelType)?.label || "Mary Jane";
    const subcategory = `${heelTypeLabel} Mary Janes`;
    
    // Get image based on style
    let imageKey: string = heelType;
    if (soleStyle === "platform") imageKey = "platform";
    if (soleStyle === "chunky-lug") imageKey = "chunky-lug";
    if (["Silver", "Gold", "Rose Gold"].includes(color)) imageKey = "metallic";
    if ((heelType === "flat" && color === "Pink") || color === "Blush") imageKey = "ballet";
    
    const images = styleImages[imageKey] || styleImages.default;
    const image = images[Math.floor(random() * images.length)];
    
    // Available sizes - ensure good distribution of all sizes
    const availableSizes = sizeOptions.filter(() => random() > 0.15);
    
    products.push({
      id: id,
      name,
      brand,
      price: basePrice,
      originalPrice,
      image,
      images, // All images for this style
      category: "Mary Jane Shoes",
      subcategory,
      gender: "women", // All Mary Janes are women's shoes
      heelType,
      soleStyle,
      strapDesign,
      toeShape,
      occasion: productOccasions,
      material,
      audience,
      collection: collections,
      color,
      sizes: availableSizes.length > 0 ? availableSizes : [38, 39, 40],
      width,
      isNew,
      isSale,
      isBestSeller,
      isEditorsPick,
      isLimitedEdition,
      slug: createSlug(name, id),
      description: `${brand} ${name} featuring ${strapDesign}-strap design with ${toeShape} toe and ${soleStyle} sole. Perfect for ${productOccasions.join(" and ")} occasions. Made from premium ${material.replace("-", " ")}.`,
      fullDescription: `Discover the ${brand} ${name}, a stunning addition to our Mary Jane collection. This exquisite shoe features a ${strapDesign}-strap design that provides both style and secure fit. The ${toeShape} toe silhouette adds a ${toeShape === "pointed" ? "sophisticated" : toeShape === "square" ? "modern" : "classic"} touch, while the ${soleStyle} sole ensures ${soleStyle === "platform" ? "bold height and stability" : soleStyle === "chunky-lug" ? "durability and edge" : "timeless elegance"}.\n\nCrafted from premium ${material.replace("-", " ")}, this ${heelType === "flat" ? "comfortable flat" : heelType + " heel"} Mary Jane is perfect for ${productOccasions.join(" and ")} occasions. Available in ${width} width for the perfect fit.\n\n• ${strapDesign.charAt(0).toUpperCase() + strapDesign.slice(1)}-strap design\n• ${toeShape.charAt(0).toUpperCase() + toeShape.slice(1)} toe shape\n• ${soleStyle.charAt(0).toUpperCase() + soleStyle.slice(1)} sole construction\n• Premium ${material.replace("-", " ")} upper\n• Cushioned insole for all-day comfort\n• Available in EU sizes ${(availableSizes.length > 0 ? availableSizes : [38, 39, 40]).join(", ")}`,
    });
    
    id++;
  }
  
  return products;
}

export const maryJaneProducts: MaryJaneProduct[] = generateMaryJaneProducts();

// ============== FILTER FUNCTION ==============

export function filterMaryJaneProducts(
  products: MaryJaneProduct[],
  filters: MaryJaneFilters
): MaryJaneProduct[] {
  let filtered = products.filter((product) => {
    // Search
    if (filters.search) {
      const search = filters.search.toLowerCase();
      const matches =
        product.name.toLowerCase().includes(search) ||
        product.brand.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.color.toLowerCase().includes(search);
      if (!matches) return false;
    }
    
    // Heel Types
    if (filters.heelTypes.length > 0 && !filters.heelTypes.includes(product.heelType)) {
      return false;
    }
    
    // Sole Styles
    if (filters.soleStyles.length > 0 && !filters.soleStyles.includes(product.soleStyle)) {
      return false;
    }
    
    // Strap Designs
    if (filters.strapDesigns.length > 0 && !filters.strapDesigns.includes(product.strapDesign)) {
      return false;
    }
    
    // Toe Shapes
    if (filters.toeShapes.length > 0 && !filters.toeShapes.includes(product.toeShape)) {
      return false;
    }
    
    // Occasions
    if (filters.occasions.length > 0) {
      const hasOccasion = filters.occasions.some(o => product.occasion.includes(o));
      if (!hasOccasion) return false;
    }
    
    // Materials
    if (filters.materials.length > 0 && !filters.materials.includes(product.material)) {
      return false;
    }
    
    // Audiences
    if (filters.audiences.length > 0 && !filters.audiences.includes(product.audience)) {
      return false;
    }
    
    // Collections
    if (filters.collections.length > 0) {
      const hasCollection = filters.collections.some(c => product.collection.includes(c));
      if (!hasCollection) return false;
    }
    
    // Colors
    if (filters.colors.length > 0 && !filters.colors.includes(product.color)) {
      return false;
    }
    
    // Sizes
    if (filters.sizes.length > 0) {
      const hasSize = filters.sizes.some(s => product.sizes.includes(s));
      if (!hasSize) return false;
    }
    
    // Widths
    if (filters.widths.length > 0 && !filters.widths.includes(product.width)) {
      return false;
    }
    
    // Price Range
    if (filters.priceRange) {
      if (product.price < filters.priceRange.min || product.price > filters.priceRange.max) {
        return false;
      }
    }
    
    return true;
  });
  
  // Sort
  switch (filters.sortBy) {
    case "price-low":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "bestsellers":
      filtered.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
      break;
    case "newest":
    default:
      filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
  }
  
  return filtered;
}

// ============== URL HELPERS ==============

export function filtersToSearchParams(filters: MaryJaneFilters): URLSearchParams {
  const params = new URLSearchParams();
  
  if (filters.search) params.set("q", filters.search);
  if (filters.heelTypes.length) params.set("heel", filters.heelTypes.join(","));
  if (filters.soleStyles.length) params.set("sole", filters.soleStyles.join(","));
  if (filters.strapDesigns.length) params.set("strap", filters.strapDesigns.join(","));
  if (filters.toeShapes.length) params.set("toe", filters.toeShapes.join(","));
  if (filters.occasions.length) params.set("occasion", filters.occasions.join(","));
  if (filters.materials.length) params.set("material", filters.materials.join(","));
  if (filters.audiences.length) params.set("audience", filters.audiences.join(","));
  if (filters.collections.length) params.set("collection", filters.collections.join(","));
  if (filters.colors.length) params.set("color", filters.colors.join(","));
  if (filters.sizes.length) params.set("size", filters.sizes.join(","));
  if (filters.widths.length) params.set("width", filters.widths.join(","));
  if (filters.priceRange) params.set("price", `${filters.priceRange.min}-${filters.priceRange.max}`);
  if (filters.sortBy !== "newest") params.set("sort", filters.sortBy);
  
  return params;
}

export function searchParamsToFilters(params: URLSearchParams): Partial<MaryJaneFilters> {
  const filters: Partial<MaryJaneFilters> = {};
  
  const q = params.get("q");
  if (q) filters.search = q;
  
  const heel = params.get("heel");
  if (heel) filters.heelTypes = heel.split(",") as HeelType[];
  
  const sole = params.get("sole");
  if (sole) filters.soleStyles = sole.split(",") as SoleStyle[];
  
  const strap = params.get("strap");
  if (strap) filters.strapDesigns = strap.split(",") as StrapDesign[];
  
  const toe = params.get("toe");
  if (toe) filters.toeShapes = toe.split(",") as ToeShape[];
  
  const occasion = params.get("occasion");
  if (occasion) filters.occasions = occasion.split(",") as Occasion[];
  
  const material = params.get("material");
  if (material) filters.materials = material.split(",") as Material[];
  
  const audience = params.get("audience");
  if (audience) filters.audiences = audience.split(",") as Audience[];
  
  const collection = params.get("collection");
  if (collection) filters.collections = collection.split(",") as Collection[];
  
  const color = params.get("color");
  if (color) filters.colors = color.split(",");
  
  const size = params.get("size");
  if (size) filters.sizes = size.split(",").map(Number);
  
  const width = params.get("width");
  if (width) filters.widths = width.split(",") as Width[];
  
  const price = params.get("price");
  if (price) {
    const [min, max] = price.split("-").map(Number);
    filters.priceRange = { min, max };
  }
  
  const sort = params.get("sort");
  if (sort) filters.sortBy = sort as MaryJaneFilters["sortBy"];
  
  return filters;
}
