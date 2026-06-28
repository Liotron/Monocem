import Link from "next/link";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { guideCategories } from "@/lib/data/guides";

interface GuideSection {
  id: string;
  heading: string;
  content: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
}

interface SidebarLink {
  label: string;
  description: string;
  href: string;
}

interface GuideArticleData {
  title: string;
  subtitle: string;
  categorySlug: string;
  intro: string;
  /**
   * Featured in-article photo. Use a real existing site asset where one is
   * topically relevant; otherwise leave undefined to show a labeled
   * "awaiting photography" placeholder instead of fabricating an image.
   */
  image?: string;
  imageCaption?: string;
  sections: GuideSection[];
  relatedLinks?: { label: string; href: string }[];
  sidebarLinks?: SidebarLink[];
}

interface GuideArticleProps {
  data: GuideArticleData;
}

export default function GuideArticle({ data }: GuideArticleProps) {
  const category = guideCategories.find((c) => c.slug === data.categorySlug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.intro,
    articleSection: category?.label,
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
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 flex items-end"
        style={{ minHeight: "50vh", background: "linear-gradient(160deg, #4a4540 0%, #2e2a26 50%, #1a1816 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 w-full">
          <nav className="text-[11px] font-body font-light text-white/40 mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors duration-200">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/learn" className="hover:text-white/70 transition-colors duration-200">Guides</Link>
            {category && (
              <>
                <span className="mx-2">/</span>
                <Link href={`/learn/category/${category.slug}`} className="hover:text-white/70 transition-colors duration-200">
                  {category.label}
                </Link>
              </>
            )}
          </nav>
          {category && (
            <span className="inline-block text-[10px] font-body font-medium tracking-button uppercase text-gold-light border border-gold-light/40 px-3 py-1 mb-4">
              {category.label}
            </span>
          )}
          <h1 className="font-display font-light text-white text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-4">
            {data.title}
          </h1>
          <p className="font-body font-light text-white/60 text-lg">{data.subtitle}</p>
        </div>
      </section>

      {/* Article content */}
      <article className="pt-20 pb-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">
            <div className="max-w-3xl">
              <FadeUp>
                <p className="font-body font-light text-text-mid text-lg leading-relaxed mb-10 lg:mb-12 border-l-2 border-gold pl-6">
                  {data.intro}
                </p>
              </FadeUp>

              <FadeUp delay={1}>
                <figure className="mb-10 lg:mb-12">
                  <div className="relative aspect-[16/9] overflow-hidden" style={{ borderRadius: 12 }}>
                    {data.image ? (
                      <Image src={data.image} alt={data.imageCaption || data.title} fill sizes="(min-width: 1024px) 700px, 100vw" className="object-cover" />
                    ) : (
                      <ImagePlaceholder label="Awaiting photography for this guide" />
                    )}
                  </div>
                  {data.image && data.imageCaption && (
                    <figcaption className="mt-2 font-body font-light text-text-light text-xs">{data.imageCaption}</figcaption>
                  )}
                </figure>
              </FadeUp>

              {/* Mobile-only collapsible TOC */}
              <details className="lg:hidden mb-8 border border-charcoal/10 p-5">
                <summary className="cursor-pointer font-body text-[11px] font-medium tracking-button uppercase text-gold">
                  On This Page
                </summary>
                <ul className="mt-4 space-y-3">
                  {data.sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="font-body font-light text-text-mid text-sm hover:text-gold transition-colors duration-200">
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>

              <div className="prose prose-lg max-w-none">
                {data.sections.map((section, i) => (
                  <FadeUp key={section.id} delay={(Math.min(i % 4, 4) as 0 | 1 | 2 | 3 | 4)}>
                    <div id={section.id} className="mb-12">
                      <h2 className="font-display font-light text-charcoal text-3xl leading-tight tracking-tight mt-[50.4px] lg:mt-14 mb-[14.4px] lg:mb-4">
                        {section.heading}
                      </h2>
                      <p className="font-body font-light text-text-mid text-base leading-relaxed">
                        {section.content}
                      </p>
                      {section.table && (
                        <div className="mt-6 overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="border-b border-charcoal/15">
                                {section.table.headers.map((header, hi) => (
                                  <th
                                    key={hi}
                                    className="py-3 pr-6 font-body font-medium text-[11px] tracking-button uppercase text-text-light"
                                  >
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {section.table.rows.map((row, ri) => (
                                <tr key={ri} className="border-b border-stone/50">
                                  {row.map((cell, ci) => (
                                    <td
                                      key={ci}
                                      className="py-3 pr-6 font-body font-light text-text-mid text-sm leading-relaxed"
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </FadeUp>
                ))}
              </div>

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

            {/* Desktop sticky sidebar */}
            <aside className="hidden lg:block">
              <div className="lg:sticky lg:top-28 space-y-6">
                <div className="border border-charcoal/10 p-6">
                  <SectionLabel className="mb-4">On This Page</SectionLabel>
                  <ul className="space-y-3">
                    {data.sections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`} className="font-body font-light text-text-mid text-sm hover:text-gold transition-colors duration-200">
                          {section.heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {data.sidebarLinks?.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group block border border-charcoal/10 p-6 hover:border-gold/40 transition-colors duration-200"
                  >
                    <p className="font-body font-light text-text-light text-[0.8rem] mb-1">{link.description}</p>
                    <p className="font-display font-light text-charcoal text-base group-hover:text-gold transition-colors duration-200">
                      {link.label} →
                    </p>
                  </Link>
                ))}

                <div className="bg-charcoal p-6">
                  <p className="font-display font-light text-white text-lg mb-4">Get a Free Quote</p>
                  <Link href="/get-a-quote" className="btn-gold w-full justify-center">
                    Request a Quote
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
