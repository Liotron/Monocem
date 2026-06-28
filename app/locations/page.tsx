import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import { locations, type Location } from "@/lib/data/locations";

export const metadata: Metadata = {
  title: "Microcement Installation UK Locations | MONOCEM",
  description: "MONOCEM installs professional microcement across the UK. Find your city and request a free quote for seamless microcement floors, walls, and bathrooms.",
  alternates: { canonical: "/locations" },
};

const featuredSlugs = ["london", "manchester", "birmingham", "leeds", "bristol", "liverpool", "edinburgh", "glasgow"];

const areaByRegion: Record<string, string> = {
  "Greater London": "London & South East",
  Berkshire: "London & South East",
  Buckinghamshire: "London & South East",
  Oxfordshire: "London & South East",
  Hampshire: "London & South East",
  "East Sussex": "London & South East",
  Bedfordshire: "London & South East",
  "South West England": "South West England",
  Somerset: "South West England",
  Devon: "South West England",
  Dorset: "South West England",
  Gloucestershire: "South West England",
  "West Midlands": "Midlands",
  "East Midlands": "Midlands",
  Derbyshire: "Midlands",
  Staffordshire: "Midlands",
  Northamptonshire: "Midlands",
  "Greater Manchester": "North England",
  "West Yorkshire": "North England",
  "South Yorkshire": "North England",
  Merseyside: "North England",
  "Tyne and Wear": "North England",
  "North Yorkshire": "North England",
  "East Yorkshire": "North England",
  Norfolk: "East of England",
  Suffolk: "East of England",
  Cambridgeshire: "East of England",
  Scotland: "Scotland",
  Wales: "Wales",
};

const areaOrder = ["London & South East", "South West England", "Midlands", "North England", "East of England", "Scotland", "Wales"];

const featuredLocations = featuredSlugs
  .map((slug) => locations.find((l) => l.slug === slug))
  .filter((l): l is Location => Boolean(l));

const groupedLocations = areaOrder
  .map((area) => ({
    area,
    cities: locations.filter((l) => areaByRegion[l.region] === area),
  }))
  .filter((group) => group.cities.length > 0);

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

      {/* Featured Cities */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <SectionLabel className="mb-6">Featured Cities</SectionLabel>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight mb-12">
              Our Largest <em className="italic font-light text-text-light">UK Markets</em>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredLocations.map((location, i) => (
              <FadeUp key={location.slug} delay={(Math.min(i % 5, 4) as 0 | 1 | 2 | 3 | 4)}>
                <Link
                  href={`/locations/${location.slug}`}
                  className="group block p-6 border border-charcoal/10 hover:border-gold/40 transition-all duration-400 ease-brand h-full"
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

      {/* All Locations Directory */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <SectionLabel className="mb-6">All Locations</SectionLabel>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight mb-12">
              40+ Cities, <em className="italic font-light text-text-light">One Standard</em>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
            {groupedLocations.map((group, i) => (
              <FadeUp key={group.area} delay={(Math.min(i % 5, 4) as 0 | 1 | 2 | 3 | 4)}>
                <h3 className="font-body text-[0.8rem] font-medium tracking-[0.08em] uppercase text-charcoal mb-4 pb-3 border-b border-charcoal/10">
                  {group.area}
                </h3>
                <ul className="space-y-2.5">
                  {group.cities.map((location) => (
                    <li key={location.slug}>
                      <Link
                        href={`/locations/${location.slug}`}
                        className="font-body font-light text-text-mid text-sm hover:text-gold transition-colors duration-300"
                      >
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
