export interface SurfaceFeature {
  title: string;
  desc: string;
}

export interface SurfaceFigure {
  image: string;
  caption: string;
  wide?: boolean;
}

export interface Surface {
  name: string;
  slug: string;
  headline: string;
  description: string;
  benefits: string[];
  process: string[];
  seoTitle: string;
  seoDescription: string;
  heroImage?: string;
  heroImagePosition?: string;
  storyFigures?: SurfaceFigure[];
  sectionLabel: string;
  sectionHeadingLine1: string;
  sectionHeadingLine2: string;
  sectionHeadingLine2Italic?: boolean;
  sectionParagraphs: string[];
  features: SurfaceFeature[];
  ctaHeading: string;
  ctaHeadingItalic: string;
  ctaButtonLabel: string;
}

export const surfaces: Surface[] = [
  {
    name: "Floors",
    slug: "floors",
    headline: "Seamless Microcement Floors",
    description: "Transform any floor surface with MONOCEM's professional microcement flooring system. Our seamless floors eliminate grout lines, creating an uninterrupted visual flow throughout your space. Suitable for underfloor heating, our floors are both beautiful and practical.",
    benefits: ["Zero grout lines for seamless appearance", "Compatible with underfloor heating", "Waterproof and highly durable", "Available in 12 custom colours", "Applied over existing surfaces — minimal disruption", "Easy to clean and maintain"],
    process: ["Surface preparation and priming", "First coat of microcement base", "Sanding to achieve smooth finish", "Second coat application", "Final sanding and colour coat", "Sealer application — 2-3 coats for maximum protection"],
    seoTitle: "Microcement Floors UK | Seamless Floor Installation | MONOCEM",
    seoDescription: "Professional microcement floor installation across the UK. MONOCEM's seamless floors are waterproof, durable, and compatible with underfloor heating. Request a free quote.",
    heroImage: "/images/img-floors.png",
    sectionLabel: "Floor Systems",
    sectionHeadingLine1: "The MONOCEM",
    sectionHeadingLine2: "Floor Difference",
    sectionParagraphs: [
      "Applied at 2–3mm directly over existing substrates including concrete, screed, wood, and tiles, MONOCEM floors achieve the polished concrete look at a fraction of the cost and disruption.",
      "Available in matt, satin, and gloss finishes, our floor systems are sealed with industrial-grade polyurethane topcoats that withstand heavy foot traffic, pet claws, and daily life.",
    ],
    features: [
      { title: "Polished Concrete Look", desc: "Premium aesthetic without the structural requirements" },
      { title: "Over Existing Floors", desc: "No demolition — applied directly over tiles or wood" },
      { title: "UFH Compatible", desc: "Ideal thermal conductor for underfloor heating" },
      { title: "Traffic Resistant", desc: "Industrial sealers for heavy residential and commercial use" },
      { title: "3 Finish Options", desc: "Matt, satin, or gloss to match your aesthetic" },
      { title: "Indoor & Outdoor", desc: "Specialist exterior systems available" },
    ],
    ctaHeading: "See Floors in Your",
    ctaHeadingItalic: "Space",
    ctaButtonLabel: "Book a Consultation",
  },
  {
    name: "Walls",
    slug: "walls",
    headline: "Microcement Wall Finishes",
    description: "Create striking architectural wall finishes with MONOCEM's microcement wall system. From feature walls to complete room transformations, our walls deliver a tactile, sophisticated texture that elevates any interior space.",
    benefits: ["Continuous seamless finish across entire walls", "Can be applied over existing tiles or plaster", "Waterproof — ideal for wet rooms and kitchens", "Creates unique tactile texture", "Highly customisable colour palette", "Durable and easy to maintain"],
    process: ["Substrate assessment and preparation", "Application of primer coat", "First microcement layer application", "Fine sanding between coats", "Second microcement layer", "Sealer application for protection"],
    seoTitle: "Microcement Walls UK | Wall Finish Installation | MONOCEM",
    seoDescription: "Stunning microcement wall finishes installed across the UK by MONOCEM. Seamless, waterproof, and architectural — transform your walls with our premium microcement system.",
    storyFigures: [
      { image: "/images/img-wall-hero.png", caption: "Warm Limestone Finish" },
      { image: "/images/img-wall-texture.png", caption: "Hand-Trowelled Texture", wide: true },
    ],
    sectionLabel: "Wall Systems",
    sectionHeadingLine1: "Walls That Tell",
    sectionHeadingLine2: "a Story",
    sectionHeadingLine2Italic: true,
    sectionParagraphs: [
      "MONOCEM wall systems are applied by hand using specialised trowels, creating a unique tactile surface with natural variation and depth. Unlike tiles or paint, no two MONOCEM walls are identical.",
      "From smooth and polished to rustic and textured, we tailor the finish to complement your interior vision — from minimal Scandi to industrial loft.",
    ],
    features: [
      { title: "Hand Applied", desc: "Unique artisan finish — no two surfaces are identical" },
      { title: "Multiple Textures", desc: "Smooth, medium, or coarse finishes available" },
      { title: "Waterproof Options", desc: "Sealed wall system for kitchens and bathrooms" },
      { title: "100+ Colours", desc: "Custom colour matching available" },
      { title: "Feature Walls", desc: "Create a stunning focal point in any room" },
      { title: "Crack Resistant", desc: "Flexible compound prevents surface cracking" },
    ],
    ctaHeading: "Start Your Wall",
    ctaHeadingItalic: "Project",
    ctaButtonLabel: "Get a Free Quote",
  },
  {
    name: "Bathrooms",
    slug: "bathrooms",
    headline: "Microcement Bathrooms & Wet Rooms",
    description: "MONOCEM's waterproof microcement system is the perfect solution for modern bathrooms and wet rooms. Achieve a seamless, spa-like finish that's hygienic, easy to clean, and exceptionally beautiful. Say goodbye to grout lines forever.",
    benefits: ["100% waterproof system", "No grout lines — hygienic and easy to clean", "Continuous floor-to-ceiling finish possible", "Warm underfoot", "Available in all 12 Monocem colours", "Suitable for shower enclosures and wet rooms"],
    process: ["Waterproof membrane application", "Primer coat", "Two coats of microcement", "Sanding between each coat", "Colour coat application", "Three coats of waterproof sealer"],
    seoTitle: "Microcement Bathrooms UK | Wet Room Installation | MONOCEM",
    seoDescription: "Luxury microcement bathrooms and wet rooms across the UK. MONOCEM's 100% waterproof system creates seamless, hygienic bathroom surfaces. Request your free quote today.",
    heroImage: "/images/img-bathrooms.png",
    heroImagePosition: "50% 40%",
    sectionLabel: "The System",
    sectionHeadingLine1: "Why Microcement",
    sectionHeadingLine2: "for Bathrooms?",
    sectionParagraphs: [
      "MONOCEM's bathroom system creates a completely seamless surface with no grout lines — eliminating the places where mould and bacteria hide. Applied at just 2–3mm, it can be installed directly over existing tiles, saving time and disruption.",
      "Our bathroom-grade topcoats provide an impenetrable waterproof barrier rated for full submersion, making it perfect for wet rooms, walk-in showers, and bath surrounds.",
    ],
    features: [
      { title: "100% Waterproof", desc: "Fully sealed topcoat rated for constant water exposure" },
      { title: "Zero Grout Lines", desc: "Seamless surface with nowhere for mould to grow" },
      { title: "Over Existing Tiles", desc: "Applied directly over tiles with no demolition required" },
      { title: "Anti-Slip Options", desc: "Anti-slip topcoat available for shower floors" },
      { title: "Underfloor Heating", desc: "Fully compatible with all UFH systems" },
      { title: "Easy to Clean", desc: "Wipe-clean surface with no grout to scrub" },
    ],
    ctaHeading: "Ready to Transform",
    ctaHeadingItalic: "Your Bathroom?",
    ctaButtonLabel: "Request a Free Quote",
  },
  {
    name: "Kitchens",
    slug: "kitchens",
    headline: "Microcement Kitchens & Kitchen Floors",
    description: "Bring a refined, continuous aesthetic to your kitchen with MONOCEM's microcement system. Perfect for kitchen floors, splashbacks, and walls, microcement creates a cohesive, contemporary kitchen environment that's both beautiful and hardwearing.",
    benefits: ["Seamless integration across floors and walls", "Heat-resistant surface", "Easy to clean — no grout to discolour", "Compatible with all kitchen designs", "Hardwearing under daily use", "Available in all 12 Monocem colours"],
    process: ["Surface preparation and cleaning", "Primer application", "First microcement coat", "Sanding for smooth finish", "Second coat and colour application", "Food-safe sealer application"],
    seoTitle: "Microcement Kitchens UK | Kitchen Floor & Wall Installation | MONOCEM",
    seoDescription: "Premium microcement kitchen installations across the UK. MONOCEM creates seamless kitchen floors, walls, and splashbacks that are beautiful, hygienic, and hardwearing.",
    heroImage: "/images/img-kitchens.png",
    sectionLabel: "Kitchen Systems",
    sectionHeadingLine1: "A Kitchen Without",
    sectionHeadingLine2: "Boundaries",
    sectionHeadingLine2Italic: true,
    sectionParagraphs: [
      "Applied across floors, splashbacks, and walls, MONOCEM creates one continuous surface that removes the visual breaks between materials — no tile trims, no grout, no mismatched joins.",
      "Our food-safe sealers are heat- and stain-resistant, built to withstand daily cooking, spills, and heavy footfall while keeping their refined, matt-stone finish for years.",
    ],
    features: [
      { title: "Heat Resistant", desc: "Withstands hot pans and daily kitchen use" },
      { title: "Food-Safe Sealer", desc: "Hygienic, wipe-clean finish with no grout to discolour" },
      { title: "Floors to Splashbacks", desc: "One continuous material across every surface" },
      { title: "Over Existing Tiles", desc: "Applied directly over worktops, walls, and floors" },
      { title: "12 Colour Options", desc: "Matched across every kitchen surface" },
      { title: "Hardwearing Finish", desc: "Built for daily traffic and everyday spills" },
    ],
    ctaHeading: "Reimagine Your",
    ctaHeadingItalic: "Kitchen",
    ctaButtonLabel: "Get a Free Quote",
  },
  {
    name: "Worktops",
    slug: "worktops",
    headline: "Microcement Worktops & Surfaces",
    description: "MONOCEM's microcement worktops bring an architectural, bespoke quality to kitchens and bathrooms. Unlike stone or quartz, microcement worktops are seamless with no joins, and can be applied directly over existing surfaces.",
    benefits: ["Seamless — no joins or seams", "Can coat existing surfaces", "Customisable to any shape", "Hygienic and food-safe when sealed", "Heat and scratch resistant when properly maintained", "Unique tactile surface quality"],
    process: ["Existing surface preparation", "Primer application to substrate", "First structural coat", "Sanding and filling", "Fine finish coat", "Multiple sealer layers for protection"],
    seoTitle: "Microcement Worktops UK | Bespoke Kitchen Surfaces | MONOCEM",
    seoDescription: "Bespoke microcement worktops installed across the UK. Seamless, hygienic, and architectural — MONOCEM creates stunning kitchen and bathroom worktops with no joins.",
    heroImage: "/images/img-proj-kitchen.png",
    heroImagePosition: "center 40%",
    sectionLabel: "Worktop Systems",
    sectionHeadingLine1: "Surfaces With",
    sectionHeadingLine2: "No Seams",
    sectionHeadingLine2Italic: true,
    sectionParagraphs: [
      "Unlike stone or quartz, MONOCEM worktops are cast as one continuous surface — no joins, no seams, and no limit on shape. They can be applied directly over existing worktops, saving the cost of a full replacement.",
      "Sealed with a food-safe, heat-resistant topcoat, our worktops are built for daily kitchen and bathroom use while delivering a bespoke, architectural finish unique to your space.",
    ],
    features: [
      { title: "No Joins or Seams", desc: "Cast as one continuous surface, however large" },
      { title: "Over Existing Surfaces", desc: "Applied directly over worktops and counters" },
      { title: "Any Shape", desc: "Fully customisable to bespoke layouts" },
      { title: "Food-Safe Sealer", desc: "Hygienic finish rated for kitchen use" },
      { title: "Heat & Scratch Resistant", desc: "Built for daily cooking and food prep" },
      { title: "Tactile Finish", desc: "A unique textured surface stone can't replicate" },
    ],
    ctaHeading: "Design Your",
    ctaHeadingItalic: "Worktop",
    ctaButtonLabel: "Get a Free Quote",
  },
  {
    name: "Stairs",
    slug: "stairs",
    headline: "Microcement Stairs & Treads",
    description: "MONOCEM's microcement staircase system creates stunning, seamless staircases that flow naturally from floor to landing. Our system can coat existing stairs or new builds, creating a continuous architectural statement throughout your home.",
    benefits: ["Continuous seamless finish from floor to stair", "Can coat existing wood or concrete stairs", "Anti-slip sealer options available", "Durable under heavy foot traffic", "Matches any microcement floor for cohesive look", "Available in all 12 Monocem colours"],
    process: ["Stair surface assessment and preparation", "Primer application", "First microcement coat", "Fine sanding", "Second coat with nosing detail", "Anti-slip sealer application"],
    seoTitle: "Microcement Stairs UK | Staircase Installation | MONOCEM",
    seoDescription: "Stunning microcement staircase installations across the UK. MONOCEM creates seamless, continuous stairs that flow from floor to landing. Request your free quote.",
    heroImage: "/images/img-stairs.png",
    sectionLabel: "Stair Systems",
    sectionHeadingLine1: "A Seamless",
    sectionHeadingLine2: "Ascent",
    sectionHeadingLine2Italic: true,
    sectionParagraphs: [
      "MONOCEM flows from floor to stair to landing in one continuous surface, coating existing wood or concrete treads without the cost or disruption of a full rebuild.",
      "Finished with an anti-slip sealer rated for heavy daily traffic, our stair systems match any MONOCEM floor for a cohesive architectural statement throughout your home.",
    ],
    features: [
      { title: "Floor-to-Stair Flow", desc: "One continuous finish from floor to landing" },
      { title: "Over Existing Stairs", desc: "Coats wood or concrete treads — no rebuild required" },
      { title: "Anti-Slip Sealer", desc: "Rated for heavy daily foot traffic" },
      { title: "Durable Nosing", desc: "Reinforced edges withstand years of use" },
      { title: "Matches Any Floor", desc: "Available in all 12 Monocem colours" },
      { title: "New Builds or Retrofits", desc: "Suitable for renovation and new construction" },
    ],
    ctaHeading: "Start Your Staircase",
    ctaHeadingItalic: "Project",
    ctaButtonLabel: "Get a Free Quote",
  },
];
