import { Plus } from "lucide-react";
import { Button } from "./ui/button";

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
  gender?: "women" | "men" | "unisex";
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0;

  return (
    <div className="product-card group cursor-pointer">
      <div className="relative aspect-square bg-secondary/50 rounded-t-lg overflow-hidden">
        {product.isNew && (
          <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
            NEW
          </span>
        )}
        {product.isSale && (
          <span className="absolute top-3 left-3 z-10 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full">
            -{discount}%
          </span>
        )}
        
        <img
          src={product.image}
          alt={product.name}
          className="product-image w-full h-full object-cover"
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            onClick={(e) => {
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
      
      <div className="p-4 space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {product.brand}
        </p>
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground">{product.category}</p>
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
      </div>
    </div>
  );
};

export default ProductCard;
