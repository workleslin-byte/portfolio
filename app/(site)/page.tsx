import type { Metadata } from "next";
import PreloaderHero from "@/components/sections/PreloaderHero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import WorkPreview from "@/components/sections/WorkPreview";
import PocketNotesFeature from "@/components/sections/PocketNotesFeature";
import Contact from "@/components/sections/Contact";
import ClosingCTA from "@/components/sections/ClosingCTA";

export const metadata: Metadata = {
  title: "AI-Enabled Growth Consultant",
  description:
    "Leslin K Seemon — AI-enabled growth consultant based in Kerala, India. Seven years of content, email, SEO, and product work — all measured.",
};

export default function HomePage() {
  return (
    <>
      <PreloaderHero />
      <Marquee />
      <About />
      <WorkPreview />
      <PocketNotesFeature />
      <Contact />
      <ClosingCTA />
    </>
  );
}
