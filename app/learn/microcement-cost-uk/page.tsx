import type { Metadata } from "next";
import LearnPage from "@/components/templates/LearnPage";

export const metadata: Metadata = {
  title: "Microcement Cost UK 2024 | Price Guide | MONOCEM",
  description: "How much does microcement cost in the UK? A transparent guide to microcement installation prices, supply-only rates, and what factors affect the overall cost.",
  alternates: { canonical: "/learn/microcement-cost-uk" },
};

const data = {
  title: "Microcement Cost UK",
  subtitle: "A transparent guide to microcement installation and supply pricing",
  intro: "Microcement costs in the UK vary depending on a range of factors — substrate condition, area size, surface type, and whether you're looking for professional installation or supply-only. This guide provides honest, realistic price ranges based on our experience installing microcement across the UK.",
  sections: [
    {
      heading: "Microcement cost at a glance",
      content: "A quick reference for typical MONOCEM pricing — see the sections below for what drives each figure.",
      table: {
        headers: ["Project type", "Typical price"],
        rows: [
          ["Professional installation (supply & install)", "£60–90 per m²"],
          ["Supply-only kit (5m² coverage)", "£80–120 + VAT"],
          ["Bathroom, floor & walls (5m²)", "£1,200–2,000"],
          ["Kitchen floor (15–25m²)", "£900–2,250"],
        ],
      },
    },
    {
      heading: "Professional installation pricing",
      content: "For MONOCEM professional installation (labour and materials), expect to budget £60–90 per m² for standard residential projects. This covers substrate preparation, primer, two coats of microcement, and full sealing. Complex substrates (highly uneven surfaces, significant remediation required), wet rooms requiring additional waterproofing, and access-difficult areas may increase costs. Minimum project sizes apply — smaller rooms carry a higher per-m² rate.",
    },
    {
      heading: "Supply-only pricing",
      content: "If you're having microcement installed by your own contractor, or are a trade installer purchasing through MONOCEM, product pricing depends on the system and quantities required. A standard system kit covering 5m² (base coat, finish coat, primer) starts from approximately £80–120 + VAT. Bulk trade pricing is available for qualified installers through our trade programme.",
    },
    {
      heading: "What affects microcement cost?",
      content: "The main cost factors are: substrate condition (the poorer the existing surface, the more preparation is required); room complexity (stairs, curved surfaces, and intricate layouts take longer); access and location (London and South East carries a premium over other regions); colour complexity (multi-colour or bespoke pigment work adds cost); and wet room specification (additional waterproofing membrane and extra sealer coats).",
    },
    {
      heading: "Bathroom microcement cost",
      content: "A typical bathroom microcement installation (floor and all walls) in a 5m² bathroom with walls runs to approximately £1,200–2,000 for supply and install. This includes additional waterproofing for the wet room area and three coats of sealer. Wet rooms require more careful preparation and sealing than dry rooms, which is reflected in the price.",
    },
    {
      heading: "Kitchen floor microcement cost",
      content: "An average kitchen floor installation (15–25m²) typically runs to £900–2,250 for supply and professional installation. Kitchen floors are generally one of the more straightforward microcement applications, as they involve a flat substrate without the waterproofing complexity of wet rooms. The main variable is substrate condition — whether existing tiles can be overcoated or need removal.",
    },
    {
      heading: "Is microcement worth the cost?",
      content: "Compared to premium alternatives — large-format porcelain tiling, natural stone flooring, or quartz worktops — microcement is highly competitive in price and offers advantages none of these alternatives can match: zero grout lines, completely seamless application, and the ability to coat over existing surfaces. For anyone valuing the architectural aesthetic of seamless surfaces, microcement offers exceptional value.",
    },
  ],
  relatedLinks: [
    { label: "Get a Free Quote", href: "/get-a-quote" },
    { label: "What is Microcement?", href: "/learn/what-is-microcement" },
    { label: "Microcement vs Polished Concrete", href: "/learn/microcement-vs-polished-concrete" },
    { label: "Installation Services", href: "/installation" },
    { label: "Trade Programme", href: "/trade" },
  ],
};

export default function MicroCementCostUKPage() {
  return <LearnPage data={data} />;
}
