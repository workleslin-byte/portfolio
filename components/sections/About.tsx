"use client";

import MaskReveal from "@/lib/motion/MaskReveal";
import StaggerIn from "@/lib/motion/StaggerIn";

const CREDENTIALS = [
  { label: "₹16.8 Cr", body: "Email revenue attributed, FY25" },
  { label: "07 years", body: "Full-funnel content & growth work" },
  { label: "4,059", body: "Clinical chunks in a RAG system built end to end" },
  { label: "Full-stack", body: "Shipped pocketnotes.in solo, front end to infra" },
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
                <span className="italic gradient-text-accent">making.</span>
              </span>,
            ]}
          />

          {/* Body — three woven movements, personality through specifics */}
          <div
            className="mt-10 space-y-5 font-sans leading-[1.8] text-ink/80"
            style={{ fontSize: "1.125rem" }}
          >
            <p>
              I work at the seam between growth and engineering — the strategy
              and the system that executes it. For seven years that meant
              full-funnel content, email, and SEO, with the numbers to back it:
              ₹16.8 crore in attributed email revenue, a blog doubled, organic
              traffic compounded. Then I taught myself to build, end to end, so I
              could ship the systems rather than spec them for someone else.
            </p>
            <p>
              I go deep before I go wide. I&apos;d rather understand the
              mechanics of a thing than ship a surface version of it — which is
              why I learned agentic coding and deployment from scratch instead of
              outsourcing the parts I didn&apos;t understand, and why building a
              clinical RAG system meant owning the retrieval, the reasoning, and
              the safety layer myself. I can hold the brand-philosophy layer and
              the technical-execution layer in the same head, and I&apos;m least
              useful where the two are kept apart.
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
