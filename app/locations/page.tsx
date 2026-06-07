import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import { locations } from "@/lib/data/locations";

export const metadata: Metadata = {
  title: "Microcement Installation UK Locations | MONOCEM",
  description: "MONOCEM installs professional microcement across the UK. Find your city and request a free quote for seamless microcement floors, walls, and bathrooms.",
  alternates: { canonical: "/locations" },
};


export default function LocationsPage() {
  return (
    <>
      <Hero
        eyebrow="Locations"
        headline="Microcement Across"
        headlineItalic="the UK"
        subtext="MONOCEM installs professional microcement in over 40 cities across the United Kingdom. Find your location and request a free quote."
        primaryCta={{ label: "Get a Free Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "Our Systems", href: "/installation" }}
      />

      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <SectionLabel className="mb-6">Coverage</SectionLabel>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight mb-12">
              40+ Cities, <em className="italic font-light">One Standard</em>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, i) => (
              <FadeUp key={location.slug} delay={(Math.min(i % 5, 4) as 0 | 1 | 2 | 3 | 4)}>
                <Link
                  href={`/locations/${location.slug}`}
                  className="group block p-6 border border-charcoal/10 hover:border-gold/40 transition-all duration-400 ease-brand"
                >
                  <h3 className="font-display font-light text-charcoal text-xl mb-1 group-hover:text-gold transition-colors duration-400 ease-brand">
                    {location.name}
                  </h3>
                  <p className="text-[10px] font-body font-medium tracking-label uppercase text-text-light mb-3">
                    {location.region}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-body font-medium tracking-button uppercase text-gold">
                    View <span className="transition-transform duration-400 ease-brand group-hover:translate-x-1">→</span>
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
