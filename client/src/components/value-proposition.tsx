import { Card, CardContent } from "@/components/ui/card";
import { Search, Hammer, TrendingUp } from "lucide-react";

const propositions = [
  {
    icon: Search,
    title: "Acquisition Excellence",
    description:
      "Expertise in sourcing properties through government auctions, distressed sales, and off-market opportunities. We identify undervalued assets with significant upside potential.",
  },
  {
    icon: Hammer,
    title: "Development Mastery",
    description:
      "Comprehensive rehabilitation, improvement, and repositioning strategies that maximize property value. From renovation to ground-up development.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Disposition",
    description:
      "Optimized exit strategies through traditional and specialized channels. We time dispositions to maximize returns for our partners and stakeholders.",
  },
];

export function ValueProposition() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-3xl lg:text-4xl font-semibold mb-4"
            data-testid="text-value-title"
          >
            Our Approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif">
            A disciplined, full-cycle approach to real estate investment that 
            delivers consistent returns across market conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {propositions.map((prop, index) => (
            <Card
              key={prop.title}
              className="group transition-all duration-300 hover:shadow-lg"
              data-testid={`card-value-${index}`}
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <prop.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{prop.title}</h3>
                <p className="text-muted-foreground font-serif leading-relaxed">
                  {prop.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
