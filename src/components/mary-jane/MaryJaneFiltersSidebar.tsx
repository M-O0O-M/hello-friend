import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
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
} from "@/data/maryJaneProducts";

interface MaryJaneFiltersSidebarProps {
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

const MaryJaneFiltersSidebar = ({ filters, onFilterChange, productCount }: MaryJaneFiltersSidebarProps) => {
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
  
  return (
    <div className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-24">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-xl text-foreground">Filters</h3>
          {activeFilterCount > 0 && (
            <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-muted-foreground text-xs">
              Clear all
            </Button>
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-4">{productCount} products</p>
        
        <ScrollArea className="h-[calc(100vh-200px)] pr-4">
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
              {colorOptions.slice(0, 12).map((color) => (
                <label
                  key={color}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <Checkbox
                    checked={filters.colors.includes(color)}
                    onCheckedChange={() => toggleArrayFilter("colors", color, filters.colors)}
                    className="border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
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
                  className={`w-10 h-10 rounded-md text-sm font-medium transition-all ${
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
        </ScrollArea>
      </div>
    </div>
  );
};

export default MaryJaneFiltersSidebar;
