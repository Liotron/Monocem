import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

const noise =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='6' seed='7' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const applications = [
  { title: "Bathrooms", href: "/installation/bathrooms", image: "/images/img-bathrooms.png", position: "50% 40%" },
  { title: "Kitchens", href: "/installation/kitchens", image: "/images/img-kitchens.png", position: "center" },
  { title: "Floors", href: "/installation/floors", image: "/images/img-floors.png", position: "center" },
  { title: "Walls", href: "/installation/walls", image: "/images/img-walls.png", position: "50% 30%" },
  { title: "Stairs", href: "/installation/stairs", image: "/images/img-stairs.png", position: "center" },
  { title: "Commercial", href: "/inspiration/commercial", image: "/images/img-commercial.png", position: "50% 30%" },
];

export default function SystemsGrid() {
  return (
    <section className="pt-16 lg:pt-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-12">
        <FadeUp>
          <SectionLabel className="mb-4">Applications</SectionLabel>
        </FadeUp>
        <FadeUp delay={1}>
          <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight">
            Designed for <em className="italic font-light text-text-light">Every Surface.</em>
          </h2>
        </FadeUp>
        <FadeUp delay={2}>
          <p className="font-body font-light text-text-mid text-base leading-relaxed mt-4 max-w-md">
            From bathrooms and kitchens to floors, walls and commercial spaces.
          </p>
        </FadeUp>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-[3px]">
        {applications.map((app, i) => (
          <FadeUp key={app.href} delay={(Math.min(i % 5, 4) as 0 | 1 | 2 | 3 | 4)}>
            <Link
              href={app.href}
              className="group relative block overflow-hidden aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]"
            >
              <div
                className="absolute inset-0 transition-transform duration-[800ms] ease-brand group-hover:scale-[1.06]"
                style={{ backgroundImage: `url('${app.image}')`, backgroundSize: "cover", backgroundPosition: app.position }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/[0.06] to-transparent transition-colors duration-400 group-hover:from-black/[0.78]" />
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.055] mix-blend-overlay"
                style={{ backgroundImage: noise, backgroundSize: "280px 280px" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <h3 className="font-display font-light text-white text-xl sm:text-2xl leading-tight mb-1">
                  {app.title}
                </h3>
                <span className="inline-flex items-center gap-[0.35rem] text-[10px] font-body font-medium tracking-[0.15em] uppercase text-white/40 transition-all duration-300 group-hover:text-gold group-hover:gap-3">
                  Explore →
                </span>
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
