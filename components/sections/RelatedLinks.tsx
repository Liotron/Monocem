import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

interface RelatedLink {
  label: string;
  description: string;
  href: string;
}

interface RelatedLinksProps {
  label?: string;
  heading: string;
  headingItalic?: string;
  links: RelatedLink[];
  dark?: boolean;
}

export default function RelatedLinks({
  label = "Explore More",
  heading,
  headingItalic,
  links,
  dark = false,
}: RelatedLinksProps) {
  return (
    <section className={`py-24 lg:py-32 ${dark ? "bg-charcoal-2" : "bg-warm-white"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp className="mb-12 max-w-xl">
          <SectionLabel light={dark} className="mb-4">
            {label}
          </SectionLabel>
          <h2
            className={`font-display font-light text-4xl lg:text-5xl leading-tight tracking-tight ${
              dark ? "text-white" : "text-charcoal"
            }`}
          >
            {heading}
            {headingItalic && (
              <>
                {" "}
                <em className={`italic font-light ${dark ? "text-white/55" : "text-text-light"}`}>
                  {headingItalic}
                </em>
              </>
            )}
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, i) => (
            <FadeUp key={link.href} delay={(Math.min(i % 4, 4) as 0 | 1 | 2 | 3 | 4)}>
              <Link
                href={link.href}
                className={`group block h-full p-8 border transition-all duration-400 ease-brand ${
                  dark
                    ? "border-white/10 hover:border-gold/40"
                    : "border-charcoal/10 hover:border-gold/40"
                }`}
              >
                <h3
                  className={`font-display font-light text-xl mb-2 group-hover:text-gold transition-colors duration-400 ease-brand ${
                    dark ? "text-white" : "text-charcoal"
                  }`}
                >
                  {link.label}
                </h3>
                <p
                  className={`font-body font-light text-sm leading-relaxed mb-6 ${
                    dark ? "text-white/50" : "text-text-light"
                  }`}
                >
                  {link.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[10px] font-body font-medium tracking-button uppercase text-gold">
                  Discover <span className="transition-transform duration-400 ease-brand group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
