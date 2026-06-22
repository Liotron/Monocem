import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import { colours } from "@/lib/data/colours";

export default function ColourCollection() {
  return (
    <section id="colours" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-14">
          <div>
            <FadeUp>
              <SectionLabel className="mb-4">Colour Collection</SectionLabel>
            </FadeUp>
            <FadeUp delay={1}>
              <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight">
                12 Curated <em className="italic font-light">Shades</em>
              </h2>
            </FadeUp>
            <FadeUp delay={2}>
              <p className="font-body font-light text-text-mid text-base leading-relaxed mt-4 max-w-lg">
                From soft whites to deep charcoals, our palette covers the full architectural spectrum. Each shade is tested for colour consistency across application batches.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={2}>
            <Link href="/get-a-quote" className="btn-outline-dark">
              Order Samples
            </Link>
          </FadeUp>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-0.5">
          {colours.map((colour, i) => (
            <FadeUp key={colour.cssClass} delay={(Math.min(i % 5, 4) as 0 | 1 | 2 | 3 | 4)}>
              <div className="group cursor-pointer">
                <div
                  className="aspect-square relative overflow-hidden"
                  style={{ backgroundColor: colour.hex }}
                >
                  {/* Noise texture overlay */}
                  <div
                    className="absolute inset-0 opacity-30 mix-blend-multiply"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-brand bg-black/20">
                    <span className="text-[9px] font-body font-medium tracking-label uppercase text-white/90">
                      {colour.hex}
                    </span>
                  </div>
                </div>
                <div className="pt-3 pb-4 px-1">
                  <p className="text-[11px] font-body font-medium text-charcoal leading-tight">{colour.name}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
