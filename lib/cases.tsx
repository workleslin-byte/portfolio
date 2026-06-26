import type { ReactNode } from "react";
import type { DividerMeta } from "@/components/shell/SectionDivider";

export type CaseId = "storyteller" | "systems" | "product" | "brand";

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
  /** Two candy colours for this section's soft background glow. */
  glow: [string, string];
};

export const CASES: CaseDef[] = [
  {
    id: "storyteller",
    num: "01",
    folio: "P/05",
    section: "Digital Storyteller",
    href: "/storyteller",
    word: (
      <>
        Sto<em>ryteller.</em>
      </>
    ),
    caption:
      "804K LinkedIn impressions · ₹16.8 Cr email-attributed investment · 2.0L+ long-form reads.",
    meta: {
      client: "Rang De",
      industry: "Content across LinkedIn, email, push, long-form",
      year: "2020–2026",
    },
    headline: "Content marketing isn't viral moments. It's showing up with things worth reading.",
    sub: "804K LinkedIn impressions, ₹16.8 crore in attributed email investment, 2 lakh+ long-form reads — built across channels on one standard: editorial discipline.",
    metric: { value: "₹16.8 Cr", label: "attributed investment · WebEngage, FY24–25" },
    decision:
      "LinkedIn for reach, email for investment, push for moments, long-form for depth. Each channel optimized for what it's good at — not forced into a single narrative.",
    glow: ["#FF6FA3", "#FF9E3D"],
  },
  {
    id: "systems",
    num: "02",
    folio: "P/05",
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
      year: "Apr–May 2026",
    },
    headline: "A health chatbot is only as good as what it refuses to guess.",
    sub: "Two-phase retrieval over 4,059 chunks of clinical guidelines. I designed the retrieval architecture, the reasoning pipeline, and the safety constraints — and directed the implementation end to end. In healthcare, a confident wrong answer is the failure mode that matters.",
    metric: { value: "4,059", label: "clinical chunks · two-phase retrieval" },
    decision:
      "Most chatbots optimize for answering. This one optimizes for refusing — every answer is pinned to a dated, evidence-graded guideline, or it declines and asks a clarifying question.",
    glow: ["#4FD1E0", "#6E8BFF"],
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
      year: "Nov 2022",
    },
    headline: "I built the whole thing — argument, design, code, infrastructure.",
    sub: "A product built on one idea: writing is a sandbox, not a monument. And a full-stack build done solo, via agentic coding.",
    metric: { value: "Solo", label: "concept → design → code → infra" },
    decision:
      "I went from no production web experience to a live full-stack site by going deep on the fundamentals rather than outsourcing the parts I didn't understand.",
    glow: ["#FFC24D", "#FF7A3D"],
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
    glow: ["#57D98C", "#3FC6B4"],
  },
];

export const caseById = (id: CaseId) => CASES.find((c) => c.id === id)!;
