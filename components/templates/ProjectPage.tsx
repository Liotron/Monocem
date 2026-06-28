import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/data/projects";
import { projects } from "@/lib/data/projects";
import { firstSentence } from "@/lib/utils/text";
import Hero from "@/components/sections/Hero";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import QuoteForm from "@/components/sections/QuoteForm";

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const sameCategory = projects.filter(
    (p) => p.slug !== project.slug && p.categories.some((c) => project.categories.includes(c))
  );
  const related = (sameCategory.length > 0 ? sameCategory : projects.filter((p) => p.slug !== project.slug)).slice(0, 3);

  const details = [
    { label: "Location", value: project.location },
    { label: "Area", value: project.area },
    { label: "Duration", value: project.duration },
    { label: "Colour", value: project.colour },
    { label: "Finish", value: project.finish },
  ];

  return (
    <>
      <Hero
        eyebrow={project.meta}
        headline={project.title}
        subtext={firstSentence(project.description)}
        backgroundImage={project.image}
        imagePosition={project.imagePosition}
        primaryCta={{ label: "Start Your Project", href: "/get-a-quote" }}
        secondaryCta={{ label: "All Projects", href: "/inspiration/projects" }}
      />

      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <FadeUp>
                <SectionLabel className="mb-6">The Project</SectionLabel>
              </FadeUp>
              <FadeUp delay={1}>
                <h2 className="font-display font-light text-charcoal text-4xl leading-tight tracking-tight mb-6">
                  {project.title}
                </h2>
              </FadeUp>
              <FadeUp delay={2}>
                <p className="font-body font-light text-text-mid text-base leading-relaxed mb-8">
                  {project.description}
                </p>
              </FadeUp>
              <FadeUp delay={2}>
                <Link href="/get-a-quote" className="btn-gold">
                  Start a Similar Project
                </Link>
              </FadeUp>
            </div>

            <FadeUp delay={1}>
              <div className="border border-charcoal/10 p-8">
                <SectionLabel className="mb-6">Project Details</SectionLabel>
                <ul className="space-y-5">
                  {details.map((d) => (
                    <li
                      key={d.label}
                      className="flex items-baseline justify-between gap-4 pb-4 border-b border-charcoal/10 last:border-0 last:pb-0"
                    >
                      <span className="text-[10px] font-body font-medium tracking-label uppercase text-text-light">
                        {d.label}
                      </span>
                      <span className="font-body font-light text-charcoal text-sm text-right">{d.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1.5 text-[10px] font-body font-medium tracking-button uppercase text-text-mid border border-charcoal/15 capitalize"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream border-t border-stone/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel className="mb-8">More Projects</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[3px]">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/inspiration/projects/${rel.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden"
              >
                <Image
                  src={rel.image}
                  alt={rel.title}
                  fill
                  sizes="(min-width: 1280px) 427px, (min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[800ms] ease-brand group-hover:scale-105"
                  style={{ objectPosition: rel.imagePosition || "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="font-display font-light text-white text-lg leading-tight mb-1">{rel.title}</h4>
                  <span className="text-[0.6rem] font-body font-medium tracking-[0.14em] uppercase text-white/45">
                    {rel.meta}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteForm />
    </>
  );
}
