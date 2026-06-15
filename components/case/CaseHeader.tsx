import SectionDivider from "@/components/shell/SectionDivider";
import { caseById, type CaseId } from "@/lib/cases";

/**
 * Case-study page header: the shared divider spread, then the page h1 + sub as
 * the article's opening.
 */
export default function CaseHeader({ id }: { id: CaseId }) {
  const c = caseById(id);
  return (
    <header>
      <SectionDivider
        section={c.section}
        folio={c.folio}
        word={c.word}
        caption={c.caption}
        label={c.section}
        meta={c.meta}
      />

      <div className="mx-auto max-w-dossier px-[var(--gutter)] pt-16 md:pt-24">
        <div className="max-w-3xl">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
            {c.num} — {c.metric.value} · {c.metric.label}
          </p>
          <h1 className="gradient-text font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight">
            {c.headline}
          </h1>
          <p className="mt-6 text-pretty font-sans text-[1.0625rem] leading-relaxed text-ink/80">
            {c.sub}
          </p>
        </div>
      </div>
    </header>
  );
}
