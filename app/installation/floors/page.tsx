import type { Metadata } from "next";
import SurfacePage from "@/components/templates/SurfacePage";
import { surfaces } from "@/lib/data/surfaces";

const surface = surfaces.find((s) => s.slug === "floors")!;

export const metadata: Metadata = {
  title: surface.seoTitle,
  description: surface.seoDescription,
  alternates: { canonical: "/installation/floors" },
};

export default function FloorsPage() {
  return <SurfacePage surface={surface} />;
}
