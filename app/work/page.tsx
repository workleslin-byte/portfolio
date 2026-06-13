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
      <section className="w-full px-6 pt-32 pb-16 md:px-12 md:pt-[8rem]">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.35em] text-accent">
          The work
        </p>

        <h1
          className="font-display font-extrabold tracking-tight leading-[0.95] text-paper"
          style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
        >
          Seven years of learning
        </h1>
        <h1
          className="font-display font-extrabold tracking-tight leading-[0.95] text-paper/45"
          style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
        >
          what actually works.
        </h1>

        <p className="mt-8 max-w-2xl font-sans text-sm leading-relaxed text-paper/45">
          The idea first. The proof if you want it. Every number verified from
          GA4, SEMrush India, LinkedIn, Klaviyo, and CleverTap. FY 2024–25.
        </p>
      </section>

      {/* ── Work list ───────────────────────────────────────────────── */}
      <section className="w-full px-6 pb-24 md:px-12 md:pb-36">
        <WorkList items={items ?? []} />
      </section>
    </>
  );
}
