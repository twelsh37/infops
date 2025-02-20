import React from "react";
import HomeSection from "./components/HomeSection";
import ArticlesSection from "./components/ArticlesSection";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";

const Home = () => {
  return (
    <div>
      <HomeSection id="home" />
      <ArticlesSection id="articles" />
      <ContactSection id="contact" />
      <AboutSection id="about" />
    </div>
  );
};

export default Home;
