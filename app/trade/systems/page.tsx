import type { Metadata } from "next";
import ComingSoon from "@/components/templates/ComingSoon";

export const metadata: Metadata = {
  title: "MONOCEM Systems | MONOCEM",
  description: "Explore the complete MONOCEM professional microcement system — built for trade and professional installers.",
  alternates: { canonical: "/trade/systems" },
};

export default function TradeSystemsPage() {
  return (
    <ComingSoon
      title="MONOCEM Systems"
      description="A complete overview of our professional microcement system is coming soon."
    />
  );
}
