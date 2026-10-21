import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { legalDocs } from "@/lib/legal";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/shop", "/about", "/quality", "/faq", "/contact", "/cart"];
  return [
    ...staticPaths.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "monthly" as const })),
    ...products.map((p) => ({ url: `${SITE_URL}/shop/${p.slug}`, changeFrequency: "weekly" as const })),
    ...legalDocs.map((d) => ({ url: `${SITE_URL}/legal/${d.slug}`, changeFrequency: "yearly" as const })),
  ];
}
