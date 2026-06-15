import Smear from "@/components/motion/Smear";
import Glow from "@/components/shell/Glow";
import SendGlyph from "@/components/shell/SendGlyph";

const CALENDLY = "https://calendly.com/ks-leslin"; // TODO: confirm real Calendly slug
const EMAIL = "leslin@pocketnotes.in";
const LINKEDIN = "https://www.linkedin.com/in/leslin-k-seemon";

/**
 * Contact / outro. Mono divider, smeared "Let's talk.", the operator-roles
 * positioning line, real links, and the second (final) holographic blob.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      data-section="Contact"
      data-folio="P/09"
      className="relative w-full scroll-mt-24 overflow-hidden px-[var(--gutter)] py-28 md:py-40"
    >
      {/* Contact glow — violet → pink, bleeds off the bottom-left corner */}
      <Glow from="#A87CFF" to="#FF6FB0" style={{ bottom: "-18%", left: "-10%" }} />

      <div className="relative z-10 mx-auto max-w-dossier">
        <p className="mb-10 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft">
          Contact
        </p>

        <Smear
          as="h2"
          ghost
          className="text-[clamp(3.5rem,12vw,10rem)] font-semibold leading-[0.9]"
        >
          Let&apos;s <em>talk.</em>
        </Smear>

        <p className="mt-10 max-w-2xl text-pretty font-sans text-[1.0625rem] leading-relaxed text-ink/85">
          Open to founder&apos;s-office and operator roles where one person
          owning strategy, systems, and story is a feature, not a risk. Kerala,
          India — remote and relocation both on the table.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="pill"
            data-active="true"
          >
            <SendGlyph />
            Book a call
          </a>
          <a href={`mailto:${EMAIL}`} className="pill">
            {EMAIL}
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="pill"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
