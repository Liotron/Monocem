import type { Metadata } from "next";
import ComingSoon from "@/components/templates/ComingSoon";

export const metadata: Metadata = {
  title: "Installation Guides | MONOCEM",
  description: "Professional application documentation for installing MONOCEM microcement systems.",
  alternates: { canonical: "/trade/installation-guides" },
};

export default function InstallationGuidesPage() {
  return (
    <ComingSoon
      title="Installation Guides"
      description="Professional application documentation is coming soon."
    />
  );
}
