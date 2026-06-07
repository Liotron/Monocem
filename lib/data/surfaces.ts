export interface Surface {
  name: string;
  slug: string;
  headline: string;
  description: string;
  benefits: string[];
  process: string[];
  seoTitle: string;
  seoDescription: string;
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
  },
];
