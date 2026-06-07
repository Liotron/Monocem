import Link from "next/link";
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

export default function SurfacePage({ surface }: SurfacePageProps) {
  return (
    <>
      <Hero
        eyebrow="Installation"
        headline={surface.headline}
        subtext={surface.description.slice(0, 150)}
        primaryCta={{ label: "Get a Free Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "View Products", href: "/products" }}
      />

      {/* Description */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <FadeUp>
                <SectionLabel className="mb-6">About this System</SectionLabel>
              </FadeUp>
              <FadeUp delay={1}>
                <h2 className="font-display font-light text-charcoal text-4xl leading-tight tracking-tight mb-6">
                  Microcement {surface.name}
                </h2>
              </FadeUp>
              <FadeUp delay={2}>
                <p className="font-body font-light text-text-mid text-base leading-relaxed">{surface.description}</p>
              </FadeUp>
            </div>
            <div>
              <FadeUp delay={1}>
                <h3 className="font-display font-light text-charcoal text-2xl mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {surface.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-gold mt-1 shrink-0">—</span>
                      <p className="font-body font-light text-text-mid text-sm leading-relaxed">{benefit}</p>
                    </li>
                  ))}
                </ul>
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
