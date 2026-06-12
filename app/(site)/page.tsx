"use client";

import { useState } from "react";
import Preloader from "@/components/sections/Preloader";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import WorkPreview from "@/components/sections/WorkPreview";
import PocketNotesFeature from "@/components/sections/PocketNotesFeature";

export default function HomePage() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setReady(true)} />
      <Hero ready={ready} />
      <Marquee />
      <About />
      <WorkPreview />
      <PocketNotesFeature />
    </>
  );
}
