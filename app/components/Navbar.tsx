"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  const pathname = usePathname();
  const isArticlePage = pathname?.includes("/articles");

  const scrollToSection = (id: string) => {
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`w-full transition-all duration-300 shadow-md ${
          isArticlePage
            ? "bg-white text-black"
            : "bg-black/100 text-white backdrop-blur-[2px]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-end h-16">
            <div className="flex space-x-4">
              <button
                onClick={() => scrollToSection("home")}
                className={`px-3 py-2 rounded-md cursor-pointer transition-colors duration-300 ${
                  isArticlePage
                    ? "text-black hover:text-amber-600"
                    : "text-white hover:text-amber-400"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`px-3 py-2 rounded-md cursor-pointer transition-colors duration-300 ${
                  isArticlePage
                    ? "text-black hover:text-amber-600"
                    : "text-white hover:text-amber-400"
                }`}
              >
                About
              </button>
              <Link
                href="/articles"
                className={`px-3 py-2 rounded-md transition-colors duration-300 ${
                  isArticlePage
                    ? "text-black hover:text-amber-600"
                    : "text-white hover:text-amber-400"
                }`}
              >
                Articles
              </Link>
            </div>

            {/* Authentication buttons */}
            <div className="flex items-center ml-10">
              <SignedOut>
                <div className="flex space-x-2">
                  <SignInButton mode="modal">
                    <button className="px-4 py-2 text-sm bg-white text-black rounded hover:bg-gray-200">
                      Sign In
                    </button>
                  </SignInButton>
                </div>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
