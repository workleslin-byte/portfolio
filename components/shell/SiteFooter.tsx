import Link from "next/link";
import Star from "./Star";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 w-full border-t border-line px-[var(--gutter)] py-14">
      <div className="mx-auto flex max-w-dossier flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink"
          >
            <span className="text-[color:var(--accent)]">
              <Star size={11} />
            </span>
            Leslin K Seemon
          </Link>
        </div>

        <div className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft md:text-right">
          <a
            href="mailto:work.leslin@gmail.com"
            className="transition-colors hover:text-ink"
          >
            work.leslin@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/leslin-k-seemon"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href="https://pocketnotes.in"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            pocketnotes.in
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-dossier items-center justify-between border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
        <span>Kerala, India</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
