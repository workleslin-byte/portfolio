"use client";

import { useState } from "react";
import Preloader from "@/components/sections/Preloader";
import Hero from "@/components/sections/Hero";

export default function HomePage() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setReady(true)} />
      <Hero ready={ready} />
    </>
  );
}
