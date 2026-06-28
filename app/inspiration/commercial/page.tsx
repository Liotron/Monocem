import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import CtaBanner from "@/components/sections/CtaBanner";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Commercial Microcement Projects | Hotels & Restaurants | MONOCEM",
  description: "Commercial microcement installations by MONOCEM — hotels, restaurants, offices, and retail. Durable, seamless surfaces for high-traffic commercial environments.",
  alternates: { canonical: "/inspiration/commercial" },
};

export default function CommercialPage() {
  return (
    <>
      <Hero
        eyebrow="Commercial"
        headline="Microcement for"
        headlineItalic="Commercial Spaces"
        subtext="Hotels, restaurants, offices, and retail — MONOCEM delivers durable, architectural microcement surfaces for commercial environments that demand both beauty and performance."
        primaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "Our Systems", href: "/installation" }}
      />
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <FadeUp>
            <SectionLabel className="justify-center mb-4">Portfolio</SectionLabel>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
              Commercial Projects <em className="italic font-light text-text-light">Coming Soon</em>
            </h2>
          </FadeUp>
          <FadeUp delay={2}>
            <p className="font-body font-light text-text-mid text-base leading-relaxed max-w-[480px] mx-auto mb-10">
              We&apos;re currently building our commercial portfolio. In the meantime, browse our residential work or get in touch to discuss your hotel, restaurant, office, or retail project.
            </p>
          </FadeUp>
          <FadeUp delay={3}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/inspiration/residential" className="btn-outline-dark">
                View Residential Work
              </Link>
              <Link href="/get-a-quote" className="btn-gold">
                Get a Quote
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
      <CtaBanner
        eyebrow="Get in Touch"
        heading="Discuss Your"
        headingItalic="Commercial Project"
        text="Whether it's a hotel, restaurant, office, or retail space, our team can help you specify the right system."
        primaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "View Residential Work", href: "/inspiration/residential" }}
      />
    </>
  );
}
