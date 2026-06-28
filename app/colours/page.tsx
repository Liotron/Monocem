import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import ColourSwatch from "@/components/ui/ColourSwatch";
import CtaBanner from "@/components/sections/CtaBanner";
import { colourGroups, bespokeCta } from "@/lib/data/colours";

export const metadata: Metadata = {
  title: "Microcement Colours UK | 100+ Curated Shades | MONOCEM",
  description: "Explore MONOCEM's full microcement colour palette — over 100 mineral-pigmented shades across Core, Cool, Warm, and Outdoor & Industrial collections. Request your free quote.",
  alternates: { canonical: "/colours" },
};

export default function ColoursPage() {
  return (
    <>
      <Hero
        eyebrow="The Palette"
        headline="100+"
        headlineItalic="Colours"
        subtext="From warm neutrals to bold statements. Every MONOCEM colour is formulated with mineral pigments for depth and longevity that paint can't match."
        primaryCta={{ label: "Order Samples", href: "/get-a-quote" }}
        secondaryCta={{ label: "View Installation", href: "/installation" }}
      />

      <section
        className="relative py-16 md:py-28 px-5 md:px-12 isolate"
        style={{ background: "linear-gradient(165deg, #f7f2e8 0%, #f2ecdd 50%, #ece3d0 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 140% 90% at 12% -10%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 55%), radial-gradient(ellipse 120% 90% at 92% 112%, rgba(112,90,60,0.1) 0%, rgba(112,90,60,0) 60%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.045] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.012' numOctaves='4' seed='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-[1100px] mx-auto">
          {colourGroups.map((group, gi) => (
            <div key={group.heading + group.headingItalic} className={gi > 0 ? "mt-16 md:mt-24" : ""}>
              {group.label ? (
                <FadeUp className="text-center mb-9 md:mb-14">
                  <SectionLabel className="mb-3">{group.label}</SectionLabel>
                  <h2 className="font-display font-light text-charcoal text-3xl md:text-4xl leading-tight tracking-tight mb-3">
                    {group.heading} <em className="italic font-light text-text-light">{group.headingItalic}</em>
                  </h2>
                  {group.description && (
                    <p className="font-body font-light text-text-mid text-sm leading-relaxed max-w-[480px] mx-auto">
                      {group.description}
                    </p>
                  )}
                </FadeUp>
              ) : (
                <FadeUp>
                  <h3 className="font-display font-light text-charcoal text-2xl md:text-[1.7rem] leading-tight pb-3 mb-8 border-b border-charcoal/10">
                    {group.heading} <em className="italic font-light text-text-light">{group.headingItalic}</em>
                  </h3>
                </FadeUp>
              )}

              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-10">
                {group.colours.map((colour, ci) => (
                  <FadeUp key={colour.name} delay={(Math.min(ci % 5, 4) as 0 | 1 | 2 | 3 | 4)}>
                    <ColourSwatch colour={colour} index={ci} />
                  </FadeUp>
                ))}
              </div>
            </div>
          ))}

          <FadeUp className="mt-20 md:mt-28 px-8 py-12 text-center bg-warm-white">
            <h3 className="font-display font-light text-charcoal text-3xl leading-tight tracking-tight mb-4">
              {bespokeCta.heading} <em className="italic font-light text-text-light">{bespokeCta.headingItalic}</em>
            </h3>
            <p className="font-body font-light text-text-mid text-sm leading-relaxed max-w-[480px] mx-auto mb-7">
              {bespokeCta.paragraph}
            </p>
            <Link href={bespokeCta.buttonHref} className="btn-outline-dark">
              {bespokeCta.buttonLabel}
            </Link>
          </FadeUp>
        </div>
      </section>

      <CtaBanner
        eyebrow="Order Samples"
        heading="Found Your"
        headingItalic="Colour?"
        text="Order a sample pack to see and feel your chosen shades in person, or request a detailed quote for your project."
        primaryCta={{ label: "Order Sample Pack", href: "/sample-pack" }}
        secondaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
      />
    </>
  );
}
