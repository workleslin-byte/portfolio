import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { CASES } from "@/lib/cases";

const DESC: Record<string, string> = {
  capital: "Social investment mobilized through comms",
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
      className="w-full scroll-mt-24 px-[var(--gutter)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-dossier">
        <p className="mb-12 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft">
          Index
        </p>

        <ul className="border-t border-line">
          {CASES.map((c) => (
            <li key={c.id} className="border-b border-line">
              <Reveal>
                <Link
                  href={c.href}
                  className="group flex flex-wrap items-baseline gap-x-6 gap-y-2 py-7 transition-colors md:flex-nowrap"
                >
                  <span
                    className="font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-none text-transparent transition-colors duration-300 group-hover:text-ink"
                    style={{
                      WebkitTextStroke: "1px var(--ink)",
                    }}
                  >
                    {c.num}
                  </span>
                  <span className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-tight text-ink">
                    {c.section}
                  </span>
                  <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft transition-colors group-hover:text-ink">
                    {DESC[c.id]}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-lg text-ink-soft transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[color:var(--accent)]"
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
