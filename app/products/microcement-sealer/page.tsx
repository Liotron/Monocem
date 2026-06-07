import type { Metadata } from "next";
import ProductPage from "@/components/templates/ProductPage";
import { products } from "@/lib/data/products";

const product = products.find((p) => p.slug === "microcement-sealer")!;

export const metadata: Metadata = {
  title: product.seoTitle,
  description: product.seoDescription,
  alternates: { canonical: "/products/microcement-sealer" },
};

export default function MicroCementSealerPage() {
  return <ProductPage product={product} />;
}
