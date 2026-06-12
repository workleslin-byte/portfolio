import Link from "next/link";
import { sanityFetch } from "@/lib/sanity";
import { getFeaturedWorkItems } from "@/lib/queries";
import type { WorkItem } from "@/types";
import WorkPreviewGrid from "./WorkPreviewGrid";

export default async function WorkPreview() {
  const items = await sanityFetch<WorkItem[]>({
    query: getFeaturedWorkItems,
    revalidate: 3600,
  });

  return (
    <section className="w-full bg-obsidian px-6 py-24 md:px-12 md:py-36">
      {/* Section label */}
      <p className="mb-12 font-mono text-[11px] uppercase tracking-[0.35em] text-gold">
        ( SELECTED WORK )
      </p>

      {/* Grid — renders only when there are items */}
      {items && items.length > 0 ? (
        <WorkPreviewGrid items={items} />
      ) : (
        <p className="py-16 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
          ( Work coming soon — data is being seeded )
        </p>
      )}

      {/* CTA */}
      <div className="mt-16 flex justify-center">
        <Link
          href="/work"
          className="inline-flex items-center border border-gold px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-gold transition-all duration-200 hover:bg-gold hover:text-obsidian"
        >
          View all work →
        </Link>
      </div>
    </section>
  );
}
