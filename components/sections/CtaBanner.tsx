import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

interface CtaBannerProps {
  eyebrow?: string;
  heading: string;
  headingItalic?: string;
  text: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CtaBanner({
  eyebrow = "Get Started",
  heading,
  headingItalic,
  text,
  primaryCta,
  secondaryCta,
}: CtaBannerProps) {
  return (
    <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <FadeUp>
          <SectionLabel light className="mb-6 justify-center flex">
            {eyebrow}
          </SectionLabel>
        </FadeUp>
        <FadeUp delay={1}>
          <h2 className="font-display font-light text-white text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
            {heading}
            {headingItalic && (
              <>
                {" "}
                <em className="italic font-light text-white/55">{headingItalic}</em>
              </>
            )}
          </h2>
        </FadeUp>
        <FadeUp delay={2}>
          <p className="font-body font-light text-white/70 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            {text}
          </p>
        </FadeUp>
        <FadeUp delay={3}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={primaryCta.href} className="btn-gold">
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-outline">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
