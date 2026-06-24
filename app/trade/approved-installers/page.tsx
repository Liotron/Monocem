import type { Metadata } from "next";
import ComingSoon from "@/components/templates/ComingSoon";

export const metadata: Metadata = {
  title: "Approved Installers | MONOCEM",
  description: "Find a certified MONOCEM installer near you.",
  alternates: { canonical: "/trade/approved-installers" },
};

export default function ApprovedInstallersPage() {
  return (
    <ComingSoon
      title="Approved Installers"
      description="Our installer directory is coming soon. In the meantime, contact us to find a certified MONOCEM installer near you."
    />
  );
}
