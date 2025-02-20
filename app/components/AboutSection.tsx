import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 sm:text-3xl text-center">
          About
        </h2>
        <div className="text-gray-700">
          <p className="mb-4">
            Influence Operations is dedicated to providing insightful analysis
            and research on cybersecurity and information warfare.
          </p>
          <p className="mb-4">
            Our team of experts works to uncover the underlying trends and
            impacts of influence operations in the digital age.
          </p>
          <p>
            We strive to keep you informed and prepared to navigate the
            complexities of the cyber domain.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
