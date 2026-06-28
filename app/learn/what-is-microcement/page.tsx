import type { Metadata } from "next";
import GuideArticle from "@/components/templates/GuideArticle";

export const metadata: Metadata = {
  title: "What is Microcement? Complete Guide | MONOCEM",
  description: "What is microcement? A complete guide to microcement composition, applications, properties, and why it's ideal for floors, walls, and bathrooms in UK homes.",
  alternates: { canonical: "/learn/what-is-microcement" },
};

const data = {
  title: "What is Microcement?",
  subtitle: "A complete guide to microcement — composition, applications, and properties",
  categorySlug: "getting-started",
  image: "/images/img-wall-texture.png",
  imageCaption: "Hand-trowelled microcement, macro texture detail",
  intro: "Microcement is a thin-coat, cementitious decorative material applied at just 1–3mm thickness to create a seamless, continuous surface. Unlike traditional concrete or tiles, microcement can be applied over existing substrates — eliminating the need for costly demolition while achieving the most architectural surface finishes available today.",
  sections: [
    {
      id: "composition",
      heading: "What is microcement made of?",
      content: "Microcement is a blend of Portland cement, water-based polymers, aggregates, and mineral pigments. The polymer component is what gives microcement its flexibility and adhesion — allowing it to bond directly to tiles, plaster, concrete, and timber without cracking. The fine aggregate provides texture and depth, while the mineral pigments deliver consistent, UV-stable colour throughout the coating.",
    },
    {
      id: "thickness",
      heading: "How thick is microcement?",
      content: "Microcement is typically applied in two coats at a combined thickness of 1.5–3mm. This thin profile means it adds minimal height to existing floors — crucial in renovations where door clearances and thresholds are a concern. Despite its thin application, the polymer-reinforced composition makes microcement highly durable and impact resistant.",
    },
    {
      id: "substrates",
      heading: "What surfaces can microcement be applied to?",
      content: "One of microcement's most compelling properties is its versatility. It can be applied directly over ceramic tiles, porcelain tiles, existing concrete, plaster, gypsum board, timber flooring, and most rigid substrates. The key requirement is that the substrate is structurally sound, flat, and free of movement — microcement will follow the profile of the substrate below.",
    },
    {
      id: "waterproofing",
      heading: "Is microcement waterproof?",
      content: "Microcement is water resistant but not inherently waterproof — it is the sealer that creates the waterproof barrier. MONOCEM's professional sealer system, applied in 2–3 coats over the finished microcement, creates a fully waterproof surface. This is why microcement is an excellent choice for bathrooms, wet rooms, and kitchen surfaces, provided the sealing process is carried out correctly.",
    },
    {
      id: "longevity",
      heading: "How long does microcement last?",
      content: "When professionally installed on a correctly prepared substrate and properly sealed, MONOCEM microcement surfaces are built to last decades. The critical factors for longevity are: proper substrate preparation, correct application technique, and adequate sealer protection. Poorly prepared substrates or inadequate sealing are the primary causes of premature failure.",
    },
    {
      id: "colours",
      heading: "What colours is microcement available in?",
      content: "MONOCEM offers over 100 professionally curated colours — from Soft White through warm beiges and earthy neutrals to deep Charcoal and Obsidian. Beyond our standard palette, custom colours can be achieved using our professional pigment range. All colours are tested for consistency across application batches, so every coat matches precisely.",
    },
  ],
  relatedLinks: [
    { label: "Microcement vs Polished Concrete", href: "/learn/microcement-vs-polished-concrete" },
    { label: "How to Apply Microcement", href: "/learn/how-to-apply-microcement" },
    { label: "Microcement Cost UK", href: "/learn/microcement-cost-uk" },
    { label: "Installation Services", href: "/installation" },
    { label: "Order Samples", href: "/get-a-quote" },
  ],
  sidebarLinks: [
    { label: "Browse the Colour Library", description: "100+ Colours", href: "/colours" },
    { label: "View Our Systems", description: "Installation Services", href: "/installation" },
    { label: "Microcement vs Polished Concrete", description: "Comparison Guide", href: "/learn/microcement-vs-polished-concrete" },
    { label: "Open a Trade Account", description: "For Installers & Builders", href: "/trade" },
  ],
};

export default function WhatIsMicroCementPage() {
  return <GuideArticle data={data} />;
}
