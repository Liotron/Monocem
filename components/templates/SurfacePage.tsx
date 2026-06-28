import Link from "next/link";
import Image from "next/image";
import type { Surface } from "@/lib/data/surfaces";
import Hero from "@/components/sections/Hero";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import ColourCollection from "@/components/sections/ColourCollection";
import QuoteForm from "@/components/sections/QuoteForm";
import FAQAccordion from "@/components/sections/FAQAccordion";

interface SurfacePageProps {
  surface: Surface;
}

const topCities = [
  { name: "London", slug: "london" },
  { name: "Manchester", slug: "manchester" },
  { name: "Birmingham", slug: "birmingham" },
  { name: "Bristol", slug: "bristol" },
  { name: "Edinburgh", slug: "edinburgh" },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://monocem.co.uk";

export default function SurfacePage({ surface }: SurfacePageProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `Microcement ${surface.name} Installation`,
    name: surface.headline,
    description: surface.description,
    provider: { "@type": "Organization", name: "MONOCEM", url: siteUrl },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    url: `${siteUrl}/installation/${surface.slug}`,
    image: surface.heroImage ? `${siteUrl}${surface.heroImage}` : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Hero
        eyebrow="Installation"
        headline={surface.headline}
        subtext={surface.description}
        primaryCta={{ label: "Get a Free Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "View Products", href: "/products" }}
      />

      {/* Editorial hero photo(s) */}
      {surface.storyFigures ? (
        <section className="pt-10 md:pt-14 lg:pt-16 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-12 md:gap-14">
            {surface.storyFigures.map((fig, i) => (
              <FadeUp key={fig.image} delay={(i === 1 ? 1 : 0) as 0 | 1}>
                <figure>
                  <div
                    className={`relative w-full overflow-hidden ${fig.wide ? "aspect-[5/2] md:aspect-[10/3]" : "aspect-[16/9] md:aspect-[21/9]"}`}
                    style={{ borderRadius: 16 }}
                  >
                    <Image
                      src={fig.image}
                      alt={fig.caption}
                      fill
                      priority={i === 0}
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-center text-[0.65rem] font-body font-medium tracking-[0.22em] uppercase text-text-light">
                    {fig.caption}
                  </figcaption>
                </figure>
              </FadeUp>
            ))}
          </div>
        </section>
      ) : (
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 md:pt-14 lg:pt-16">
          <FadeUp>
            <div
              className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden"
              style={{ borderRadius: 16 }}
            >
              <Image
                src={surface.heroImage!}
                alt={`${surface.name} microcement installation`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: surface.heroImagePosition ?? "center" }}
              />
            </div>
          </FadeUp>
        </div>
      )}

      {/* Editorial text + features */}
      <section className="py-16 md:py-20 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <FadeUp>
                <SectionLabel className="mb-6">{surface.sectionLabel}</SectionLabel>
              </FadeUp>
              <FadeUp delay={1}>
                <h2 className="font-display font-light text-charcoal text-4xl leading-tight tracking-tight mb-6">
                  {surface.sectionHeadingLine1}
                  <br />
                  {surface.sectionHeadingLine2Italic ? (
                    <em className="italic font-light text-text-light">{surface.sectionHeadingLine2}</em>
                  ) : (
                    surface.sectionHeadingLine2
                  )}
                </h2>
              </FadeUp>
              <FadeUp delay={2}>
                {surface.sectionParagraphs.map((p, i) => (
                  <p key={i} className="font-body font-light text-text-mid text-base leading-relaxed mb-4 last:mb-0">
                    {p}
                  </p>
                ))}
              </FadeUp>
            </div>
            <div>
              <FadeUp delay={1}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {surface.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-gold mt-1 shrink-0">—</span>
                      <div>
                        <h5 className="font-body text-[0.8rem] font-medium tracking-wide text-charcoal mb-1">{feature.title}</h5>
                        <p className="font-body font-light text-text-light text-[0.82rem] leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-charcoal-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <SectionLabel light className="mb-6">Application Process</SectionLabel>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="font-display font-light text-white text-4xl leading-tight tracking-tight mb-12">
              How We Install
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {surface.process.map((step, i) => (
              <FadeUp key={i} delay={(Math.min(i % 4, 4) as 0 | 1 | 2 | 3 | 4)}>
                <div className="flex gap-5">
                  <span className="text-[10px] font-body font-medium tracking-label text-gold shrink-0 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body font-light text-white/60 text-sm leading-relaxed">{step}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center py-20 lg:py-28 px-6 bg-charcoal">
        <FadeUp>
          <h2 className="font-display font-light text-white text-4xl lg:text-5xl leading-tight tracking-tight mb-8">
            {surface.ctaHeading}{" "}
            <em className="italic font-light text-white/50">{surface.ctaHeadingItalic}</em>
          </h2>
          <Link href="/get-a-quote" className="btn-gold">
            {surface.ctaButtonLabel}
          </Link>
        </FadeUp>
      </div>

      <ColourCollection />

      {/* Top cities links */}
      <section className="py-12 bg-warm-white border-t border-stone/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="section-label mb-5">Installation Locations</p>
          <div className="flex flex-wrap gap-3">
            {topCities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="px-5 py-2.5 text-[11px] font-body font-medium tracking-button uppercase text-text-mid border border-charcoal/15 hover:border-gold/50 hover:text-charcoal transition-all duration-200"
              >
                {surface.name} in {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion />

      <QuoteForm />
    </>
  );
}
