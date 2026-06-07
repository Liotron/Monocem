import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Microcement Inspiration | Projects & Ideas | MONOCEM",
  description: "Explore MONOCEM's project portfolio for microcement inspiration. Residential, commercial, and bespoke microcement installations across the UK.",
  alternates: { canonical: "/inspiration" },
};

const categories = [
  { title: "Residential", slug: "residential", desc: "Microcement in luxury homes, apartments, and renovations across the UK." },
  { title: "Commercial", slug: "commercial", desc: "Hotels, restaurants, offices, and retail spaces finished with MONOCEM microcement." },
  { title: "Projects", slug: "projects", desc: "A curated selection of our most notable UK microcement projects." },
];

const gradients = [
  "linear-gradient(135deg, #4a4540 0%, #2e2a26 60%, #1a1816 100%)",
  "linear-gradient(135deg, #3d3835 0%, #25221f 60%, #151210 100%)",
  "linear-gradient(135deg, #423d38 0%, #2c2825 60%, #18150f 100%)",
];

export default function InspirationPage() {
  return (
    <>
      <Hero
        eyebrow="Inspiration"
        headline="Spaces That"
        headlineItalic="Endure"
        subtext="Browse our portfolio of microcement installations across residential and commercial projects throughout the UK."
        primaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "Our Systems", href: "/installation" }}
      />

      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <SectionLabel className="mb-6">Browse by Category</SectionLabel>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12">
            {categories.map((cat, i) => (
              <FadeUp key={cat.slug} delay={(Math.min(i, 4) as 0 | 1 | 2 | 3 | 4)}>
                <Link
                  href={`/inspiration/${cat.slug}`}
                  className="group relative block aspect-[3/2] overflow-hidden"
                  style={{ background: gradients[i] }}
                >
                  <div
                    className="absolute inset-0 opacity-20 mix-blend-overlay"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-brand" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-display font-light text-white text-3xl mb-2 group-hover:text-gold-light transition-colors duration-400 ease-brand">
                      {cat.title}
                    </h3>
                    <p className="font-body font-light text-white/50 text-sm">{cat.desc}</p>
                    <span className="inline-flex items-center gap-2 text-[10px] font-body font-medium tracking-button uppercase text-gold mt-4">
                      Explore <span className="transition-transform duration-400 ease-brand group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
