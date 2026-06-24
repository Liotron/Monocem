import type { Metadata } from "next";
import ComingSoon from "@/components/templates/ComingSoon";

export const metadata: Metadata = {
  title: "Cookies Policy | MONOCEM",
  description: "MONOCEM's cookies policy — how we use cookies on our website.",
  alternates: { canonical: "/cookies-policy" },
};

export default function CookiesPolicyPage() {
  return (
    <ComingSoon
      title="Cookies Policy"
      description="Our cookies policy is coming soon."
    />
  );
}
