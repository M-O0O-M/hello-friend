import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilters, { FilterState } from "./ProductFilters";
import { Package, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Product } from "@/data/products";

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const PRODUCTS_PER_PAGE = 24;

const ProductGrid = ({ products, onAddToCart }: ProductGridProps) => {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    categories: [],
    priceRange: null,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => {
    const cats = [...new Set(products.map((p) => p.category))];
    return cats.sort();
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch =
          product.name.toLowerCase().includes(searchLower) ||
          product.brand.toLowerCase().includes(searchLower) ||
          product.category.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.categories.length > 0) {
        if (!filters.categories.includes(product.category)) return false;
      }

      // Price filter
      if (filters.priceRange) {
        const [min, max] = filters.priceRange;
        if (product.price < min || product.price > max) return false;
      }

      return true;
    });
  }, [products, filters]);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [filters]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      
      if (currentPage > 3) pages.push('...');
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) pages.push(i);
      
      if (currentPage < totalPages - 2) pages.push('...');
      
      pages.push(totalPages);
    }

    return (
      <div className="flex items-center justify-center gap-2 mt-12">
        <Button
          variant="outline"
          size="icon"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="border-border"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {pages.map((page, index) => (
          typeof page === 'number' ? (
            <Button
              key={index}
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? "bg-gradient-gold text-primary-foreground" : "border-border"}
            >
              {page}
            </Button>
          ) : (
            <span key={index} className="px-2 text-muted-foreground">...</span>
          )
        ))}

        <Button
          variant="outline"
          size="icon"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="border-border"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    );
  };

  return (
    <section className="py-20 bg-background" id="products">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <p className="text-primary font-medium tracking-widest uppercase text-sm">
            Women's Collection
          </p>
          <h2 className="font-display text-5xl md:text-6xl">
            1000+ <span className="text-gradient">STYLES</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Discover our extensive collection of women's footwear. From elegant heels to comfy sneakers.
          </p>
        </div>

        <div className="mb-12">
          <ProductFilters
            categories={categories}
            filters={filters}
            onFilterChange={setFilters}
          />
        </div>

        <div className="text-center mb-6">
          <p className="text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(startIndex + PRODUCTS_PER_PAGE, filteredProducts.length)} of{" "}
            <span className="text-primary font-semibold">{filteredProducts.length}</span> products
          </p>
        </div>

        {paginatedProducts.length === 0 ? (
          <div className="text-center py-16 animate-fade-in">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No shoes found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search term</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.02}s` }}
                >
                  <ProductCard product={product} onAddToCart={onAddToCart} />
                </div>
              ))}
            </div>
            {renderPagination()}
          </>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
