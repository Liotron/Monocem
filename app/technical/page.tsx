import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import NumberedList from "@/components/ui/NumberedList";
import CtaBanner from "@/components/sections/CtaBanner";
import RelatedLinks from "@/components/sections/RelatedLinks";
import FAQAccordion from "@/components/sections/FAQAccordion";
import QuoteForm from "@/components/sections/QuoteForm";

export const metadata: Metadata = {
  title: "Technical Information | Microcement Data & Downloads | MONOCEM",
  description:
    "Technical information for architects, designers and installers. Low VOC certification, coverage rates, layer thickness, drying and curing times, and maintenance guidance for MONOCEM microcement systems.",
  alternates: { canonical: "/technical" },
};

const technicalData = [
  { title: "Coverage", desc: "Approximately 2.5–3.5 m² per kg, per coat, depending on substrate porosity and the chosen finish." },
  { title: "Layer Thickness", desc: "Each system is applied in thin layers of 0.5–1mm, building to a total finished thickness of 2–3mm." },
  { title: "Mixing", desc: "Base and top coats are mixed on-site to a precise ratio using a low-speed mixing drill, ensuring a consistent, workable texture." },
  { title: "Drying", desc: "Touch-dry within 4–6 hours under standard conditions; full layer-to-layer drying typically takes 24 hours." },
  { title: "Curing", desc: "Full chemical curing is reached after 7–14 days, after which the surface achieves its complete hardness and water resistance." },
  { title: "Maintenance", desc: "Maintained with pH-neutral cleaning products and a light reseal every 3–5 years in high-traffic or wet areas to preserve performance." },
];

const downloads = [
  { title: "Technical Data Sheet", desc: "Full technical specification including coverage rates, application parameters and performance data." },
  { title: "Installation Guide", desc: "Step-by-step professional application guidance for installers and contractors." },
  { title: "Maintenance Guide", desc: "Aftercare and cleaning recommendations to preserve your surface for decades." },
];

const technicalFaqs = [
  {
    q: "What does Low VOC mean and why does it matter?",
    a: "VOCs (Volatile Organic Compounds) are chemicals released into the air by many conventional building materials. MONOCEM systems are formulated to meet Low VOC standards, releasing minimal emissions — a considered choice for bedrooms, bathrooms and any space where indoor air quality matters.",
  },
  {
    q: "How long before I can walk on a new microcement floor?",
    a: "Floors are typically walkable after 24–48 hours, though full curing for heavy use takes 7–14 days depending on ambient conditions.",
  },
  {
    q: "What is the coverage rate per kg?",
    a: "Coverage is approximately 2.5–3.5 m² per kg, per coat, depending on substrate porosity, application method and the finish selected.",
  },
  {
    q: "How do I maintain a microcement surface long-term?",
    a: "Clean with pH-neutral products and avoid abrasive chemicals. We recommend a light reseal every 3–5 years in high-traffic or wet areas to preserve water resistance and finish.",
  },
  {
    q: "Can I get a Safety Data Sheet before specifying MONOCEM on a project?",
    a: "Yes — our technical team provides full SDS documentation for every component on request, ideal for architects and specifiers preparing project documentation.",
  },
  {
    q: "Do you provide technical support for installers?",
    a: "Yes. Our technical team supports installers throughout the project, from substrate assessment to final sealing, and our Installation Guides cover every stage in detail.",
  },
];

export default function TechnicalPage() {
  return (
    <>
      <Hero
        eyebrow="Technical"
        headline="Technical"
        headlineItalic="Information"
        subtext="Professional technical information for architects, designers and installers."
        primaryCta={{ label: "View Downloads", href: "#downloads" }}
        secondaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        backgroundImage="/images/img-waterproof.png"
        imagePosition="center"
      />

      {/* Low VOC */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <FadeUp>
                <SectionLabel className="mb-6">Low VOC</SectionLabel>
              </FadeUp>
              <FadeUp delay={1}>
                <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight">
                  Healthier <em className="italic font-light text-text-light">Indoor Air</em>
                </h2>
              </FadeUp>
            </div>
            <div>
              <FadeUp delay={1}>
                <p className="font-body font-light text-text-mid text-base leading-relaxed mb-8">
                  Volatile Organic Compounds (VOCs) are chemicals released into the air by many conventional
                  building and decorative materials, contributing to poor indoor air quality. MONOCEM
                  microcement systems are formulated to meet Low VOC standards, releasing minimal emissions
                  during and after application — across our full range of{" "}
                  <Link href="/products" className="text-charcoal underline decoration-gold/40 hover:decoration-gold transition-colors duration-200">
                    microcement products
                  </Link>
                  . This makes our systems a considered choice for bedrooms, bathrooms, kitchens and any
                  occupied space, without compromising the architectural finish.
                </p>
              </FadeUp>
              <FadeUp delay={2}>
                <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-charcoal/10">
                  {["Low Emission", "Solvent-Conscious Formula", "Suitable for Occupied Spaces"].map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[0.72rem] font-medium tracking-[0.12em] uppercase text-charcoal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Data */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-[760px] mx-auto px-6 lg:px-10">
          <FadeUp>
            <SectionLabel className="mb-3">Technical Data</SectionLabel>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight mb-12">
              Specified for <em className="italic font-light text-text-light">Precision</em>
            </h2>
          </FadeUp>
          <NumberedList items={technicalData} />
        </div>
      </section>

      {/* Safety Data */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-[760px] mx-auto px-6 lg:px-10 text-center">
          <FadeUp>
            <SectionLabel className="mb-3 justify-center flex">Safety Data</SectionLabel>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
              Material Safety, <em className="italic font-light text-text-light">Fully Documented</em>
            </h2>
          </FadeUp>
          <FadeUp delay={2}>
            <p className="font-body font-light text-text-mid text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Safety Data Sheets (SDS) for every component in the MONOCEM system — primers, base coats,
              pigments and sealers — are available on request for architects, specifiers and installation
              teams working within our professional{" "}
              <Link href="/trade/systems" className="text-charcoal underline decoration-gold/40 hover:decoration-gold transition-colors duration-200">
                systems
              </Link>
              . Our technical team can also provide COSHH-ready documentation to support your project&apos;s
              compliance requirements.
            </p>
          </FadeUp>
          <FadeUp delay={3}>
            <Link href="/get-a-quote" className="btn-outline-dark">
              Request Safety Data Sheet
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <SectionLabel className="mb-6">Downloads</SectionLabel>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight mb-12 max-w-xl">
              Documentation for <em className="italic font-light text-text-light">Every Stage</em>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {downloads.map((item, i) => (
              <FadeUp key={item.title} delay={(Math.min(i % 4, 4) as 0 | 1 | 2 | 3 | 4)}>
                <div className="p-8 border border-charcoal/10 h-full flex flex-col">
                  <span className="text-[10px] font-body font-medium tracking-label uppercase text-gold mb-4">
                    PDF · Available on Request
                  </span>
                  <h3 className="font-display font-light text-charcoal text-xl mb-3">{item.title}</h3>
                  <p className="font-body font-light text-text-light text-sm leading-relaxed mb-6 flex-1">
                    {item.desc}
                  </p>
                  <Link
                    href="/get-a-quote"
                    className="inline-flex items-center gap-1 text-[10px] font-body font-medium tracking-button uppercase text-gold"
                  >
                    Request Copy <span>→</span>
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        heading="Explore"
        headingItalic="Further"
        links={[
          { label: "Fast UK Delivery", description: "Nationwide delivery times, packaging and order tracking.", href: "/delivery" },
          { label: "About MONOCEM", description: "Designed in Britain, manufactured in Europe — our story and philosophy.", href: "/about" },
          { label: "Installation Systems", description: "Explore every surface MONOCEM is engineered for.", href: "/installation" },
          { label: "Get a Quote", description: "Tell us about your project and receive a detailed quote.", href: "/get-a-quote" },
        ]}
      />

      <FAQAccordion faqs={technicalFaqs} />

      <CtaBanner
        eyebrow="Technical Guide"
        heading="Need the Full"
        headingItalic="Technical Guide?"
        text="Download our complete technical data sheet, or speak directly with our technical team about your project's requirements."
        primaryCta={{ label: "Download Technical Guide", href: "/get-a-quote" }}
        secondaryCta={{ label: "Trade Technical Data", href: "/trade/technical-data" }}
      />

      <QuoteForm />
    </>
  );
}
