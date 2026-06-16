import type { Metadata } from "next";
import CaseHeader from "@/components/case/CaseHeader";
import CasePager from "@/components/case/CasePager";
import { Column, Kicker, Subhead, P, Callout, Masonry } from "@/components/case/Editorial";
import GradedImage from "@/components/shell/GradedImage";
import ScrollyTile from "@/components/viz/ScrollyTile";
import WritingWidgetTile from "@/components/viz/WritingWidgetTile";

export const metadata: Metadata = {
  title: "Product — a notebook brand, built and shipped solo",
  description:
    "Pocket Notes (pocketnotes.in), 2022–. A product built on one idea — writing is a sandbox, not a monument — and a full-stack site built solo via agentic coding.",
};

const GOLD = "#A8842E"; // aged gold — Pocket Notes' own accent, used only here
const STACK = [
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Payload CMS", slug: "payloadcms" },
  { name: "Neon Postgres", slug: "neon" },
  { name: "Vercel", slug: "vercel" },
  { name: "Resend", slug: "resend" },
];

export default function ProductPage() {
  return (
    <article>
      <CaseHeader id="product" />

      <div className="px-[var(--gutter)] py-20 md:py-28">
        <Column>
          <Kicker>One idea, two layers</Kicker>
          <P>
            Most notebook brands sell you the idea that you&apos;re archiving
            something precious — so don&apos;t waste the page on a half-formed
            thought. Pocket Notes argues the opposite: writing is a sandbox, not a
            monument. Write badly, write fast, fill it, throw it out, get another.
            Keep it cheap, keep it handy, keep it moving.
          </P>
          <P>
            That conviction needed a home on the web, so I built one — front end
            through infrastructure, as the sole developer, having taught myself
            agentic coding and modern deployment from scratch for the project. The
            site is live and in active use.
          </P>
        </Column>

        <div className="panel mx-auto mt-12 max-w-2xl p-6 md:p-7">
          <p
            className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em]"
            style={{ color: GOLD }}
          >
            The stack — built solo
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {STACK.map((s) => (
              <li
                key={s.name}
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[12px] text-ink"
                style={{ borderColor: GOLD }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/logos/${s.slug}.svg`}
                  alt={`${s.name} logo`}
                  width={14}
                  height={14}
                  loading="lazy"
                />
                {s.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-16 max-w-dossier">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
            The craft — live on pocketnotes.in
          </p>
          <Masonry>
            <GradedImage
              src="/product-pocket.jpg"
              alt="A Pocket Notes notebook — obsidian cover, aged-gold wordmark — in a back pocket."
              ratio="3 / 4"
              grade={false}
              sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 30vw"
            />
            <ScrollyTile />
            <GradedImage
              src="/product-printer.jpg"
              alt="Leslin checking a Pocket Notes print run in person with the printer."
              ratio="4 / 5"
              grade={false}
              sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 30vw"
            />
            <WritingWidgetTile />
          </Masonry>
        </div>

        <div className="mt-16">
          <Column>
            <Callout label="Why it matters">
              I went from no production web experience to a shipped, live
              full-stack site by going deep on the fundamentals rather than
              outsourcing the parts I didn&apos;t understand. Because I built
              every layer, I can reason about the whole system — data model,
              rendering, hosting — instead of treating any part as a black box.
            </Callout>

            <a
              href="https://pocketnotes.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-2 rounded-full border px-6 py-3 font-mono text-[12px] uppercase tracking-[0.16em] transition-colors"
              style={{ borderColor: GOLD, color: GOLD }}
            >
              Visit the live site → pocketnotes.in
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                ↗
              </span>
            </a>
          </Column>
        </div>
      </div>

      <CasePager id="product" />
    </article>
  );
}
