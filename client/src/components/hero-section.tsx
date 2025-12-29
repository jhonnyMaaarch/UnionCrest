import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Globe, Briefcase } from "lucide-react";
import heroImage from "@assets/stock_images/modern_city_skyline__a27eaa34.jpg";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
            data-testid="text-hero-title"
          >
            Strategic Real Estate
            <br />
            <span className="text-white/90">Investment & Development</span>
          </h1>
          
          <p
            className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto font-serif leading-relaxed"
            data-testid="text-hero-subtitle"
          >
            Acquiring, developing, and managing exceptional properties through 
            traditional channels and specialized opportunities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span>Texas-Based</span>
            </div>
            <span className="hidden sm:inline text-white/40">|</span>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>International Reach</span>
            </div>
            <span className="hidden sm:inline text-white/40">|</span>
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span>Multi-Asset Portfolio</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#portfolio")}
              className="px-8"
              data-testid="button-view-portfolio"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#partnership")}
              className="px-8 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
              data-testid="button-partner-with-us"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
