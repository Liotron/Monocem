import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import QuoteForm from "@/components/sections/QuoteForm";

export const metadata: Metadata = {
  title: "MONOCEM Installer Programme | Microcement Training UK",
  description: "Apply to the MONOCEM Approved Installer Programme. Professional microcement training, trade pricing, and installation referrals across the UK.",
  alternates: { canonical: "/trade/installer-programme" },
};

export default function InstallerProgrammePage() {
  return (
    <>
      <Hero
        eyebrow="Installer Programme"
        headline="Become a MONOCEM"
        headlineItalic="Approved Installer"
        subtext="Join our nationwide network of professional microcement installers. Access training, trade pricing, technical support, and installation referrals."
        primaryCta={{ label: "Apply Now", href: "#apply" }}
        secondaryCta={{ label: "Learn More", href: "/learn/how-to-apply-microcement" }}
      />

      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                n: "01",
                title: "Professional Training",
                desc: "A 2-day intensive practical training course covering all aspects of MONOCEM microcement application — substrate preparation, priming, coating, and sealing.",
              },
              {
                n: "02",
                title: "Trade Pricing",
                desc: "Approved installers receive preferential trade pricing on all MONOCEM products, improving your project margins and competitive position.",
              },
              {
                n: "03",
                title: "Technical Support",
                desc: "Access to our dedicated technical support line for advice on substrate assessment, product selection, and problem-solving during projects.",
              },
              {
                n: "04",
                title: "Installer Directory",
                desc: "Listed on the MONOCEM approved installer directory — accessed by clients seeking vetted professionals for their projects.",
              },
              {
                n: "05",
                title: "CPD Workshops",
                desc: "Regular continuing professional development workshops to keep you updated on new techniques, products, and system developments.",
              },
              {
                n: "06",
                title: "Referral Network",
                desc: "We actively refer installation enquiries to our approved installer network — a valuable source of leads for qualified professionals.",
              },
            ].map((item, i) => (
              <FadeUp key={item.n} delay={(Math.min(i % 4, 4) as 0 | 1 | 2 | 3 | 4)}>
                <div className="p-8 border border-charcoal/10">
                  <span className="text-[10px] font-body font-medium tracking-label text-gold block mb-4">{item.n}</span>
                  <h3 className="font-display font-light text-charcoal text-xl mb-3">{item.title}</h3>
                  <p className="font-body font-light text-text-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-charcoal-2" id="apply">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <FadeUp>
            <SectionLabel light className="mb-6">Apply</SectionLabel>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="font-display font-light text-white text-4xl mb-6">
              Ready to Apply?
            </h2>
          </FadeUp>
          <FadeUp delay={2}>
            <p className="font-body font-light text-white/60 text-base leading-relaxed mb-8">
              Use the enquiry form below to apply to the MONOCEM Installer Programme. Include details about your existing trade background and the types of projects you work on.
            </p>
          </FadeUp>
          <FadeUp delay={3}>
            <Link href="/get-a-quote" className="btn-gold">
              Submit an Application
            </Link>
          </FadeUp>
        </div>
      </section>

      <QuoteForm />
    </>
  );
}
