import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import InstallerSection from "@/components/sections/InstallerSection";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import TradeAccountForm from "@/components/sections/TradeAccountForm";

export const metadata: Metadata = {
  title: "Trade Microcement Supply UK | MONOCEM Trade Programme",
  description: "MONOCEM's trade programme — professional microcement supply, installer training, and trade pricing for builders, renovators, and design professionals across the UK.",
  alternates: { canonical: "/trade" },
};

export default function TradePage() {
  return (
    <>
      <Hero
        eyebrow="Trade"
        headline="Professional Microcement"
        headlineItalic="for Trade"
        subtext="MONOCEM supports builders, renovators, interior designers, and professional installers with trade pricing, technical support, and installer training."
        primaryCta={{ label: "Apply to Trade Programme", href: "/trade/installer-programme" }}
        secondaryCta={{ label: "View Products", href: "/products" }}
      />

      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <FadeUp>
                <SectionLabel className="mb-6">Trade Supply</SectionLabel>
              </FadeUp>
              <FadeUp delay={1}>
                <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
                  Trade <em className="italic font-light">Pricing & Supply</em>
                </h2>
              </FadeUp>
              <FadeUp delay={2}>
                <p className="font-body font-light text-text-mid text-base leading-relaxed mb-8">
                  MONOCEM supplies professional microcement systems to trade customers across the UK. Trade accounts benefit from preferential pricing, dedicated account management, and priority delivery.
                </p>
              </FadeUp>
              <FadeUp delay={2}>
                <ul className="space-y-4 mb-10">
                  {[
                    "Trade pricing on all MONOCEM products",
                    "Minimum order quantities for trade accounts",
                    "UK-wide delivery within 3–5 working days",
                    "Technical data sheets and application guides",
                    "Dedicated trade account manager",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-gold mt-1 shrink-0">—</span>
                      <span className="font-body font-light text-text-mid text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>
              <FadeUp delay={3}>
                <Link href="#trade-account" className="btn-outline-dark">
                  Open a Trade Account
                </Link>
              </FadeUp>
            </div>

            <div>
              <FadeUp delay={1}>
                <SectionLabel className="mb-6">Installer Programme</SectionLabel>
              </FadeUp>
              <FadeUp delay={2}>
                <h2 className="font-display font-light text-charcoal text-3xl leading-tight tracking-tight mb-6">
                  Become an Approved Installer
                </h2>
              </FadeUp>
              <FadeUp delay={2}>
                <p className="font-body font-light text-text-mid text-base leading-relaxed mb-8">
                  Our installer programme takes qualified tradespeople and provides the training, materials knowledge, and certification to install MONOCEM systems to our exacting standards.
                </p>
              </FadeUp>
              <FadeUp delay={3}>
                <Link href="/trade/installer-programme" className="btn-gold">
                  Installer Programme →
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <InstallerSection />
      <TradeAccountForm />
    </>
  );
}
