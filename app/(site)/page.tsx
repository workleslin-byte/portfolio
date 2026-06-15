import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import IndexList from "@/components/home/IndexList";
import Capabilities from "@/components/home/Capabilities";
import CaseTease from "@/components/home/CaseTease";
import Contact from "@/components/home/Contact";
import ProgrammeBars from "@/components/viz/ProgrammeBars";
import RagDiagram from "@/components/viz/RagDiagram";
import AssetSlot from "@/components/shell/AssetSlot";
import GradedImage from "@/components/shell/GradedImage";
import { caseById } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Leslin K Seemon — Growth Operator + AI Systems Builder",
};

const CAPITAL_BARS = [
  { label: "Transaction-day", value: 1.0, display: "₹6.65 Cr", highlight: true },
  { label: "Weekly newsletter", value: 0.74, display: "₹4.93 Cr" },
  { label: "Active-investor nudges", value: 0.4, display: "₹2.63 Cr" },
  { label: "Onboarding (2 emails)", value: 0.062, display: "₹40.98 L" },
  { label: "Reactivation", value: 0.038, display: "₹25.58 L" },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <IndexList />
      <Capabilities />

      <CaseTease
        c={caseById("capital")}
        visual={
          <ProgrammeBars title="Revenue by programme (₹ Cr)" bars={CAPITAL_BARS} />
        }
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
          <AssetSlot
            label="Nilambur Farms — before → after"
            file="/nilambur-before-after.jpg"
            ratio="4 / 3"
          />
        }
      />

      <Contact />
    </>
  );
}
