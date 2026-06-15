import type { MetadataRoute } from "next";

const BASE_URL = "https://leslin-portfolio.vercel.app";

const CASE_ROUTES = ["storyteller", "systems", "product", "brand"];

export default function sitemap(): MetadataRoute.Sitemap {
  const cases = CASE_ROUTES.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    ...cases,
  ];
}
