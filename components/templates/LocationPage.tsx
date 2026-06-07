import Link from "next/link";
import type { Location } from "@/lib/data/locations";
import Hero from "@/components/sections/Hero";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import ColourCollection from "@/components/sections/ColourCollection";
import QuoteForm from "@/components/sections/QuoteForm";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { surfaces } from "@/lib/data/surfaces";

interface LocationPageProps {
  location: Location;
}

const topCities = ["London", "Manchester", "Birmingham", "Bristol", "Leeds"];

export default function LocationPage({ location }: LocationPageProps) {
  const nearbyLocations = topCities.filter((c) => c !== location.name).slice(0, 4);

  const faqs = [
    {
      q: `Do you install microcement in ${location.name}?`,
      a: `Yes — MONOCEM installs professional microcement across ${location.name} and the wider ${location.region} area. We cover all residential and commercial projects. Use our quote form to get a detailed estimate for your project.`,
    },
    {
      q: `How long does microcement installation take in ${location.name}?`,
      a: `A typical room (20–30m²) takes 3–5 days to complete, allowing for drying and curing time between coats. Larger projects are scheduled accordingly. We'll provide a full timeline estimate when you submit your enquiry.`,
    },
    {
      q: `What surfaces can you apply microcement to in ${location.name}?`,
      a: `We can apply microcement over tiles, plaster, concrete, and timber across ${location.name}. Our team will assess your specific substrate during the consultation to recommend the best preparation approach.`,
    },
    {
      q: `Is microcement suitable for the climate in ${location.region}?`,
      a: `Yes — MONOCEM microcement is formulated to perform in all UK interior environments. Our sealed system is fully waterproof and resistant to temperature variation, making it ideal for ${location.region} properties.`,
    },
  ];

  return (
    <>
      <Hero
        eyebrow={location.region}
        headline={`Microcement Installation in ${location.name}`}
        subtext={`MONOCEM supplies and installs premium microcement across ${location.name} and the wider ${location.region}. Seamless, waterproof surfaces for floors, walls, bathrooms, and worktops.`}
        primaryCta={{ label: "Get a Free Quote", href: "#quote" }}
        secondaryCta={{ label: "View Our Systems", href: "/installation" }}
      />

      {/* Services section */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <SectionLabel className="mb-6">Our Services in {location.name}</SectionLabel>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
              What We Offer in{" "}
              <em className="italic font-light">{location.name}</em>
            </h2>
          </FadeUp>
          <FadeUp delay={2}>
            <p className="font-body font-light text-text-mid text-base leading-relaxed mb-12 max-w-2xl">
              {location.description} MONOCEM brings professional microcement installation to properties across {location.name}, transforming floors, walls, bathrooms, and kitchens with our seamless, architectural system.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {surfaces.map((surface, i) => (
              <FadeUp key={surface.slug} delay={(Math.min(i % 4, 4) as 0 | 1 | 2 | 3 | 4)}>
                <Link
                  href={`/installation/${surface.slug}`}
                  className="group block p-6 border border-charcoal/10 hover:border-gold/40 transition-colors duration-400 ease-brand"
                >
                  <h3 className="font-display font-light text-charcoal text-xl mb-2 group-hover:text-gold transition-colors duration-400 ease-brand">
                    {surface.name}
                  </h3>
                  <p className="font-body font-light text-text-light text-sm leading-relaxed">
                    {surface.description.slice(0, 100)}...
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-body font-medium tracking-button uppercase text-gold mt-4">
                    Learn more <span className="transition-transform duration-400 ease-brand group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why Monocem in city */}
      <section className="py-24 lg:py-32 bg-charcoal-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp>
                <SectionLabel light className="mb-6">Why MONOCEM</SectionLabel>
              </FadeUp>
              <FadeUp delay={1}>
                <h2 className="font-display font-light text-white text-4xl lg:text-5xl leading-tight tracking-tight mb-8">
                  Premium Microcement in{" "}
                  <em className="italic font-light text-gold-light">{location.name}</em>
                </h2>
              </FadeUp>
              <FadeUp delay={2}>
                <ul className="space-y-6">
                  {[
                    { title: "Local expertise", desc: `We understand the specific demands of ${location.name} properties, from period conversions to contemporary new builds.` },
                    { title: "Nationwide standards", desc: "Every MONOCEM installation follows our rigorous quality system — consistent results wherever you are in the UK." },
                    { title: "Full project management", desc: "From initial consultation to final seal coat, we manage every stage of your microcement project." },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <span className="text-gold mt-1 shrink-0">—</span>
                      <div>
                        <p className="font-body font-medium text-white text-sm mb-1">{item.title}</p>
                        <p className="font-body font-light text-white/50 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
            <FadeUp delay={1}>
              <div
                className="aspect-square"
                style={{ background: "linear-gradient(160deg, #4a4540 0%, #2e2a26 50%, #1a1816 100%)" }}
              >
                <div
                  className="w-full h-full opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <ColourCollection />

      <QuoteForm />

      <FAQAccordion faqs={faqs} />

      {/* Nearby locations */}
      <section className="py-16 bg-stone/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="section-label mb-6 text-gold">Also Serving</p>
          <div className="flex flex-wrap gap-3">
            {nearbyLocations.map((city) => (
              <Link
                key={city}
                href={`/locations/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-5 py-2.5 text-[11px] font-body font-medium tracking-button uppercase text-text-mid border border-charcoal/15 hover:border-gold/50 hover:text-charcoal transition-all duration-200"
              >
                Microcement {city}
              </Link>
            ))}
            <Link
              href="/locations"
              className="px-5 py-2.5 text-[11px] font-body font-medium tracking-button uppercase text-gold border border-gold/30 hover:border-gold transition-all duration-200"
            >
              All Locations →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
