import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

const tags = ["Seamless", "Waterproof", "Durable", "Architectural"];
const stats = ["15+ Years", "2,400+ Projects", "40+ UK Cities", "5-Year Guarantee"];

export default function WhyMonocem() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <FadeUp className="max-w-[620px] mb-10">
          <SectionLabel light className="mb-3">Why MONOCEM</SectionLabel>
          <h2 className="font-display font-light text-white text-4xl lg:text-5xl leading-tight tracking-tight mb-4">
            Crafted to <em className="italic font-light text-white/55">Last Decades.</em>
          </h2>
          <p className="font-body font-light text-white/[0.78] text-base leading-relaxed">
            Engineered for performance. Refined for architecture.
          </p>
        </FadeUp>

        <FadeUp delay={1} className="mb-10">
          <div
            className="relative w-full max-w-[640px] aspect-[4/5] overflow-hidden shadow-[0_30px_70px_-25px_rgba(0,0,0,0.5)]"
            style={{ borderRadius: 12 }}
          >
            <Image
              src="/images/img-why-monocem.png"
              alt="MONOCEM microcement finish detail"
              fill
              sizes="(min-width: 640px) 640px, 100vw"
              className="object-cover"
            />
          </div>
        </FadeUp>

        <FadeUp delay={2}>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 sm:gap-8 mt-10 pt-8 border-t border-white/[0.12]">
            <div className="flex flex-wrap gap-x-[1.1rem] gap-y-2">
              {tags.map((tag) => (
                <span key={tag} className="font-body text-[0.72rem] font-medium tracking-[0.12em] uppercase text-white">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-[1.1rem] gap-y-2">
              {stats.map((stat) => (
                <span key={stat} className="font-body text-[0.66rem] font-normal tracking-wide text-white/45">
                  {stat}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
