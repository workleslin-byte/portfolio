"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The refusal, shown — no screen recording. A clinical-assistant transcript that
 * plays out on scroll: an out-of-scope question, the two-phase retrieval trace
 * returning nothing it can stand behind, and the system declining + asking a
 * clarifying question instead of guessing. The behaviour the case is about,
 * drawn in the same line language as the rest of the dossier.
 */
export default function RefusalDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  let step = 0;
  const d = () => step++ * 240;

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-[14px] border border-line bg-paper shadow-[0_18px_44px_-28px_rgba(20,17,15,0.32)]"
      role="img"
      aria-label="A transcript of the Preventify clinical assistant declining to diagnose an out-of-scope question, showing the retrieval trace matching no guideline and the assistant asking a clarifying question instead of guessing."
    >
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-line bg-paper-2/50 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </span>
        <span className="font-mono text-[11px] tracking-wide text-ink-soft">
          preventify · clinical assistant
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-ink-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
          guarded
        </span>
      </div>

      {/* Transcript */}
      <div className="space-y-5 px-5 py-6 md:px-7 md:py-7" aria-hidden="true">
        {/* User question — out of scope */}
        <div
          className={`reveal ${shown ? "in" : ""} flex justify-end`}
          style={{ transitionDelay: `${d()}ms` }}
        >
          <p className="max-w-[82%] rounded-2xl rounded-br-sm border border-line bg-paper-2/60 px-4 py-2.5 text-[14px] leading-snug text-ink">
            I&apos;ve had chest tightness since this morning — what&apos;s
            causing it?
          </p>
        </div>

        {/* Retrieval trace */}
        <div
          className={`reveal ${shown ? "in" : ""}`}
          style={{ transitionDelay: `${d()}ms` }}
        >
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10.5px] tracking-wide text-ink-soft">
            <span className="text-ink-soft/70">retrieval</span>
            <span aria-hidden="true">·</span>
            <span>phase 1 classify → phase 2 search</span>
            <span aria-hidden="true">·</span>
            <span className="text-[color:var(--accent)]">
              0 / 10 guidelines matched
            </span>
          </p>
        </div>

        {/* Assistant refusal */}
        <div
          className={`reveal ${shown ? "in" : ""} flex justify-start`}
          style={{ transitionDelay: `${d()}ms` }}
        >
          <div className="max-w-[88%] rounded-2xl rounded-bl-sm border-l-2 border-[color:var(--accent)] bg-paper-2/30 px-4 py-3">
            <p className="text-[14px] leading-relaxed text-ink">
              I can&apos;t diagnose that. I only answer from dated,
              evidence-graded guidelines, and none of them cover individual
              diagnosis. Chest tightness can be urgent — if it&apos;s severe,
              spreading, or with breathlessness, seek emergency care now.
            </p>
            <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft">
              <span className="text-[color:var(--accent)]">↳</span> One question
              to route you safely: is the tightness worse on exertion, or the
              same at rest?
            </p>
          </div>
        </div>

        {/* Outcome chip */}
        <div
          className={`reveal ${shown ? "in" : ""} flex justify-start`}
          style={{ transitionDelay: `${d()}ms` }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--accent)] px-3 py-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-[color:var(--accent)]">
            declined · no grounded source
          </span>
        </div>
      </div>
    </div>
  );
}
