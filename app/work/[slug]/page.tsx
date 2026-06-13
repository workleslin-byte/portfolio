import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { sanityFetch } from "@/lib/sanity";
import {
  getWorkItemBySlugQuery,
  getAllWorkSlugs,
  getAllWorkItemsNav,
} from "@/lib/queries";
import type { WorkItem } from "@/types";
import { portableTextComponents } from "@/components/ui/PortableTextComponents";
import CaseStudyHero from "@/components/sections/CaseStudyHero";

// ── Static generation ────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>({
    query: getAllWorkSlugs,
    revalidate: false,
  });
  return (slugs ?? []).map(({ slug }) => ({ slug }));
}

// ── Per-page metadata ────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const item = await sanityFetch<WorkItem | null>({
    query: getWorkItemBySlugQuery,
    params: { slug: params.slug },
    revalidate: 3600,
  });
  if (!item) return { title: "Not Found" };
  return {
    title: item.title,
    description: item.subheadline ?? item.headline,
  };
}

// ── Category display labels ──────────────────────────────────────────────────

const CATEGORY_LABELS: Record<string, string> = {
  "blog-growth": "Blog Growth",
  seo: "SEO",
  "email-marketing": "Email Marketing",
  "push-notifications": "Push Notifications",
  linkedin: "LinkedIn",
  "long-form-writing": "Long-Form Writing",
  "pocket-notes": "Independent Product",
};

// ── Nav item type ────────────────────────────────────────────────────────────

interface NavItem {
  title: string;
  slug: string;
  order?: number;
}

// ── Page ─────────────────────────────────────────────────────────────────────

interface Props {
  params: { slug: string };
}

export default async function CaseStudyPage({ params }: Props) {
  const [item, allItems] = await Promise.all([
    sanityFetch<WorkItem | null>({
      query: getWorkItemBySlugQuery,
      params: { slug: params.slug },
      revalidate: 3600,
    }),
    sanityFetch<NavItem[]>({
      query: getAllWorkItemsNav,
      revalidate: 3600,
    }),
  ]);

  if (!item) notFound();

  // Prev / next from ordered list
  const idx = (allItems ?? []).findIndex((i) => i.slug === params.slug);
  const prev = idx > 0 ? allItems![idx - 1] : null;
  const next = idx !== -1 && idx < (allItems?.length ?? 0) - 1 ? allItems![idx + 1] : null;

  const displayNumber = String(item.order ?? idx + 1).padStart(2, "0");
  const categoryLabel =
    CATEGORY_LABELS[item.category ?? ""] ?? item.category ?? "";

  return (
    <>
      {/* ── Hero + signature number + scroll-revealed stats (client) ── */}
      <CaseStudyHero
        title={item.title}
        categoryLabel={categoryLabel}
        displayNumber={displayNumber}
        headline={item.headline}
        subheadline={item.subheadline}
        stats={item.stats}
      />

      {/* ── Body (light) ────────────────────────────────────────────── */}
      <section className="w-full bg-paper px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-3xl">
          {item.body && item.body.length > 0 ? (
            <PortableText value={item.body} components={portableTextComponents} />
          ) : (
            <p className="font-sans text-sm leading-relaxed text-ink/60">
              Case study content coming soon.
            </p>
          )}
        </div>
      </section>

      {/* ── Prev / Next navigation ───────────────────────────────────── */}
      <nav className="w-full border-t border-paper/10 px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="group flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute-dark transition-colors group-hover:text-accent">
                ← Previous
              </span>
              <span className="font-sans text-sm font-semibold text-paper/60 transition-colors group-hover:text-paper">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group flex flex-col items-end gap-1"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute-dark transition-colors group-hover:text-accent">
                Next →
              </span>
              <span className="text-right font-sans text-sm font-semibold text-paper/60 transition-colors group-hover:text-paper">
                {next.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </nav>
    </>
  );
}
