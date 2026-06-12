// ── Types ────────────────────────────────────────────────────────────────────

export interface Stat {
  label: string;
  value: string;
  delta?: string;
}

export interface Programme {
  name: string;
  campaigns: string | number;
  openRate: string;
  revenue: string;
}

export interface Article {
  title: string;
  views: string;
}

export interface Keyword {
  keyword: string;
  position: string;
  volume?: string;
}

export interface LinkedInFormat {
  type: string;
  posts: number;
  ctr: string;
  engagement: string;
}

export interface CaseStudy {
  slug: string;
  number: string;
  category: string;
  /** Short stat shown in the work listing row */
  listStat: string;
  /** Content headline — used in both listing row and detail page */
  headline: string;
  /** Larger italic impact statement shown in the case study hero */
  statHeadline: string;
  summary: string;
  stats: Stat[];
  bodyParagraphs?: string[];
  bodyNote?: string;
  quote?: string;
  programmes?: Programme[];
  bestSend?: { date: string; delivered: number; openRate: string; revenue: string };
  articles?: Article[];
  keywords?: Keyword[];
  backlinks?: { total: string; domains: string; authority: string; textLinks: string };
  linkedInFormats?: LinkedInFormat[];
  linkedInBestMonths?: Array<{ month: string; detail: string }>;
}

// ── Ordered slug list (used for prev/next navigation) ─────────────────────────

export const CASE_STUDY_ORDER = [
  "blog-growth",
  "seo",
  "email-marketing",
  "push-notifications",
  "linkedin",
  "long-form-writing",
  "pocket-notes",
] as const;

// ── Data ─────────────────────────────────────────────────────────────────────

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "blog-growth",
    number: "01",
    category: "Blog Growth",
    listStat: "2.2× traffic",
    headline: "From Side Page to Primary Discovery Channel",
    statHeadline: "2.2× the traffic. Same team. Same budget.",
    summary:
      "The blog had no editorial strategy and no performance tracking when I took it over. I built a publishing system around high-intent informational queries, a content calendar, and consistent measurement. It doubled its audience year on year.",
    stats: [
      { label: "Sessions FY25", value: "31,464", delta: "+120% YoY" },
      { label: "Blog Views FY25", value: "39,606", delta: "+98% YoY" },
      { label: "Users FY25", value: "24,035", delta: "+102% YoY" },
      { label: "FY24 Goal Attainment", value: "161%", delta: "24,152 sessions vs 15K goal" },
    ],
    bodyNote:
      "July FY25 hit 4,062 sessions, 5,070 blog views, and 3,162 users — the clearest proof that the growth was compounding across months, not concentrated in a single event. FY24 closed at 161% of the annual target. FY25 reached 71.5% of the 44,000 goal by December — before year-end. Organic search is the primary driver — a direct result of content built around search intent rather than brand interest.",
  },
  {
    slug: "seo",
    number: "02",
    category: "SEO",
    listStat: "20.2K organic",
    headline: "Organic Visibility Built Without a Single Paid Placement",
    statHeadline: "Organic traffic nearly doubled in 12 months.",
    summary:
      "Write the definitive piece on topics where the audience was already searching, link those pieces to conversion-relevant pages, measure and repeat. Good content keeps ranking — that's the compounding that shows up in the numbers.",
    stats: [
      { label: "Organic Traffic India", value: "20.2K", delta: "+97% YoY" },
      { label: "Ranking Keywords Top 100", value: "988" },
      { label: "Traffic Cost Equivalent", value: "$831", delta: "+70% YoY" },
      { label: "Non-Brand Organic Traffic", value: "20.0K", delta: "+130% YoY" },
    ],
    keywords: [
      { keyword: "how poverty line is estimated in india", position: "#1" },
      { keyword: "describe how poverty line is estimated", position: "#3", volume: "9.9K" },
      { keyword: "lijjat papad story", position: "#3" },
      { keyword: "how self help groups work", position: "Top 5" },
    ],
    backlinks: {
      total: "7,900",
      domains: "698",
      authority: "32",
      textLinks: "96.9%",
    },
  },
  {
    slug: "email-marketing",
    number: "03",
    category: "Email Marketing",
    listStat: "₹16.8Cr",
    headline: "₹16.8 Crore in Revenue. 321 Campaigns. 97.7% Deliverability.",
    statHeadline: "Every send earned its place.",
    summary:
      "The highest-performing programmes were built around specific user behaviour — transaction windows, first-investment moments, re-engagement triggers. Good email is knowing when to send, not just what to write.",
    stats: [
      { label: "Total Attributed Revenue", value: "₹16.8Cr" },
      { label: "Emails Delivered", value: "2.91M", delta: "97.73% deliverability" },
      { label: "Unique Open Rate", value: "19.70%" },
      { label: "Campaigns Shipped", value: "321", delta: "291 broadcast + 30 lifecycle" },
    ],
    programmes: [
      { name: "Transaction-Day Emails", campaigns: 36, openRate: "18.1%", revenue: "₹6.65Cr" },
      { name: "Weekly Newsletter", campaigns: 50, openRate: "23.7%", revenue: "₹4.93Cr" },
      { name: "Active Investor Nudges", campaigns: 57, openRate: "22.4%", revenue: "₹2.63Cr" },
      { name: "Onboarding Journey", campaigns: 2, openRate: "31.4%", revenue: "₹40.98L" },
      { name: "Reactivation (Dormant)", campaigns: 103, openRate: "17.3%", revenue: "₹25.58L" },
    ],
    bestSend: {
      date: "T-Day Email, 1 Nov 2025",
      delivered: 9099,
      openRate: "20.2%",
      revenue: "₹62.49L",
    },
  },
  {
    slug: "push-notifications",
    number: "04",
    category: "Push Notifications",
    listStat: "₹39.33L",
    headline: "₹39.33 Lakh Revenue from 217 Campaigns",
    statHeadline: "The hardest channel to get right.",
    summary:
      "Push lives or dies on timing, copy, and restraint. A 95.6% deliverability rate and ₹31.5K revenue per 1,000 delivered notifications shows a channel used with discipline — not volume for its own sake.",
    stats: [
      { label: "Total Attributed Revenue", value: "₹39.33L" },
      { label: "Deliverability", value: "95.6%", delta: "124,870 of 130,607 sent" },
      { label: "Revenue per 1K Delivered", value: "₹31.5K" },
      { label: "Peak Campaign Open Rate", value: "1.01%" },
    ],
  },
  {
    slug: "linkedin",
    number: "05",
    category: "LinkedIn",
    listStat: "804K impressions",
    headline: "804K Impressions. 9% Engagement. 323 Posts. All Year.",
    statHeadline: "Not viral moments. Consistent presence.",
    summary:
      "6.3 posts a week, 52 weeks. The kind of output that requires editorial discipline, content systems, and a clear platform voice. 79% of all engagements were clicks — people doing something, not just scrolling past.",
    stats: [
      { label: "Total Impressions", value: "804K" },
      { label: "Engagement Rate", value: "9.01%", delta: "industry avg 2–4%" },
      { label: "Total Clicks", value: "56,835", delta: "7.06% CTR" },
      { label: "Video Views", value: "1.05L" },
    ],
    linkedInFormats: [
      { type: "Non-Video", posts: 238, ctr: "8.22%", engagement: "10.29%" },
      { type: "Video", posts: 85, ctr: "3.84%", engagement: "5.49%" },
    ],
    linkedInBestMonths: [
      { month: "September 2025", detail: "103,298 impressions · 9,130 clicks · 10.84% engagement" },
      { month: "November 2025", detail: "114,045 impressions — peak reach month" },
      { month: "February 2025", detail: "14.50% engagement rate — best engagement month" },
    ],
  },
  {
    slug: "long-form-writing",
    number: "06",
    category: "Long-Form Writing",
    listStat: "170K+ reads",
    headline: "1,70,000+ Reads on Rural India",
    statHeadline: "9 articles. 8-minute average read time. All organic.",
    summary:
      "These weren't SEO-first articles dressed up as journalism. Each one was a genuine attempt to explain something real — how India calculates who is poor, what a women's cooperative actually runs on, how a cocoa farmer's year works financially. The search traffic followed because the depth was real.",
    stats: [
      { label: "Total Reads (Top 9)", value: "1,70,000+" },
      { label: "Avg Read Time", value: "~8 min" },
      { label: "Subjects Covered", value: "6", delta: "Agriculture · Gender · Governance · Climate · Finance · Enterprise" },
      { label: "Distribution", value: "Organic", delta: "no paid promotion" },
    ],
    articles: [
      { title: "What Is the Poverty Line in India?", views: "29,109" },
      { title: "How Self Help Groups In India Work", views: "18,176" },
      { title: "Economics of Cocoa Farming in India", views: "18,112" },
      { title: "The Incredible Success Story of Lijjat Papad", views: "15,892" },
      { title: "The Waterman of India: Rajendra Singh", views: "12,533" },
      { title: "Understanding India's Farm Subsidies", views: "11,218" },
      { title: "Understanding India's Rural Governance Structure", views: "9,683" },
      { title: "The Inspiring Story of Kudumbashree Groups", views: "8,962" },
      { title: "The E-Rickshaw Transformation in Matheran", views: "7,728" },
    ],
  },
  {
    slug: "pocket-notes",
    number: "07",
    category: "Independent Product",
    listStat: "Founder",
    headline: "A Notebook Brand Built on One Argument About Writing",
    statHeadline: "Writing as sandbox, not monument.",
    summary:
      "Most notebook brands sell you the idea that you're archiving something precious. The cover is beautiful, the paper is premium, and the implicit message is: don't waste this on a half-formed thought. That's the wrong philosophy.",
    stats: [],
    bodyParagraphs: [
      "Pocket Notes was built around the opposite argument. Writing is a sandbox. Write badly, write fast, fill it up, throw it out, get another one. The notebook is a tool for thinking, not a record of having thought. Keep it cheap, keep it handy, keep it moving.",
      "I handled the entire product: concept, cover design, production, and distribution. Printed, packed, and sold through pocketnotes.in. The design system — obsidian, aged gold, minimal type — came from the same place the brand philosophy did: the conviction that a good tool doesn't announce itself.",
    ],
    quote:
      "If you have led a meaningful life, the daily record gives itself meaning. You don't need to manufacture it on the page.",
  },
];

// ── Exports ───────────────────────────────────────────────────────────────────

export function getAllCaseStudies(): CaseStudy[] {
  return CASE_STUDIES;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}

export function getAdjacentCaseStudies(slug: string): {
  prev: CaseStudy | null;
  next: CaseStudy | null;
} {
  const idx = CASE_STUDY_ORDER.indexOf(slug as (typeof CASE_STUDY_ORDER)[number]);
  return {
    prev: idx > 0 ? (getCaseStudyBySlug(CASE_STUDY_ORDER[idx - 1]) ?? null) : null,
    next: idx < CASE_STUDY_ORDER.length - 1 ? (getCaseStudyBySlug(CASE_STUDY_ORDER[idx + 1]) ?? null) : null,
  };
}
