import type { MetadataRoute } from "next";

const BASE_URL = "https://leslin.in";

const WORK_SLUGS = [
  "blog-growth",
  "seo",
  "email-marketing",
  "push-notifications",
  "linkedin",
  "long-form-writing",
  "pocket-notes",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const workRoutes = WORK_SLUGS.map((slug) => ({
    url: `${BASE_URL}/work/${slug}`,
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
    {
      url: `${BASE_URL}/work`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...workRoutes,
  ];
}
