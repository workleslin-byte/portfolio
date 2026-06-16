import type { ElementType, ReactNode } from "react";
import Smear from "@/components/motion/Smear";
import Glow from "./Glow";
import Star from "./Star";

export type DividerMeta = {
  client: string;
  industry: string;
  year: string;
};

/**
 * The editorial section-divider spread, shared by the home section teases and
 * the case-study page headers: a full-bleed smeared word floating in air, a
 * caption, then a hairline rule carrying a 4-point star (accent), a left
 * `LABEL ↘`, and right-aligned `CLIENT / Industry / Year` meta.
 */
export default function SectionDivider({
  id,
  section,
  folio,
  word,
  caption,
  label,
  meta,
  glow,
  wordAs = "h2",
  wordClassName = "text-[clamp(3.5rem,15vw,13rem)]",
}: {
  id?: string;
  section: string;
  folio: string;
  word: ReactNode;
  caption: string;
  label: string;
  meta: DividerMeta;
  glow?: [string, string];
  /** Heading level for the display word. Case pages pass "p" so the word
   *  doesn't precede the page <h1>. */
  wordAs?: ElementType;
  wordClassName?: string;
}) {
  return (
    <section
      id={id}
      data-section={section}
      data-folio={folio}
      className="relative w-full overflow-hidden scroll-mt-24"
    >
      <div className="relative flex min-h-[80vh] flex-col items-center justify-center px-[var(--gutter)] py-24 text-center">
        {glow ? (
          <Glow
            from={glow[0]}
            to={glow[1]}
            style={{ position: "absolute", inset: 0, margin: "auto" }}
          />
        ) : null}

        <div className="relative z-10 flex flex-col items-center">
          <Smear
            as={wordAs}
            ghost
            className={`${wordClassName} font-semibold leading-[0.9]`}
          >
            {word}
          </Smear>
          <p className="mt-8 max-w-xl font-sans text-[15px] leading-relaxed text-ink-soft">
            {caption}
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-dossier px-[var(--gutter)]">
        <div className="relative border-t border-line pt-5">
          <span className="absolute -top-[8px] right-[20%] text-[color:var(--accent)]">
            <Star size={16} />
          </span>
          <div className="flex items-start justify-between gap-6">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink">
              {label} <span aria-hidden="true">↘</span>
            </span>
            <div className="text-right">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                {meta.client}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
                {meta.industry}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
                {meta.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
