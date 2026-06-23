import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import { guides, guideCategories } from "@/lib/data/guides";

interface GuidesIndexProps {
  activeCategory?: string;
}

export default function GuidesIndex({ activeCategory }: GuidesIndexProps) {
  const filtered = activeCategory ? guides.filter((g) => g.category === activeCategory) : guides;

  return (
    <section className="py-24 lg:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <SectionLabel className="mb-6">Articles & Guides</SectionLabel>
        </FadeUp>

        <FadeUp delay={1}>
          <div className="flex flex-wrap gap-2 mb-12">
            <Link
              href="/learn"
              className={`px-5 py-2.5 text-[10px] font-body font-medium tracking-button uppercase border transition-all duration-200 ${
                !activeCategory
                  ? "bg-charcoal text-white border-charcoal"
                  : "bg-transparent text-charcoal border-charcoal/30 hover:border-charcoal"
              }`}
            >
              All Guides
            </Link>
            {guideCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/learn/category/${cat.slug}`}
                className={`px-5 py-2.5 text-[10px] font-body font-medium tracking-button uppercase border transition-all duration-200 ${
                  activeCategory === cat.slug
                    ? "bg-charcoal text-white border-charcoal"
                    : "bg-transparent text-charcoal border-charcoal/30 hover:border-charcoal"
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((guide, i) => {
            const category = guideCategories.find((c) => c.slug === guide.category);
            return (
              <FadeUp key={guide.slug} delay={(Math.min(i % 4, 4) as 0 | 1 | 2 | 3 | 4)}>
                <Link
                  href={`/learn/${guide.slug}`}
                  className="group block p-8 border border-charcoal/10 hover:border-gold/40 transition-all duration-400 ease-brand"
                >
                  <SectionLabel className="mb-3">{category?.label ?? "Guide"}</SectionLabel>
                  <h3 className="font-display font-light text-charcoal text-2xl mb-3 group-hover:text-gold transition-colors duration-400 ease-brand">
                    {guide.title}
                  </h3>
                  <p className="font-body font-light text-text-light text-sm leading-relaxed mb-5">
                    {guide.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-body font-medium tracking-button uppercase text-gold">
                    Read guide <span className="transition-transform duration-400 ease-brand group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp>
          <div className="mt-16 pt-10 border-t border-stone/50 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-light text-charcoal text-2xl mb-2">Ready to start your project?</h3>
              <p className="font-body font-light text-text-mid text-sm">Get a detailed quote from our team within 1–2 business days.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link href="/get-a-quote" className="btn-gold">Get a Quote</Link>
              <Link href="/trade" className="btn-outline-dark">Trade Programme</Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
