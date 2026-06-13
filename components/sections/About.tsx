"use client";

import MaskReveal from "@/lib/motion/MaskReveal";
import StaggerIn from "@/lib/motion/StaggerIn";

const CREDENTIALS = [
  { label: "07 years", body: "Full-funnel content & growth work" },
  { label: "₹16.8 Cr", body: "Email revenue attributed, FY25" },
  { label: "1.7L+", body: "Long-form reads across 9 articles" },
  { label: "Full-stack", body: "Shipped pocketnotes.in solo, Next.js to infra" },
];

export default function About() {
  return (
    <section className="w-full bg-paper px-6 py-24 md:px-12 md:py-36 text-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 md:grid-cols-[1fr_0.6fr] lg:grid-cols-[1.4fr_1fr]">
        {/* ── Left column ── */}
        <div>
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.35em] text-mute">
            On who I am
          </p>

          {/* Headline — same-family emphasis (italic accent, no serif) */}
          <MaskReveal
            as="h2"
            lineClassName="font-display font-extrabold tracking-tight leading-[1.04] text-[clamp(2.25rem,4.5vw,4.5rem)]"
            className="text-[clamp(2.25rem,4.5vw,4.5rem)]"
            lines={[
              "I don't separate",
              <span key="2">
                thinking from{" "}
                <span className="italic text-accent">making.</span>
              </span>,
            ]}
          />

          {/* Body — three woven movements, personality through specifics */}
          <div
            className="mt-10 space-y-5 font-sans leading-[1.8] text-ink/80"
            style={{ fontSize: "1.125rem" }}
          >
            <p>
              I work where philosophy, systems, and craft overlap, and I
              don&apos;t treat deep thinking as separate from doing. The test of
              an idea, for me, is whether it survives contact with execution. I
              keep a commonplace book and write long-form by hand, not out of
              nostalgia, but because it&apos;s how I metabolize ideas instead of
              hoarding them. Hand me a problem and I build the architecture
              first: audience models, content pillars, scoring conventions,
              naming systems, then I operate inside it.
            </p>
            <p>
              I go deep before I go wide. I&apos;d rather understand the
              mechanics of a thing than ship a surface version of it, which is
              why I taught myself agentic coding and deployment from scratch
              instead of outsourcing the parts I didn&apos;t understand. Six
              years of full-funnel content marketing and a decade of writing now
              point at AI-enabled growth work: automation, system-level prompt
              engineering, growth strategy. I founded a physical product, Pocket
              Notes, with a real editorial philosophy behind it, so I know how
              to build from identity outward, not just campaign outward. I can
              hold the brand-philosophy layer and the technical-execution layer
              in the same head.
            </p>
            <p>
              I&apos;m allergic to performative depth and hustle-culture noise. I
              want work that&apos;s coherent, where the thinking, the making, and
              the output are one thing instead of three disconnected layers.
              I&apos;m self-directed, sometimes to a fault, and honest about the
              gap between insight and execution, so I&apos;d rather show the work
              than narrate it. Give me the problem and the why, and I&apos;ll
              build the system. I&apos;m less useful where execution is decoupled
              from thinking.
            </p>
          </div>

          {/* Pull-quote — the Substack ethos */}
          <blockquote className="mt-10 border-l-2 border-accent pl-6">
            <p
              className="font-display font-semibold leading-snug text-ink"
              style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
            >
              Slow ideas, plain living and high thinking.
            </p>
          </blockquote>
        </div>

        {/* ── Right column — credential stack ── */}
        <StaggerIn
          className="flex flex-col gap-px bg-ink/10 pt-4 md:pt-16"
          stagger={0.1}
        >
          {CREDENTIALS.map((cred, i) => (
            <div key={i} className="bg-paper py-5 pl-5">
              <p className="mb-1.5 font-mono text-[12px] uppercase tracking-[0.2em] text-accent">
                {cred.label}
              </p>
              <p className="font-sans text-sm leading-relaxed text-ink/70">
                {cred.body}
              </p>
            </div>
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}
