import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProjectsFilterGrid from "@/components/sections/ProjectsFilterGrid";
import QuoteForm from "@/components/sections/QuoteForm";

export const metadata: Metadata = {
  title: "Microcement Project Portfolio | MONOCEM",
  description: "Browse MONOCEM's complete project portfolio — microcement installations in homes, hotels, restaurants, and commercial spaces across the UK.",
  alternates: { canonical: "/inspiration/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Hero
        eyebrow="Portfolio"
        headline="Our Most Notable"
        headlineItalic="Projects"
        subtext="A curated selection of MONOCEM installations — each one a collaboration between our team, our clients, and the spaces they inhabit."
        primaryCta={{ label: "Start Your Project", href: "/get-a-quote" }}
        secondaryCta={{ label: "Our Systems", href: "/installation" }}
      />
      <ProjectsFilterGrid />
      <QuoteForm />
    </>
  );
}
