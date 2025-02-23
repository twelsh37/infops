import React from "react";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <div className="flex-1">
        <HomeSection id="home" />
        <AboutSection id="about" />
      </div>
    </main>
  );
}
