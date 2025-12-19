// Category-specific shoe images
import highHeelsImg from "@/assets/high-heels.png";
import highHeelsImg2 from "@/assets/high-heels-2.png";
import highHeelsImg3 from "@/assets/high-heels-3.png";
import pumpsImg from "@/assets/pumps.png";
import pumpsImg2 from "@/assets/pumps-2.png";
import pumpsImg3 from "@/assets/pumps-3.png";
import stilettosImg from "@/assets/stilettos.png";
import stilettosImg2 from "@/assets/stilettos-2.png";
import stilettosImg3 from "@/assets/stilettos-3.png";
import wedgesImg from "@/assets/wedges.png";
import wedgesImg2 from "@/assets/wedges-2.png";
import wedgesImg3 from "@/assets/wedges-3.png";
import platformShoesImg from "@/assets/platform-shoes.png";
import platformShoesImg2 from "@/assets/platform-shoes-2.png";
import platformShoesImg3 from "@/assets/platform-shoes-3.png";
import balletFlatsImg from "@/assets/ballet-flats.png";
import balletFlatsImg2 from "@/assets/ballet-flats-2.png";
import balletFlatsImg3 from "@/assets/ballet-flats-3.png";
import maryJanesImg from "@/assets/mary-janes.png";
import maryJanesImg2 from "@/assets/mary-janes-2.png";
import maryJanesImg3 from "@/assets/mary-janes-3.png";
import sandalsImg from "@/assets/sandals.png";
import sandalsImg2 from "@/assets/sandals-2.png";
import sandalsImg3 from "@/assets/sandals-3.png";
import flipFlopsImg from "@/assets/flip-flops.png";
import flipFlopsImg2 from "@/assets/flip-flops-2.png";
import flipFlopsImg3 from "@/assets/flip-flops-3.png";
import slidesImg from "@/assets/slides.png";
import slidesImg2 from "@/assets/slides-2.png";
import slidesImg3 from "@/assets/slides-3.png";
import gladiatorSandalsImg from "@/assets/gladiator-sandals.png";
import gladiatorSandalsImg2 from "@/assets/gladiator-sandals-2.png";
import gladiatorSandalsImg3 from "@/assets/gladiator-sandals-3.png";
import sportSandalsImg from "@/assets/sport-sandals.png";
import sportSandalsImg2 from "@/assets/sport-sandals-2.png";
import sportSandalsImg3 from "@/assets/sport-sandals-3.png";

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  gender: "women" | "men" | "unisex";
}

// Map each category to an array of images
const categoryImages: Record<string, string[]> = {
  "High Heels": [highHeelsImg, highHeelsImg2, highHeelsImg3],
  "Pumps": [pumpsImg, pumpsImg2, pumpsImg3],
  "Stilettos": [stilettosImg, stilettosImg2, stilettosImg3],
  "Wedges": [wedgesImg, wedgesImg2, wedgesImg3],
  "Platform Shoes": [platformShoesImg, platformShoesImg2, platformShoesImg3],
  "Ballet Flats": [balletFlatsImg, balletFlatsImg2, balletFlatsImg3],
  "Mary Janes": [maryJanesImg, maryJanesImg2, maryJanesImg3],
  "Sandals": [sandalsImg, sandalsImg2, sandalsImg3],
  "Flip-Flops": [flipFlopsImg, flipFlopsImg2, flipFlopsImg3],
  "Slides": [slidesImg, slidesImg2, slidesImg3],
  "Gladiator Sandals": [gladiatorSandalsImg, gladiatorSandalsImg2, gladiatorSandalsImg3],
  "Sport Sandals": [sportSandalsImg, sportSandalsImg2, sportSandalsImg3],
};

const womenBrands = [
  "STRIDE", "LuxeStep", "VelvetSole", "ChicWalk", "GlamFoot", 
  "EleganceX", "SophiaSteps", "BellaShoes", "VogueKicks", "DivaWalk",
  "PoshFeet", "ClassyStride", "RoyalSole", "GraceWalk", "PrimaSteps"
];

// 👠 Women's Fashion Shoes
const fashionShoes = [
  "High Heels", "Pumps", "Stilettos", "Wedges", "Platform Shoes",
  "Ballet Flats", "Mary Janes"
];

// 🩴 Sandals & Open Shoes
const sandalsOpenShoes = [
  "Sandals", "Flip-Flops", "Slides", "Gladiator Sandals", "Sport Sandals"
];

const womenCategories = [...fashionShoes, ...sandalsOpenShoes];

const heelNames = [
  "Midnight Glamour", "Crystal Queen", "Velvet Dream", "Starlight Pump", "Diamond Edge",
  "Ruby Elegance", "Pearl Luxe", "Sapphire Glitz", "Gold Empress", "Silver Radiance",
  "Champagne Toast", "Crimson Desire", "Noir Sophistique", "Blush Romance", "Emerald Envy"
];

const flatNames = [
  "Cloud Comfort", "Serene Steps", "Gentle Glide", "Easy Chic", "Casual Luxe",
  "Weekend Wanderer", "Office Classic", "City Stroll", "Garden Path", "Breeze Walk",
  "Soft Landing", "Cozy Day", "Simple Joy", "Everyday Elegant", "Pure Comfort"
];

const sandalNames = [
  "Summer Breeze", "Beach Goddess", "Tropical Vibes", "Sun Kissed", "Ocean Wave",
  "Paradise Found", "Island Escape", "Coastal Charm", "Sandy Shores", "Palm Oasis",
  "Sunset Glow", "Sea Mist", "Coral Dream", "Lagoon Love", "Tide Pool"
];

const sneakerNames = [
  "Street Smart", "Metro Runner", "Active Life", "Fitness First", "Sport Luxe",
  "Athleisure Queen", "Gym Goddess", "Track Star", "Marathon Ready", "Sprint Style",
  "Power Walk", "Energy Boost", "Motion Flow", "Dynamic Step", "Velocity"
];

const pumpNames = [
  "Power Move", "Executive Edge", "Boardroom Beauty", "Corner Office", "CEO Style",
  "Authority", "Confidence Walk", "Sharp Look", "Professional Plus", "Career Climb",
  "Success Step", "Ambition", "Leadership", "Influence", "Achievement"
];

const wedgeNames = [
  "Summer Heights", "Garden Party", "Brunch Beauty", "Vacation Mode", "Resort Ready",
  "Sunshine State", "Happy Hour", "Weekend Escape", "Patio Perfect", "Terrace Time",
  "Rooftop Rendezvous", "Poolside Glam", "Beach Club", "Café Chic", "Wine Country"
];

const muleNames = [
  "Effortless Chic", "Slide Style", "Easy Elegance", "Slip Into", "Quick Step",
  "Modern Minimal", "Clean Lines", "Simple Sophistication", "Streamlined", "No Fuss",
  "Grab & Go", "Instant Style", "Ready Set", "Swift Chic", "Smooth Operator"
];

const platformNames = [
  "Sky High", "Cloud Nine", "Elevated Style", "Rise Up", "Peak Fashion",
  "Altitude", "Summit Chic", "Heights of Style", "Tower Power", "Lifted Luxe",
  "Soaring Style", "Ascend", "Upward Bound", "High Society", "Top Tier"
];

const categoryNameMap: Record<string, string[]> = {
  // 👠 Women's Fashion Shoes
  "High Heels": heelNames,
  "Pumps": pumpNames,
  "Stilettos": heelNames,
  "Wedges": wedgeNames,
  "Platform Shoes": platformNames,
  "Ballet Flats": flatNames,
  "Mary Janes": flatNames,
  // 🩴 Sandals & Open Shoes
  "Sandals": sandalNames,
  "Flip-Flops": sandalNames,
  "Slides": muleNames,
  "Gladiator Sandals": sandalNames,
  "Sport Sandals": sneakerNames,
};

const colors = [
  "Black", "White", "Red", "Navy", "Beige", "Tan", "Brown", "Nude", "Blush", 
  "Burgundy", "Forest Green", "Olive", "Camel", "Cognac", "Taupe", "Silver",
  "Gold", "Rose Gold", "Champagne", "Ivory", "Cream", "Coral", "Dusty Rose",
  "Lavender", "Sage", "Terracotta", "Rust", "Mustard", "Teal", "Plum"
];

const materials = [
  "Leather", "Suede", "Patent", "Velvet", "Satin", "Canvas", "Mesh",
  "Faux Leather", "Snakeskin", "Crocodile", "Woven", "Knit", "Denim"
];

function seededRandom(seed: number): () => number {
  return function() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

function generateProducts(): Product[] {
  const products: Product[] = [];
  const random = seededRandom(42);
  
  let id = 1;
  
  for (let i = 0; i < 1050; i++) {
    const category = womenCategories[Math.floor(random() * womenCategories.length)];
    const brand = womenBrands[Math.floor(random() * womenBrands.length)];
    const names = categoryNameMap[category] || heelNames;
    const baseName = names[Math.floor(random() * names.length)];
    const color = colors[Math.floor(random() * colors.length)];
    const material = materials[Math.floor(random() * materials.length)];
    
    const basePrice = Math.floor(random() * 250) + 50;
    const isSale = random() < 0.25;
    const isNew = random() < 0.15;
    
    const originalPrice = isSale ? Math.floor(basePrice * (1.2 + random() * 0.4)) : undefined;
    
    const nameVariants = [
      `${baseName} ${color}`,
      `${color} ${baseName}`,
      `${material} ${baseName}`,
      `${baseName} ${material}`,
      `${color} ${material} ${baseName}`,
    ];
    
    const name = nameVariants[Math.floor(random() * nameVariants.length)];
    
    // Get array of images for this category and pick one randomly
    const images = categoryImages[category] || [highHeelsImg];
    const image = images[Math.floor(random() * images.length)];
    
    products.push({
      id: id++,
      name,
      brand,
      price: basePrice,
      originalPrice,
      image,
      category,
      isNew: isNew && !isSale,
      isSale,
      gender: "women",
    });
  }
  
  return products;
}

export const womenProducts: Product[] = generateProducts();

export const allProducts = womenProducts;
