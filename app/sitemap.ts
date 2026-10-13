import type { MetadataRoute } from "next";

const siteUrl = "https://amm-data-solutions-website.vercel.app";

// Keep this list aligned with the canonical service slugs used by the homepage.
const serviceSlugs = [
  "ai-automation-business-systems",
  "website-ecommerce-solutions",
  "data-analytics-business-intelligence",
  "seo-ai-search-visibility",
  "digital-marketing-creative-solutions",
  "creative-brand-solutions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    ...serviceSlugs.map((slug) => ({
      url: `${siteUrl}/services/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
