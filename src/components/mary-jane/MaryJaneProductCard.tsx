import { Plus, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MaryJaneProduct } from "@/data/maryJaneProducts";
import { Link } from "react-router-dom";

interface MaryJaneProductCardProps {
  product: MaryJaneProduct;
  onAddToCart: (product: MaryJaneProduct) => void;
}

const MaryJaneProductCard = ({ product, onAddToCart }: MaryJaneProductCardProps) => {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card group cursor-pointer">
      <Link to={`/mary-jane-shoes/${product.slug}`}>
        <div className="relative aspect-square bg-secondary/50 rounded-t-lg overflow-hidden">
          {/* Badges */}
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1">
                NEW
              </Badge>
            )}
            {product.isSale && (
              <Badge className="bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1">
                -{discount}%
              </Badge>
            )}
            {product.isBestSeller && !product.isNew && !product.isSale && (
              <Badge className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1">
                <Star className="h-3 w-3 mr-1 fill-current" />
                BEST
              </Badge>
            )}
            {product.isLimitedEdition && (
              <Badge variant="outline" className="border-primary text-primary text-xs font-bold px-3 py-1 bg-background/80">
                LIMITED
              </Badge>
            )}
          </div>
          
          {/* Wishlist Button */}
          <button className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background">
            <Heart className="h-4 w-4 text-foreground" />
          </button>

          <img
            src={product.image}
            alt={product.name}
            className="product-image w-full h-full object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="bg-gradient-gold text-primary-foreground font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>

      <div className="p-4 space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {product.brand}
        </p>
        <Link to={`/mary-jane-shoes/${product.slug}`}>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground">{product.subcategory}</p>
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg text-foreground">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              ${product.originalPrice}
            </span>
          )}
        </div>
        
        {/* Quick Info */}
        <div className="flex flex-wrap gap-1 pt-1">
          <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
            {product.color}
          </span>
          <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
            {product.material.replace("-", " ")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MaryJaneProductCard;
