export default function PocketNotesFeature() {
  return (
    <section className="w-full bg-linen px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 lg:gap-28">
        {/* ── Left ── */}
        <div>
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.35em] text-muted">
            ( INDEPENDENT PRODUCT )
          </p>

          <h2
            className="font-serif font-bold leading-[0.9] text-ink"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            Writing as sandbox,
          </h2>
          <h2
            className="font-serif italic leading-[0.9] text-gold"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            not monument.
          </h2>

          <p className="mt-8 font-sans leading-[1.8] text-ink/80"
            style={{ fontSize: "1.0625rem" }}>
            Most notebook brands sell you the idea that you&apos;re archiving
            something precious. That&apos;s the wrong philosophy. Pocket Notes
            was built around the opposite argument. Writing is a sandbox. Write
            badly, write fast, fill it up, throw it out, get another one. The
            notebook is a tool for thinking, not a record of having thought.
          </p>

          <blockquote className="mt-10 border-l-2 border-gold pl-6">
            <p className="font-serif italic leading-relaxed text-ink"
              style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.375rem)" }}>
              &ldquo;If you have led a meaningful life, the daily record gives
              itself meaning. You don&apos;t need to manufacture it on the
              page.&rdquo;
            </p>
          </blockquote>

          <a
            href="https://pocketnotes.in"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center font-mono text-[12px] uppercase tracking-[0.2em] text-gold transition-colors duration-200 hover:text-gold/60"
          >
            Visit pocketnotes.in →
          </a>
        </div>

        {/* ── Right — product card ── */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl border border-gold/25 bg-obsidian px-10 py-14 text-center shadow-2xl">
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.35em] text-muted">
              Est. 2022
            </p>

            <h3
              className="font-serif font-bold uppercase tracking-[0.14em] text-gold"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Pocket Notes
            </h3>

            <div className="mx-auto my-7 h-px w-14 bg-gold/25" />

            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-linen/50">
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
