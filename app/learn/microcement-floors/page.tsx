import type { Metadata } from "next";
import GuideArticle from "@/components/templates/GuideArticle";

export const metadata: Metadata = {
  title: "Microcement Floors: The Complete Guide | MONOCEM",
  description: "Everything you need to know about microcement floors — benefits, the application process, cost considerations, and how to choose the right finish for your space.",
  alternates: { canonical: "/learn/microcement-floors" },
};

const data = {
  title: "Microcement Floors: The Complete Guide",
  subtitle: "Everything you need to know before installing a seamless microcement floor",
  categorySlug: "application-technique",
  image: "/images/img-floors.png",
  imageCaption: "A seamless MONOCEM microcement floor",
  intro:
    "Microcement floors have become the surface of choice for architects and homeowners seeking a seamless, contemporary finish. This guide covers everything from how the system works to what it costs and how to choose the right finish for your space.",
  sections: [
    {
      id: "what-makes-floors-different",
      heading: "What makes a microcement floor different?",
      content:
        "Unlike tiles, microcement floors are applied as a continuous, jointless surface at just 2–3mm thick — directly over most existing substrates, including concrete, screed, wood, and even tiles. The result is an uninterrupted visual flow across an entire room with zero grout lines to clean or discolour.",
    },
    {
      id: "is-it-suitable",
      heading: "Is microcement suitable for every room?",
      content:
        "Microcement floors work in almost any interior space — living rooms, kitchens, hallways, and bathrooms — and are fully compatible with underfloor heating, which makes them a popular choice for renovations where UFH is already installed. The main consideration is substrate stability: any structural movement or damp issues should be resolved before installation.",
    },
    {
      id: "application-process",
      heading: "How is a microcement floor applied?",
      content:
        "A typical floor installation involves surface preparation and priming, two coats of microcement base and finish, sanding between coats for a smooth result, and finally 2–3 coats of sealer for protection. The full process usually takes 5–7 days from preparation to a fully cured, walkable surface, depending on room size and drying conditions.",
    },
    {
      id: "finish-options",
      heading: "What finish options are available?",
      content:
        "MONOCEM floors are available in matt, satin, and gloss finishes, and in over 100 standard colours with bespoke pigment matching available on request. Matt finishes are the most popular for residential floors, giving a soft, stone-like appearance, while satin and gloss are often chosen for more dramatic, reflective spaces.",
    },
    {
      id: "cost-considerations",
      heading: "What does a microcement floor cost?",
      content:
        "Pricing depends on substrate condition, room size, and finish complexity. Larger, simpler floor plans generally cost less per m² than small, complex rooms — see our full cost guide below for a detailed price breakdown.",
    },
    {
      id: "maintenance",
      heading: "How do you maintain a microcement floor?",
      content:
        "Day-to-day care is simple — regular sweeping and a damp mop with a pH-neutral cleaner is all that's needed. Sealed correctly, a MONOCEM floor will resist daily wear for years; resealing every few years in high-traffic areas keeps the surface looking new.",
    },
  ],
  relatedLinks: [
    { label: "Microcement Floors — Installation Service", href: "/installation/floors" },
    { label: "Microcement Cost UK", href: "/learn/microcement-cost-uk" },
    { label: "Microcement Maintenance Guide", href: "/learn/microcement-maintenance" },
    { label: "See Floor Projects", href: "/inspiration/projects" },
    { label: "Get a Free Quote", href: "/get-a-quote" },
  ],
  sidebarLinks: [
    { label: "Microcement Floors", description: "Installation Service", href: "/installation/floors" },
    { label: "Microcement Sealer", description: "Recommended Product", href: "/products/microcement-sealer" },
    { label: "See Real Floor Projects", description: "Inspiration", href: "/inspiration/projects" },
    { label: "Open a Trade Account", description: "For Installers & Builders", href: "/trade" },
  ],
};

export default function MicrocementFloorsPage() {
  return <GuideArticle data={data} />;
}
