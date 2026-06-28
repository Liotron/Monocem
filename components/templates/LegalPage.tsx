import type { ReactNode } from "react";

interface LegalPageProps {
  eyebrow?: string;
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalPage({ eyebrow = "Legal", title, lastUpdated, children }: LegalPageProps) {
  return (
    <>
      <section
        className="relative pt-40 pb-16 flex items-end"
        style={{ minHeight: "38vh", background: "linear-gradient(160deg, #4a4540 0%, #2e2a26 50%, #1a1816 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 w-full">
          <p className="section-label mb-4">{eyebrow}</p>
          <h1 className="font-display font-light text-white text-4xl sm:text-5xl leading-tight tracking-tight mb-3">
            {title}
          </h1>
          <p className="font-body font-light text-white/50 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <article className="py-20 lg:py-24 bg-warm-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="prose prose-lg max-w-none font-body font-light text-text-mid">
            {children}
          </div>
        </div>
      </article>
    </>
  );
}
