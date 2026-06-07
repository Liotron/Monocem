import type { Metadata } from "next";
import ProductPage from "@/components/templates/ProductPage";
import { products } from "@/lib/data/products";

const product = products.find((p) => p.slug === "microcement-pigments")!;

export const metadata: Metadata = {
  title: product.seoTitle,
  description: product.seoDescription,
  alternates: { canonical: "/products/microcement-pigments" },
};

export default function MicroCementPigmentsPage() {
  return <ProductPage product={product} />;
}
