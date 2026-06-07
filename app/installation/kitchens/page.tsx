import type { Metadata } from "next";
import SurfacePage from "@/components/templates/SurfacePage";
import { surfaces } from "@/lib/data/surfaces";

const surface = surfaces.find((s) => s.slug === "kitchens")!;

export const metadata: Metadata = {
  title: surface.seoTitle,
  description: surface.seoDescription,
  alternates: { canonical: "/installation/kitchens" },
};

export default function KitchensPage() {
  return <SurfacePage surface={surface} />;
}
