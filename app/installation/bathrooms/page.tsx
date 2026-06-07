import type { Metadata } from "next";
import SurfacePage from "@/components/templates/SurfacePage";
import { surfaces } from "@/lib/data/surfaces";

const surface = surfaces.find((s) => s.slug === "bathrooms")!;

export const metadata: Metadata = {
  title: surface.seoTitle,
  description: surface.seoDescription,
  alternates: { canonical: "/installation/bathrooms" },
};

export default function BathroomsPage() {
  return <SurfacePage surface={surface} />;
}
