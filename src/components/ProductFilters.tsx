import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export interface FilterState {
  search: string;
  categories: string[];
  priceRange: [number, number] | null;
}

interface ProductFiltersProps {
  categories: string[];
  onFilterChange: (filters: FilterState) => void;
  filters: FilterState;
}

const priceRanges: { label: string; range: [number, number] }[] = [
  { label: "Under $100", range: [0, 100] },
  { label: "$100 - $150", range: [100, 150] },
  { label: "$150 - $200", range: [150, 200] },
  { label: "$200+", range: [200, 999] },
];

const ProductFilters = ({ categories, onFilterChange, filters }: ProductFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearchChange = (value: string) => {
    onFilterChange({ ...filters, search: value });
  };

  const toggleCategory = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    onFilterChange({ ...filters, categories: newCategories });
  };

  const togglePriceRange = (range: [number, number]) => {
    const isSameRange =
      filters.priceRange &&
      filters.priceRange[0] === range[0] &&
      filters.priceRange[1] === range[1];
    onFilterChange({
      ...filters,
      priceRange: isSameRange ? null : range,
    });
  };

  const clearFilters = () => {
    onFilterChange({ search: "", categories: [], priceRange: null });
  };

  const hasActiveFilters =
    filters.search || filters.categories.length > 0 || filters.priceRange;

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search shoes..."
          value={filters.search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-12 h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
        />
        {filters.search && (
          <button
            onClick={() => handleSearchChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Filter Toggle Button (Mobile) */}
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="outline"
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden border-border"
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
          {hasActiveFilters && (
            <Badge className="ml-2 bg-primary text-primary-foreground">
              {(filters.categories.length || 0) + (filters.priceRange ? 1 : 0)}
            </Badge>
          )}
        </Button>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear all
            <X className="h-4 w-4 ml-1" />
          </Button>
        )}
      </div>

      {/* Filter Options */}
      <div
        className={`space-y-6 ${isExpanded ? "block" : "hidden md:block"}`}
      >
        {/* Categories */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider text-center">
            Category
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filters.categories.includes(category)
                    ? "bg-gradient-gold text-primary-foreground shadow-glow"
                    : "bg-secondary text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider text-center">
            Price
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {priceRanges.map(({ label, range }) => (
              <button
                key={label}
                onClick={() => togglePriceRange(range)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filters.priceRange &&
                  filters.priceRange[0] === range[0] &&
                  filters.priceRange[1] === range[1]
                    ? "bg-gradient-gold text-primary-foreground shadow-glow"
                    : "bg-secondary text-foreground hover:bg-muted"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
