import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import QuoteForm from "@/components/sections/QuoteForm";
import { products } from "@/lib/data/products";
import { truncateAtWord } from "@/lib/utils/text";

export const metadata: Metadata = {
  title: "Microcement Products UK | Buy Professional Microcement | MONOCEM",
  description: "Shop MONOCEM's professional microcement products — kits, primer, sealer, pigments, and tools. Everything needed for a perfect microcement installation. UK delivery.",
  alternates: { canonical: "/products" },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://monocem.co.uk";

const productsListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: products.map((product, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${siteUrl}/products/${product.slug}`,
    name: product.name,
  })),
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsListSchema) }}
      />
      <Hero
        eyebrow="Products"
        headline="Professional Microcement"
        headlineItalic="Products"
        subtext="MONOCEM supplies professional-grade microcement kits, primers, sealers, pigments, and tools for installers and trade professionals across the UK."
        primaryCta={{ label: "Request a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "Installation Services", href: "/installation" }}
      />

      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <SectionLabel className="mb-6">Our Range</SectionLabel>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight mb-12">
              The Full <em className="italic font-light">System</em>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <FadeUp key={product.slug} delay={(Math.min(i % 4, 4) as 0 | 1 | 2 | 3 | 4)}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group block p-8 border border-charcoal/10 hover:border-gold/40 transition-all duration-400 ease-brand"
                >
                  <h3 className="font-display font-light text-charcoal text-2xl mb-2 group-hover:text-gold transition-colors duration-400 ease-brand">
                    {product.name}
                  </h3>
                  <p className="text-[10px] font-body font-medium tracking-label uppercase text-gold/70 mb-4">{product.tagline}</p>
                  <p className="font-body font-light text-text-light text-sm leading-relaxed mb-6">
                    {truncateAtWord(product.description, 120)}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-body font-medium tracking-button uppercase text-gold">
                    View product <span className="transition-transform duration-400 ease-brand group-hover:translate-x-1">→</span>
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
