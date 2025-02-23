import React from "react";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main>
      <HomeSection id="home" />
      <AboutSection id="about" />
    </main>
  );
}
