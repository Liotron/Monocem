import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import FeatureIcon from "@/components/ui/FeatureIcon";

export default function InstallerSection() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeUp>
              <SectionLabel light className="mb-6">Trade Programme</SectionLabel>
            </FadeUp>
            <FadeUp delay={1}>
              <h2 className="font-display font-light text-white text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
                Become a MONOCEM{" "}
                <em className="italic font-light text-gold-light">Approved Installer</em>
              </h2>
            </FadeUp>
            <FadeUp delay={2}>
              <p className="font-body font-light text-white/60 text-base leading-relaxed mb-8">
                Join our network of certified microcement installers. Access professional training, preferential product pricing, technical support, and installation referrals across the UK.
              </p>
            </FadeUp>
            <FadeUp delay={2}>
              <ul className="space-y-3 mb-10">
                {[
                  "Professional 2-day application training",
                  "Trade pricing on all MONOCEM products",
                  "Dedicated technical support line",
                  "Listed on MONOCEM installer directory",
                  "Regular technique workshops and CPD",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5 shrink-0">
                      <FeatureIcon text={item} />
                    </span>
                    <span className="font-body font-light text-white/60 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={3}>
              <Link href="/trade/installer-programme" className="btn-gold">
                Apply to the Programme
              </Link>
            </FadeUp>
          </div>

          {/* Visual card */}
          <FadeUp delay={1}>
            <div
              className="relative aspect-square overflow-hidden"
              style={{ background: "linear-gradient(160deg, #3a3530 0%, #252220 50%, #131110 100%)" }}
            >
              <div
                className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display font-light text-white/20 text-8xl leading-none mb-4">Pro</p>
                  <div className="border border-gold/30 px-8 py-4">
                    <p className="text-[10px] font-body font-medium tracking-label uppercase text-gold mb-1">Installer Network</p>
                    <p className="font-display font-light text-white text-2xl">UK Nationwide</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
