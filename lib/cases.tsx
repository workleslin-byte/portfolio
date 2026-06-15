import type { ReactNode } from "react";
import type { DividerMeta } from "@/components/shell/SectionDivider";

export type CaseId = "capital" | "systems" | "product" | "brand";

export type CaseDef = {
  id: CaseId;
  num: string; // "01"
  folio: string; // "P/05"
  section: string; // divider label + running head
  href: string;
  /** Smeared display word; italic portion in <em>. */
  word: ReactNode;
  /** Short caption under the divider word. */
  caption: string;
  meta: DividerMeta;
  /** The case headline (Fraunces, quiet — the divider word carries the smear). */
  headline: string;
  sub: string;
  /** Home-tease metric callout. */
  metric: { value: string; label: string };
  /** The single non-obvious decision (the judgment beat). */
  decision: string;
};

export const CASES: CaseDef[] = [
  {
    id: "capital",
    num: "01",
    folio: "P/05",
    section: "Capital",
    href: "/capital",
    word: (
      <>
        Cap<em>ital.</em>
      </>
    ),
    caption:
      "Real people, persuaded to fund rural borrowers — on a platform that, by law, can't promise them a return.",
    meta: {
      client: "Rang De",
      industry: "Social investment via comms",
      year: "2024–25",
    },
    headline: "I wrote the emails that moved ₹16.8 crore of social investment.",
    sub: "Not revenue. Capital. Real people, persuaded to fund rural borrowers — on a platform that, by law, can't promise them a return.",
    metric: { value: "₹16.8 Cr", label: "social investment mobilized through comms" },
    decision:
      "Everyone optimizes subject lines. The revenue was hiding in send-timing, so I rebuilt the programmes around transaction windows, first-investment moments, and re-engagement triggers instead.",
  },
  {
    id: "systems",
    num: "02",
    folio: "P/06",
    section: "Systems",
    href: "/systems",
    word: (
      <>
        Sys<em>tems.</em>
      </>
    ),
    caption:
      "Two-phase retrieval over 4,059 chunks of clinical guidelines, architected end to end.",
    meta: {
      client: "Preventify",
      industry: "Clinical RAG, architected end to end",
      year: "2025",
    },
    headline: "A health chatbot is only as good as what it refuses to guess.",
    sub: "Two-phase retrieval over 4,059 chunks of clinical guidelines. I built the retrieval, the reasoning, and the safety gate — because in healthcare, a confident wrong answer is the failure mode that matters.",
    metric: { value: "4,059", label: "clinical chunks · two-phase retrieval" },
    decision:
      "Most chatbots optimize for answering. This one optimizes for refusing — every answer is pinned to a dated, evidence-graded guideline, or it declines and asks a clarifying question.",
  },
  {
    id: "product",
    num: "03",
    folio: "P/07",
    section: "Product",
    href: "/product",
    word: (
      <>
        Pro<em>duct.</em>
      </>
    ),
    caption:
      "A notebook brand built on one idea — writing is a sandbox, not a monument — and shipped full-stack, solo.",
    meta: {
      client: "Pocket Notes",
      industry: "pocketnotes.in · Founded & built solo",
      year: "2022–",
    },
    headline: "I built the whole thing — argument, design, code, infrastructure.",
    sub: "A product built on one idea: writing is a sandbox, not a monument. And a full-stack build done solo, via agentic coding.",
    metric: { value: "Solo", label: "concept → design → code → infra" },
    decision:
      "I went from no production web experience to a live full-stack site by going deep on the fundamentals rather than outsourcing the parts I didn't understand.",
  },
  {
    id: "brand",
    num: "04",
    folio: "P/08",
    section: "Brand",
    href: "/brand",
    word: (
      <>
        Br<em>and.</em>
      </>
    ),
    caption:
      "A full identity for an agro company — from naming to the jar on the shelf.",
    meta: {
      client: "Grwth",
      industry: "Nilambur Farms · Brand identity",
      year: "2024",
    },
    headline: "A full identity for an agro company — from naming to the jar on the shelf.",
    sub: "Credited under Grwth, my shop. From the busy old Pepper Valley mark to a clean, recallable Nilambur Farms system.",
    metric: { value: "60 / 40", label: "brand name to symbol, tuned for recall" },
    decision:
      "I tested palm, coconut, and teak as the symbol and rejected each with a reason — palm and coconut lacked impact, teak was too complex — before landing on a leaf, then a mountain, as the most relatable cue.",
  },
];

export const caseById = (id: CaseId) => CASES.find((c) => c.id === id)!;
