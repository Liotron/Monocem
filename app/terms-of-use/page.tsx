import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | MONOCEM",
  description: "MONOCEM's terms of use — the conditions governing use of our website and services.",
  alternates: { canonical: "/terms-of-use" },
};

export default function TermsOfUsePage() {
  return (
    <div className="pt-32 pb-24 bg-warm-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <h1 className="font-display font-light text-charcoal text-5xl mb-8">Terms of Use</h1>
        <div className="prose prose-lg max-w-none font-body font-light text-text-mid">
          <p>Last updated: January 2024</p>
          <h2 className="font-display font-light text-charcoal text-2xl mt-8 mb-4">1. Acceptance of terms</h2>
          <p>By using the MONOCEM website, you agree to these terms of use. If you do not agree, please do not use our website.</p>

          <h2 className="font-display font-light text-charcoal text-2xl mt-8 mb-4">2. Website use</h2>
          <p>This website is provided for informational purposes about MONOCEM products and services. All content is copyright MONOCEM and may not be reproduced without written permission.</p>
          <h2 className="font-display font-light text-charcoal text-2xl mt-8 mb-4">3. Accuracy of information</h2>
          <p>We make every effort to ensure the accuracy of information on this website, but pricing, availability, and specifications may change. Always contact us directly to confirm current details.</p>
          <h2 className="font-display font-light text-charcoal text-2xl mt-8 mb-4">4. Limitation of liability</h2>
          <p>MONOCEM&apos;s liability is limited to the maximum extent permitted by law. We are not liable for any indirect or consequential loss arising from use of this website.</p>
          <h2 className="font-display font-light text-charcoal text-2xl mt-8 mb-4">5. Governing law</h2>
          <p>These terms are governed by the laws of England and Wales.</p>
        </div>
      </div>
    </div>
  );
}
