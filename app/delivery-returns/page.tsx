import type { Metadata } from "next";
import ComingSoon from "@/components/templates/ComingSoon";

export const metadata: Metadata = {
  title: "Delivery & Returns | MONOCEM",
  description: "MONOCEM delivery and returns information for UK orders.",
  alternates: { canonical: "/delivery-returns" },
};

export default function DeliveryReturnsPage() {
  return (
    <ComingSoon
      title="Delivery & Returns"
      description="Our delivery and returns policy page is coming soon."
    />
  );
}
