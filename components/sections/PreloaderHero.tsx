"use client";

import { useState } from "react";
import Preloader from "./Preloader";
import Hero from "./Hero";

export default function PreloaderHero() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setReady(true)} />
      <Hero ready={ready} />
    </>
  );
}
