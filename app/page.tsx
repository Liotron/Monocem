import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import BrandIntro from "@/components/sections/BrandIntro";
import SystemsGrid from "@/components/sections/SystemsGrid";
import ColourCollection from "@/components/sections/ColourCollection";
import SampleRequest from "@/components/sections/SampleRequest";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import WhyMonocem from "@/components/sections/WhyMonocem";
import QuoteForm from "@/components/sections/QuoteForm";
import FAQAccordion from "@/components/sections/FAQAccordion";

export const metadata: Metadata = {
  title: "MONOCEM — Premium Microcement Systems UK | Supply & Installation",
  description: "MONOCEM supplies and installs premium microcement across the UK. Seamless, waterproof surfaces for floors, walls, bathrooms and worktops. Request a sample or quote today.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Premium Microcement UK"
        headline="Seamless surfaces,"
        headlineItalic="enduring beauty"
        subtext="MONOCEM supplies and installs premium microcement across the UK — seamless, waterproof surfaces for floors, walls, bathrooms, and worktops."
        primaryCta={{ label: "Request a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "View Our Systems", href: "/installation" }}
        backgroundImage="/images/img-hero.png"
      />
      <BrandIntro />
      <WhyMonocem />
      <SystemsGrid />
      <ProjectsGallery />
      <ColourCollection />
      <SampleRequest />
      <QuoteForm />
      <FAQAccordion />
    </>
  );
}
