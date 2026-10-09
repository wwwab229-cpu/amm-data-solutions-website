import type { MetadataRoute } from "next";

const siteUrl = "https://amm-data-solutions-website.vercel.app";
const serviceSlugs = [
  "ai-automation-business-systems",
  "website-ecommerce-solutions",
  "data-analytics-business-intelligence",
  "seo-ai-search-visibility",
  "lead-generation-growth-systems",
  "digital-marketing-creative-solutions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...serviceSlugs.map((slug) => ({
      url: `${siteUrl}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
