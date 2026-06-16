import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import IndexList from "@/components/home/IndexList";
import Capabilities from "@/components/home/Capabilities";
import CaseTease from "@/components/home/CaseTease";
import Contact from "@/components/home/Contact";
import StorytellerChannels from "@/components/home/StorytellerChannels";
import LiquidGlass from "@/components/fx/LiquidGlass";
import RagDiagram from "@/components/viz/RagDiagram";
import GradedImage from "@/components/shell/GradedImage";
import { caseById } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Leslin K Seemon — Growth Operator + AI Systems Builder",
};

export default function HomePage() {
  return (
    <>
      {/* Option A — liquid-glass cursor wash (home-wide) */}
      <LiquidGlass />
      <Hero />
      <Intro />
      <IndexList />
      <Capabilities />

      <CaseTease
        c={caseById("storyteller")}
        visual={<StorytellerChannels />}
      />
      <CaseTease c={caseById("systems")} visual={<RagDiagram />} />
      <CaseTease
        c={caseById("product")}
        visual={
          <GradedImage
            src="/product-pocket.jpg"
            alt="A Pocket Notes notebook — obsidian cover, aged-gold wordmark — in a back pocket."
            ratio="4 / 3"
            grade={false}
          />
        }
      />
      <CaseTease
        c={caseById("brand")}
        visual={
          <GradedImage
            src="/brand/before-after.png"
            alt="Nilambur Farms — the old Pepper Valley mark beside the new Nilambur identity."
            ratio="4 / 3"
            grade={false}
          />
        }
      />

      <Contact />
    </>
  );
}
