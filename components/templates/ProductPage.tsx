import Link from "next/link";
import type { Product } from "@/lib/data/products";
import Hero from "@/components/sections/Hero";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import QuoteForm from "@/components/sections/QuoteForm";
import { products } from "@/lib/data/products";

interface ProductPageProps {
  product: Product;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://monocem.co.uk";

export default function ProductPage({ product }: ProductPageProps) {
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: "MONOCEM" },
    url: `${siteUrl}/products/${product.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Hero
        eyebrow="Products"
        headline={product.name}
        headlineItalic={undefined}
        subtext={product.tagline}
        primaryCta={{ label: "Request a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "All Products", href: "/products" }}
      />

      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Description */}
            <div>
              <FadeUp>
                <SectionLabel className="mb-6">Product Description</SectionLabel>
              </FadeUp>
              <FadeUp delay={1}>
                <h2 className="font-display font-light text-charcoal text-4xl leading-tight tracking-tight mb-6">
                  {product.name}
                </h2>
              </FadeUp>
              <FadeUp delay={2}>
                <p className="font-body font-light text-text-mid text-base leading-relaxed mb-8">{product.description}</p>
              </FadeUp>
              <FadeUp delay={2}>
                <Link href="/get-a-quote" className="btn-gold">
                  Request a Quote
                </Link>
              </FadeUp>
            </div>

            {/* Features */}
            <div>
              <FadeUp delay={1}>
                <h3 className="font-display font-light text-charcoal text-2xl mb-6">Features</h3>
                <ul className="space-y-4 mb-10">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-gold mt-1 shrink-0">—</span>
                      <p className="font-body font-light text-text-mid text-sm leading-relaxed">{feature}</p>
                    </li>
                  ))}
                </ul>
              </FadeUp>

              <FadeUp delay={2}>
                <h3 className="font-display font-light text-charcoal text-2xl mb-6">How to Use</h3>
                <ul className="space-y-3">
                  {product.howToUse.map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-[10px] font-body font-medium tracking-label text-gold shrink-0 pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-body font-light text-text-mid text-sm leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-20 bg-cream border-t border-stone/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-8">Related Products</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/products/${rel.slug}`}
                className="group block p-6 border border-charcoal/10 hover:border-gold/40 transition-colors duration-400 ease-brand"
              >
                <h3 className="font-display font-light text-charcoal text-xl mb-2 group-hover:text-gold transition-colors duration-400 ease-brand">
                  {rel.name}
                </h3>
                <p className="font-body font-light text-text-light text-sm">{rel.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 bg-warm-white border-t border-stone/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap gap-4">
          <Link href="/installation" className="btn-outline-dark text-xs">Installation Services</Link>
          <Link href="/get-a-quote" className="btn-gold text-xs">Get a Quote</Link>
          <Link href="/learn/how-to-apply-microcement" className="btn-outline-dark text-xs">How to Apply</Link>
        </div>
      </section>

      <QuoteForm />
    </>
  );
}
