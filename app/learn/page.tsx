import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Microcement Guides & Resources | Learn | MONOCEM",
  description: "Learn everything about microcement — what it is, how to apply it, costs, maintenance, and comparisons with polished concrete. Expert guides from MONOCEM.",
  alternates: { canonical: "/learn" },
};

const articles = [
  { title: "What is Microcement?", slug: "what-is-microcement", desc: "A complete introduction to microcement — composition, applications, and why it's the surface of choice for modern interiors." },
  { title: "Microcement vs Polished Concrete", slug: "microcement-vs-polished-concrete", desc: "Understand the key differences between microcement and polished concrete to choose the right surface for your project." },
  { title: "How to Apply Microcement", slug: "how-to-apply-microcement", desc: "A step-by-step guide to professional microcement application — preparation, coating, sanding, and sealing." },
  { title: "Microcement Maintenance Guide", slug: "microcement-maintenance", desc: "How to care for your microcement surface — cleaning, resealing, and protecting your investment for decades." },
  { title: "Microcement Cost UK", slug: "microcement-cost-uk", desc: "A transparent guide to microcement costs in the UK — installation pricing, supply-only rates, and what affects the price." },
];

export default function LearnHubPage() {
  return (
    <>
      <Hero
        eyebrow="Learn"
        headline="Microcement"
        headlineItalic="Knowledge Base"
        subtext="Everything you need to know about microcement — from what it is to how much it costs. Expert guides written by our installation team."
        primaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "View Systems", href: "/installation" }}
      />

      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <SectionLabel className="mb-6">Articles & Guides</SectionLabel>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
            {articles.map((article, i) => (
              <FadeUp key={article.slug} delay={(Math.min(i % 4, 4) as 0 | 1 | 2 | 3 | 4)}>
                <Link
                  href={`/learn/${article.slug}`}
                  className="group block p-8 border border-charcoal/10 hover:border-gold/40 transition-all duration-400 ease-brand"
                >
                  <SectionLabel className="mb-3">Guide</SectionLabel>
                  <h3 className="font-display font-light text-charcoal text-2xl mb-3 group-hover:text-gold transition-colors duration-400 ease-brand">
                    {article.title}
                  </h3>
                  <p className="font-body font-light text-text-light text-sm leading-relaxed mb-5">
                    {article.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-body font-medium tracking-button uppercase text-gold">
                    Read guide <span className="transition-transform duration-400 ease-brand group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
