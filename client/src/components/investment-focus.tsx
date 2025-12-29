import { Home, Building, Mountain, Globe } from "lucide-react";
import focusImage from "@assets/stock_images/commercial_real_esta_1bdec21d.jpg";

const focusAreas = [
  {
    icon: Home,
    title: "Residential Properties",
    description: "Single-family homes, multi-family units, and residential developments in growing markets.",
  },
  {
    icon: Building,
    title: "Commercial Real Estate",
    description: "Office buildings, retail centers, and mixed-use developments with stable cash flows.",
  },
  {
    icon: Mountain,
    title: "Raw Land Development",
    description: "Strategic land acquisitions for future development or immediate value creation.",
  },
  {
    icon: Globe,
    title: "International Opportunities",
    description: "Select international markets with favorable growth dynamics and investment climates.",
  },
];

export function InvestmentFocus() {
  return (
    <section id="focus" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={focusImage}
                alt="Commercial real estate property"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-lg -z-10" />
          </div>

          <div className="order-1 lg:order-2">
            <h2
              className="text-3xl lg:text-4xl font-semibold mb-4"
              data-testid="text-focus-title"
            >
              Investment Focus Areas
            </h2>
            <p className="text-lg text-muted-foreground font-serif mb-10">
              Diversified portfolio strategy across multiple asset classes and geographies.
            </p>

            <div className="space-y-6">
              {focusAreas.map((area, index) => (
                <div
                  key={area.title}
                  className="flex gap-4 group"
                  data-testid={`focus-area-${index}`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <area.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 pb-6 border-b border-border last:border-0 last:pb-0">
                    <h3 className="font-semibold mb-1">{area.title}</h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
