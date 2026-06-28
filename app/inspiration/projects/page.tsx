import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProjectsFilterGrid from "@/components/sections/ProjectsFilterGrid";
import CtaBanner from "@/components/sections/CtaBanner";

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
      <CtaBanner
        eyebrow="Start Your Project"
        heading="Inspired By"
        headingItalic="What You've Seen?"
        text="Tell us about your project and we'll provide a detailed quote within 1–2 business days."
        primaryCta={{ label: "Get a Free Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "Explore Our Systems", href: "/installation" }}
      />
    </>
  );
}
