import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SampleRequest from "@/components/sections/SampleRequest";
import FAQAccordion from "@/components/sections/FAQAccordion";
import QuoteForm from "@/components/sections/QuoteForm";

export const metadata: Metadata = {
  title: "Sample Pack | MONOCEM",
  description: "Order a MONOCEM microcement sample pack to see and feel our finishes before you commit to a project.",
  alternates: { canonical: "/sample-pack" },
};

const sampleFaqs = [
  {
    q: "Can I order microcement samples before committing?",
    a: "Yes — we strongly recommend ordering our sample pack. Each sample is a 150mm × 150mm tile with a professionally applied and sealed microcement finish in your chosen colours. Seeing the texture and shade in your own space, under your lighting, is the best way to make a confident colour decision.",
  },
  {
    q: "How quickly will my samples arrive?",
    a: "Sample packs are dispatched within 1–3 working days of your order and sent via tracked courier across the United Kingdom.",
  },
  {
    q: "How do I choose which colours to request?",
    a: "Browse our full colour collection, then tell us your chosen shades on the request form below — we'll send tiles in the colours and finishes you specify.",
  },
];

export default function SamplePackPage() {
  return (
    <>
      <Hero
        eyebrow="Sample Pack"
        headline="See and Feel"
        headlineItalic="Microcement"
        subtext="Order a sample pack and experience the genuine texture, colour, and sealed finish of MONOCEM microcement before committing to a project."
        primaryCta={{ label: "Request Sample Pack", href: "/get-a-quote" }}
        secondaryCta={{ label: "Explore Colours", href: "/colours" }}
        minHeight="60vh"
      />

      <SampleRequest />

      <FAQAccordion faqs={sampleFaqs} />

      <QuoteForm />
    </>
  );
}
