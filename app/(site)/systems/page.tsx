import type { Metadata } from "next";
import CaseHeader from "@/components/case/CaseHeader";
import CasePager from "@/components/case/CasePager";
import {
  Column,
  Kicker,
  Subhead,
  P,
  Stats,
  Callout,
} from "@/components/case/Editorial";
import RagDiagram from "@/components/viz/RagDiagram";
import RefusalDemo from "@/components/viz/RefusalDemo";

export const metadata: Metadata = {
  title: "Systems — a clinical RAG, architected end to end",
  description:
    "Preventify, 2025. A two-phase retrieval system over 4,059 chunks of clinical guidelines, built so a health chatbot refuses to guess. Architecture designed end to end, implementation directed.",
};

export default function SystemsPage() {
  return (
    <article>
      <CaseHeader id="systems" />

      <div className="px-[var(--gutter)] py-20 md:py-28">
        {/* Highest-value asset — the refusal demo */}
        <div className="mx-auto max-w-3xl">
          <Kicker>The proof, first</Kicker>
          <RefusalDemo />
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
            The most important thing it does is the thing it doesn&apos;t do.
          </p>
        </div>

        <div className="mt-20">
          <Column>
            <Kicker>Why most medical chatbots fail</Kicker>
            <P>
              Ask a general LLM a health question and it will answer
              confidently, whether or not it is right. In a clinical setting that
              single behaviour is the whole risk. So the system is built around
              the opposite instinct: every answer is pinned to a specific, dated,
              evidence-graded guideline, or it declines and asks a clarifying
              question. The work was making refusal the default, not the
              exception.
            </P>
          </Column>
        </div>

        {/* The architecture, drawn in the line language */}
        <div className="panel mx-auto mt-16 max-w-dossier p-6 md:p-10">
          <p className="mb-10 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
            Two-phase pipeline
          </p>
          <RagDiagram />
        </div>

        <div className="mt-20">
          <Column>
            <Subhead>The knowledge base</Subhead>
            <P>
              Ten official guidelines — ADA, RSSDI, KDIGO, ESC, ICMR, WHO and
              others — run through custom extractors and cut into 4,059
              retrievable chunks. Each chunk carries 14 metadata fields: source
              and year, an evidence grade from 1 (strongest) to 5
              (contraindicated), a condition trigger, and a safety flag. Chunks
              are embedded with bge-large into a 1,024-dimension vector space and
              stored in Neon Postgres with pgvector. The metadata is what lets the
              system show a kidney-disease answer only to a patient who has kidney
              disease.
            </P>

            <Stats
              items={[
                { value: "4,059", label: "Retrievable clinical chunks", tone: "reach" },
                { value: "10", label: "Source guidelines" },
                { value: "14", label: "Metadata fields per chunk" },
                { value: "1,024-d", label: "bge-large vectors · pgvector" },
              ]}
            />

            <Subhead>Two phases, not one</Subhead>
            <P>
              Phase 1 is a fast classifier that reads the message before any
              retrieval happens: what is the patient actually asking, how deep is
              the question, and is there enough context to answer or should it ask
              first. Phase 2 is the retrieval pipeline — enrich the query, run an
              approximate-nearest-neighbour search, rerank with a cross-encoder,
              re-sort by evidence grade, then generate an answer grounded in the
              top chunks. Splitting the two means the system never wastes a
              retrieval on &ldquo;thanks,&rdquo; and always reads the strongest
              evidence first.
            </P>

            <Callout label="The decisions that mattered">
              Cross-encoder reranking over raw vector similarity; a query cache so
              common questions skip the search; condition-gated retrieval so the
              evidence depends on the patient&apos;s profile; and graceful
              degradation everywhere, so a slow model falls back instead of
              breaking the conversation.
            </Callout>

            <Subhead>Safety is a constraint, not a feature</Subhead>
            <P>
              Before any answer leaves the system, a constraint check scans it and
              discards anything that doses a drug, tells a patient to change a
              medication, or claims a diagnosis — the regulatory line for software
              as a medical device. Conversation memory is compressed after ten
              turns and the full transcript is deleted by design, to stay clean
              under India&apos;s data-protection rules. And it is built
              India-first: local food names, local portion units, regional context
              baked into the answers.
            </P>

            <p className="border-t border-line pt-6 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-soft">
              Architecture designed end to end, implementation directed ·
              currently in final integration, ahead of a clinical pilot
            </p>
          </Column>
        </div>
      </div>

      <CasePager id="systems" />
    </article>
  );
}
