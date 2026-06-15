"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Systems' two-phase RAG pipeline, drawn in the same line language — no binary
 * asset. A vertical flow whose connectors grow in sequence on scroll. The
 * Safety gate branches: an accent path to Refusal (the failure mode that
 * matters), and the main path to a grounded Answer.
 */

type Node = {
  k: string;
  label: string;
  meta?: string;
  phase?: string;
};

const MAIN: Node[] = [
  { k: "query", label: "Query", meta: "patient message" },
  { k: "classify", label: "Classify", meta: "intent · depth · enough context?", phase: "Phase 1" },
  { k: "retrieve", label: "Retrieve", meta: "ANN over 4,059 chunks", phase: "Phase 2" },
  { k: "rerank", label: "Rerank", meta: "cross-encoder · re-sort by evidence grade" },
  { k: "safety", label: "Safety gate", meta: "SaMD constraint check" },
];

function Connector({ shown, delay }: { shown: boolean; delay: number }) {
  return (
    <div className="flex h-8 justify-center">
      <span
        className="block w-px origin-top bg-line transition-transform duration-500 ease-out"
        style={{ transform: shown ? "scaleY(1)" : "scaleY(0)", transitionDelay: `${delay}ms` }}
      />
    </div>
  );
}

function NodeCard({
  node,
  shown,
  delay,
  tone = "ink",
}: {
  node: Node;
  shown: boolean;
  delay: number;
  tone?: "ink" | "accent";
}) {
  return (
    <div
      className={`reveal ${shown ? "in" : ""} mx-auto w-full max-w-sm rounded-xl border bg-paper px-5 py-3.5 text-center ${
        tone === "accent" ? "border-[color:var(--accent)]" : "border-line"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {node.phase ? (
        <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.2em] text-ink-soft">
          {node.phase}
        </span>
      ) : null}
      <span
        className={`block font-sans text-[15px] font-semibold ${
          tone === "accent" ? "text-[color:var(--accent)]" : "text-ink"
        }`}
      >
        {node.label}
      </span>
      {node.meta ? (
        <span className="mt-0.5 block font-mono text-[10px] tracking-wide text-ink-soft">
          {node.meta}
        </span>
      ) : null}
    </div>
  );
}

export default function RagDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  let step = 0;
  const d = () => step++ * 110;

  return (
    <div ref={ref} className="mx-auto w-full max-w-md">
      {MAIN.map((node, i) => (
        <div key={node.k}>
          <NodeCard node={node} shown={shown} delay={d()} />
          {i < MAIN.length - 1 ? <Connector shown={shown} delay={d()} /> : null}
        </div>
      ))}

      {/* Branch from the Safety gate */}
      <div className="relative mt-0">
        {/* main path → Answer */}
        <Connector shown={shown} delay={d()} />
        <NodeCard
          node={{ k: "answer", label: "Answer", meta: "grounded in top evidence" }}
          shown={shown}
          delay={d()}
        />

        {/* refusal path, highlighted */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <span
            className="hidden h-px w-10 origin-left bg-[color:var(--accent)] transition-transform duration-500 ease-out sm:block"
            style={{ transform: shown ? "scaleX(1)" : "scaleX(0)", transitionDelay: `${d()}ms` }}
            aria-hidden="true"
          />
          <NodeCard
            node={{
              k: "refuse",
              label: "Refusal",
              meta: "out-of-scope · unsafe · not enough context",
            }}
            shown={shown}
            delay={d()}
            tone="accent"
          />
        </div>
        <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--accent)]">
          A confident wrong answer is the failure mode that matters
        </p>
      </div>
    </div>
  );
}
