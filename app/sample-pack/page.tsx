import type { Metadata } from "next";
import ComingSoon from "@/components/templates/ComingSoon";

export const metadata: Metadata = {
  title: "Sample Pack | MONOCEM",
  description: "Order a MONOCEM microcement sample pack to see and feel our finishes before you commit to a project.",
  alternates: { canonical: "/sample-pack" },
};

export default function SamplePackPage() {
  return (
    <ComingSoon
      title="Sample Pack"
      description="Online sample pack ordering is coming soon. Contact us in the meantime to request samples."
    />
  );
}
