import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

const projects = [
  { title: "Minimalist Bathroom, London", tag: "Bathroom", gradient: "linear-gradient(135deg, #4a4540 0%, #2e2a26 60%, #1a1816 100%)" },
  { title: "Open Plan Kitchen Floor, Bristol", tag: "Floors", gradient: "linear-gradient(160deg, #3d3835 0%, #25221f 60%, #151210 100%)" },
  { title: "Feature Wall, Manchester Loft", tag: "Walls", gradient: "linear-gradient(145deg, #423d38 0%, #2c2825 60%, #18150f 100%)" },
  { title: "Seamless Staircase, Surrey", tag: "Stairs", gradient: "linear-gradient(155deg, #3a3632 0%, #252220 60%, #121110 100%)" },
  { title: "Bespoke Kitchen Worktop, Edinburgh", tag: "Worktops", gradient: "linear-gradient(140deg, #46413c 0%, #2a2724 60%, #171514 100%)" },
];

export default function ProjectsGallery() {
  return (
    <section className="py-24 lg:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <FadeUp>
              <SectionLabel className="mb-4">Portfolio</SectionLabel>
            </FadeUp>
            <FadeUp delay={1}>
              <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight">
                Recent <em className="italic font-light">Projects</em>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={2}>
            <Link href="/inspiration/projects" className="btn-outline-dark">
              View All Projects
            </Link>
          </FadeUp>
        </div>

        {/* Asymmetric 12-col grid */}
        <div className="grid grid-cols-12 grid-rows-2 gap-2 h-[600px] lg:h-[700px]">
          {/* Large left */}
          <FadeUp className="col-span-12 sm:col-span-6 lg:col-span-5 row-span-2">
            <ProjectCard project={projects[0]} tall />
          </FadeUp>
          {/* Top right wide */}
          <FadeUp delay={1} className="col-span-12 sm:col-span-6 lg:col-span-7 row-span-1">
            <ProjectCard project={projects[1]} />
          </FadeUp>
          {/* Bottom right — 3 smaller */}
          <FadeUp delay={1} className="col-span-4 lg:col-span-3 row-span-1">
            <ProjectCard project={projects[2]} />
          </FadeUp>
          <FadeUp delay={2} className="col-span-4 lg:col-span-2 row-span-1">
            <ProjectCard project={projects[3]} />
          </FadeUp>
          <FadeUp delay={3} className="col-span-4 lg:col-span-2 row-span-1">
            <ProjectCard project={projects[4]} />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, tall = false }: { project: (typeof projects)[0]; tall?: boolean }) {
  return (
    <div
      className="group relative h-full overflow-hidden cursor-pointer"
      style={{ background: project.gradient }}
    >
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-brand" />

      {tall && (
        <div className="absolute bottom-6 left-6 right-6">
          <span className="section-label text-gold/80 mb-2 block">{project.tag}</span>
          <p className="font-display font-light text-white text-xl leading-tight">{project.title}</p>
        </div>
      )}
      {!tall && (
        <div className="absolute bottom-4 left-4 right-4">
          <span className="text-[9px] font-body font-medium tracking-label uppercase text-gold/70 mb-1 block">{project.tag}</span>
          <p className="font-display font-light text-white text-sm leading-tight">{project.title}</p>
        </div>
      )}
    </div>
  );
}
