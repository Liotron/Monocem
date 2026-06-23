import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import GuidesIndex from "@/components/sections/GuidesIndex";

export const metadata: Metadata = {
  title: "Microcement Guides & Resources | Learn | MONOCEM",
  description: "Learn everything about microcement — what it is, how to apply it, costs, maintenance, and comparisons with polished concrete. Expert guides from MONOCEM.",
  alternates: { canonical: "/learn" },
};

export default function LearnHubPage() {
  return (
    <>
      <Hero
        eyebrow="Learn"
        headline="Microcement"
        headlineItalic="Knowledge Base"
        subtext="Everything you need to know about microcement — from what it is to how much it costs. Expert guides written by our installation team."
        primaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "View Systems", href: "/installation" }}
      />

      <GuidesIndex />
    </>
  );
}
