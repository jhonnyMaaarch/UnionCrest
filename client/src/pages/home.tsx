import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ValueProposition } from "@/components/value-proposition";
import { InvestmentFocus } from "@/components/investment-focus";
import { StatsSection } from "@/components/stats-section";
import { PortfolioPreview } from "@/components/portfolio-preview";
import { PartnershipSection } from "@/components/partnership-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ValueProposition />
        <InvestmentFocus />
        <StatsSection />
        <PortfolioPreview />
        <PartnershipSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
