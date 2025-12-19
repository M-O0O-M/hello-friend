import { useState } from "react";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  MaryJaneFilters as FilterState,
  heelTypeOptions,
  soleStyleOptions,
  strapDesignOptions,
  toeShapeOptions,
  occasionOptions,
  materialOptions,
  audienceOptions,
  collectionOptions,
  colorOptions,
  sizeOptions,
  widthOptions,
  priceRangeOptions,
  HeelType,
  SoleStyle,
  StrapDesign,
  ToeShape,
  Occasion,
  Material,
  Audience,
  Collection,
  Width,
} from "@/data/maryJaneProducts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MaryJaneFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  productCount: number;
}

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const FilterSection = ({ title, children, defaultOpen = false }: FilterSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border-b border-border py-4">
      <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
        <span className="text-sm font-semibold text-foreground uppercase tracking-wider">{title}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-4 space-y-2">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

const MaryJaneFiltersComponent = ({ filters, onFilterChange, productCount }: MaryJaneFiltersProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const activeFilterCount = [
    filters.heelTypes.length,
    filters.soleStyles.length,
    filters.strapDesigns.length,
    filters.toeShapes.length,
    filters.occasions.length,
    filters.materials.length,
    filters.audiences.length,
    filters.collections.length,
    filters.colors.length,
    filters.sizes.length,
    filters.widths.length,
    filters.priceRange ? 1 : 0,
  ].reduce((a, b) => a + b, 0);
  
  const handleSearchChange = (value: string) => {
    onFilterChange({ ...filters, search: value });
  };
  
  const toggleArrayFilter = <T extends string | number>(
    key: keyof FilterState,
    value: T,
    currentValues: T[]
  ) => {
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];
    onFilterChange({ ...filters, [key]: newValues });
  };
  
  const clearAllFilters = () => {
    onFilterChange({
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
    });
  };
  
  const renderCheckboxGroup = <T extends string>(
    options: { value: T; label: string }[],
    selectedValues: T[],
    filterKey: keyof FilterState
  ) => (
    <div className="space-y-2">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <Checkbox
            checked={selectedValues.includes(option.value)}
            onCheckedChange={() => toggleArrayFilter(filterKey, option.value, selectedValues)}
            className="border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
          />
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
  
  const FilterContent = () => (
    <div className="space-y-0">
      <FilterSection title="Heel Height" defaultOpen>
        {renderCheckboxGroup(heelTypeOptions, filters.heelTypes, "heelTypes")}
      </FilterSection>
      
      <FilterSection title="Sole Type" defaultOpen>
        {renderCheckboxGroup(soleStyleOptions, filters.soleStyles, "soleStyles")}
      </FilterSection>
      
      <FilterSection title="Strap Design">
        {renderCheckboxGroup(strapDesignOptions, filters.strapDesigns, "strapDesigns")}
      </FilterSection>
      
      <FilterSection title="Toe Shape">
        {renderCheckboxGroup(toeShapeOptions, filters.toeShapes, "toeShapes")}
      </FilterSection>
      
      <FilterSection title="Occasion">
        {renderCheckboxGroup(occasionOptions, filters.occasions, "occasions")}
      </FilterSection>
      
      <FilterSection title="Material">
        {renderCheckboxGroup(materialOptions, filters.materials, "materials")}
      </FilterSection>
      
      <FilterSection title="Color">
        <div className="grid grid-cols-2 gap-2">
          {colorOptions.map((color) => (
            <label
              key={color}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <Checkbox
                checked={filters.colors.includes(color)}
                onCheckedChange={() => toggleArrayFilter("colors", color, filters.colors)}
                className="border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {color}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>
      
      <FilterSection title="Size">
        <div className="flex flex-wrap gap-2">
          {sizeOptions.map((size) => (
            <button
              key={size}
              onClick={() => toggleArrayFilter("sizes", size, filters.sizes)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                filters.sizes.includes(size)
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-muted"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterSection>
      
      <FilterSection title="Width">
        {renderCheckboxGroup(widthOptions, filters.widths, "widths")}
      </FilterSection>
      
      <FilterSection title="Audience">
        {renderCheckboxGroup(audienceOptions, filters.audiences, "audiences")}
      </FilterSection>
      
      <FilterSection title="Collection">
        {renderCheckboxGroup(collectionOptions, filters.collections, "collections")}
      </FilterSection>
      
      <FilterSection title="Price Range">
        <div className="space-y-2">
          {priceRangeOptions.map((range) => (
            <label
              key={range.label}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <Checkbox
                checked={filters.priceRange?.min === range.min && filters.priceRange?.max === range.max}
                onCheckedChange={() => {
                  const isSame = filters.priceRange?.min === range.min && filters.priceRange?.max === range.max;
                  onFilterChange({
                    ...filters,
                    priceRange: isSame ? null : { min: range.min, max: range.max },
                  });
                }}
                className="border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>
    </div>
  );
  
  return (
    <div className="space-y-6">
      {/* Search and Sort Row */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search Mary Jane shoes..."
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
        
        <div className="flex items-center gap-4">
          {/* Sort */}
          <Select
            value={filters.sortBy}
            onValueChange={(value) => onFilterChange({ ...filters, sortBy: value as FilterState["sortBy"] })}
          >
            <SelectTrigger className="w-[180px] bg-secondary border-border">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="bestsellers">Best Sellers</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
          
          {/* Mobile Filter Button */}
          <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden border-border">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
                {activeFilterCount > 0 && (
                  <Badge className="ml-2 bg-primary text-primary-foreground">
                    {activeFilterCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-[400px] p-0">
              <SheetHeader className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <SheetTitle className="text-foreground">Filters</SheetTitle>
                  {activeFilterCount > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-muted-foreground">
                      Clear all
                    </Button>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{productCount} products</p>
              </SheetHeader>
              <ScrollArea className="h-[calc(100vh-120px)] px-6">
                <FilterContent />
              </ScrollArea>
            </SheetContent>
          </Sheet>
          
          {/* Clear Filters */}
          {activeFilterCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-muted-foreground hover:text-foreground hidden md:flex"
            >
              Clear all
              <X className="h-4 w-4 ml-1" />
            </Button>
          )}
        </div>
      </div>
      
      {/* Active Filter Tags */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {filters.heelTypes.map((h) => (
            <Badge key={h} variant="secondary" className="bg-secondary text-foreground cursor-pointer hover:bg-muted" onClick={() => toggleArrayFilter("heelTypes", h, filters.heelTypes)}>
              {heelTypeOptions.find(o => o.value === h)?.label}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          ))}
          {filters.soleStyles.map((s) => (
            <Badge key={s} variant="secondary" className="bg-secondary text-foreground cursor-pointer hover:bg-muted" onClick={() => toggleArrayFilter("soleStyles", s, filters.soleStyles)}>
              {soleStyleOptions.find(o => o.value === s)?.label}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          ))}
          {filters.strapDesigns.map((s) => (
            <Badge key={s} variant="secondary" className="bg-secondary text-foreground cursor-pointer hover:bg-muted" onClick={() => toggleArrayFilter("strapDesigns", s, filters.strapDesigns)}>
              {strapDesignOptions.find(o => o.value === s)?.label}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          ))}
          {filters.colors.map((c) => (
            <Badge key={c} variant="secondary" className="bg-secondary text-foreground cursor-pointer hover:bg-muted" onClick={() => toggleArrayFilter("colors", c, filters.colors)}>
              {c}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          ))}
          {filters.sizes.map((s) => (
            <Badge key={s} variant="secondary" className="bg-secondary text-foreground cursor-pointer hover:bg-muted" onClick={() => toggleArrayFilter("sizes", s, filters.sizes)}>
              Size {s}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          ))}
          {filters.priceRange && (
            <Badge variant="secondary" className="bg-secondary text-foreground cursor-pointer hover:bg-muted" onClick={() => onFilterChange({ ...filters, priceRange: null })}>
              ${filters.priceRange.min} - ${filters.priceRange.max}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

export default MaryJaneFiltersComponent;
