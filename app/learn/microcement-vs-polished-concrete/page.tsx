import type { Metadata } from "next";
import LearnPage from "@/components/templates/LearnPage";

export const metadata: Metadata = {
  title: "Microcement vs Polished Concrete UK | Which is Right for You? | MONOCEM",
  description: "Comparing microcement vs polished concrete? This guide covers the key differences in cost, installation, appearance, and suitability for UK residential projects.",
  alternates: { canonical: "/learn/microcement-vs-polished-concrete" },
};

const data = {
  title: "Microcement vs Polished Concrete",
  subtitle: "Key differences, costs, and which surface is right for your project",
  intro: "Both microcement and polished concrete deliver the same sleek, seamless aesthetic — but they are fundamentally different materials. Understanding the differences will help you choose the right surface for your project, budget, and building structure.",
  sections: [
    {
      heading: "The fundamental difference",
      content: "Polished concrete is a structural concrete slab that is ground, honed, and polished in place. Microcement is a thin-coat overlay (1–3mm) applied over existing substrates. Polished concrete requires either a new concrete pour or an existing slab — microcement can be applied over almost any existing surface, including tiles, plaster, and timber.",
    },
    {
      heading: "Installation complexity and disruption",
      content: "Installing polished concrete in a renovation requires significant structural work — either a new concrete slab or substantial preparation of an existing one. This involves demolition, structural reinforcement in some cases, and significant drying time (concrete needs 28 days to cure before polishing). Microcement can typically be applied over existing surfaces within a renovation timeline of 3–5 days per room, with no structural work required.",
    },
    {
      heading: "Cost comparison",
      content: "In most renovation projects, microcement is significantly more cost-effective than polished concrete. Polished concrete in a renovation context requires breaking up existing floors, pouring new concrete, waiting for cure time, and then the polishing process itself — which can cost £80–120/m² or more. Professional microcement installation typically ranges from £60–90/m² depending on substrate condition and project complexity.",
    },
    {
      heading: "Appearance and texture",
      content: "Both surfaces share the same architectural, seamless aesthetic. Polished concrete has a distinctive reflective depth that comes from grinding through aggregate layers. Microcement has a more matte to satin appearance with visible texture and trowel marks that add artisanal character. Microcement also offers a wider colour palette — from warm neutrals that polished concrete cannot replicate, to deep charcoals.",
    },
    {
      heading: "Durability and maintenance",
      content: "Polished concrete is extremely hard and resistant to scratching — particularly suitable for high-traffic commercial environments. Microcement, when correctly sealed, is highly durable for residential and light commercial use. Both require periodic resealing (every 3–5 years in wet areas) to maintain waterproof protection. Microcement is repairable in sections; polished concrete is more difficult to spot-repair.",
    },
    {
      heading: "Which should you choose?",
      content: "For new builds with a concrete structural slab, polished concrete is a compelling choice. For renovations — particularly those over existing tiles, timber, or plaster — microcement is almost always the more practical and cost-effective option. For colour versatility, warmth, and the ability to apply over existing substrates in any room, microcement is unmatched.",
    },
  ],
  relatedLinks: [
    { label: "What is Microcement?", href: "/learn/what-is-microcement" },
    { label: "Microcement Cost UK", href: "/learn/microcement-cost-uk" },
    { label: "Microcement Floors", href: "/installation/floors" },
    { label: "Get a Quote", href: "/get-a-quote" },
  ],
};

export default function MicroCementVsPolishedConcretePage() {
  return <LearnPage data={data} />;
}
