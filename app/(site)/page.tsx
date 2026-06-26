import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import IndexList from "@/components/home/IndexList";
import Profile from "@/components/home/Profile";
import GrowthPhilosophy from "@/components/home/GrowthPhilosophy";
import AIWorkflow from "@/components/home/AIWorkflow";
import Capabilities from "@/components/home/Capabilities";
import CaseTease from "@/components/home/CaseTease";
import Education from "@/components/home/Education";
import Contact from "@/components/home/Contact";
import StorytellerChannels from "@/components/home/StorytellerChannels";
import LiquidGlass from "@/components/fx/LiquidGlass";
import RagDiagram from "@/components/viz/RagDiagram";
import GradedImage from "@/components/shell/GradedImage";
import GrwthAgencyCard from "@/components/home/GrwthAgencyCard";
import { caseById } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Leslin K Seemon — Content & Growth Lead",
};

export default function HomePage() {
  return (
    <>
      {/* Option A — liquid-glass cursor wash (home-wide) */}
      <LiquidGlass />

      {/* 1. Cover — proof-first */}
      <Hero />

      {/* 2. The work, proof up front: gallery index, then the deep dives */}
      <IndexList />

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
      <CaseTease c={caseById("brand")} visual={<GrwthAgencyCard />} />

      {/* 3. Fit + thinking — the reassurance, after they've seen the proof */}
      <Profile />
      <GrowthPhilosophy />
      <AIWorkflow />

      {/* 4. Supporting evidence — skills and schooling sit last */}
      <Capabilities />
      <Education />

      <Contact />
    </>
  );
}
