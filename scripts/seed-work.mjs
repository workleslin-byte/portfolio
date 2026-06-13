import { createClient } from "@sanity/client";

// ── Client (write) ───────────────────────────────────────────────────────────
function clean(v) {
  if (!v) return v;
  const s = v.trim();
  return s.charCodeAt(0) === 0xfeff ? s.slice(1) : s;
}

const client = createClient({
  projectId: clean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) || "132hn2ll",
  dataset: clean(process.env.NEXT_PUBLIC_SANITY_DATASET) || "production",
  apiVersion: "2024-01-01",
  token: clean(process.env.SANITY_API_TOKEN),
  useCdn: false,
});

// ── PortableText helpers ──────────────────────────────────────────────────────
let keySeq = 0;
const k = () => `k${(keySeq++).toString(36)}`;

const p = (text) => ({
  _type: "block",
  _key: k(),
  style: "normal",
  markDefs: [],
  children: [{ _type: "span", _key: k(), text, marks: [] }],
});

const h2 = (text) => ({
  _type: "block",
  _key: k(),
  style: "h2",
  markDefs: [],
  children: [{ _type: "span", _key: k(), text, marks: [] }],
});

const caption = (text) => ({
  _type: "block",
  _key: k(),
  style: "normal",
  markDefs: [],
  children: [{ _type: "span", _key: k(), text, marks: ["em"] }],
});

const stat = (label, value, delta) => ({ _key: k(), label, value, ...(delta ? { delta } : {}) });

// ── The seven ─────────────────────────────────────────────────────────────────
const items = [
  {
    slug: "blog-growth",
    category: "blog-growth",
    order: 1,
    featured: true,
    title: "Blog Growth",
    headline: "I treated a neglected blog like an argument that had to win.",
    subheadline: "It doubled. Same team, same budget.",
    stats: [
      stat("Traffic, year on year", "2.2×", "+120% YoY"),
      stat("Sessions, FY25", "31,464"),
      stat("Users, FY25", "24,035", "+102%"),
      stat("FY24 goal attainment", "161%"),
    ],
    body: [
      caption("GA4 · Apr 2024–Dec 2025"),
      p("When I took it over, the blog had no editorial strategy and nothing measuring whether any of it worked. It was a side page nobody owned."),
      h2("The approach"),
      p("I built a publishing system around high-intent informational queries, a content calendar that actually held, and weekly measurement. The point was never volume. It was writing the piece that deserved to rank, then proving it did."),
      h2("What happened"),
      p("Traffic doubled year on year, and the growth was organic-led, not a single viral spike. July FY25 alone hit 4,062 sessions. FY24 closed at 161% of its annual target; FY25 reached 71.5% of the 44,000 goal by December, before year-end."),
    ],
  },
  {
    slug: "seo",
    category: "seo",
    order: 2,
    featured: true,
    title: "SEO",
    headline: "Write the definitive piece on what people already search for. Then wait.",
    subheadline: "Organic traffic nearly doubled. Nothing paid.",
    stats: [
      stat("Organic traffic, India", "20.2K", "+97% YoY"),
      stat("Ranking keywords", "988"),
      stat("Traffic cost equivalent", "$831", "+70%"),
      stat("Non-brand organic", "20.0K", "+130%"),
    ],
    body: [
      caption("SEMrush India · Dec 2025"),
      p("Good content keeps ranking. That is the compounding that shows up in the numbers, and it only happens if the piece is genuinely the best answer to the question."),
      h2("The approach"),
      p("Write the definitive piece on topics the audience already searches for. Link those pieces to conversion-relevant pages. Measure, then repeat. The architecture is deliberately top-of-funnel: informational content does the scale work while product pages catch intent downstream."),
      h2("Where the traffic comes from"),
      p("Intent mix: informational 77.8%, commercial 11.3%, navigational 6.3%, transactional 4.6%. Ranking wins include how the poverty line is estimated in India at #1, the Lijjat Papad story at #3, and cocoa farming economics in the top five. The backlink profile stayed clean: 7,900 backlinks across 698 referring domains, authority score 32."),
    ],
  },
  {
    slug: "email-marketing",
    category: "email-marketing",
    order: 3,
    featured: true,
    title: "Email Marketing",
    headline: "Good email is knowing when to send, not just what to write.",
    subheadline: "₹16.8 crore, attributed. 321 sends.",
    stats: [
      stat("Attributed revenue", "₹16.8 Cr"),
      stat("Emails delivered", "2.91M", "97.73%"),
      stat("Unique open rate", "19.70%"),
      stat("Campaigns shipped", "321"),
    ],
    body: [
      caption("Klaviyo · Dec 2024–Dec 2025 · 2.97M sends"),
      p("The highest-performing programmes were built around specific user behaviour: transaction windows, first-investment moments, re-engagement triggers. Timing did as much work as copy."),
      h2("Revenue by programme"),
      p("Transaction-day emails earned ₹6.65 Cr, the weekly newsletter ₹4.93 Cr, active-investor nudges ₹2.63 Cr, the onboarding journey ₹40.98 lakh from just two emails, and dormant reactivation ₹25.58 lakh."),
      h2("Peaks"),
      p("October 2025 was the best month at ₹2.05 Cr attributed. The best single send, a transaction-day email on 1 November 2025, pulled ₹62.49 lakh from one campaign at a 20.2% open rate."),
    ],
  },
  {
    slug: "push-notifications",
    category: "push-notifications",
    order: 4,
    featured: false,
    title: "Push Notifications",
    headline: "The hardest channel. It rewards restraint, not volume.",
    subheadline: "₹39.33 lakh. 95.6% delivered.",
    stats: [
      stat("Attributed revenue", "₹39.33L"),
      stat("Deliverability", "95.6%"),
      stat("Revenue per 1,000 delivered", "₹31.5K"),
      stat("Peak campaign open rate", "1.01%"),
    ],
    body: [
      caption("CleverTap · Dec 2024–Dec 2025 · 130K+ sends"),
      p("Push lives or dies on timing, copy, and restraint. A 95.6% deliverability rate and ₹31.5K of revenue for every 1,000 delivered notifications is what a channel looks like when it is used with discipline, not volume for its own sake."),
      p("124,870 notifications delivered of 130,607 sent, across 217 campaigns. ₹8.18 lakh came directly from click-through; the rest was assisted."),
    ],
  },
  {
    slug: "linkedin",
    category: "linkedin",
    order: 5,
    featured: true,
    title: "LinkedIn",
    headline: "Not viral moments. Just showing up, 323 times.",
    subheadline: "804K impressions. 9% engaged.",
    stats: [
      stat("Total impressions", "804K"),
      stat("Engagement rate", "9.01%", "ind. avg 2–4%"),
      stat("Total clicks", "56,835", "7.06% CTR"),
      stat("Video views", "1.05L"),
    ],
    body: [
      caption("LinkedIn Page Analytics · Dec 2024–Dec 2025"),
      p("6.3 posts a week, 52 weeks. The kind of output that needs editorial discipline and a clear platform voice, not luck. 79% of all engagement was clicks: people doing something, not just scrolling past."),
      h2("Format by objective"),
      p("Non-video drove intent at 8.22% CTR and a 10.29% engagement rate. Video built awareness at 3.84% CTR. The format was chosen by what the post needed to do, not by habit. Best months: September, November, February."),
    ],
  },
  {
    slug: "long-form-writing",
    category: "long-form-writing",
    order: 6,
    featured: true,
    title: "Long-Form Writing",
    headline: "I wrote about rural India like it mattered. It did.",
    subheadline: "1,70,000 reads. None of it paid.",
    stats: [
      stat("Total reads, top 9", "1.7L+"),
      stat("Articles", "9"),
      stat("Average read time", "~8 min"),
      stat("Subjects", "6"),
    ],
    body: [
      caption("By Leslin K Seemon · FY 2024–25"),
      p("These were not SEO-first articles dressed up as journalism. Each one was a genuine attempt to explain something real: how India calculates who is poor, what a women's cooperative actually runs on, how a cocoa farmer's year works financially. The search traffic followed because the depth was real."),
      h2("Most read"),
      p("The poverty line explainer drew 29,109 reads, self-help groups 18,176, cocoa farming economics 18,112, and the Lijjat Papad story 15,892. All organic, no paid distribution."),
    ],
  },
  {
    slug: "pocket-notes",
    category: "pocket-notes",
    order: 7,
    featured: true,
    title: "Pocket Notes",
    headline: "A notebook brand built on one argument: writing is a sandbox, not a monument.",
    subheadline: "Founded, designed, produced, sold. Solo.",
    stats: [
      stat("Role", "Founder"),
      stat("Channel", "pocketnotes.in"),
      stat("Scope", "Concept → Distribution"),
      stat("Since", "2022"),
    ],
    body: [
      caption("Independent product · pocketnotes.in"),
      p("Most notebook brands sell you the idea that you are archiving something precious, so don't waste the page on a half-formed thought. That is the wrong philosophy. Pocket Notes was built on the opposite argument. Writing is a sandbox: write badly, write fast, fill it up, throw it out, get another. Keep it cheap, keep it handy, keep it moving."),
      h2("The whole product"),
      p("I handled concept, cover design, production, and distribution. Printed, packed, and sold through pocketnotes.in, with every run checked in person at the printer. The design ethic, that a good tool doesn't announce itself, is the same conviction driving this portfolio."),
    ],
  },
];

// ── Run ────────────────────────────────────────────────────────────────────────
async function run() {
  if (!client.config().token) {
    console.error("\nMissing SANITY_API_TOKEN. Run with: node --env-file=.env.local scripts/seed-work.mjs\n");
    process.exit(1);
  }

  for (const it of items) {
    keySeq = 0; // deterministic keys per doc
    const doc = {
      _id: `workItem.${it.slug}`,
      _type: "workItem",
      title: it.title,
      slug: { _type: "slug", current: it.slug },
      category: it.category,
      order: it.order,
      featured: it.featured,
      headline: it.headline,
      subheadline: it.subheadline,
      stats: it.stats,
      body: it.body,
    };
    await client.createOrReplace(doc);
    console.log(`✓ ${it.slug}`);
  }
  console.log(`\nSeeded ${items.length} work items.\n`);
}

run().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
