import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

// Strip BOM and whitespace that Windows piping can inject into env vars
function cleanEnv(val: string | undefined, fallback: string): string {
  if (!val) return fallback;
  const s = val.trim();
  return s.charCodeAt(0) === 0xFEFF ? s.slice(1) : s;
}

export const client = createClient({
  projectId: cleanEnv(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, "132hn2ll"),
  dataset: cleanEnv(process.env.NEXT_PUBLIC_SANITY_DATASET, "production"),
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
});

// Server-only client for content queries. The dataset is private, so reads
// need a token. SANITY_API_TOKEN is NOT a NEXT_PUBLIC_ var, so it is never
// bundled into client code — and sanityFetch is only called from Server
// Components, keeping the token server-side.
const fetchClient = client.withConfig({
  token: cleanEnv(process.env.SANITY_API_TOKEN, ""),
  useCdn: false,
  perspective: "published",
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: string;
  params?: Record<string, unknown>;
  revalidate?: number | false;
  tags?: string[];
}): Promise<T> {
  try {
    return await fetchClient.fetch<T>(query, params, {
      next: { revalidate, tags },
    });
  } catch (err) {
    console.warn("[sanityFetch] Fetch failed, returning empty result:", err);
    return (Array.isArray([] as unknown as T) ? [] : null) as T;
  }
}