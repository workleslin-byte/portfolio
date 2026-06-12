import type { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity";
import { getAllWorkItems } from "@/lib/queries";
import type { WorkItem } from "@/types";
import WorkList from "@/components/sections/WorkList";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Seven years of content, email, SEO, LinkedIn, and product work — with real numbers from GA4, SEMrush, Klaviyo, and CleverTap.",
};

export default async function WorkPage() {
  const items = await sanityFetch<WorkItem[]>({
    query: getAllWorkItems,
    revalidate: 3600,
  });

  return (
    <>
      {/* ── Page header ─────────────────────────────────────────────── */}
      <section className="w-full bg-obsidian px-6 pt-32 pb-16 md:px-12 md:pt-[8rem]">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.35em] text-gold">
          ( THE WORK )
        </p>

        <h1
          className="font-serif font-bold leading-[1.05] text-linen"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
        >
          Seven years of learning what actually makes content work —
        </h1>
        <h1
          className="font-serif italic leading-[1.05] text-gold"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
        >
          not in theory, but with real budgets and real targets.
        </h1>

        <p className="mt-6 max-w-2xl font-sans text-sm leading-relaxed text-muted">
          All numbers verified from GA4, SEMrush India, LinkedIn, Klaviyo, and
          CleverTap. FY 2024–25.
        </p>
      </section>

      {/* ── Work list ───────────────────────────────────────────────── */}
      <section className="w-full bg-obsidian px-6 pb-24 md:px-12 md:pb-36">
        <WorkList items={items ?? []} />
      </section>
    </>
  );
}
