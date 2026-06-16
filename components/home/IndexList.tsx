import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import Glow from "@/components/shell/Glow";
import { CASES } from "@/lib/cases";

const DESC: Record<string, string> = {
  storyteller: "804K impressions, ₹16.8 Cr investment — three channels, one discipline",
  systems: "Clinical RAG, architected end to end",
  product: "A notebook brand, built and shipped solo",
  brand: "Full identity for an agro company",
};

/**
 * Index — a real table of contents. Numbering is legitimate here. Each row:
 * large outlined number + Fraunces category word + mono description, linking to
 * the case page.
 */
export default function IndexList() {
  return (
    <section
      id="index"
      data-section="Index"
      data-folio="P/03"
      className="relative w-full overflow-hidden scroll-mt-24 px-[var(--gutter)] py-16 sm:py-20 md:py-32"
    >
      <Glow from="#6E8BFF" to="#6EE7E7" style={{ top: "8%", right: "-12%" }} />

      <div className="relative z-10 mx-auto max-w-dossier">
        <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft sm:mb-12">
          Index
        </p>

        <ul className="border-t border-line">
          {CASES.map((c) => (
            <li key={c.id} className="border-b border-line">
              <Reveal>
                <Link
                  href={c.href}
                  className="group flex flex-wrap items-baseline gap-x-5 gap-y-1.5 py-6 transition-colors active:opacity-70 sm:flex-nowrap sm:gap-x-6 sm:py-7"
                >
                  <span
                    className="order-1 font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-none text-transparent transition-colors duration-300 group-hover:text-ink"
                    style={{
                      WebkitTextStroke: "1px var(--ink)",
                    }}
                  >
                    {c.num}
                  </span>
                  <span className="order-2 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-tight text-ink">
                    {c.section}
                  </span>
                  <span className="order-4 w-full font-mono text-[12px] uppercase tracking-[0.14em] text-ink-soft transition-colors group-hover:text-ink sm:order-3 sm:ml-auto sm:w-auto sm:text-[11px]">
                    {DESC[c.id]}
                  </span>
                  <span
                    aria-hidden="true"
                    className="order-3 ml-auto font-mono text-lg text-ink-soft transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[color:var(--accent)] sm:order-4 sm:ml-0"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
