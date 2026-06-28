"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

interface FAQ {
  q: string;
  a: string;
}

export const defaultFaqs: FAQ[] = [
  {
    q: "What is microcement and how is it different from polished concrete?",
    a: "Microcement is a thin-coat decorative material (1–3mm) applied over existing surfaces. Unlike polished concrete, it doesn't require a structural slab — it can be applied over tiles, plaster, wood, and other substrates. The result is visually similar to polished concrete but with far greater versatility in application.",
  },
  {
    q: "Can microcement be applied over existing tiles?",
    a: "Yes. One of microcement's greatest advantages is that it can be applied directly over existing ceramic tiles, porcelain tiles, concrete, plaster, and timber — eliminating the need for costly and disruptive removal. Correct priming and surface preparation are essential for adhesion.",
  },
  {
    q: "Is microcement waterproof?",
    a: "Microcement itself is water-resistant, but it is the sealer that provides the waterproof barrier. MONOCEM's professional sealer system creates a fully waterproof surface when applied correctly in 2–3 coats, making it ideal for bathrooms, wet rooms, and kitchen surfaces.",
  },
  {
    q: "How long does microcement last?",
    a: "When professionally installed and correctly maintained, MONOCEM microcement surfaces are built to last a lifetime. The surface durability depends on correct preparation, application, and sealing — all of which are guaranteed when installed by our professional team.",
  },
  {
    q: "Can I order microcement samples before committing?",
    a: "Yes — we strongly recommend ordering our sample pack. Each sample is a 150mm × 150mm tile with a professionally applied and sealed microcement finish in your chosen colours. Seeing the texture and shade in your own space, under your lighting, is the best way to make a confident colour decision.",
  },
  {
    q: "What areas of the UK do you cover for installation?",
    a: "MONOCEM installs across the entire UK, including London, Manchester, Birmingham, Bristol, Edinburgh, Glasgow, and all major cities. We also cover rural and remote locations for the right projects. Use our quote form to tell us your location and we'll confirm availability.",
  },
];

interface FAQAccordionProps {
  faqs?: FAQ[];
  dark?: boolean;
  heading?: string;
  headingItalic?: string;
}

export default function FAQAccordion({
  faqs = defaultFaqs,
  dark = false,
  heading = "Common",
  headingItalic = "Questions",
}: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section className={`py-24 lg:py-32 ${dark ? "bg-charcoal-2" : "bg-cream"}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <FadeUp>
              <SectionLabel light={dark} className="mb-6">FAQ</SectionLabel>
            </FadeUp>
            <FadeUp delay={1}>
              <h2 className={`font-display font-light text-4xl lg:text-5xl leading-tight tracking-tight ${dark ? "text-white" : "text-charcoal"}`}>
                {heading}{" "}
                <em className="italic font-light">{headingItalic}</em>
              </h2>
            </FadeUp>
          </div>

          <div className="lg:col-span-2 space-y-0">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={(Math.min(i % 4, 4) as 0 | 1 | 2 | 3 | 4)}>
                <div className={`border-b ${dark ? "border-white/10" : "border-charcoal/10"}`}>
                  <button
                    id={`faq-trigger-${i}`}
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    aria-controls={`faq-panel-${i}`}
                    className={`w-full flex items-start justify-between gap-6 py-6 text-left transition-colors duration-200 ${
                      dark ? "text-white hover:text-gold-light" : "text-charcoal hover:text-gold"
                    }`}
                  >
                    <span className="font-body font-normal text-base leading-snug">{faq.q}</span>
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-400 ease-brand ${
                        open === i
                          ? "bg-gold border-gold"
                          : dark
                          ? "border-white/25"
                          : "border-charcoal/20"
                      }`}
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        className={`transition-transform duration-400 ease-brand ${open === i ? "rotate-45" : ""}`}
                      >
                        <path
                          d="M5.5 0V11M0 5.5H11"
                          stroke={open === i ? "#fff" : dark ? "#fff" : "#1a1816"}
                          strokeWidth="1.3"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    aria-hidden={open !== i}
                    className={`overflow-hidden transition-all duration-400 ease-brand ${
                      open === i ? "max-h-96 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className={`font-body font-light text-sm leading-relaxed ${dark ? "text-white/55" : "text-text-mid"}`}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
