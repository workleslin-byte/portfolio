import type { Bar } from "@/components/visuals/GrowthBars";
import type { FlowStep } from "@/components/visuals/FlowDiagram";

// Growth case studies → animated bars (rendered below the hero).
export const GROWTH_BARS: Record<string, { title: string; bars: Bar[] }> = {
  "blog-growth": {
    title: "Sessions · users · views — FY24 to FY25",
    bars: [
      { label: "Sessions, FY24", value: 0.36, display: "14,309" },
      { label: "Sessions, FY25", value: 1.0, display: "31,464", highlight: true },
      { label: "Users, FY24", value: 0.3, display: "11,906" },
      { label: "Users, FY25", value: 0.61, display: "24,035", highlight: true },
      { label: "Blog views, FY24", value: 0.51, display: "20,041" },
      { label: "Blog views, FY25", value: 1.0, display: "39,606", highlight: true },
    ],
  },
  seo: {
    title: "Organic traffic, year on year (India)",
    bars: [
      { label: "Organic, FY24", value: 0.51, display: "~10.3K" },
      { label: "Organic, FY25", value: 1.0, display: "20.2K", highlight: true },
      { label: "Non-brand, FY24", value: 0.43, display: "~8.7K" },
      { label: "Non-brand, FY25", value: 0.99, display: "20.0K", highlight: true },
    ],
  },
  "email-marketing": {
    title: "Attributed revenue by programme (₹ Cr)",
    bars: [
      { label: "Transaction-day", value: 1.0, display: "₹6.65 Cr", highlight: true },
      { label: "Weekly newsletter", value: 0.74, display: "₹4.93 Cr" },
      { label: "Active-investor nudges", value: 0.4, display: "₹2.63 Cr" },
      { label: "Onboarding journey", value: 0.06, display: "₹40.98 L" },
      { label: "Reactivation", value: 0.04, display: "₹25.58 L" },
    ],
  },
  linkedin: {
    title: "Click-through rate by format",
    bars: [
      { label: "Non-video posts", value: 1.0, display: "8.22%", highlight: true },
      { label: "Video posts", value: 0.47, display: "3.84%" },
    ],
  },
  "long-form-writing": {
    title: "Most-read pieces (views)",
    bars: [
      { label: "Poverty line in India", value: 1.0, display: "29,109", highlight: true },
      { label: "Self-help groups", value: 0.62, display: "18,176" },
      { label: "Cocoa farming economics", value: 0.62, display: "18,112" },
      { label: "Lijjat Papad story", value: 0.55, display: "15,892" },
      { label: "Waterman of India", value: 0.43, display: "12,533" },
    ],
  },
  "push-notifications": {
    title: "Delivery discipline",
    bars: [
      { label: "Deliverability", value: 0.956, display: "95.6%", highlight: true },
      { label: "Of 130,607 sent", value: 0.956, display: "124,870 delivered" },
    ],
  },
};

// Engineering case studies → flow diagrams (rendered as the hero spectacle).
export const FLOWS: Record<string, FlowStep[]> = {
  "pocket-notes-build": [
    { label: "Next.js", meta: "front end" },
    { label: "Payload CMS", meta: "schema + collections" },
    { label: "Neon Postgres", meta: "database" },
    { label: "Vercel", meta: "build + deploy" },
  ],
  preventify: [
    { label: "Query", meta: "WhatsApp" },
    { label: "Retrieval", meta: "knowledge base" },
    { label: "Inference", meta: "multi-model eval" },
    { label: "Response", meta: "delivery" },
    { label: "Langfuse", meta: "tracing" },
    { label: "Report", meta: "python-docx" },
  ],
};
