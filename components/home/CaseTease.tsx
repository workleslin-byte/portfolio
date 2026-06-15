import type { ReactNode } from "react";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import SectionDivider from "@/components/shell/SectionDivider";
import type { CaseDef } from "@/lib/cases";

/**
 * A home case section: the divider spread, then a tight highlight — one key
 * visual, the headline, the single non-obvious decision, and the link to the
 * full case.
 */
export default function CaseTease({
  c,
  visual,
}: {
  c: CaseDef;
  visual: ReactNode;
}) {
  return (
    <>
      <SectionDivider
        id={c.id}
        section={c.section}
        folio={c.folio}
        word={c.word}
        caption={c.caption}
        label={c.section}
        meta={c.meta}
        glow={c.glow}
      />

      <div className="mx-auto max-w-dossier px-[var(--gutter)] pb-28 pt-16 md:pt-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>{visual}</Reveal>

          <div className="flex flex-col">
            <div className="mb-6 flex items-center gap-4">
              <span
                className="font-display text-4xl font-medium leading-none text-transparent"
                style={{ WebkitTextStroke: "1px var(--ink-soft)" }}
              >
                {c.num}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                {c.metric.value} · {c.metric.label}
              </span>
            </div>

            <h3 className="font-display text-[clamp(1.5rem,3vw,2.3rem)] font-semibold leading-[1.12] tracking-tight text-ink">
              {c.headline}
            </h3>

            <p className="mt-6 border-l-2 border-[color:var(--accent)] pl-5 font-sans text-[15px] leading-relaxed text-ink/80">
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                The decision
              </span>
              {c.decision}
            </p>

            <Link
              href={c.href}
              className="group mt-8 inline-flex w-fit items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-ink transition-colors hover:text-[color:var(--accent)]"
            >
              Read the full case
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
