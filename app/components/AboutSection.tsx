import React from "react";

interface AboutSectionProps {
  id: string;
}

const AboutSection = ({ id }: AboutSectionProps) => {
  return (
    <section id={id} className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 sm:text-3xl text-center">
          About
        </h2>
        <div className="text-gray-700">
          <p className="mb-4">
            The aim of Influence Operations is to provide information on the use of Information Warfare in the Geo-Political arena.
          </p>
          <p className="mb-4">
            Using deep reasoning AI Models we collate and distil copious amounts of background into easily digestible articles
          </p>
          <p>
            We hope that you find the articles informative. Weere possible we have cited our sources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
