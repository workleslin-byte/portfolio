"use client";

import Reveal from "@/components/motion/Reveal";

const GOLD = "#A8842E"; // Pocket Notes' aged gold

/**
 * Stands in for a screenshot of the on-site scrollytelling — the Da Vinci →
 * Newton → Luhmann sequence that argues Pocket Notes' thesis. Drawn in code:
 * three prolific note-takers, each kept fast, cheap, working notes. A vertical
 * thread connects them, echoing the scroll.
 */
const HANDS = [
  { who: "da Vinci", note: "7,000 surviving pages of working notes" },
  { who: "Newton", note: "the waste book — think on paper, cheaply" },
  { who: "Luhmann", note: "90,000 slips · the Zettelkasten" },
];

export default function ScrollyTile() {
  return (
    <div className="rounded-[14px] border border-line bg-paper-2/40 px-5 py-6">
      <p
        className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em]"
        style={{ color: GOLD }}
      >
        Scrollytelling · the argument in three hands
      </p>

      <ol className="relative ml-1">
        {/* the thread */}
        <span
          aria-hidden="true"
          className="absolute left-[3px] top-1.5 bottom-6 w-px"
          style={{ background: GOLD, opacity: 0.35 }}
        />
        {HANDS.map((h, i) => (
          <Reveal as="li" key={h.who} delay={i * 120} className="relative mb-5 pl-5">
            <span
              aria-hidden="true"
              className="absolute left-0 top-1.5 h-[7px] w-[7px] rounded-full"
              style={{ background: GOLD }}
            />
            <span className="block font-display text-[19px] font-semibold leading-tight text-ink">
              {h.who}
            </span>
            <span className="mt-0.5 block font-mono text-[11px] leading-snug text-ink-soft">
              {h.note}
            </span>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={HANDS.length * 120} className="mt-1 border-t border-line pt-4">
        <p className="text-[13px] leading-snug text-ink">
          <span style={{ color: GOLD }}>→</span> Writing is a sandbox, not a
          monument.
        </p>
      </Reveal>
    </div>
  );
}
