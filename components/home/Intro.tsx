import Smear from "@/components/motion/Smear";
import Reveal from "@/components/motion/Reveal";
import Stamp from "@/components/shell/Stamp";
import GradedImage from "@/components/shell/GradedImage";

/**
 * Intro / "The approach." Portrait (graded toward paper tone) beside a Fraunces
 * sub-display and the single explicit reading-as-method beat. A rotating stamp
 * sits over the portrait corner.
 */
export default function Intro() {
  return (
    <section
      id="approach"
      data-section="The Approach"
      data-folio="P/02"
      className="relative w-full scroll-mt-24 px-[var(--gutter)] py-24 md:py-36"
    >
      <div className="mx-auto grid max-w-dossier grid-cols-1 gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
        {/* Portrait + stamp */}
        <Reveal className="relative">
          <GradedImage
            src="/leslin-portrait.jpg"
            alt="Leslin K Seemon at his bookshelves, a finger to his temple — reading to find out how to think."
            ratio="4 / 5"
            priority
          />
          <Stamp
            text="GROWTH · AI SYSTEMS · CONTENT · KERALA · "
            size={128}
            className="absolute -bottom-12 -right-6 text-ink md:-right-12"
          />
        </Reveal>

        {/* Sub-display + body */}
        <div className="flex flex-col justify-center">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft">
            The approach
          </p>
          <Smear
            as="h2"
            className="text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.02]"
          >
            I go deep <em>before</em> I go wide.
          </Smear>

          <div className="mt-8 max-w-2xl space-y-5 font-sans text-[1.0625rem] leading-[1.75] text-ink/85">
            <p>
              I&apos;d rather understand how a thing works than ship a surface
              version of it — which is why I learned to build instead of
              outsourcing the parts I didn&apos;t understand, and why a health
              chatbot, for me, meant owning the retrieval, the reasoning, and the
              part where it refuses to guess.
            </p>
            <p>
              I read the same way I work: not for inspiration, but to find out how
              to think. The notebook on the desk is pen and paper. The systems it
              leads to are not.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
