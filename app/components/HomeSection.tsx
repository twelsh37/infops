import React from "react";

const HomeSection = ({ id }: { id: string }) => {
  return (
    <section
      id={id}
      className="min-h-[calc(100vh-8rem)] py-10 bg-gray-100 scroll-mt-16"
    >
      <div className="container mx-auto text-center px-4">
        <h1 className="text-3xl font-bold mb-4 sm:text-4xl">
          Influence Operations
        </h1>
        <h2 className="text-xl mb-8 sm:text-2xl">
          CyberSecurity and Information Warfare
        </h2>
        <p className="text-base sm:text-lg">
          Welcome to Influence Operations. We provide insights, analysis, and
          impact assessments on the cyber domain.
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
