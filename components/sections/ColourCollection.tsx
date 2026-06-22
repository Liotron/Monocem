import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

export default function ColourCollection() {
  return (
    <section id="colours" className="py-16 md:py-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="max-w-[640px] mb-10 md:mb-12">
          <FadeUp>
            <SectionLabel className="mb-4">Colour Palette</SectionLabel>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight">
              100+ Curated <em className="italic font-light text-text-light">Colours</em>
            </h2>
          </FadeUp>
          <FadeUp delay={2}>
            <p className="font-body font-light text-text-mid text-base leading-relaxed mt-4">
              Mineral tones developed for architecture and interiors, formulated with natural pigments for depth that paint can never replicate.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={1}>
          <div
            className="w-full aspect-[3/2] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/img-colour-board.png')" }}
          />
        </FadeUp>

        <FadeUp delay={2} className="mt-8">
          <Link
            href="/colours"
            className="inline-flex items-center gap-2 font-body text-[0.8rem] font-medium tracking-wide text-charcoal border-b border-gold pb-1 transition-all duration-300 hover:gap-4 hover:text-gold"
          >
            View Full Palette →
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
