import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Heart, Share2, Truck, RotateCcw, Shield, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cart, { CartItem } from "@/components/Cart";
import MaryJaneProductCard from "@/components/mary-jane/MaryJaneProductCard";
import {
  maryJaneProducts,
  MaryJaneProduct,
  heelTypeOptions,
  soleStyleOptions,
  strapDesignOptions,
  toeShapeOptions,
  materialOptions,
} from "@/data/maryJaneProducts";

const MaryJaneProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const product = useMemo(() => {
    // Try to find by exact slug match first
    let found = maryJaneProducts.find((p) => p.slug === slug);
    if (found) return found;
    
    // If not found, try to extract ID from the end of the slug (format: name-id)
    const idMatch = slug?.match(/-(\d+)$/);
    if (idMatch) {
      const id = parseInt(idMatch[1], 10);
      found = maryJaneProducts.find((p) => p.id === id);
    }
    return found;
  }, [slug]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return maryJaneProducts
      .filter(
        (p) =>
          p.id !== product.id &&
          (p.heelType === product.heelType || p.color === product.color)
      )
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display mb-4">Product Not Found</h1>
          <Link to="/mary-jane-shoes">
            <Button>Back to Collection</Button>
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images || [product.image];

  const handleAddToCart = (productToAdd: MaryJaneProduct = product) => {
    if (!selectedSize && productToAdd === product) {
      toast({
        title: "Please select a size",
        description: "Choose your size before adding to cart.",
        variant: "destructive",
      });
      return;
    }

    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === productToAdd.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...productToAdd, quantity }];
    });
    toast({
      title: "Added to cart",
      description: `${productToAdd.name} has been added to your cart.`,
    });
  };

  const handleUpdateQuantity = (id: number, qty: number) => {
    if (qty === 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const getLabel = (
    options: { value: string; label: string }[],
    value: string
  ) => options.find((o) => o.value === value)?.label || value;

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              to="/mary-jane-shoes"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Mary Jane Shoes
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-secondary/50 rounded-2xl overflow-hidden relative group">
                <img
                  src={images[selectedImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.isNew && (
                  <Badge className="absolute top-4 left-4 bg-gradient-gold text-primary-foreground">
                    NEW
                  </Badge>
                )}
                {product.isSale && (
                  <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                    SALE
                  </Badge>
                )}
                {product.isLimitedEdition && (
                  <Badge className="absolute top-12 left-4 bg-primary text-primary-foreground">
                    LIMITED
                  </Badge>
                )}
              </div>

              {/* Thumbnail Images */}
              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImageIndex === index
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  {product.brand}
                </p>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-gradient">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                  {product.originalPrice && (
                    <Badge variant="outline" className="text-destructive border-destructive">
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      % OFF
                    </Badge>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Product Details */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-border">
                <div>
                  <span className="text-sm text-muted-foreground">Heel Type</span>
                  <p className="font-medium">
                    {getLabel(heelTypeOptions, product.heelType)}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Sole Style</span>
                  <p className="font-medium">
                    {getLabel(soleStyleOptions, product.soleStyle)}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Strap Design</span>
                  <p className="font-medium">
                    {getLabel(strapDesignOptions, product.strapDesign)}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Toe Shape</span>
                  <p className="font-medium">
                    {getLabel(toeShapeOptions, product.toeShape)}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Material</span>
                  <p className="font-medium">
                    {getLabel(materialOptions, product.material)}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Color</span>
                  <p className="font-medium">{product.color}</p>
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium">Select Size (EU)</span>
                  <button className="text-sm text-primary hover:underline">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg border-2 font-medium transition-all ${
                        selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-r-none"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="rounded-l-none"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  className="flex-1 bg-gradient-gold text-primary-foreground font-semibold h-12 text-lg hover:opacity-90 transition-opacity"
                  onClick={() => handleAddToCart()}
                >
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Shipping Info */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-sm">
                  <Truck className="h-5 w-5 text-primary" />
                  <span>Free shipping on orders over $150</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <RotateCcw className="h-5 w-5 text-primary" />
                  <span>30-day free returns</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>2-year warranty included</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full Description */}
          {product.fullDescription && (
            <div className="mt-16 max-w-3xl">
              <h2 className="font-display text-2xl mb-6">Product Details</h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                {product.fullDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-3xl mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <MaryJaneProductCard
                  key={p.id}
                  product={p}
                  onAddToCart={() => handleAddToCart(p)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default MaryJaneProductDetail;