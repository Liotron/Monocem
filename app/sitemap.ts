import { MetadataRoute } from "next";
import { locations } from "@/lib/data/locations";
import { surfaces } from "@/lib/data/surfaces";
import { products } from "@/lib/data/products";
import { projects } from "@/lib/data/projects";
import { guides, guideCategories } from "@/lib/data/guides";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://monocem.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${siteUrl}/installation`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/colours`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/locations`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/inspiration`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/inspiration/residential`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/inspiration/commercial`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/inspiration/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/learn`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/trade`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/trade/installer-programme`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/get-a-quote`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms-of-use`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const locationPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${siteUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const surfacePages: MetadataRoute.Sitemap = surfaces.map((surface) => ({
    url: `${siteUrl}/installation/${surface.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/inspiration/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const learnPages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${siteUrl}/learn/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const learnCategoryPages: MetadataRoute.Sitemap = guideCategories.map((category) => ({
    url: `${siteUrl}/learn/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...locationPages,
    ...surfacePages,
    ...productPages,
    ...projectPages,
    ...learnPages,
    ...learnCategoryPages,
  ];
}
