import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

const points = [
  { n: "01", title: "Seamless Application", desc: "No grout lines. A single continuous surface from floor to ceiling." },
  { n: "02", title: "Fully Waterproof", desc: "Sealed systems safe for wet rooms, showers and pools." },
  { n: "03", title: "Highly Durable", desc: "Mineral composition resists scratches, stains and heavy traffic." },
  { n: "04", title: "Design Freedom", desc: "Endless colours, textures and finishes — tailored to any architectural vision." },
];

export default function BrandIntro() {
  return (
    <section className="py-16 lg:py-24 bg-warm-white">
      <div className="max-w-[760px] mx-auto px-6 lg:px-10">
        <FadeUp>
          <SectionLabel className="mb-3">The Material</SectionLabel>
        </FadeUp>
        <FadeUp delay={1}>
          <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-[0.97] tracking-tight mb-8">
            Seamless.
            <br />
            Waterproof.
            <br />
            <em className="italic font-light text-text-light">Architectural.</em>
          </h2>
        </FadeUp>

        <FadeUp delay={2} className="mb-10">
          <div
            className="relative overflow-hidden shadow-[0_30px_70px_-25px_rgba(29,27,24,0.35)]"
            style={{ borderRadius: 12 }}
          >
            <div
              className="w-full aspect-[4/5] animate-material-kenburns"
              style={{
                backgroundImage: "url('/images/img-material-hero.png')",
                backgroundSize: "cover",
                backgroundPosition: "50% 20%",
              }}
            />
          </div>
        </FadeUp>

        <FadeUp delay={2}>
          <p className="font-display font-light text-[1.375rem] leading-[1.8] text-[#5a554c] mb-12 max-w-[620px]">
            Microcement is a hand-applied mineral coating — 2mm thin and endlessly versatile. One material that transforms floors, walls, bathrooms and kitchens into continuous, grout-free architectural surfaces.
          </p>
        </FadeUp>

        <div className="flex flex-col">
          {points.map((point, i) => (
            <FadeUp key={point.n} delay={(Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4)}>
              <div className="flex gap-7 items-start py-9 border-b border-charcoal/[0.12] first:pt-0 last:border-none last:pb-0">
                <span className="font-display font-light text-gold text-[2.1rem] leading-none shrink-0 min-w-[2.25rem]">
                  {point.n}
                </span>
                <div>
                  <h5 className="font-body text-[0.72rem] font-medium tracking-[0.15em] uppercase text-charcoal mb-2">
                    {point.title}
                  </h5>
                  <p className="text-[0.92rem] text-text-light leading-relaxed">{point.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
