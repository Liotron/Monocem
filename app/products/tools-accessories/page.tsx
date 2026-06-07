import type { Metadata } from "next";
import ProductPage from "@/components/templates/ProductPage";
import { products } from "@/lib/data/products";

const product = products.find((p) => p.slug === "tools-accessories")!;

export const metadata: Metadata = {
  title: product.seoTitle,
  description: product.seoDescription,
  alternates: { canonical: "/products/tools-accessories" },
};

export default function ToolsAccessoriesPage() {
  return <ProductPage product={product} />;
}
