import type { Metadata } from "next";
import GuideArticle from "@/components/templates/GuideArticle";

export const metadata: Metadata = {
  title: "Microcement Maintenance Guide | How to Care for Microcement | MONOCEM",
  description: "How to maintain your microcement surface. A professional guide to cleaning, resealing, and protecting your microcement floors and walls for lasting beauty.",
  alternates: { canonical: "/learn/microcement-maintenance" },
};

const data = {
  title: "Microcement Maintenance Guide",
  subtitle: "How to clean, protect, and maintain your microcement for decades",
  categorySlug: "maintenance-care",
  intro: "A correctly installed and sealed MONOCEM surface requires minimal maintenance. The key is understanding what products to use, how to reseal at the right intervals, and how to respond to any surface issues before they develop. This guide covers everything you need to know to keep your microcement looking its best.",
  sections: [
    {
      id: "daily-cleaning",
      heading: "Daily and weekly cleaning",
      content: "For day-to-day cleaning, a damp mop or cloth with warm water is all that's needed for most microcement floors and walls. For kitchen surfaces and bathrooms, use a pH-neutral cleaner — avoid acidic cleaners (vinegar, citrus-based products) and alkaline cleaners (bleach, ammonia), which can degrade the sealer over time. Wipe spills promptly, particularly in the first weeks after installation while the sealer fully cures.",
    },
    {
      id: "products-to-avoid",
      heading: "Products to avoid",
      content: "Never use abrasive cleaners, scouring pads, or steel wool on microcement — these will scratch the sealer and dull the surface. Avoid mop heads with rough textures. Do not use steam mops, which can force moisture into the sealer and cause cloudiness. Avoid wax-based floor polishes — they can create a build-up that's difficult to remove and alters the appearance of the surface.",
    },
    {
      id: "resealing-intervals",
      heading: "Resealing intervals",
      content: "The sealer is the protective layer that keeps your microcement waterproof and stain-resistant. In normal residential use on floors, expect to reseal every 3–5 years. In wet areas (bathrooms, wet rooms), check the sealer annually and reseal when water no longer beads on the surface. Kitchen worktops may need resealing every 2–3 years depending on use. MONOCEM offers a maintenance resealing service.",
    },
    {
      id: "marks-and-stains",
      heading: "Dealing with surface marks and stains",
      content: "Most everyday marks on a properly sealed microcement surface will clean off with warm water and a neutral cleaner. For stubborn stains, a dilute solution of washing-up liquid applied with a soft cloth will usually suffice. If the stain has penetrated the sealer (indicating the sealer needs refreshing), light sanding and resealing of the affected area can restore the surface without full replacement.",
    },
    {
      id: "protecting-floors",
      heading: "Protecting microcement floors",
      content: "Use felt pads under furniture legs to prevent scratching. Avoid dragging heavy furniture across microcement floors. Use entrance mats to reduce grit tracked onto the surface — fine grit and sand are more damaging to microcement than any other everyday contact. High heels on microcement floors can cause point-load damage to the sealer — a practical consideration for hospitality and commercial settings.",
    },
    {
      id: "hairline-cracks",
      heading: "Addressing hairline cracks",
      content: "Hairline cracks in microcement are usually a result of substrate movement rather than a failure of the microcement itself. Small hairline cracks can be filled with a matching microcement repair mixture and resealed. If cracking is widespread, it may indicate structural movement in the substrate that needs addressing before repair. Contact MONOCEM for an assessment of any significant cracking.",
    },
  ],
  relatedLinks: [
    { label: "What is Microcement?", href: "/learn/what-is-microcement" },
    { label: "Microcement Products", href: "/products" },
    { label: "How to Apply Microcement", href: "/learn/how-to-apply-microcement" },
    { label: "Get a Quote", href: "/get-a-quote" },
  ],
  sidebarLinks: [
    { label: "Browse the Sealer Range", description: "Resealing Products", href: "/products" },
    { label: "How to Apply Microcement", description: "Application Guide", href: "/learn/how-to-apply-microcement" },
    { label: "Get a Resealing Quote", description: "Talk to Our Team", href: "/get-a-quote" },
  ],
};

export default function MicroCementMaintenancePage() {
  return <GuideArticle data={data} />;
}
