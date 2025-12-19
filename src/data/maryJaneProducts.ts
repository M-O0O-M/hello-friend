// Mary Jane specific images - 54 unique styles
import mjBlackPatentBlock from "@/assets/mary-jane-styles/mj-black-patent-block.png";
import mjRedSuedeLow from "@/assets/mary-jane-styles/mj-red-suede-low.png";
import mjNudeFlatDouble from "@/assets/mary-jane-styles/mj-nude-flat-double.png";
import mjWhitePlatform from "@/assets/mary-jane-styles/mj-white-platform.png";
import mjPinkBallet from "@/assets/mary-jane-styles/mj-pink-ballet.png";
import mjSilverPointed from "@/assets/mary-jane-styles/mj-silver-pointed.png";
import mjNavyVelvet from "@/assets/mary-jane-styles/mj-navy-velvet.png";
import mjBurgundyHigh from "@/assets/mary-jane-styles/mj-burgundy-high.png";
import mjGoldPlatform from "@/assets/mary-jane-styles/mj-gold-platform.png";
import mjCreamBridal from "@/assets/mary-jane-styles/mj-cream-bridal.png";
import mjGreenLug from "@/assets/mary-jane-styles/mj-green-lug.png";
import mjBrownLoafer from "@/assets/mary-jane-styles/mj-brown-loafer.png";
import mjBlushStiletto from "@/assets/mary-jane-styles/mj-blush-stiletto.png";
import mjOliveTstrap from "@/assets/mary-jane-styles/mj-olive-tstrap.png";
import mjCoralBlock from "@/assets/mary-jane-styles/mj-coral-block.png";
import mjLavenderPlatform from "@/assets/mary-jane-styles/mj-lavender-platform.png";
import mjTaupeWedge from "@/assets/mary-jane-styles/mj-taupe-wedge.png";
import mjRosegoldAnkle from "@/assets/mary-jane-styles/mj-rosegold-ankle.png";
import mjChampagneKitten from "@/assets/mary-jane-styles/mj-champagne-kitten.png";
import mjBlackChunky from "@/assets/mary-jane-styles/mj-black-chunky.png";
import mjCherryPump from "@/assets/mary-jane-styles/mj-cherry-pump.png";
import mjTanOxford from "@/assets/mary-jane-styles/mj-tan-oxford.png";
import mjWhiteSchool from "@/assets/mary-jane-styles/mj-white-school.png";
import mjHotpinkPlatform from "@/assets/mary-jane-styles/mj-hotpink-platform.png";
import mjBronzeBlock from "@/assets/mary-jane-styles/mj-bronze-block.png";
import mjMidnightVelvet from "@/assets/mary-jane-styles/mj-midnight-velvet.png";
import mjPearlBridal from "@/assets/mary-jane-styles/mj-pearl-bridal.png";
import mjEmeraldSatin from "@/assets/mary-jane-styles/mj-emerald-satin.png";
import mjDustyroseBow from "@/assets/mary-jane-styles/mj-dustyrose-bow.png";
import mjCaramelWood from "@/assets/mary-jane-styles/mj-caramel-wood.png";
import mjCobaltPump from "@/assets/mary-jane-styles/mj-cobalt-pump.png";
import mjMintFlat from "@/assets/mary-jane-styles/mj-mint-flat.png";
import mjPlumVelvet from "@/assets/mary-jane-styles/mj-plum-velvet.png";
import mjPeachSatin from "@/assets/mary-jane-styles/mj-peach-satin.png";
import mjCharcoalPlatform from "@/assets/mary-jane-styles/mj-charcoal-platform.png";
import mjIvoryElegant from "@/assets/mary-jane-styles/mj-ivory-elegant.png";
import mjTealChunky from "@/assets/mary-jane-styles/mj-teal-chunky.png";
import mjMauvePointed from "@/assets/mary-jane-styles/mj-mauve-pointed.png";
import mjOxbloodOxford from "@/assets/mary-jane-styles/mj-oxblood-oxford.png";
import mjLilacPlatform from "@/assets/mary-jane-styles/mj-lilac-platform.png";
import mjMustardBlock from "@/assets/mary-jane-styles/mj-mustard-block.png";
import mjCopperAnkle from "@/assets/mary-jane-styles/mj-copper-ankle.png";
import mjSageDouble from "@/assets/mary-jane-styles/mj-sage-double.png";
import mjTerracottaWood from "@/assets/mary-jane-styles/mj-terracotta-wood.png";
import mjBabyblueKitten from "@/assets/mary-jane-styles/mj-babyblue-kitten.png";
import mjChocolateWedge from "@/assets/mary-jane-styles/mj-chocolate-wedge.png";
import mjRaspberrySquare from "@/assets/mary-jane-styles/mj-raspberry-square.png";
import mjSlateLug from "@/assets/mary-jane-styles/mj-slate-lug.png";
import mjApricotBow from "@/assets/mary-jane-styles/mj-apricot-bow.png";
import mjGunmetalPump from "@/assets/mary-jane-styles/mj-gunmetal-pump.png";
import mjSeafoamLow from "@/assets/mary-jane-styles/mj-seafoam-low.png";
import mjMaroonThick from "@/assets/mary-jane-styles/mj-maroon-thick.png";
import mjSandEspadrille from "@/assets/mary-jane-styles/mj-sand-espadrille.png";

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
    image: mjWhitePlatform,
  },
  {
    id: "chunky",
    title: "Chunky / Lug-Sole Mary Janes",
    description: "Combat-style Mary Janes with thick rubber soles. Edgy, durable, and on-trend.",
    slug: "chunky-mary-janes",
    filterKey: "soleStyles",
    filterValue: "chunky-lug",
    image: mjBlackChunky,
  },
  {
    id: "square-toe",
    title: "Square-Toe Mary Janes",
    description: "Minimal and modern. The square toe silhouette brings a contemporary edge to classic design.",
    slug: "square-toe-mary-janes",
    filterKey: "toeShapes",
    filterValue: "square",
    image: mjRaspberrySquare,
  },
  {
    id: "double-strap",
    title: "Double-Strap Mary Janes",
    description: "Vintage-inspired elegance with dual straps for extra charm and secure fit.",
    slug: "double-strap-mary-janes",
    filterKey: "strapDesigns",
    filterValue: "double",
    image: mjSageDouble,
  },
  {
    id: "ballet-core",
    title: "Ballet-Core Mary Janes",
    description: "Soft leather in pastel colors. Embrace the feminine ballet aesthetic that's taking over fashion.",
    slug: "ballet-core-mary-janes",
    filterKey: "heelTypes",
    filterValue: "flat",
    image: mjPinkBallet,
  },
  {
    id: "patent-leather",
    title: "Patent Leather Mary Janes",
    description: "Glossy finish that catches the light. Perfect for making a polished statement.",
    slug: "patent-leather-mary-janes",
    filterKey: "materials",
    filterValue: "patent-leather",
    image: mjBlackPatentBlock,
  },
  {
    id: "metallic",
    title: "Metallic & Two-Tone Mary Janes",
    description: "Silver, gold, and contrast designs for show-stopping looks.",
    slug: "metallic-mary-janes",
    filterKey: "colors",
    filterValue: ["Silver", "Gold", "Rose Gold"],
    image: mjGoldPlatform,
  },
  {
    id: "comfort",
    title: "Comfort Mary Janes",
    description: "Cushioned soles and arch support for all-day wear. Style meets comfort.",
    slug: "comfort-mary-janes",
    filterKey: "audiences",
    filterValue: "comfort",
    image: mjNudeFlatDouble,
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

// ============== 54 UNIQUE IMAGE ARRAY ==============

const allMaryJaneImages: string[] = [
  mjBlackPatentBlock,
  mjRedSuedeLow,
  mjNudeFlatDouble,
  mjWhitePlatform,
  mjPinkBallet,
  mjSilverPointed,
  mjNavyVelvet,
  mjBurgundyHigh,
  mjGoldPlatform,
  mjCreamBridal,
  mjGreenLug,
  mjBrownLoafer,
  mjBlushStiletto,
  mjOliveTstrap,
  mjCoralBlock,
  mjLavenderPlatform,
  mjTaupeWedge,
  mjRosegoldAnkle,
  mjChampagneKitten,
  mjBlackChunky,
  mjCherryPump,
  mjTanOxford,
  mjWhiteSchool,
  mjHotpinkPlatform,
  mjBronzeBlock,
  mjMidnightVelvet,
  mjPearlBridal,
  mjEmeraldSatin,
  mjDustyroseBow,
  mjCaramelWood,
  mjCobaltPump,
  mjMintFlat,
  mjPlumVelvet,
  mjPeachSatin,
  mjCharcoalPlatform,
  mjIvoryElegant,
  mjTealChunky,
  mjMauvePointed,
  mjOxbloodOxford,
  mjLilacPlatform,
  mjMustardBlock,
  mjCopperAnkle,
  mjSageDouble,
  mjTerracottaWood,
  mjBabyblueKitten,
  mjChocolateWedge,
  mjRaspberrySquare,
  mjSlateLug,
  mjApricotBow,
  mjGunmetalPump,
  mjSeafoamLow,
  mjMaroonThick,
  mjSandEspadrille,
];

// Style-specific image mapping for more variety
const styleImages: Record<string, string[]> = {
  // Heel types
  "flat": [mjNudeFlatDouble, mjPinkBallet, mjMintFlat, mjApricotBow, mjDustyroseBow, mjSageDouble, mjOliveTstrap],
  "low-heel": [mjRedSuedeLow, mjNavyVelvet, mjChampagneKitten, mjBabyblueKitten, mjSeafoamLow, mjPeachSatin],
  "block-heel": [mjBlackPatentBlock, mjCoralBlock, mjBronzeBlock, mjMustardBlock, mjPlumVelvet, mjIvoryElegant, mjTealChunky, mjMidnightVelvet],
  "high-heel": [mjBurgundyHigh, mjBlushStiletto, mjCherryPump, mjGunmetalPump, mjCobaltPump, mjMauvePointed, mjSilverPointed, mjCopperAnkle, mjRosegoldAnkle],
  
  // Sole styles
  "platform": [mjWhitePlatform, mjGoldPlatform, mjLavenderPlatform, mjHotpinkPlatform, mjCharcoalPlatform, mjLilacPlatform],
  "chunky-lug": [mjBlackChunky, mjGreenLug, mjSlateLug, mjMaroonThick, mjTerracottaWood, mjWhiteSchool],
  "classic": [mjBlackPatentBlock, mjRedSuedeLow, mjNudeFlatDouble, mjNavyVelvet, mjChampagneKitten],
  
  // Toe shapes
  "pointed": [mjSilverPointed, mjMauvePointed, mjGunmetalPump, mjCherryPump, mjBurgundyHigh],
  "square": [mjRaspberrySquare, mjMidnightVelvet, mjPlumVelvet],
  "round": [mjPinkBallet, mjNudeFlatDouble, mjCoralBlock, mjMintFlat],
  
  // Materials
  "patent-leather": [mjBlackPatentBlock, mjCherryPump, mjLavenderPlatform, mjHotpinkPlatform, mjCobaltPump],
  "suede": [mjRedSuedeLow, mjNavyVelvet, mjPlumVelvet, mjChocolateWedge, mjOliveTstrap],
  "leather": [mjBrownLoafer, mjTanOxford, mjOxbloodOxford, mjCaramelWood, mjTealChunky, mjGreenLug],
  "satin": [mjPinkBallet, mjCreamBridal, mjPearlBridal, mjEmeraldSatin, mjPeachSatin, mjApricotBow],
  
  // Colors
  "metallic": [mjSilverPointed, mjGoldPlatform, mjRosegoldAnkle, mjBronzeBlock, mjCopperAnkle, mjGunmetalPump],
  "bridal": [mjCreamBridal, mjPearlBridal, mjIvoryElegant, mjChampagneKitten],
  "neutral": [mjNudeFlatDouble, mjTaupeWedge, mjSandEspadrille, mjBrownLoafer, mjCaramelWood],
  
  // Default fallback
  "default": allMaryJaneImages,
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
    
    // Select image based on multiple criteria for maximum variety
    // Use product ID to ensure unique distribution
    const imageIndex = id % allMaryJaneImages.length;
    const mainImage = allMaryJaneImages[imageIndex];
    
    // Get style-specific images for gallery
    const heelImages = styleImages[heelType] || [];
    const soleImages = styleImages[soleStyle] || [];
    const materialImages = styleImages[material] || [];
    
    // Create unique image set for this product
    const uniqueImages = new Set<string>([mainImage]);
    [...heelImages, ...soleImages, ...materialImages].forEach(img => {
      if (uniqueImages.size < 4) uniqueImages.add(img);
    });
    // Fill remaining slots with random images
    while (uniqueImages.size < 4) {
      const randImg = allMaryJaneImages[Math.floor(random() * allMaryJaneImages.length)];
      uniqueImages.add(randImg);
    }
    const images = Array.from(uniqueImages);
    
    // Available sizes - ensure good distribution of all sizes
    const availableSizes = sizeOptions.filter(() => random() > 0.15);
    
    products.push({
      id: id,
      name,
      brand,
      price: basePrice,
      originalPrice,
      image: mainImage,
      images, // Multiple images for product detail
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
      const hasOccasion = filters.occasions.some((occ) => product.occasion.includes(occ));
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
      const hasCollection = filters.collections.some((col) => product.collection.includes(col));
      if (!hasCollection) return false;
    }
    
    // Colors
    if (filters.colors.length > 0 && !filters.colors.includes(product.color)) {
      return false;
    }
    
    // Sizes
    if (filters.sizes.length > 0) {
      const hasSize = filters.sizes.some((size) => product.sizes.includes(size));
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
  
  // Sorting
  switch (filters.sortBy) {
    case "price-low":
      filtered = filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filtered = filtered.sort((a, b) => b.price - a.price);
      break;
    case "bestsellers":
      filtered = filtered.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
      break;
    case "newest":
    default:
      filtered = filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
  }
  
  return filtered;
}

// ============== URL PARAMS HELPERS ==============

export function filtersToSearchParams(filters: MaryJaneFilters): URLSearchParams {
  const params = new URLSearchParams();
  
  if (filters.search) params.set("search", filters.search);
  if (filters.heelTypes.length) params.set("heelTypes", filters.heelTypes.join(","));
  if (filters.soleStyles.length) params.set("soleStyles", filters.soleStyles.join(","));
  if (filters.strapDesigns.length) params.set("strapDesigns", filters.strapDesigns.join(","));
  if (filters.toeShapes.length) params.set("toeShapes", filters.toeShapes.join(","));
  if (filters.occasions.length) params.set("occasions", filters.occasions.join(","));
  if (filters.materials.length) params.set("materials", filters.materials.join(","));
  if (filters.audiences.length) params.set("audiences", filters.audiences.join(","));
  if (filters.collections.length) params.set("collections", filters.collections.join(","));
  if (filters.colors.length) params.set("colors", filters.colors.join(","));
  if (filters.sizes.length) params.set("size", filters.sizes.join(","));
  if (filters.widths.length) params.set("widths", filters.widths.join(","));
  if (filters.priceRange) params.set("price", `${filters.priceRange.min}-${filters.priceRange.max}`);
  if (filters.sortBy !== "newest") params.set("sortBy", filters.sortBy);
  
  return params;
}

export function searchParamsToFilters(params: URLSearchParams): Partial<MaryJaneFilters> {
  const filters: Partial<MaryJaneFilters> = {};
  
  const search = params.get("search");
  if (search) filters.search = search;
  
  const heelTypes = params.get("heelTypes");
  if (heelTypes) filters.heelTypes = heelTypes.split(",") as HeelType[];
  
  const soleStyles = params.get("soleStyles");
  if (soleStyles) filters.soleStyles = soleStyles.split(",") as SoleStyle[];
  
  const strapDesigns = params.get("strapDesigns");
  if (strapDesigns) filters.strapDesigns = strapDesigns.split(",") as StrapDesign[];
  
  const toeShapes = params.get("toeShapes");
  if (toeShapes) filters.toeShapes = toeShapes.split(",") as ToeShape[];
  
  const occasions = params.get("occasions");
  if (occasions) filters.occasions = occasions.split(",") as Occasion[];
  
  const materials = params.get("materials");
  if (materials) filters.materials = materials.split(",") as Material[];
  
  const audiences = params.get("audiences");
  if (audiences) filters.audiences = audiences.split(",") as Audience[];
  
  const collections = params.get("collections");
  if (collections) filters.collections = collections.split(",") as Collection[];
  
  const colors = params.get("colors");
  if (colors) filters.colors = colors.split(",");
  
  const sizes = params.get("size");
  if (sizes) filters.sizes = sizes.split(",").map(Number);
  
  const widths = params.get("widths");
  if (widths) filters.widths = widths.split(",") as Width[];
  
  const price = params.get("price");
  if (price) {
    const [min, max] = price.split("-").map(Number);
    if (!isNaN(min) && !isNaN(max)) filters.priceRange = { min, max };
  }
  
  const sortBy = params.get("sortBy");
  if (sortBy) filters.sortBy = sortBy as MaryJaneFilters["sortBy"];
  
  return filters;
}
