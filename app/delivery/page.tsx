import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import NumberedList from "@/components/ui/NumberedList";
import CtaBanner from "@/components/sections/CtaBanner";
import RelatedLinks from "@/components/sections/RelatedLinks";
import FAQAccordion from "@/components/sections/FAQAccordion";

export const metadata: Metadata = {
  title: "Fast UK Delivery | Microcement Samples & Orders | MONOCEM",
  description:
    "Nationwide UK delivery for MONOCEM microcement. Samples dispatched in 1–3 working days, full orders in 3–5 days, with professional packaging, secure transport and order tracking.",
  alternates: { canonical: "/delivery" },
};

const deliveryTimes = [
  {
    title: "Samples",
    desc: "Dispatched within 1–3 working days of your request. The fastest way to see and feel a colour and finish before committing to a full order.",
  },
  {
    title: "Orders",
    desc: "Standard material orders are delivered within 3–5 working days across the UK mainland, fully packaged and ready for professional application.",
  },
  {
    title: "Large Projects",
    desc: "For larger residential and commercial projects, delivery is scheduled directly with our team to align precisely with your installation timeline.",
  },
];

const packaging = [
  {
    title: "Professional Packaging",
    desc: "Every tile, kit and component is individually wrapped and reinforced for transit, preventing movement and surface damage in the box.",
  },
  {
    title: "Secure Transport",
    desc: "We partner with trusted UK couriers and specialist freight services to move your order safely from our warehouse to your site.",
  },
  {
    title: "Damage Protection",
    desc: "Every shipment is insured and inspected before dispatch. In the rare event of transit damage, we replace affected items at no cost.",
  },
];

const trackingPoints = [
  {
    title: "Order Tracking",
    desc: "Once dispatched, every order is assigned a tracked courier reference so you always know exactly where it is.",
  },
  {
    title: "Delivery Notifications",
    desc: "You'll receive email updates at dispatch and on the day of delivery, so your site or installer can be ready to receive the order.",
  },
];

const deliveryFaqs = [
  {
    q: "How quickly will my samples arrive?",
    a: "Sample packs are dispatched within 1–3 working days of your order and sent via tracked courier across the United Kingdom.",
  },
  {
    q: "How long does a full material order take to arrive?",
    a: "Standard orders are delivered within 3–5 working days. For large or multi-phase projects, we schedule delivery directly with your installer or site manager.",
  },
  {
    q: "Do you deliver to Scotland, Wales and Northern Ireland?",
    a: "Yes. We deliver nationwide across the United Kingdom, including the Scottish Highlands and Islands, Wales and Northern Ireland, with slightly extended timeframes for remote postcodes.",
  },
  {
    q: "Can I track my order?",
    a: "Yes — once your order is dispatched, you'll receive tracking details by email along with delivery notifications, so you always know when to expect it.",
  },
  {
    q: "What happens if my order arrives damaged?",
    a: "All shipments are insured and carefully inspected before dispatch. If anything arrives damaged in transit, contact our team and we'll arrange a free replacement.",
  },
  {
    q: "Can delivery be scheduled for a specific date?",
    a: "For large project orders, yes — our team will coordinate a delivery date that fits your installation schedule. Sample and standard orders are dispatched as soon as they're ready.",
  },
];

export default function DeliveryPage() {
  return (
    <>
      <Hero
        eyebrow="Delivery"
        headline="Fast UK"
        headlineItalic="Delivery"
        subtext="Fast, reliable delivery across the United Kingdom."
        primaryCta={{ label: "Order Samples", href: "/sample-pack" }}
        secondaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        backgroundImage="/images/img-colour-board.png"
        imagePosition="center"
      />

      {/* Delivery Coverage */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <FadeUp>
                <SectionLabel className="mb-6">Coverage</SectionLabel>
              </FadeUp>
              <FadeUp delay={1}>
                <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight">
                  Nationwide Delivery, <em className="italic font-light text-text-light">Wherever You Are</em>
                </h2>
              </FadeUp>
            </div>
            <div>
              <FadeUp delay={1}>
                <p className="font-body font-light text-text-mid text-base leading-relaxed mb-8">
                  Every MONOCEM order — from a single sample to a full project supply — is dispatched from our
                  UK distribution centre and delivered nationwide. Whether your site is in central London or
                  the Scottish Highlands, the same careful handling and attention follows your order door to
                  door, for homeowners and our trade partners working across our professional{" "}
                  <Link href="/trade/systems" className="text-charcoal underline decoration-gold/40 hover:decoration-gold transition-colors duration-200">
                    systems
                  </Link>
                  {" "}alike.
                </p>
              </FadeUp>
              <FadeUp delay={2}>
                <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-charcoal/10">
                  {["England", "Scotland", "Wales", "Northern Ireland"].map((region) => (
                    <span
                      key={region}
                      className="font-body text-[0.72rem] font-medium tracking-[0.12em] uppercase text-charcoal"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Times */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-[760px] mx-auto px-6 lg:px-10">
          <FadeUp>
            <SectionLabel className="mb-3">Delivery Times</SectionLabel>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight mb-12">
              Built Around <em className="italic font-light text-text-light">Your Schedule</em>
            </h2>
          </FadeUp>
          <NumberedList items={deliveryTimes} />
        </div>
      </section>

      {/* Packaging */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <SectionLabel className="mb-6">Packaging</SectionLabel>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight mb-12 max-w-xl">
              Packed for the <em className="italic font-light text-text-light">Journey</em>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {packaging.map((item, i) => (
              <FadeUp key={item.title} delay={(Math.min(i % 4, 4) as 0 | 1 | 2 | 3 | 4)}>
                <div className="p-8 border border-charcoal/10 h-full">
                  <h3 className="font-display font-light text-charcoal text-xl mb-3">{item.title}</h3>
                  <p className="font-body font-light text-text-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking */}
      <section className="py-24 lg:py-32 bg-charcoal-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp>
                <SectionLabel light className="mb-6">
                  Tracking
                </SectionLabel>
              </FadeUp>
              <FadeUp delay={1}>
                <h2 className="font-display font-light text-white text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
                  Always Know <em className="italic font-light text-white/55">Where Your Order Is</em>
                </h2>
              </FadeUp>
              <FadeUp delay={2}>
                <p className="font-body font-light text-white/70 text-base leading-relaxed">
                  From dispatch to delivery, you&apos;re kept informed every step of the way — no chasing,
                  no guesswork.
                </p>
              </FadeUp>
            </div>
            <div>
              {trackingPoints.map((item, i) => (
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

      <RelatedLinks
        heading="Continue"
        headingItalic="Exploring"
        links={[
          { label: "Technical Information", description: "Low VOC data, coverage rates and downloads for architects and installers.", href: "/technical" },
          { label: "About MONOCEM", description: "Designed in Britain, manufactured in Europe — our story and philosophy.", href: "/about" },
          { label: "Our Products", description: "Explore the full MONOCEM microcement system range.", href: "/products" },
          { label: "Get a Quote", description: "Tell us about your project and receive a detailed quote.", href: "/get-a-quote" },
        ]}
      />

      <FAQAccordion faqs={deliveryFaqs} />

      <CtaBanner
        eyebrow="Order Samples"
        heading="See It, Feel It,"
        headingItalic="Before You Commit"
        text="Order a sample pack today and receive it within 1–3 working days — or speak to our team about a full project quote."
        primaryCta={{ label: "Order Samples", href: "/sample-pack" }}
        secondaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
      />
    </>
  );
}
