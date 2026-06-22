import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

const heroProject = {
  title: "Kensington Residence",
  meta: "Kitchen & Worktops · London",
  image: "/images/img-proj-kitchen.png",
  position: "center 40%",
};

const thumbProjects = [
  { title: "Notting Hill Spa", meta: "Wet Room · London", image: "/images/img-proj-shower.png", position: "center 20%" },
  { title: "Chelsea Bathroom", meta: "Bathroom & Vanity · London", image: "/images/img-proj-basin.png", position: "center" },
];

export default function ProjectsGallery() {
  return (
    <section className="py-16 lg:py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <FadeUp>
              <SectionLabel className="mb-4">Portfolio</SectionLabel>
            </FadeUp>
            <FadeUp delay={1}>
              <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight">
                Selected Architectural <em className="italic font-light text-text-light">Projects.</em>
              </h2>
            </FadeUp>
            <FadeUp delay={2}>
              <p className="font-body font-light text-text-mid text-base leading-relaxed mt-3 max-w-[420px]">
                A curated collection of residential and commercial installations across the UK.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={1}>
            <Link href="/inspiration/projects" className="btn-outline-dark">
              View All Projects
            </Link>
          </FadeUp>
        </div>

        <FadeUp>
          <Link
            href="/inspiration/projects"
            className="group relative block w-full aspect-[4/3] overflow-hidden"
          >
            <div
              className="absolute inset-0 transition-transform duration-[800ms] ease-brand group-hover:scale-[1.04]"
              style={{ backgroundImage: `url('${heroProject.image}')`, backgroundSize: "cover", backgroundPosition: heroProject.position }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/[0.68] via-black/[0.05] to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="font-display font-light text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-1">
                {heroProject.title}
              </h3>
              <span className="text-[0.62rem] font-body font-medium tracking-[0.14em] uppercase text-white/45">
                {heroProject.meta}
              </span>
            </div>
          </Link>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px] mt-[3px]">
          {thumbProjects.map((proj, i) => (
            <FadeUp key={proj.title} delay={(i === 1 ? 1 : 0) as 0 | 1}>
              <Link
                href="/inspiration/projects"
                className="group relative block aspect-[4/3] overflow-hidden"
              >
                <div
                  className="absolute inset-0 transition-transform duration-[800ms] ease-brand group-hover:scale-105"
                  style={{ backgroundImage: `url('${proj.image}')`, backgroundSize: "cover", backgroundPosition: proj.position }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="font-display font-light text-white text-xl leading-tight mb-1">{proj.title}</h4>
                  <span className="text-[0.62rem] font-body font-medium tracking-[0.14em] uppercase text-white/45">
                    {proj.meta}
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        <div className="text-center mt-10">
          <FadeUp>
            <Link href="/inspiration/projects" className="btn-outline-dark">
              View All Projects
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
