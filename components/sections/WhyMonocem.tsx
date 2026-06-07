import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

const benefits = [
  { icon: "seamless", title: "Zero Grout Lines", desc: "One continuous surface — no joints, no grout, no interruptions to your design." },
  { icon: "water", title: "Fully Waterproof", desc: "Our sealed system is completely waterproof — suitable for bathrooms, wet rooms, and kitchens." },
  { icon: "palette", title: "12 Custom Colours", desc: "A carefully curated palette from soft whites to deep charcoals, with custom options available." },
  { icon: "shield", title: "Lifetime Durability", desc: "When correctly installed and sealed, MONOCEM surfaces are built to endure for decades." },
  { icon: "tool", title: "Expert Installation", desc: "Installed by MONOCEM-trained professionals with decades of combined microcement experience." },
  { icon: "leaf", title: "Low VOC Formula", desc: "Our water-based, low VOC products are safer for installers and occupants alike." },
];

const icons: Record<string, JSX.Element> = {
  seamless: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  ),
  water: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M12 2l6 10a6 6 0 11-12 0L12 2z" />
    </svg>
  ),
  palette: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="12" cy="12" r="10" />
      <circle cx="8" cy="10" r="1.5" fill="currentColor" />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" />
      <circle cx="16" cy="10" r="1.5" fill="currentColor" />
    </svg>
  ),
  shield: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M12 2l8 4v6c0 5-8 9-8 9S4 17 4 12V6l8-4z" />
    </svg>
  ),
  tool: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  leaf: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
};

export default function WhyMonocem() {
  return (
    <section className="py-24 lg:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <FadeUp>
            <SectionLabel className="mb-4">Why Choose Us</SectionLabel>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight">
              The MONOCEM <em className="italic font-light">Difference</em>
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, i) => (
            <FadeUp key={benefit.title} delay={(Math.min(i % 4, 4) as 0 | 1 | 2 | 3 | 4)}>
              <div className="group">
                <div className="text-gold mb-5 transition-transform duration-brand ease-brand group-hover:-translate-y-1">
                  {icons[benefit.icon]}
                </div>
                <div className="w-8 h-px bg-gold/40 mb-5" />
                <h3 className="font-display font-light text-charcoal text-xl mb-3">{benefit.title}</h3>
                <p className="font-body font-light text-text-light text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
