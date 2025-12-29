import { Building2 } from "lucide-react";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Union Crest Holdings</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Strategic real estate investment and property development. 
              A Texas-based multi-member LLC with international reach.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-foreground transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#focus" className="hover:text-foreground transition-colors">
                  Focus Areas
                </a>
              </li>
              <li>
                <a href="#partnership" className="hover:text-foreground transition-colors">
                  Partnership
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Investment Focus</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Residential Properties</li>
              <li>Commercial Real Estate</li>
              <li>Raw Land Development</li>
              <li>International Opportunities</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Investment Disclosures
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; {currentYear} Union Crest Holdings LLC. All rights reserved.</p>
            <p>Organized under the laws of the State of Texas</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
