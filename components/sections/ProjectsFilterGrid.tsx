"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, projectFilters } from "@/lib/data/projects";

export default function ProjectsFilterGrid() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <section className="py-16 lg:py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap gap-3 mb-10">
          {projectFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActive(filter.value)}
              className={`px-5 py-2.5 text-[11px] font-body font-medium tracking-button uppercase border transition-all duration-200 ${
                active === filter.value
                  ? "bg-charcoal text-white border-charcoal"
                  : "text-text-mid border-charcoal/15 hover:border-gold/50 hover:text-charcoal"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-[3px]">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/inspiration/projects/${project.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden"
            >
              <div
                className="absolute inset-0 transition-transform duration-[800ms] ease-brand group-hover:scale-105"
                style={{
                  backgroundImage: `url('${project.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: project.imagePosition || "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h4 className="font-display font-light text-white text-xl leading-tight mb-1">
                  {project.title}
                </h4>
                <span className="text-[0.62rem] font-body font-medium tracking-[0.14em] uppercase text-white/45">
                  {project.meta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
