import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MONOCEM",
  description: "MONOCEM's privacy policy — how we collect, use, and protect your personal data in accordance with UK GDPR.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-warm-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <h1 className="font-display font-light text-charcoal text-5xl mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none font-body font-light text-text-mid">
          <p>Last updated: January 2024</p>
          <h2 className="font-display font-light text-charcoal text-2xl mt-8 mb-4">1. Who we are</h2>
          <p>MONOCEM is a UK-based microcement supply and installation company. This privacy policy explains how we collect and use personal data when you interact with our website or enquire about our services.</p>
          <h2 className="font-display font-light text-charcoal text-2xl mt-8 mb-4">2. Data we collect</h2>
          <p>We collect personal data you provide directly — such as your name, email address, phone number, and project details — when you submit an enquiry through our website forms.</p>
          <h2 className="font-display font-light text-charcoal text-2xl mt-8 mb-4">3. How we use your data</h2>
          <p>We use your personal data solely to respond to your enquiry, provide quotes, and fulfil any services you request. We do not sell your data to third parties.</p>
          <h2 className="font-display font-light text-charcoal text-2xl mt-8 mb-4">4. Data retention</h2>
          <p>We retain enquiry data for up to 3 years unless you request deletion. You can contact us at any time to request access to, correction of, or deletion of your personal data.</p>
          <h2 className="font-display font-light text-charcoal text-2xl mt-8 mb-4">5. Contact</h2>
          <p>For privacy enquiries, contact us at {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@monocem.co.uk"}.</p>
        </div>
      </div>
    </div>
  );
}
