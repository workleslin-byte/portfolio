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
      {/* ── Hero (dark) ─────────────────────────────────────────────── */}
      <section className="w-full bg-obsidian px-6 pt-32 pb-16 md:px-12 md:pt-[8rem] md:pb-20">
        <div className="mx-auto max-w-5xl">
          {/* Number + Category row */}
          <div className="mb-6 flex items-center gap-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-linen/30">
              {displayNumber}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-linen/25">
              {categoryLabel}
            </span>
          </div>

          {/* Content headline */}
          <h1
            className="font-display font-extrabold uppercase leading-[0.92] text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            {item.title}
          </h1>

          {/* Impact / stat headline */}
          {item.headline && (
            <p
              className="mt-6 font-serif italic leading-[1.1] text-linen/60"
              style={{ fontSize: "clamp(1.75rem, 4vw, 4rem)" }}
            >
              {item.headline}
            </p>
          )}

          {/* Subheadline qualifier */}
          {item.subheadline && (
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
              {item.subheadline}
            </p>
          )}
        </div>
      </section>

      {/* ── Stats grid (dark) ───────────────────────────────────────── */}
      {item.stats && item.stats.length > 0 && (
        <section className="w-full border-y border-linen/10 bg-obsidian px-6 py-12 md:px-12">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
            {item.stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className="font-display font-extrabold leading-none text-gold"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 font-sans text-xs text-muted">{stat.label}</p>
                {stat.delta && (
                  <p className="mt-1 font-mono text-[10px] tracking-wide text-emerald-400/80">
                    {stat.delta}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Body (light) ────────────────────────────────────────────── */}
      <section className="w-full bg-linen px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-3xl">
          {item.body && item.body.length > 0 ? (
            <PortableText value={item.body} components={portableTextComponents} />
          ) : (
            <p className="font-sans text-sm leading-relaxed text-ink/60 italic">
              Case study content coming soon.
            </p>
          )}
        </div>
      </section>

      {/* ── Prev / Next navigation ───────────────────────────────────── */}
      <nav className="w-full border-t border-linen/10 bg-obsidian px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="group flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-linen/30 transition-colors group-hover:text-linen/60">
                ← Previous
              </span>
              <span className="font-sans text-sm font-semibold text-linen/50 transition-colors group-hover:text-linen">
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
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-linen/30 transition-colors group-hover:text-linen/60">
                Next →
              </span>
              <span className="text-right font-sans text-sm font-semibold text-linen/50 transition-colors group-hover:text-linen">
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
