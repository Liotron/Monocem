import type { Metadata } from "next";
import ComingSoon from "@/components/templates/ComingSoon";

export const metadata: Metadata = {
  title: "About Us | MONOCEM",
  description: "Learn more about MONOCEM, our story, and our mission to bring premium microcement systems to homes and businesses across the UK.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <ComingSoon
      title="About MONOCEM"
      description="Our story is coming soon. In the meantime, get in touch with our team for any questions about MONOCEM."
    />
  );
}
