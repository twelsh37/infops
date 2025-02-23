import React from "react";
import Image from "next/image";

interface HomeSectionProps {
  id: string;
}

const HomeSection = ({ id }: HomeSectionProps) => {
  return (
    <section id={id} className="w-full h-screen relative z-0">
      <div className="absolute inset-0">
        <Image
          src="/kevin-horvat-cyber-warfare.jpg"
          alt="Information warfare illustration"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-center pl-[5%] pr-4 sm:pr-6 lg:pr-8 translate-y-[15%]">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-shadow-lg">
            Influence Operations
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]">
            The Invisible Battlefield: The Battle for Truth in a World of Lies
          </h2>
          <hr className="w-1/4 border-t border-blue-500 mb-4 shadow-lg" />
          <blockquote className="border-l-4 border-blue-500 pl-4 mb-4 max-w-[60%]">
            <p className="text-base sm:text-lg md:text-xl text-white font-light italic drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
              &quot; If you tell a lie big enough and keep repeating it, people
              will eventually come to believe it. The lie can be maintained only
              for such time as the State can shield the people from the
              political, economic and/or military consequences of the lie. It
              thus becomes vitally important for the State to use all of its
              powers to repress dissent, for the truth is the mortal enemy of
              the lie, and thus by extension, the truth is the greatest enemy of
              the State. &quot;
            </p>
            <footer className="text-base sm:text-lg text-white font-light mt-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
              — Joseph Goebbels
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
