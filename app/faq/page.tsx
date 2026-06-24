import type { Metadata } from "next";
import ComingSoon from "@/components/templates/ComingSoon";

export const metadata: Metadata = {
  title: "FAQ | MONOCEM",
  description: "Frequently asked questions about MONOCEM microcement systems, supply, and installation.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <ComingSoon
      title="Frequently Asked Questions"
      description="Our FAQ page is on its way. For immediate questions, get in touch with our team directly."
    />
  );
}
