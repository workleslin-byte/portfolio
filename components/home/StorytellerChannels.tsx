import CountUp from "@/components/motion/CountUp";

type Tone = "money" | "reach" | "ink";

type Row = {
  channel: string;
  tool: string;
  value: React.ReactNode;
  tone?: Tone;
};

/** Money metrics read oxblood, reach/volume metrics read Nilambur green. */
const toneClass: Record<Tone, string> = {
  money: "text-[color:var(--accent)]",
  reach: "text-[color:var(--green)]",
  ink: "text-ink",
};

/**
 * Home-tease visual for the Storyteller case. An honest four-channel summary —
 * each channel keeps its own unit (no shared bar scale across rupees and
 * impressions). Numbers count up when scrolled into view.
 */
const ROWS: Row[] = [
  {
    channel: "Email",
    tool: "WebEngage",
    tone: "money",
    value: <CountUp target={16.8} decimals={1} prefix="₹" suffix=" Cr" />,
  },
  {
    channel: "LinkedIn",
    tool: "impressions",
    tone: "reach",
    value: <CountUp target={804} suffix="K" />,
  },
  {
    channel: "Long-form",
    tool: "reads",
    tone: "reach",
    value: <CountUp target={2.0} decimals={1} suffix="L+" />,
  },
  {
    channel: "Push",
    tool: "CleverTap",
    tone: "money",
    value: <CountUp target={39.33} decimals={2} prefix="₹" suffix="L" />,
  },
];

export default function StorytellerChannels() {
  return (
    <div className="panel rounded-2xl p-6 md:p-8">
      <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
        One year, four channels · Rang De
      </p>
      <ul className="divide-y divide-line">
        {ROWS.map((r) => (
          <li
            key={r.channel}
            className="flex items-baseline justify-between gap-4 py-3.5"
          >
            <span className="flex items-baseline gap-2">
              <span className="font-sans text-sm font-semibold text-ink">
                {r.channel}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft">
                {r.tool}
              </span>
            </span>
            <span
              className={`font-display text-xl font-semibold tracking-tight tabular-nums ${
                toneClass[r.tone ?? "ink"]
              }`}
            >
              {r.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
