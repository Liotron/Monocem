import type { Metadata } from "next";
import ComingSoon from "@/components/templates/ComingSoon";

export const metadata: Metadata = {
  title: "Technical Data Sheets | MONOCEM",
  description: "Specifications, coverage rates, and downloadable technical data sheets for MONOCEM microcement systems.",
  alternates: { canonical: "/trade/technical-data" },
};

export default function TechnicalDataPage() {
  return (
    <ComingSoon
      title="Technical Data Sheets"
      description="Downloadable specifications and coverage rates are coming soon."
    />
  );
}
