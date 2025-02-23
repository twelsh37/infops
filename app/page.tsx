import React from "react";
import HomeSection from "./components/HomeSection";
import ArticlesSection from "./components/ArticlesSection";

export default function Home() {
  return (
    <main>
      <HomeSection id="home" />
      <ArticlesSection />
    </main>
  );
}
