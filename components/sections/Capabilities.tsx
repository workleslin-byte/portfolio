"use client";

import StaggerIn from "@/lib/motion/StaggerIn";

const GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Stack",
    items: [
      "Python",
      "Next.js",
      "Payload CMS",
      "Neon Postgres",
      "Vercel",
      "Agentic coding workflows",
    ],
  },
  {
    label: "AI engineering",
    items: [
      "RAG system design",
      "Multi-model evaluation",
      "System-level prompt engineering",
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
      "Brand from identity outward",
    ],
  },
];

export default function Capabilities() {
  return (
    <section className="w-full px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.35em] text-accent">
          Capabilities
        </p>
        <p className="mb-14 max-w-xl font-sans text-sm leading-relaxed text-paper/55">
          One head holding the brand-philosophy layer and the
          technical-execution layer. The range, listed plainly.
        </p>

        <div className="flex flex-col gap-px bg-paper/10">
          {GROUPS.map((group) => (
            <div
              key={group.label}
              className="grid grid-cols-1 gap-6 bg-ink/70 py-8 md:grid-cols-[10rem_1fr] md:gap-10"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-mute-dark md:pt-1">
                {group.label}
              </p>
              <StaggerIn
                className="flex flex-wrap gap-x-3 gap-y-3"
                stagger={0.04}
                y={16}
              >
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-paper/20 px-4 py-2 font-mono text-[12px] tracking-wide text-paper/80"
                  >
                    {item}
                  </span>
                ))}
              </StaggerIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
