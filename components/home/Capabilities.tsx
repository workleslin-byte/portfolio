import Smear from "@/components/motion/Smear";
import Reveal from "@/components/motion/Reveal";
import Glow from "@/components/shell/Glow";
import CapabilityIcon, { type Glyph } from "./CapabilityIcon";

type Item = { name: string; logo?: string; glyph?: Glyph };

const COLUMNS: { label: string; items: Item[] }[] = [
  {
    label: "Stack",
    items: [
      { name: "Python", logo: "python" },
      { name: "Next.js", logo: "nextdotjs" },
      { name: "Payload CMS", logo: "payloadcms" },
      { name: "Neon Postgres", logo: "neon" },
      { name: "Vercel", logo: "vercel" },
      { name: "Agentic coding", glyph: "agentic" },
    ],
  },
  {
    label: "AI engineering",
    items: [
      { name: "RAG design", glyph: "rag" },
      { name: "Multi-model eval", glyph: "eval" },
      { name: "System-prompt engineering", glyph: "prompt" },
      { name: "LLM output analysis", glyph: "analysis" },
      { name: "Observability (Langfuse)", glyph: "observe" },
      { name: "Workflow automation (n8n)", logo: "n8n" },
    ],
  },
  {
    label: "Growth & content",
    items: [
      { name: "Full-funnel strategy", glyph: "funnel" },
      { name: "Editorial systems", glyph: "editorial" },
      { name: "SEO architecture", glyph: "seo" },
      { name: "Lifecycle email", glyph: "email" },
      { name: "Long-form writing", glyph: "writing" },
      { name: "Brand from identity out", glyph: "brand" },
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
      className="relative w-full overflow-hidden scroll-mt-24 border-y border-line bg-paper-2/40 px-[var(--gutter)] py-24 md:py-32"
    >
      <Glow from="#8B7CFF" to="#B879FF" style={{ top: "6%", left: "-12%" }} />

      <div className="relative z-10 mx-auto max-w-dossier">
        <Smear
          as="h2"
          className="max-w-3xl text-[clamp(1.6rem,3.4vw,2.75rem)] font-semibold leading-[1.1]"
        >
          One head holding the brand layer <em>and</em> the build layer.
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
                    key={item.name}
                    className="flex items-center gap-2.5 font-sans text-[15px] leading-snug text-ink/85"
                  >
                    <CapabilityIcon logo={item.logo} glyph={item.glyph} />
                    {item.name}
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
