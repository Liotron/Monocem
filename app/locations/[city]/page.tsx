import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations } from "@/lib/data/locations";
import LocationPage from "@/components/templates/LocationPage";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const location = locations.find((l) => l.slug === city);
  if (!location) return {};

  return {
    title: `Microcement Installation ${location.name} | MONOCEM UK`,
    description: `Professional microcement installation in ${location.name}. MONOCEM supply and install seamless microcement floors, walls and bathrooms across ${location.region}. Request a free quote.`,
    alternates: { canonical: `/locations/${location.slug}` },
    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "MONOCEM",
        description: `Professional microcement installation in ${location.name}`,
        areaServed: {
          "@type": "City",
          name: location.name,
        },
        url: `https://monocem.co.uk/locations/${location.slug}`,
      }),
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const location = locations.find((l) => l.slug === city);
  if (!location) notFound();

  return <LocationPage location={location} />;
}
