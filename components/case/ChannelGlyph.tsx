import type { ReactNode } from "react";

type Glyph = "linkedin" | "mail" | "push" | "chart" | "search" | "article";

const PATHS: Record<Glyph, ReactNode> = {
  // LinkedIn — simplified "in" mark drawn as strokes to sit in the editorial palette.
  linkedin: (
    <>
      <rect x="3" y="9" width="3.2" height="11" rx="0.4" />
      <circle cx="4.6" cy="4.4" r="1.7" />
      <path d="M10 20v-6a3 3 0 0 1 6 0v6" />
      <path d="M10 20v-9" />
    </>
  ),
  // Email — envelope.
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
  // Push — bell.
  push: (
    <>
      <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
      <path d="M10.5 19a1.6 1.6 0 0 0 3 0" />
    </>
  ),
  // Blog growth — trending-up line with arrow.
  chart: (
    <>
      <path d="M3 17l5.5-5.5 3.5 3.5L21 6" />
      <path d="M21 11V6h-5" />
    </>
  ),
  // SEO — magnifier.
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5L21 21" />
    </>
  ),
  // Long-form — document with text lines.
  article: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8.5 8h7M8.5 12h7M8.5 16h4" />
    </>
  ),
};

/**
 * A small monochrome channel mark in a subtly tinted badge. Reads as a quiet
 * editorial glyph rather than a clashing brand-colour blob.
 */
export default function ChannelGlyph({
  glyph,
  tint = "rgba(31, 148, 77, 0.10)",
}: {
  glyph: Glyph;
  tint?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line"
      style={{ backgroundColor: tint }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-80"
      >
        {PATHS[glyph]}
      </svg>
    </span>
  );
}
