import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import FeatureIcon from "@/components/ui/FeatureIcon";
import { allColours } from "@/lib/data/colours";

export default function SampleRequest() {
  const sampleColours = allColours.slice(0, 6);

  return (
    <section className="py-24 lg:py-32 bg-charcoal-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeUp>
              <SectionLabel light className="mb-6">Sample Pack</SectionLabel>
            </FadeUp>
            <FadeUp delay={1}>
              <h2 className="font-display font-light text-white text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
                Experience the{" "}
                <em className="italic font-light text-gold-light">Texture</em>
              </h2>
            </FadeUp>
            <FadeUp delay={2}>
              <p className="font-body font-light text-white/60 text-base leading-relaxed mb-6">
                Our sample tiles let you experience the texture and colour of MONOCEM microcement in your actual space, under your specific lighting conditions. Each sample is professionally applied and sealed — a true representation of the finished surface.
              </p>
            </FadeUp>
            <FadeUp delay={2}>
              <ul className="space-y-3 mb-10">
                {[
                  "6 colour tiles from your chosen palette",
                  "150mm × 150mm format — meaningful scale",
                  "Sealed finish — exactly as installed",
                  "Dispatched within 1–3 working days",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5 shrink-0">
                      <FeatureIcon text={item} />
                    </span>
                    <span className="font-body font-light text-white/60 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={3}>
              <Link href="/get-a-quote" className="btn-gold">
                Request Sample Pack
              </Link>
            </FadeUp>
          </div>

          {/* Swatch grid */}
          <FadeUp delay={1}>
            <div className="grid grid-cols-3 gap-1.5">
              {sampleColours.map((colour) => (
                <div key={colour.name}>
                  <div
                    className="aspect-square relative overflow-hidden"
                    style={{ backgroundColor: colour.hex }}
                  >
                    <div
                      className="absolute inset-0 opacity-30 mix-blend-multiply"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-body font-light text-white/40 mt-2 text-center">{colour.name}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
