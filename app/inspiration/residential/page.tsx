import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import CtaBanner from "@/components/sections/CtaBanner";

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
      <CtaBanner
        eyebrow="Your Home"
        heading="Ready to Transform"
        headingItalic="Your Space?"
        text="Tell us about your project and we'll provide a detailed quote within 1–2 business days."
        primaryCta={{ label: "Get a Free Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "View Commercial Work", href: "/inspiration/commercial" }}
      />
    </>
  );
}
