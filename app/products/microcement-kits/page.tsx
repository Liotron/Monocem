import type { Metadata } from "next";
import ProductPage from "@/components/templates/ProductPage";
import { products } from "@/lib/data/products";

const product = products.find((p) => p.slug === "microcement-kits")!;

export const metadata: Metadata = {
  title: product.seoTitle,
  description: product.seoDescription,
  alternates: { canonical: "/products/microcement-kits" },
};

export default function MicroCementKitsPage() {
  return <ProductPage product={product} />;
}
