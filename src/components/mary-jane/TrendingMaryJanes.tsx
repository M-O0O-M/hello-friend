import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { trendingCollections } from "@/data/maryJaneProducts";

const TrendingMaryJanes = () => {
  return (
    <section className="py-20 bg-background" id="trending-mary-janes">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <p className="text-primary font-medium tracking-widest uppercase text-sm">
            What's Hot
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            Trending Mary Jane Styles <span className="text-gradient">2024–2025</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the most sought-after Mary Jane styles this season. From bold platforms to delicate ballet-core designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingCollections.slice(0, 8).map((collection, index) => (
            <Link
              key={collection.id}
              to={`/mary-jane-shoes?${collection.filterKey}=${Array.isArray(collection.filterValue) ? collection.filterValue.join(",") : collection.filterValue}`}
              className="group relative overflow-hidden rounded-xl bg-card aspect-[3/4] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                  {collection.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {collection.description}
                </p>
                <Button variant="link" className="p-0 h-auto text-primary group-hover:translate-x-1 transition-transform">
                  Shop Now <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground">
            <Link to="/mary-jane-shoes">
              View All Mary Jane Shoes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingMaryJanes;
