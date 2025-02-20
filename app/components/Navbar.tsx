"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  // Scroll function for home page sections
  const scrollToSection = (id: string) => {
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home page first then scroll
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-md py-4 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold">
          Influence Operations
        </Link>
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-blue-500"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("articles")}
              className="hover:text-blue-500"
            >
              Articles
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-blue-500"
            >
              Contact
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-500"
            >
              About
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
