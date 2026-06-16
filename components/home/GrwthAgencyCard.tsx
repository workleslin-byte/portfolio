import Reveal from "@/components/motion/Reveal";
import GradedImage from "@/components/shell/GradedImage";

/**
 * The Brand case visual on the home page. Rather than the before/after deck
 * slide (which carried a placeholder for the new mark), this leads with Grwth
 * itself — the brand & growth shop the work is credited under — and names the
 * disciplines it covers.
 */
export default function GrwthAgencyCard() {
  return (
    <Reveal>
      <GradedImage
        src="/brand/agency.png"
        alt="Grwth — the brand and growth shop the Nilambur Farms identity was built under."
        ratio="4 / 3"
        grade={false}
      />
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
        Brand positioning · Tone &amp; voice · GTM for small clients
      </p>
    </Reveal>
  );
}
