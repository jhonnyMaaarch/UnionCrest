import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";

import residentialImage from "@assets/stock_images/modern_luxury_reside_6c795fbf.jpg";
import commercialImage1 from "@assets/stock_images/commercial_real_esta_1bdec21d.jpg";
import commercialImage2 from "@assets/stock_images/commercial_real_esta_c0bef090.jpg";
import landImage from "@assets/stock_images/vacant_land_developm_2ce8a54a.jpg";
import apartmentImage from "@assets/stock_images/luxury_apartment_bui_3722ada9.jpg";
import warehouseImage from "@assets/stock_images/modern_warehouse_ind_e5e63116.jpg";

const properties = [
  {
    image: residentialImage,
    title: "Lakeside Estate",
    location: "Austin, TX",
    type: "Residential",
    status: "Active",
  },
  {
    image: commercialImage2,
    title: "Downtown Office Complex",
    location: "Dallas, TX",
    type: "Commercial",
    status: "Under Development",
  },
  {
    image: landImage,
    title: "Hill Country Acreage",
    location: "San Antonio, TX",
    type: "Raw Land",
    status: "Available",
  },
  {
    image: apartmentImage,
    title: "Metro Apartments",
    location: "Houston, TX",
    type: "Multi-Family",
    status: "Active",
  },
  {
    image: warehouseImage,
    title: "Industrial Distribution Center",
    location: "Fort Worth, TX",
    type: "Industrial",
    status: "Leased",
  },
  {
    image: commercialImage1,
    title: "Retail Plaza",
    location: "Plano, TX",
    type: "Commercial",
    status: "Active",
  },
];

export function PortfolioPreview() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-3xl lg:text-4xl font-semibold mb-4"
            data-testid="text-portfolio-title"
          >
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif">
            A selection of properties from our diversified portfolio across Texas and beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {properties.map((property, index) => (
            <Card
              key={property.title}
              className="group overflow-hidden transition-all duration-300 hover:shadow-lg"
              data-testid={`card-property-${index}`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {property.type}
                  </Badge>
                  <Badge
                    variant={property.status === "Available" ? "default" : "outline"}
                    className="text-xs"
                  >
                    {property.status}
                  </Badge>
                </div>
                <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{property.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            data-testid="button-view-full-portfolio"
          >
            Request Full Portfolio
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
