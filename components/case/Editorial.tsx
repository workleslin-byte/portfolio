import type { ReactNode } from "react";
import Reveal from "@/components/motion/Reveal";

/** Mono kicker above a subhead. */
export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--accent)]">
      {children}
    </p>
  );
}

/** Fraunces section subhead inside a case body. */
export function Subhead({ children }: { children: ReactNode }) {
  return (
    <h2 className="gradient-text font-display text-[clamp(1.5rem,3vw,2.1rem)] font-semibold leading-[1.15] tracking-tight">
      {children}
    </h2>
  );
}

/** Body paragraph. */
export function P({ children }: { children: ReactNode }) {
  return (
    <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink/85">
      {children}
    </p>
  );
}

/** A block of editorial prose with consistent column + rhythm. */
export function Column({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-2xl space-y-6">{children}</div>;
}

/** A horizontal row of headline stats. */
export function Stats({
  items,
}: {
  items: { value: string; label: string; accent?: boolean }[];
}) {
  return (
    <Reveal className="panel grid grid-cols-2 gap-x-8 gap-y-8 p-7 sm:grid-cols-4 sm:p-8">
      {items.map((s) => (
        <div key={s.label}>
          <p
            className={`font-display text-[clamp(1.5rem,3vw,2.1rem)] font-semibold leading-none tracking-tight ${
              s.accent ? "gradient-text" : "text-ink"
            }`}
          >
            {s.value}
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase leading-snug tracking-[0.12em] text-ink-soft">
            {s.label}
          </p>
        </div>
      ))}
    </Reveal>
  );
}

/** The judgment beat — a bordered callout carrying the non-obvious decision. */
export function Callout({
  label = "The decision",
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <Reveal
      as="blockquote"
      className="border-l-2 border-[color:var(--accent)] py-1 pl-6"
    >
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
        {label}
      </span>
      <span className="font-display text-[clamp(1.2rem,2.2vw,1.6rem)] font-medium leading-snug text-ink">
        {children}
      </span>
    </Reveal>
  );
}

/** True masonry grid for case visuals. */
export function Masonry({ children }: { children: ReactNode }) {
  return <div className="masonry">{children}</div>;
}

/** Quiet labelled aside, e.g. a sub-block of secondary metrics. */
export function Aside({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <Reveal className="rounded-xl border border-line bg-paper-2/40 p-6">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
        {label}
      </p>
      <div className="font-sans text-[15px] leading-relaxed text-ink/85">
        {children}
      </div>
    </Reveal>
  );
}
