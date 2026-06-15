import Smear from "@/components/motion/Smear";
import Reveal from "@/components/motion/Reveal";

const COLUMNS: { label: string; items: string[] }[] = [
  {
    label: "Stack",
    items: [
      "Python",
      "Next.js",
      "Payload CMS",
      "Neon Postgres",
      "Vercel",
      "Agentic coding",
    ],
  },
  {
    label: "AI engineering",
    items: [
      "RAG design",
      "Multi-model eval",
      "System-prompt engineering",
      "LLM output analysis",
      "Observability (Langfuse)",
      "Workflow automation (n8n)",
    ],
  },
  {
    label: "Growth & content",
    items: [
      "Full-funnel strategy",
      "Editorial systems",
      "SEO architecture",
      "Lifecycle email",
      "Long-form writing",
      "Brand from identity out",
    ],
  },
];

/**
 * Capabilities — one head holding the brand layer and the build layer. Three
 * quiet columns; the framing line carries the only weight.
 */
export default function Capabilities() {
  return (
    <section
      id="capabilities"
      data-section="Capabilities"
      data-folio="P/04"
      className="w-full scroll-mt-24 border-y border-line bg-paper-2/40 px-[var(--gutter)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-dossier">
        <Smear
          as="h2"
          className="max-w-3xl text-[clamp(1.6rem,3.4vw,2.75rem)] font-semibold leading-[1.1]"
        >
          One head holding the brand layer <em className="gradient-text">and</em>{" "}
          the build layer.
        </Smear>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          {COLUMNS.map((col, i) => (
            <Reveal key={col.label} delay={i * 80}>
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--accent)]">
                {col.label}
              </p>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="font-sans text-[15px] leading-snug text-ink/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
