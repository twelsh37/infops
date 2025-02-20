"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 w-full bg-black/80 backdrop-blur-md text-white z-50">
      {/* Copyright Bar with Legal Links */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} Influence Operations. All rights reserved.</p>
            <ul className="flex flex-wrap gap-4 justify-center">
              {[
                ["Privacy Policy", "/privacy"],
                ["Terms and Conditions", "/terms"],
                ["Cookie Policy", "/cookiepolicy"],
              ].map(([item, path]) => (
                <li key={item}>
                  <Link
                    href={path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
