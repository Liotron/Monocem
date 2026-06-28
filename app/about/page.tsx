import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import NumberedList from "@/components/ui/NumberedList";
import CtaBanner from "@/components/sections/CtaBanner";
import RelatedLinks from "@/components/sections/RelatedLinks";

export const metadata: Metadata = {
  title: "About MONOCEM | Microcement Designed in Britain, Made in Europe",
  description:
    "MONOCEM is a premium microcement brand combining British design precision with European manufacturing excellence. Discover our philosophy, process and mission.",
  alternates: { canonical: "/about" },
};

const designProcess = [
  { title: "Material First", desc: "Every MONOCEM finish begins as a material study — colour, pigment and texture tested against real light, not screens." },
  { title: "Designed for Architecture", desc: "We design our systems to work with structure, not over it — considering substrates, movement and detailing from the outset." },
  { title: "Tested in Real Spaces", desc: "Before any finish is released, it's trialled across real residential and commercial environments to confirm performance and appearance over time." },
  { title: "Refined, Not Rushed", desc: "Our colour and texture ranges evolve slowly and deliberately. We would rather launch fewer finishes and get each one right." },
];

const manufacturingPoints = [
  { title: "High Quality Production", desc: "Manufactured using calibrated industrial processes for consistent particle size, pigment dispersion and material performance." },
  { title: "Strict Quality Control", desc: "Every batch is tested against fixed performance benchmarks before it is approved for UK distribution." },
  { title: "Professional Consistency", desc: "The shade and texture you choose from a sample is the shade and texture you receive, project after project." },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        headline="About"
        headlineItalic="MONOCEM"
        subtext="Designed with British precision. Manufactured in Europe."
        primaryCta={{ label: "Discuss Your Project", href: "/get-a-quote" }}
        secondaryCta={{ label: "View Our Products", href: "/products" }}
        backgroundImage="/images/img-texture.png"
        imagePosition="center"
      />

      {/* Our Philosophy */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-[760px] mx-auto px-6 lg:px-10">
          <FadeUp>
            <SectionLabel className="mb-3">Philosophy</SectionLabel>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-[0.97] tracking-tight mb-8">
              Minimal.
              <br />
              Architectural.
              <br />
              <em className="italic font-light text-text-light">Timeless.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={2}>
            <p className="font-display font-light text-[1.375rem] leading-[1.8] text-[#5a554c] max-w-[620px]">
              We believe great material design disappears into the architecture it serves. MONOCEM exists to
              give architects, designers and homeowners a single continuous surface — free from grout lines,
              free from visual noise — so that space, light and proportion can speak for themselves.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-[760px] mx-auto px-6 lg:px-10">
          <FadeUp>
            <SectionLabel className="mb-3">Design Process</SectionLabel>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight mb-12">
              Design First, <em className="italic font-light text-text-light">Always</em>
            </h2>
          </FadeUp>
          <NumberedList items={designProcess} />
        </div>
      </section>

      {/* European Manufacturing */}
      <section className="py-24 lg:py-32 bg-charcoal-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <FadeUp>
                <SectionLabel light className="mb-6">
                  Manufacturing
                </SectionLabel>
              </FadeUp>
              <FadeUp delay={1}>
                <h2 className="font-display font-light text-white text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
                  Designed in Britain, <em className="italic font-light text-white/55">Made in Europe</em>
                </h2>
              </FadeUp>
              <FadeUp delay={2}>
                <p className="font-body font-light text-white/70 text-base leading-relaxed">
                  Every MONOCEM system is manufactured in Europe, in facilities that meet strict industrial
                  and environmental standards. British-led design direction is paired with established
                  European production expertise — giving us consistency, reliability and quality control at
                  every stage, batch after batch.
                </p>
              </FadeUp>
            </div>
            <div>
              {manufacturingPoints.map((item, i) => (
                <FadeUp key={item.title} delay={(Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4)}>
                  <div className="flex items-start gap-4 pb-6 mb-6 border-b border-white/10 last:border-none last:pb-0 last:mb-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <div>
                      <h4 className="font-body text-[0.95rem] font-medium text-white mb-1">{item.title}</h4>
                      <p className="font-body font-light text-white/55 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-[760px] mx-auto px-6 lg:px-10 text-center">
          <FadeUp>
            <SectionLabel className="mb-3 justify-center flex">Our Mission</SectionLabel>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
              Premium Architectural <em className="italic font-light text-text-light">Surfaces.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={2}>
            <p className="font-body font-light text-text-mid text-base leading-relaxed max-w-xl mx-auto">
              Our mission is simple: to make premium, durable, beautifully finished architectural surfaces
              accessible to every UK project — from a single en-suite renovation to a multi-unit residential
              development — without compromising on design integrity or technical performance. Explore our
              full{" "}
              <Link href="/products" className="text-charcoal underline decoration-gold/40 hover:decoration-gold transition-colors duration-200">
                range of microcement systems
              </Link>
              .
            </p>
          </FadeUp>
        </div>
      </section>

      <RelatedLinks
        label="Why Professionals Choose MONOCEM"
        heading="Built for"
        headingItalic="Professionals"
        links={[
          { label: "Consistent Supply", description: "Reliable UK stock and dependable lead times, so your project schedule is never at risk.", href: "/delivery" },
          { label: "Technical Support", description: "Direct access to our technical team for specification, substrate queries and on-site guidance.", href: "/technical" },
          { label: "Trade Partnership", description: "Dedicated trade pricing, training and support for installers and design professionals.", href: "/trade/systems" },
          { label: "Proven Performance", description: "Thousands of square metres installed across the UK, from private residences to commercial interiors.", href: "/installation" },
        ]}
      />

      <CtaBanner
        eyebrow="Get Started"
        heading="Ready to Discuss"
        headingItalic="Your Project?"
        text="Whether you're specifying for a single room or an entire development, our team is ready to help."
        primaryCta={{ label: "Discuss Your Project", href: "/get-a-quote" }}
        secondaryCta={{ label: "View Our Products", href: "/products" }}
      />
    </>
  );
}
