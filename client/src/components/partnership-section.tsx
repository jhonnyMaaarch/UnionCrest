import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Access to institutional-quality deal flow",
  "Transparent reporting and communication",
  "Tax-efficient LLC partnership structure",
  "Diversified exposure across asset classes",
  "Experienced management team",
  "Aligned interests with co-investment",
];

export function PartnershipSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="partnership" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-3xl lg:text-4xl font-semibold mb-4"
          data-testid="text-partnership-title"
        >
          Partnership Opportunities
        </h2>
        <p className="text-lg text-muted-foreground font-serif mb-10 max-w-3xl mx-auto">
          Union Crest Holdings LLC offers qualified partners the opportunity to participate 
          in our real estate investment activities. As a multi-member run partnership, 
          we provide a collaborative approach to wealth building through strategic 
          property investments.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left max-w-2xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              className="flex items-start gap-3"
              data-testid={`benefit-${index}`}
            >
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          onClick={scrollToContact}
          className="px-8"
          data-testid="button-schedule-consultation"
        >
          Schedule Consultation
        </Button>
      </div>
    </section>
  );
}
