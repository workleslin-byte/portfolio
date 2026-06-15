import Link from "next/link";
import Star from "./Star";
import GradedImage from "./GradedImage";

/**
 * Quiet editorial footer. Personality as an aside (the Himalayan-as-thinking-
 * tool texture line), plain links, no inflation.
 */
export default function SiteFooter() {
  return (
    <footer className="relative z-10 w-full border-t border-line px-[var(--gutter)] py-14">
      <div className="mx-auto flex max-w-dossier flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink"
          >
            <span className="text-[color:var(--accent)]">
              <Star size={11} />
            </span>
            Leslin K Seemon
          </Link>
          <div className="mt-5 flex items-start gap-4">
            <GradedImage
              src="/leslin-himalayan.jpg"
              alt="Leslin on his Royal Enfield Himalayan in the hills."
              ratio="3 / 4"
              className="w-[112px] shrink-0"
              sizes="112px"
            />
            <p className="font-sans text-[13px] leading-relaxed text-ink-soft">
              The Royal Enfield Himalayan in the garage is a thinking tool, not a
              travel statement. Plain numbers, no stock photos. Designed and
              built solo.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft md:text-right">
          <a
            href="mailto:leslin@pocketnotes.in"
            className="transition-colors hover:text-ink"
          >
            leslin@pocketnotes.in
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
