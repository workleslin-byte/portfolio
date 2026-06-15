import Smear from "@/components/motion/Smear";
import Blob from "@/components/shell/Blob";

/**
 * Hero — the dossier cover. Eyebrow, the giant smeared name (roman "Leslin",
 * italic "K Seemon" smearing harder), the claim, and one holographic blob
 * bleeding from the top corner (instance 1 of 2 site-wide).
 */
export default function Hero() {
  return (
    <section
      id="intro"
      data-section="Intro"
      data-folio="P/01"
      className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden px-[var(--gutter)] pb-24 pt-10 text-center"
    >
      {/* Instance 1 of 2 — bleeds off the top-right corner */}
      <Blob
        style={{ top: "-22vw", right: "-14vw" }}
        className="opacity-[0.42]"
      />

      <div className="relative z-10 flex flex-col items-center">
        <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft">
          Growth Operator · AI Systems Builder · Kerala, India
        </p>

        <Smear
          as="h1"
          eager
          className="text-[clamp(3.2rem,13.5vw,12.5rem)] font-semibold leading-[0.86]"
        >
          Leslin <em className="gradient-text">K&nbsp;Seemon</em>
        </Smear>

        <p className="mt-12 max-w-2xl text-pretty font-sans text-[clamp(1.05rem,2vw,1.35rem)] leading-relaxed text-ink/85">
          I find the growth problem, build the system that solves it, and write
          the thing that sells it.
        </p>

        <a
          href="#approach"
          className="mt-12 inline-flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-soft transition-colors hover:text-ink"
        >
          Scroll
          <span aria-hidden="true" className="text-base leading-none">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
