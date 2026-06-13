"use client";

import MaskReveal from "@/lib/motion/MaskReveal";
import StaggerIn from "@/lib/motion/StaggerIn";

const CREDENTIALS = [
  { label: "07 years", body: "Professional content & growth work" },
  { label: "₹16.8 Cr", body: "Email revenue attributed, FY25" },
  { label: "1.7L+", body: "Long-form reads across 9 articles" },
  { label: "Founder", body: "Pocket Notes — pocketnotes.in" },
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
            lineClassName="font-display font-extrabold tracking-tight leading-[0.95] text-[clamp(2.5rem,5vw,5rem)]"
            lines={[
              "Coastal boy.",
              <span key="2" className="italic text-accent">
                Mountain thinker.
              </span>,
            ]}
          />

          {/* Body */}
          <div
            className="mt-10 space-y-5 font-sans leading-[1.8] text-ink/80"
            style={{ fontSize: "1.125rem" }}
          >
            <p>
              I grew up by the backwaters in Kochi, so water has always felt
              like background. Present, unremarkable, mine. The mountains are
              where my mind moves differently. Something about altitude clears
              the noise. The Royal Enfield Himalayan in the garage isn&apos;t a
              travel statement. It&apos;s a thinking tool.
            </p>
            <p>
              Seven years building content systems that compound. The method
              never changes. Take something complicated, find the argument
              inside it, say it plainly, then measure what happens. Philosophy
              taught me that before marketing did. It is the same discipline.
            </p>
            <p>
              I still keep a commonplace book, pen and paper. And I use AI where
              it earns its place, never as the headline.
            </p>
          </div>

          {/* Blockquote — same family, accent rule */}
          <blockquote className="mt-10 border-l-2 border-accent pl-6">
            <p
              className="font-display font-semibold leading-snug text-ink"
              style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
            >
              Most people read to feel something. I read to find out how to
              think.
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
