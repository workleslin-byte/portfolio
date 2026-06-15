import type { ReactNode } from "react";

export type Glyph =
  | "agentic"
  | "rag"
  | "eval"
  | "prompt"
  | "analysis"
  | "observe"
  | "funnel"
  | "editorial"
  | "seo"
  | "email"
  | "writing"
  | "brand";

// Minimal line glyphs drawn from each capability's essence (used where no real
// brand logo exists).
const GLYPHS: Record<Glyph, ReactNode> = {
  agentic: (
    <>
      <path d="M8.5 8 4.5 12l4 4" />
      <path d="M15.5 8l4 4-4 4" />
      <path d="M13.5 7l-3 10" />
    </>
  ),
  rag: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M15.5 15.5 20 20" />
      <path d="M8.5 9.8h5M8.5 12.2h5" />
    </>
  ),
  eval: (
    <>
      <circle cx="9.5" cy="12" r="5.5" />
      <circle cx="14.5" cy="12" r="5.5" />
    </>
  ),
  prompt: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 10l2.5 2L7 14" />
      <path d="M12.5 15h4.5" />
    </>
  ),
  analysis: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="M15 15l5 5" />
      <path d="M8 12v-1.6M10.5 12V8.4M13 12v-2.4" />
    </>
  ),
  observe: (
    <>
      <path d="M2.6 12S6 5.6 12 5.6 21.4 12 21.4 12 18 18.4 12 18.4 2.6 12 2.6 12Z" />
      <circle cx="12" cy="12" r="2.4" />
    </>
  ),
  funnel: <path d="M4 5h16l-6 7v5.5l-4 2V12L4 5Z" />,
  editorial: (
    <>
      <rect x="7" y="3.5" width="11" height="15" rx="2" />
      <path d="M10 8h5M10 11h5M10 14h3" />
      <path d="M4.5 7.5v10A2.5 2.5 0 0 0 7 20h8" />
    </>
  ),
  seo: (
    <>
      <circle cx="10" cy="10" r="6" />
      <path d="M14.5 14.5 20 20" />
      <path d="M8 12v-1.2M10 12V8.4M12 12v-2.2" />
    </>
  ),
  email: (
    <>
      <rect x="3.5" y="6" width="17" height="12" rx="2.5" />
      <path d="M4 7.6 12 13l8-5.4" />
    </>
  ),
  writing: (
    <>
      <path d="M4 6.5h13M4 10.5h13M4 14.5h8" />
      <path d="M16.6 13.8 20 17.2l-2 2-3.4-3.4 2-2Z" />
    </>
  ),
  brand: (
    <path d="M12 3c.4 4.6 1.4 5.6 6 6-4.6.4-5.6 1.4-6 6-.4-4.6-1.4-5.6-6-6 4.6-.4 5.6-1.4 6-6Z" />
  ),
};

/** A capability marker: a real brand logo where one exists, otherwise a line
 *  glyph drawn from the item's essence. */
export default function CapabilityIcon({
  logo,
  glyph,
}: {
  logo?: string;
  glyph?: Glyph;
}) {
  if (logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`/logos/${logo}.svg`}
        alt=""
        aria-hidden="true"
        width={16}
        height={16}
        className="shrink-0 opacity-80"
        loading="lazy"
      />
    );
  }
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 text-[color:var(--accent)]"
    >
      {glyph ? GLYPHS[glyph] : null}
    </svg>
  );
}
