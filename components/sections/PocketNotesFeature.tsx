import MaskReveal from "@/lib/motion/MaskReveal";

export default function PocketNotesFeature() {
  return (
    <section className="w-full px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 lg:gap-28">
        {/* ── Left ── */}
        <div>
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.35em] text-accent">
            Independent product
          </p>

          <MaskReveal
            as="h2"
            lineClassName="font-display font-extrabold tracking-tight leading-[0.98] text-paper text-[clamp(2.5rem,5vw,5rem)]"
            lines={[
              "Writing as sandbox,",
              <span key="2" className="italic text-accent">
                not monument.
              </span>,
            ]}
          />

          <p
            className="mt-8 font-sans leading-[1.8] text-paper/75"
            style={{ fontSize: "1.0625rem" }}
          >
            Most notebook brands sell you the idea that you&apos;re archiving
            something precious. That is the wrong philosophy. Pocket Notes was
            built on the opposite argument. Writing is a sandbox. Write badly,
            write fast, fill it up, throw it out, get another. The notebook is a
            tool for thinking, not a record of having thought.
          </p>

          <blockquote className="mt-10 border-l-2 border-accent pl-6">
            <p
              className="font-display font-semibold leading-snug text-paper"
              style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)" }}
            >
              If you have led a meaningful life, the daily record gives itself
              meaning. You don&apos;t need to manufacture it on the page.
            </p>
          </blockquote>

          <a
            href="https://pocketnotes.in"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center font-mono text-[12px] uppercase tracking-[0.2em] text-paper/50 transition-colors duration-200 hover:text-accent"
          >
            Visit pocketnotes.in →
          </a>
        </div>

        {/* ── Right — product card ── */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm border border-paper/15 bg-ink px-10 py-14 text-center">
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.35em] text-mute-dark">
              Est. 2022
            </p>

            <h3
              className="font-display font-extrabold uppercase tracking-[0.12em] text-accent"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Pocket Notes
            </h3>

            <div className="mx-auto my-7 h-px w-14 bg-paper/15" />

            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50">
              Concept · Design
              <br />
              Production · Distribution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
