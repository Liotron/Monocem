import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import QuoteForm from "@/components/sections/QuoteForm";

interface LearnSection {
  heading: string;
  content: string;
}

interface LearnPageData {
  title: string;
  subtitle: string;
  intro: string;
  sections: LearnSection[];
  relatedLinks?: { label: string; href: string }[];
}

interface LearnPageProps {
  data: LearnPageData;
}

export default function LearnPage({ data }: LearnPageProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.intro,
    publisher: {
      "@type": "Organization",
      name: "MONOCEM",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero banner */}
      <section
        className="relative pt-40 pb-24 flex items-end"
        style={{ minHeight: "50vh", background: "linear-gradient(160deg, #4a4540 0%, #2e2a26 50%, #1a1816 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 w-full">
          <p className="section-label mb-4">Learn</p>
          <h1 className="font-display font-light text-white text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-4">
            {data.title}
          </h1>
          <p className="font-body font-light text-white/60 text-lg">{data.subtitle}</p>
        </div>
      </section>

      {/* Article content */}
      <article className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <FadeUp>
            <p className="font-body font-light text-text-mid text-lg leading-relaxed mb-12 border-l-2 border-gold pl-6">
              {data.intro}
            </p>
          </FadeUp>

          <div className="prose prose-lg max-w-none">
            {data.sections.map((section, i) => (
              <FadeUp key={i} delay={(Math.min(i % 4, 4) as 0 | 1 | 2 | 3 | 4)}>
                <div className="mb-12">
                  <h2 className="font-display font-light text-charcoal text-3xl leading-tight tracking-tight mb-4">
                    {section.heading}
                  </h2>
                  <p className="font-body font-light text-text-mid text-base leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Internal links */}
          {data.relatedLinks && data.relatedLinks.length > 0 && (
            <FadeUp>
              <div className="mt-12 pt-8 border-t border-stone/50">
                <SectionLabel className="mb-4">Related Reading</SectionLabel>
                <div className="flex flex-wrap gap-3">
                  {data.relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-5 py-2.5 text-[11px] font-body font-medium tracking-button uppercase text-text-mid border border-charcoal/15 hover:border-gold/50 hover:text-charcoal transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </FadeUp>
          )}

          <FadeUp>
            <div className="mt-12 bg-charcoal p-8">
              <SectionLabel light className="mb-4">Ready to Start?</SectionLabel>
              <h3 className="font-display font-light text-white text-3xl mb-4">Get a Free Quote</h3>
              <p className="font-body font-light text-white/60 text-sm leading-relaxed mb-6">
                Talk to our team about your project. We provide detailed quotes within 1–2 business days.
              </p>
              <Link href="/get-a-quote" className="btn-gold">
                Request a Quote
              </Link>
            </div>
          </FadeUp>
        </div>
      </article>

      <QuoteForm />
    </>
  );
}
