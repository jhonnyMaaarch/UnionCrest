# Union Crest Holdings LLC - Design Guidelines

## Design Approach
**Reference-Based Professional Real Estate Platform**
Drawing inspiration from institutional real estate leaders (Blackstone, Hines) combined with modern property platforms (Compass, Redfin). Focus on establishing immediate credibility and sophistication while showcasing investment opportunities.

## Typography System
- **Primary Font**: "Inter" (headings, UI elements) - clean, professional, modern
- **Secondary Font**: "Lora" (body text, property descriptions) - elegant, readable
- **Hierarchy**:
  - Hero Headlines: text-5xl to text-7xl, font-bold
  - Section Headers: text-4xl, font-semibold
  - Subheadings: text-2xl, font-medium
  - Body: text-lg, font-normal
  - Captions/Meta: text-sm, font-medium

## Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 lg:py-32
- Component spacing: gap-8 to gap-12
- Container: max-w-7xl mx-auto px-6

## Page Structure (5-7 Sections)

### 1. Hero Section (80vh)
- Full-width background image: Upscale commercial property or development project
- Centered content with backdrop blur overlay
- Company name + tagline: "Strategic Real Estate Investment & Development"
- Trust indicator: "Texas-Based | International Reach | Multi-Asset Portfolio"
- Dual CTA: "View Portfolio" (primary) + "Partner With Us" (secondary) with backdrop-blur-md bg-white/10

### 2. Value Proposition (3-column grid lg:grid-cols-3)
- **Acquisition Excellence**: Government auctions, distressed sales expertise
- **Development Mastery**: Rehab, improvement, repositioning strategies  
- **Exit Strategy**: Disposition through traditional & specialized channels
Each card with icon, heading, 2-3 sentence description

### 3. Investment Focus Areas (2-column split)
Left: Large image showcasing portfolio diversity
Right: Categorized list with subtle dividers:
- Residential Properties
- Commercial Real Estate
- Raw Land Development
- International Opportunities

### 4. Track Record/Stats (4-column grid lg:grid-cols-4)
Prominent numbers with labels:
- "Properties Acquired"
- "Markets Active"
- "Total Investment Value"
- "Partner Returns"

### 5. Featured Properties/Portfolio Preview
Masonry-style grid (2-3 columns) showing 4-6 properties
Each card: Property image, location, type, brief status
CTA: "View Full Portfolio"

### 6. Partnership Approach
Text-focused section with max-w-4xl
Explains LLC structure benefits, partnership opportunities
CTA: "Schedule Consultation"

### 7. Contact/Footer
2-column: Contact form + Company information
Footer: Texas LLC details, legal links, professional affiliations

## Component Library

**Navigation**: Fixed header with logo left, nav links center, "Contact" button right

**Cards**: Subtle border, generous padding (p-8), hover:shadow-lg transition

**Buttons**:
- Primary: Solid, rounded-lg, px-8 py-4
- Secondary: Border with backdrop-blur for overlay contexts
- All buttons: No custom hover states (inherent)

**Forms**: Clean inputs with focus:ring, labels with text-sm font-medium

**Property Cards**: Image top, content below, location/type badges

## Images Required
1. **Hero**: Luxury commercial building or development site (architectural, professional)
2. **Investment Focus**: Modern residential/commercial property
3. **Portfolio Grid**: 4-6 diverse property images (residential, commercial, land)
4. **Team/Office** (optional for partnership section): Professional setting

## Animations
Minimal: Subtle fade-ins on scroll, smooth hover transitions on cards (hover:scale-105)

## Key Design Principles
- **Authority First**: Establish credibility immediately through professional imagery and clear value props
- **Portfolio-Centric**: Properties are the hero - showcase them prominently
- **Information Clarity**: Real estate investment is complex; make information scannable
- **Trust Signals**: Texas LLC, professional language, institutional aesthetic
- **Conversion-Focused**: Clear pathways to portfolio viewing and partnership inquiries