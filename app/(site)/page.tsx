import type { Metadata } from "next";
import PreloaderHero from "@/components/sections/PreloaderHero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import WorkPreview from "@/components/sections/WorkPreview";
import Capabilities from "@/components/sections/Capabilities";
import PocketNotesFeature from "@/components/sections/PocketNotesFeature";
import Contact from "@/components/sections/Contact";
import ClosingCTA from "@/components/sections/ClosingCTA";

export const metadata: Metadata = {
  title: "Growth Operator + AI Systems Builder",
  description:
    "Leslin K Seemon — Kerala, India. Seven years of full-funnel growth (₹16.8 Cr attributed) and the engineering to build the AI systems that run it, including a clinical RAG system architected end to end.",
};

export default function HomePage() {
  return (
    <>
      <PreloaderHero />
      <Marquee />
      <About />
      <WorkPreview />
      <Capabilities />
      <PocketNotesFeature />
      <Contact />
      <ClosingCTA />
    </>
  );
}
