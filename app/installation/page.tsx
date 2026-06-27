import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import QuoteForm from "@/components/sections/QuoteForm";
import { surfaces } from "@/lib/data/surfaces";
import { truncateAtWord } from "@/lib/utils/text";

export const metadata: Metadata = {
  title: "Microcement Installation UK | All Surface Systems | MONOCEM",
  description: "Professional microcement installation across the UK. MONOCEM installs seamless microcement on floors, walls, bathrooms, kitchens, worktops, and stairs. Request a quote.",
  alternates: { canonical: "/installation" },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://monocem.co.uk";

const surfacesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: surfaces.map((surface, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${siteUrl}/installation/${surface.slug}`,
    name: surface.name,
  })),
};

export default function InstallationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(surfacesListSchema) }}
      />
      <Hero
        eyebrow="Installation"
        headline="Professional Microcement"
        headlineItalic="Installation"
        subtext="MONOCEM professionally installs seamless microcement surfaces across the UK — from bathroom wet rooms to open-plan kitchen floors."
        primaryCta={{ label: "Get a Free Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "Our Products", href: "/products" }}
      />

      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <SectionLabel className="mb-6">Our Installation Systems</SectionLabel>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight mb-12">
              Every Surface, <em className="italic font-light">Perfected</em>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {surfaces.map((surface, i) => (
              <FadeUp key={surface.slug} delay={(Math.min(i % 4, 4) as 0 | 1 | 2 | 3 | 4)}>
                <Link
                  href={`/installation/${surface.slug}`}
                  className="group block p-8 border border-charcoal/10 hover:border-gold/40 transition-all duration-400 ease-brand"
                >
                  <h3 className="font-display font-light text-charcoal text-2xl mb-3 group-hover:text-gold transition-colors duration-400 ease-brand">
                    {surface.name}
                  </h3>
                  <p className="font-body font-light text-text-light text-sm leading-relaxed mb-6">
                    {truncateAtWord(surface.description, 120)}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {surface.benefits.slice(0, 3).map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2">
                        <span className="text-gold text-[0.8rem] shrink-0 mt-0.5">—</span>
                        <span className="font-body font-light text-text-light text-[0.8rem]">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-[10px] font-body font-medium tracking-button uppercase text-gold">
                    Learn more <span className="transition-transform duration-400 ease-brand group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <QuoteForm />
    </>
  );
}
