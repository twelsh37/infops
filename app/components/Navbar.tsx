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
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl">
            InfoPS
          </Link>
          <div className="flex space-x-4">
            <Link
              href="/#articles"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
            >
              Articles
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
