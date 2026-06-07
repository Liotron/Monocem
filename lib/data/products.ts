export interface Product {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  features: string[];
  howToUse: string[];
  seoTitle: string;
  seoDescription: string;
}

export const products: Product[] = [
  {
    name: "Microcement Kits",
    slug: "microcement-kits",
    tagline: "Complete System Kits for Professional Application",
    description: "MONOCEM's complete microcement kits contain everything needed for a professional microcement installation. Each kit includes base coat, finish coat, and primer — formulated to work together for optimal adhesion and a flawless, seamless finish.",
    features: [
      "Complete system — base, finish coat and primer included",
      "Coverage: approximately 3–5m² per kg (finish coat)",
      "Available in all 12 MONOCEM colours",
      "For interior use on floors, walls, and furniture",
      "Compatible with underfloor heating",
      "Water-based, low VOC formula",
      "Ready to use — no mixing required",
    ],
    howToUse: [
      "Ensure substrate is clean, dry and structurally sound",
      "Apply MONOCEM primer and allow to dry fully",
      "Apply base coat with a Venetian trowel at 1–2mm thickness",
      "Sand lightly once dry, remove dust",
      "Apply finish coat in chosen colour",
      "Allow to cure, then apply 2–3 coats of MONOCEM sealer",
    ],
    seoTitle: "Microcement Kits UK | Complete Microcement System | MONOCEM",
    seoDescription: "Professional microcement kits available to buy from MONOCEM. Complete systems including primer, base and finish coat. Available in 12 colours for UK delivery.",
  },
  {
    name: "Microcement Primer",
    slug: "microcement-primer",
    tagline: "Professional Bonding Primer for All Substrates",
    description: "MONOCEM's professional primer ensures optimal adhesion of microcement to any substrate — tiles, plaster, concrete, or wood. Formulated for maximum bond strength, our primer is the essential first step in any successful microcement installation.",
    features: [
      "Bonds to tiles, plaster, concrete, wood, and more",
      "Quartz-reinforced formula for mechanical key",
      "Water-based, low odour",
      "Fast drying — ready to overcoat in 2–4 hours",
      "Single-coat application",
      "Coverage: 5–8m² per litre",
    ],
    howToUse: [
      "Clean and degrease the substrate thoroughly",
      "Apply primer with a roller or brush",
      "Allow to dry fully (2–4 hours at 20°C)",
      "Ensure no drips or pooling",
      "Apply microcement within 24 hours of priming",
    ],
    seoTitle: "Microcement Primer UK | Professional Bonding Primer | MONOCEM",
    seoDescription: "Professional microcement primer from MONOCEM. Bonds to tiles, plaster, concrete and wood. Essential first step for any microcement installation. UK delivery available.",
  },
  {
    name: "Microcement Sealer",
    slug: "microcement-sealer",
    tagline: "Waterproof Protection Sealer for Microcement",
    description: "MONOCEM's high-performance sealer provides complete waterproofing and protection for finished microcement surfaces. Our sealer penetrates deep into the microcement, creating a robust, easy-clean surface while preserving the natural texture and appearance.",
    features: [
      "Fully waterproof — essential for wet areas",
      "Penetrating formula preserves natural texture",
      "Available in matt, satin and gloss finishes",
      "UV-stable — won't yellow over time",
      "Water and stain resistant",
      "Easy to apply — roller or pad applicator",
      "Coverage: 10–15m² per litre per coat",
    ],
    howToUse: [
      "Ensure microcement is fully cured and dry (minimum 24 hours)",
      "Clean surface and remove any dust",
      "Apply first sealer coat with a foam roller",
      "Allow to dry (2–4 hours)",
      "Lightly sand with 400 grit",
      "Apply second coat — third coat recommended for wet areas",
    ],
    seoTitle: "Microcement Sealer UK | Waterproof Protection | MONOCEM",
    seoDescription: "Professional microcement sealer from MONOCEM. Fully waterproof, available in matt, satin, and gloss. Essential for bathroom and kitchen installations. UK delivery.",
  },
  {
    name: "Microcement Pigments",
    slug: "microcement-pigments",
    tagline: "Premium Colour Pigments for Custom Shades",
    description: "MONOCEM's professional pigment range allows installers and designers to create custom microcement colours beyond our standard palette. Our pigments are fully compatible with all MONOCEM products and deliver consistent, permanent colour.",
    features: [
      "Compatible with all MONOCEM microcement products",
      "Consistent, UV-stable pigmentation",
      "Available in 50+ colours",
      "Precise dosing — included measurement guide",
      "Permanent — won't fade or change over time",
      "Mix multiple pigments for bespoke shades",
    ],
    howToUse: [
      "Determine your required colour and mixing ratio",
      "Weigh out pigment accurately using digital scales",
      "Add to microcement finish coat and mix thoroughly",
      "Create a small test panel to confirm colour before full application",
      "Document your mixing ratio for colour consistency across coats",
    ],
    seoTitle: "Microcement Pigments UK | Custom Colour Pigments | MONOCEM",
    seoDescription: "Professional microcement colour pigments from MONOCEM. Create custom shades beyond our standard palette. Compatible with all MONOCEM products. UK delivery available.",
  },
  {
    name: "Tools & Accessories",
    slug: "tools-accessories",
    tagline: "Professional Tools for Perfect Microcement Application",
    description: "MONOCEM's professional tools and accessories have been selected and tested by our installation team to ensure perfect results. From Venetian trowels to sanding equipment, our tools make professional microcement application achievable.",
    features: [
      "Venetian trowels in multiple sizes",
      "Sanding equipment for between-coat preparation",
      "Mixing paddles and buckets",
      "Sealer application rollers and pads",
      "Protective equipment (masks, gloves)",
      "Edge tape and masking materials",
    ],
    howToUse: [
      "Select the appropriate trowel size for your surface area",
      "Use sanding tools between each microcement coat",
      "Apply sealer with foam roller for even coverage",
      "Use masking products to protect adjacent surfaces",
    ],
    seoTitle: "Microcement Tools & Accessories UK | Professional Tools | MONOCEM",
    seoDescription: "Professional microcement tools and accessories from MONOCEM. Venetian trowels, sanding equipment, sealer applicators, and more. Everything you need for perfect results.",
  },
];
