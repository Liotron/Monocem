import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import QuoteForm from "@/components/sections/QuoteForm";

export const metadata: Metadata = {
  title: "Residential Microcement Projects | MONOCEM",
  description: "Microcement in luxury UK homes — floors, walls, bathrooms, kitchens, and stairs. Browse residential project inspiration from MONOCEM.",
  alternates: { canonical: "/inspiration/residential" },
};

export default function ResidentialPage() {
  return (
    <>
      <Hero
        eyebrow="Residential"
        headline="Microcement in"
        headlineItalic="the Home"
        subtext="From urban apartments to rural retreats, MONOCEM transforms residential interiors with seamless, architectural microcement surfaces."
        primaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "Our Systems", href: "/installation" }}
      />
      <ProjectsGallery />
      <QuoteForm />
    </>
  );
}
