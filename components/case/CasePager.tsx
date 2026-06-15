import Link from "next/link";
import { CASES, type CaseId } from "@/lib/cases";

/** ← Index / Next case → footer pager for case pages. */
export default function CasePager({ id }: { id: CaseId }) {
  const idx = CASES.findIndex((c) => c.id === id);
  const next = idx < CASES.length - 1 ? CASES[idx + 1] : CASES[0];

  return (
    <nav className="mx-auto mt-24 flex max-w-dossier items-center justify-between gap-6 border-t border-line px-[var(--gutter)] py-10">
      <Link
        href="/#index"
        className="group inline-flex flex-col gap-1"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft transition-colors group-hover:text-[color:var(--accent)]">
          ← Index
        </span>
        <span className="font-sans text-sm font-semibold text-ink">
          All four works
        </span>
      </Link>

      <Link
        href={next.href}
        className="group inline-flex flex-col items-end gap-1 text-right"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft transition-colors group-hover:text-[color:var(--accent)]">
          Next case →
        </span>
        <span className="font-sans text-sm font-semibold text-ink">
          {next.num} · {next.section}
        </span>
      </Link>
    </nav>
  );
}
