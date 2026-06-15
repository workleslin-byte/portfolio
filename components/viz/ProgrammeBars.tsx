"use client";

import { useEffect, useRef, useState } from "react";

export type ProgrammeBar = {
  label: string;
  value: number; // 0–1, share of the largest
  display: string;
  highlight?: boolean;
};

/**
 * Capital's revenue-by-programme bars. Pure data — no binary assets.
 * Bars grow left-to-right, staggered, when scrolled into view.
 */
export default function ProgrammeBars({
  title,
  bars,
}: {
  title?: string;
  bars: ProgrammeBar[];
}) {
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
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {title ? (
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
          {title}
        </p>
      ) : null}
      <div className="space-y-5">
        {bars.map((b, i) => (
          <div key={b.label}>
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <span className="font-sans text-sm text-ink">{b.label}</span>
              <span
                className={`font-mono text-sm tabular-nums ${
                  b.highlight ? "text-[color:var(--accent)]" : "text-ink"
                }`}
              >
                {b.display}
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-paper-2">
              <div
                className={`bar-grow h-full rounded-full ${
                  b.highlight ? "bg-[color:var(--accent)]" : "bg-ink/75"
                } ${shown ? "in" : ""}`}
                style={{
                  width: `${Math.max(2, b.value * 100)}%`,
                  transitionDelay: `${i * 90}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
