import type { Metadata } from "next";
import GuideArticle from "@/components/templates/GuideArticle";

export const metadata: Metadata = {
  title: "How to Apply Microcement | Step-by-Step Guide | MONOCEM",
  description: "A professional step-by-step guide to applying microcement — substrate preparation, priming, base coat, finish coat, and sealing for perfect results.",
  alternates: { canonical: "/learn/how-to-apply-microcement" },
};

const data = {
  title: "How to Apply Microcement",
  subtitle: "A step-by-step professional guide to microcement application",
  categorySlug: "application-technique",
  intro: "Microcement application requires skill, patience, and the right products. This guide outlines the professional application process used by MONOCEM installers. While the principles are sound for experienced tradespeople, we recommend professional installation for best results.",
  sections: [
    {
      id: "step-1-preparation",
      heading: "Step 1: Substrate assessment and preparation",
      content: "The substrate must be clean, dry, structurally sound, and free of movement. Any cracks in plaster or concrete must be filled and cured before proceeding. Tiles must be checked for hollow spots — hollow or loose tiles must be replaced. Timber substrates must be rigid and screwed off thoroughly to eliminate flex. Sand painted surfaces lightly to improve adhesion. Vacuum all dust.",
    },
    {
      id: "step-2-primer",
      heading: "Step 2: Apply the primer",
      content: "MONOCEM Primer is quartz-reinforced to provide a mechanical key for the microcement. Apply evenly with a roller, ensuring full coverage without pooling. One coat is typically sufficient. Allow to dry fully — 2–4 hours at 20°C. The surface should feel slightly rough and gritty to the touch when dry. Apply the first microcement coat within 24 hours of priming.",
    },
    {
      id: "step-3-base-coat",
      heading: "Step 3: Base coat application",
      content: "Apply MONOCEM base coat with a Venetian stainless steel trowel at 1–1.5mm thickness. Work in sections, maintaining a wet edge to avoid lap marks. The base coat provides structural body to the system. Allow to dry fully (approximately 4–6 hours, depending on conditions) before sanding. Use 80-grit sandpaper to knock back any trowel marks and create a flat, even surface. Vacuum thoroughly to remove dust.",
    },
    {
      id: "step-4-finish-coat",
      heading: "Step 4: Finish coat application",
      content: "The finish coat is where colour and texture are established. Mix your chosen colour into the finish coat material thoroughly before application. Apply in a thin, even layer (0.5–1mm) using a clean Venetian trowel. Work systematically to maintain even thickness. The finish coat sets faster than the base — work efficiently. Allow to dry fully, then sand lightly with 120-grit paper. Vacuum dust.",
    },
    {
      id: "step-5-sealing",
      heading: "Step 5: Sealing",
      content: "Sealing is the most critical step for durability and waterproofing. Apply MONOCEM Sealer with a foam roller in thin, even coats. The first coat acts as a primer for the sealer — apply, allow to dry 2–4 hours, then lightly sand with 400-grit paper and vacuum. Apply a second coat. For wet areas (bathrooms, wet rooms, kitchens), apply a third coat. Allow 24 hours before light use, and 7 days for full cure before wet exposure.",
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes to avoid",
      content: "The most common microcement failures result from: applying over a moving or hollow substrate; inadequate primer coverage; applying coats too thickly; sanding between coats insufficiently; and under-sealing in wet areas. Temperature and humidity significantly affect drying times — avoid application in very cold (below 10°C) or humid conditions. Never dilute microcement products unless specifically instructed.",
    },
  ],
  relatedLinks: [
    { label: "What is Microcement?", href: "/learn/what-is-microcement" },
    { label: "Microcement Products", href: "/products" },
    { label: "Microcement Maintenance", href: "/learn/microcement-maintenance" },
    { label: "Professional Installation", href: "/installation" },
    { label: "Trade Programme", href: "/trade" },
  ],
  sidebarLinks: [
    { label: "Browse Products", description: "Primers, Coats & Sealers", href: "/products" },
    { label: "Professional Installation", description: "Let Us Apply It For You", href: "/installation" },
    { label: "Microcement Maintenance", description: "Caring for the Finish", href: "/learn/microcement-maintenance" },
    { label: "Open a Trade Account", description: "For Installers & Builders", href: "/trade" },
  ],
};

export default function HowToApplyMicroCementPage() {
  return <GuideArticle data={data} />;
}
