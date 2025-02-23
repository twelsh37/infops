import React from "react";
import Image from "next/image";

interface HomeSectionProps {
  id: string;
}

const HomeSection = ({ id }: HomeSectionProps) => {
  return (
    <section
      id={id}
      className="w-full h-[calc(100vh-64px)] md:h-[60vh] relative pt-16"
    >
      <div className="w-full h-full relative -mt-16">
        <Image
          src="/kevin-horvat-cyber-warfare.jpg"
          alt="Information warfare illustration"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* 60% opaque black overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
    </section>
  );
};

export default HomeSection;
