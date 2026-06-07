import type { Metadata } from "next";
import ProductPage from "@/components/templates/ProductPage";
import { products } from "@/lib/data/products";

const product = products.find((p) => p.slug === "microcement-primer")!;

export const metadata: Metadata = {
  title: product.seoTitle,
  description: product.seoDescription,
  alternates: { canonical: "/products/microcement-primer" },
};

export default function MicroCementPrimerPage() {
  return <ProductPage product={product} />;
}
