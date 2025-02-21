import React from "react";
import HomeSection from "./components/HomeSection";
import ArticlesSection from "./components/ArticlesSection";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <>
      <HomeSection id="home" />
      <ArticlesSection />
      <ContactSection id="contact" />
      <AboutSection id="about" />
    </>
  );
}
