"use client";

import type { Stat } from "@/types";
import MaskReveal from "@/lib/motion/MaskReveal";
import CountUp from "@/lib/motion/CountUp";
import StaggerIn from "@/lib/motion/StaggerIn";
import FlowDiagram from "@/components/visuals/FlowDiagram";
import { FLOWS } from "@/lib/caseVisuals";

interface Props {
  title: string;
  categoryLabel: string;
  displayNumber: string;
  slug: string;
  headline?: string; // idea line (layer 1)
  subheadline?: string; // flat proof sentence (layer 2)
  stats?: Stat[];
}

export default function CaseStudyHero({
  title,
  categoryLabel,
  displayNumber,
  slug,
  headline,
  subheadline,
  stats,
}: Props) {
  const flow = FLOWS[slug];
  const signature = stats?.[0];
  const rest = stats?.slice(1) ?? [];

  return (
    <>
      {/* ── Hero: idea line + the one signature number ──────────────── */}
      <section className="w-full px-6 pt-32 pb-20 md:px-12 md:pt-[9rem] md:pb-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-center gap-6">
            <span className="font-mono text-[11px] tabular-nums tracking-[0.3em] text-accent">
              {displayNumber}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-mute-dark">
              {categoryLabel}
            </span>
          </div>

          {/* Idea line — the headline (play on load) */}
          <MaskReveal
            as="h1"
            play
            lineClassName="font-display font-extrabold tracking-tight leading-[1.02] text-paper text-[clamp(2.25rem,5vw,5rem)]"
            lines={[headline ?? title]}
          />

          {/* Flat proof sentence */}
          {subheadline && (
            <p className="mt-6 max-w-2xl font-sans leading-relaxed text-paper/55"
              style={{ fontSize: "1.0625rem" }}>
              {subheadline}
            </p>
          )}

          {/* Spectacle: a flow diagram for engineering items, else the
              signature number. */}
          {flow ? (
            <div className="mt-16 border-t border-paper/10 pt-12">
              <FlowDiagram steps={flow} tone="ink" />
            </div>
          ) : signature ? (
            <div className="mt-16 border-t border-paper/10 pt-12">
              <p
                data-signature-number
                className="font-display font-extrabold leading-none text-accent"
                style={{ fontSize: "clamp(4rem, 13vw, 12rem)" }}
              >
                <CountUp value={signature.value} play duration={1.8} />
              </p>
              <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.25em] text-paper/50">
                {signature.label}
                {signature.delta ? (
                  <span className="ml-3 text-accent">{signature.delta}</span>
                ) : null}
              </p>
            </div>
          ) : null}
        </div>
      </section>

      {/* ── Deeper stats — revealed on scroll, never dumped ─────────── */}
      {rest.length > 0 && (
        <section className="w-full border-t border-paper/10 px-6 py-16 md:px-12">
          <StaggerIn
            className="mx-auto grid max-w-5xl grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3"
            stagger={0.1}
          >
            {rest.map((stat) => (
              <div key={stat.label}>
                <p
                  className="font-display font-extrabold leading-none text-paper"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 font-sans text-xs text-mute-dark">{stat.label}</p>
                {stat.delta && (
                  <p className="mt-1 font-mono text-[10px] tracking-wide text-accent">
                    {stat.delta}
                  </p>
                )}
              </div>
            ))}
          </StaggerIn>
        </section>
      )}
    </>
  );
}
