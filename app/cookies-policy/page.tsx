import type { Metadata } from "next";
import LegalPage from "@/components/templates/LegalPage";

export const metadata: Metadata = {
  title: "Cookies Policy | MONOCEM",
  description: "MONOCEM's cookies policy — how we use cookies on our website.",
  alternates: { canonical: "/cookies-policy" },
};

export default function CookiesPolicyPage() {
  return (
    <LegalPage title="Cookies Policy" lastUpdated="June 2026">
      <h2 className="font-display font-light text-charcoal text-2xl mt-8 mb-4">1. What are cookies?</h2>
      <p>Cookies are small text files placed on your device by a website you visit. They are commonly used to make websites function correctly, remember preferences, or gather analytics and advertising data.</p>
      <h2 className="font-display font-light text-charcoal text-2xl mt-8 mb-4">2. Cookies we use</h2>
      <p>The MONOCEM website does not currently use cookies for analytics, advertising, or tracking purposes. We do not deploy third-party tracking scripts, such as Google Analytics or advertising pixels, on this site. Any information you submit through our enquiry forms is sent directly to our team and is not stored using cookies — see our Privacy Policy for how that data is handled.</p>
      <h2 className="font-display font-light text-charcoal text-2xl mt-8 mb-4">3. Changes to this policy</h2>
      <p>If we introduce analytics, advertising, or other cookie-based technology in future, we will update this policy to explain what is used and how you can manage your preferences.</p>
      <h2 className="font-display font-light text-charcoal text-2xl mt-8 mb-4">4. Contact</h2>
      <p>For questions about this cookies policy, contact us at {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@monocem.co.uk"}.</p>
    </LegalPage>
  );
}
