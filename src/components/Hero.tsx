import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface HeroProps {
  heroImage: string;
}

const Hero = ({ heroImage }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in">
          <div className="space-y-4">
              <p className="text-primary font-medium tracking-widest uppercase text-sm">
                Women's Collection 2024
              </p>
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none">
                WALK IN
                <span className="block text-gradient">CONFIDENCE</span>
              </h1>
            </div>
            
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
              Explore 1000+ styles of women's shoes. From elegant heels to comfy sneakers, 
              find your perfect pair.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-gold text-primary-foreground font-semibold px-8 hover:opacity-90 transition-opacity">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
                View Collection
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <img
              src={heroImage}
              alt="Featured premium sneaker"
              className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl transform hover:rotate-3 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
