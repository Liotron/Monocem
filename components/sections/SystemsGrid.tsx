import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

const systems = [
  {
    title: "Bathrooms & Wet Rooms",
    desc: "Seamless, waterproof microcement for bathroom walls, floors, and wet room enclosures.",
    href: "/installation/bathrooms",
    gradient: "linear-gradient(135deg, #3d3530 0%, #1e1a18 100%)",
  },
  {
    title: "Floors & Stairs",
    desc: "Continuous microcement flooring that flows from room to room with zero grout lines.",
    href: "/installation/floors",
    gradient: "linear-gradient(135deg, #353028 0%, #1a1816 100%)",
  },
  {
    title: "Walls & Ceilings",
    desc: "Architectural microcement wall finishes that bring texture and depth to any interior.",
    href: "/installation/walls",
    gradient: "linear-gradient(135deg, #2e2c2a 0%, #161412 100%)",
  },
  {
    title: "Worktops & Furniture",
    desc: "Bespoke microcement worktops with no joins — seamless, hygienic, and distinctly architectural.",
    href: "/installation/worktops",
    gradient: "linear-gradient(135deg, #302e2c 0%, #1a1918 100%)",
  },
];

export default function SystemsGrid() {
  return (
    <section className="py-24 lg:py-32 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <FadeUp>
              <SectionLabel light className="mb-4">Installation Systems</SectionLabel>
            </FadeUp>
            <FadeUp delay={1}>
              <h2 className="font-display font-light text-white text-4xl lg:text-5xl leading-tight tracking-tight">
                Every Surface, <em className="italic font-light">Perfected</em>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={2}>
            <Link href="/installation" className="btn-outline text-sm">
              All Systems
            </Link>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
          {systems.map((sys, i) => (
            <FadeUp key={sys.href} delay={(Math.min(i, 4) as 0 | 1 | 2 | 3 | 4)}>
              <Link
                href={sys.href}
                className="group relative block overflow-hidden aspect-[3/4]"
                style={{ background: sys.gradient }}
              >
                {/* Noise */}
                <div
                  className="absolute inset-0 opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Scale overlay */}
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-brand" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display font-light text-white text-xl leading-tight mb-2 group-hover:text-gold-light transition-colors duration-400 ease-brand">
                    {sys.title}
                  </h3>
                  <p className="text-[12px] font-body font-light text-white/50 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-400 ease-brand translate-y-2 group-hover:translate-y-0">
                    {sys.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-[10px] font-body font-medium tracking-button uppercase text-gold">Explore</span>
                    <span className="text-gold transition-transform duration-400 ease-brand group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
