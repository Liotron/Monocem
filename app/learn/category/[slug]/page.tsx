import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import GuidesIndex from "@/components/sections/GuidesIndex";
import { guideCategories } from "@/lib/data/guides";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guideCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = guideCategories.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: `${category.label} Guides | MONOCEM Knowledge Centre`,
    description: category.description,
    alternates: { canonical: `/learn/category/${category.slug}` },
  };
}

export default async function GuideCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = guideCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <>
      <Hero
        eyebrow="Guides"
        headline={category.label}
        subtext={category.description}
        primaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "All Guides", href: "/learn" }}
      />

      <GuidesIndex activeCategory={category.slug} />
    </>
  );
}
