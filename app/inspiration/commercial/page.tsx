import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import QuoteForm from "@/components/sections/QuoteForm";

export const metadata: Metadata = {
  title: "Commercial Microcement Projects | Hotels & Restaurants | MONOCEM",
  description: "Commercial microcement installations by MONOCEM — hotels, restaurants, offices, and retail. Durable, seamless surfaces for high-traffic commercial environments.",
  alternates: { canonical: "/inspiration/commercial" },
};

export default function CommercialPage() {
  return (
    <>
      <Hero
        eyebrow="Commercial"
        headline="Microcement for"
        headlineItalic="Commercial Spaces"
        subtext="Hotels, restaurants, offices, and retail — MONOCEM delivers durable, architectural microcement surfaces for commercial environments that demand both beauty and performance."
        primaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "Our Systems", href: "/installation" }}
      />
      <ProjectsGallery />
      <QuoteForm />
    </>
  );
}
