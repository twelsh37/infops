import React from "react";
import fakeNewsImage from "@/public/fake-news.jpg";

const HomeSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="w-full h-screen md:h-[60vh] relative">
      <div className="w-full h-full">
        <img
          src={fakeNewsImage.src}
          alt="Information warfare illustration"
          className="w-full h-full object-cover object-center"
        />
        {/* 60% opaque black overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
    </section>
  );
};

export default HomeSection;
