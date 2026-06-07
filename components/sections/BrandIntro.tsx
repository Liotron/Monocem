import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

const points = [
  { n: "01", title: "Seamless Finish", desc: "No joints, no grout lines — a continuous surface that elevates any space." },
  { n: "02", title: "Zero Grout Lines", desc: "Unlike tiles, microcement creates one uninterrupted surface across floors, walls, and furniture." },
  { n: "03", title: "Waterproof System", desc: "Our sealed system is fully waterproof — ideal for bathrooms, wet rooms, and kitchens." },
  { n: "04", title: "Colour Consistency", desc: "12 professionally curated shades applied with precision for consistent, lasting colour." },
  { n: "05", title: "Lifetime Durability", desc: "When correctly installed and sealed, MONOCEM surfaces are built to last a lifetime." },
];

export default function BrandIntro() {
  return (
    <section className="py-24 lg:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: text */}
          <div>
            <FadeUp>
              <SectionLabel className="mb-6">Our Philosophy</SectionLabel>
            </FadeUp>
            <FadeUp delay={1}>
              <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight mb-8">
                Architectural Microcement,{" "}
                <em className="italic font-light">Redefined</em>
              </h2>
            </FadeUp>
            <FadeUp delay={2}>
              <p className="font-body font-light text-text-mid text-base leading-relaxed mb-12">
                MONOCEM brings continental European microcement craftsmanship to the UK, supplying and installing premium seamless surfaces that transform interiors with quiet, architectural confidence.
              </p>
            </FadeUp>

            <div className="space-y-6">
              {points.map((point, i) => (
                <FadeUp key={point.n} delay={(Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4)}>
                  <div className="flex gap-6 pb-6 border-b border-stone/50">
                    <span className="text-[10px] font-body font-medium tracking-label text-gold pt-1 shrink-0">
                      {point.n}
                    </span>
                    <div>
                      <p className="font-body font-medium text-charcoal text-sm mb-1">{point.title}</p>
                      <p className="font-body font-light text-text-light text-sm leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <FadeUp delay={1} className="lg:sticky lg:top-28">
            <div
              className="relative aspect-[3/4] overflow-hidden"
              style={{ background: "linear-gradient(160deg, #4a4540 0%, #2e2a26 50%, #1a1816 100%)" }}
            >
              {/* Noise */}
              <div
                className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                }}
              />
              {/* Gold badge */}
              <div className="absolute bottom-8 right-8 border border-gold/40 px-6 py-4">
                <p className="text-[10px] font-body font-medium tracking-label uppercase text-gold mb-1">Since</p>
                <p className="font-display font-light text-white text-4xl leading-none">2019</p>
                <p className="text-[10px] font-body font-light text-white/50 mt-2 uppercase tracking-wider">Premium UK</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
