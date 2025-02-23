import React from "react";
import Image from "next/image";

interface HomeSectionProps {
  id: string;
}

const HomeSection = ({ id }: HomeSectionProps) => {
  return (
    <section id={id} className="w-full h-screen md:h-[60vh] relative">
      <div className="w-full h-full relative">
        <Image
          src="/fake-news.jpg"
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
