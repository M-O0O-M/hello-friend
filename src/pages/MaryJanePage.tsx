import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cart, { CartItem } from "@/components/Cart";
import MaryJaneFiltersComponent from "@/components/mary-jane/MaryJaneFilters";
import MaryJaneFiltersSidebar from "@/components/mary-jane/MaryJaneFiltersSidebar";
import MaryJaneProductCard from "@/components/mary-jane/MaryJaneProductCard";
import TrendingMaryJanes from "@/components/mary-jane/TrendingMaryJanes";
import {
  maryJaneProducts,
  MaryJaneProduct,
  MaryJaneFilters,
  initialFilters,
  filterMaryJaneProducts,
  filtersToSearchParams,
  searchParamsToFilters,
} from "@/data/maryJaneProducts";

const PRODUCTS_PER_PAGE = 24;

const MaryJanePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { toast } = useToast();

  // Initialize filters from URL
  const [filters, setFilters] = useState<MaryJaneFilters>(() => ({
    ...initialFilters,
    ...searchParamsToFilters(searchParams),
  }));

  // Sync filters to URL
  useEffect(() => {
    const params = filtersToSearchParams(filters);
    setSearchParams(params, { replace: true });
  }, [filters, setSearchParams]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const filteredProducts = useMemo(
    () => filterMaryJaneProducts(maryJaneProducts, filters),
    [filters]
  );

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  const handleAddToCart = (product: MaryJaneProduct) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const renderPagination = () => {
    if (totalPages <= 1) return null;
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return (
      <div className="flex items-center justify-center gap-2 mt-12">
        <Button variant="outline" size="icon" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="border-border">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {pages.map((page, index) =>
          typeof page === "number" ? (
            <Button key={index} variant={currentPage === page ? "default" : "outline"} size="icon" onClick={() => handlePageChange(page)} className={currentPage === page ? "bg-gradient-gold text-primary-foreground" : "border-border"}>
              {page}
            </Button>
          ) : (
            <span key={index} className="px-2 text-muted-foreground">...</span>
          )
        )}
        <Button variant="outline" size="icon" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="border-border">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-4">
            Mary Jane <span className="text-gradient">Shoes</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Timeless elegance meets modern style. Explore our complete collection of Mary Jane shoes for every occasion.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12" id="products">
        <div className="container mx-auto px-6">
          <div className="flex gap-8">
            <MaryJaneFiltersSidebar filters={filters} onFilterChange={setFilters} productCount={filteredProducts.length} />
            
            <div className="flex-1">
              <MaryJaneFiltersComponent filters={filters} onFilterChange={setFilters} productCount={filteredProducts.length} />
              
              <div className="mt-6 text-center lg:text-left">
                <p className="text-muted-foreground">
                  Showing {startIndex + 1}-{Math.min(startIndex + PRODUCTS_PER_PAGE, filteredProducts.length)} of{" "}
                  <span className="text-primary font-semibold">{filteredProducts.length}</span> products
                </p>
              </div>

              {paginatedProducts.length === 0 ? (
                <div className="text-center py-16 animate-fade-in">
                  <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No shoes found</h3>
                  <p className="text-muted-foreground">Try adjusting your filters</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
                    {paginatedProducts.map((product, index) => (
                      <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.02}s` }}>
                        <MaryJaneProductCard product={product} onAddToCart={handleAddToCart} />
                      </div>
                    ))}
                  </div>
                  {renderPagination()}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <TrendingMaryJanes />

      <Footer />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} items={cartItems} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} />
    </div>
  );
};

export default MaryJanePage;
