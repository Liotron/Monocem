import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FAQAccordion, { defaultFaqs } from "@/components/sections/FAQAccordion";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "FAQ | MONOCEM",
  description: "Frequently asked questions about MONOCEM microcement systems, supply, delivery, and installation.",
  alternates: { canonical: "/faq" },
};

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
];

const technicalFaqs = [
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
    q: "Do you provide technical support for installers?",
    a: "Yes. Our technical team supports installers throughout the project, from substrate assessment to final sealing, and our Installation Guides cover every stage in detail.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Hero
        eyebrow="FAQ"
        headline="Frequently Asked"
        headlineItalic="Questions"
        subtext="Everything you need to know about microcement, our supply and installation service, delivery, and technical performance."
        primaryCta={{ label: "Get a Free Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "Order a Sample Pack", href: "/sample-pack" }}
        minHeight="60vh"
      />

      <FAQAccordion faqs={defaultFaqs} heading="General" headingItalic="Questions" />
      <FAQAccordion faqs={deliveryFaqs} dark heading="Delivery &" headingItalic="Samples" />
      <FAQAccordion faqs={technicalFaqs} heading="Technical &" headingItalic="Installation" />

      <CtaBanner
        eyebrow="Get Started"
        heading="Still Have"
        headingItalic="Questions?"
        text="Our team is on hand to help with any technical, delivery, or product questions not covered here."
        primaryCta={{ label: "Get a Free Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "Order a Sample Pack", href: "/sample-pack" }}
      />
    </>
  );
}
