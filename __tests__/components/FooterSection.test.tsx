// File: __tests__/components/FooterSection.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "@/app/components/FooterSection";

// Mock Next.js Link component
jest.mock("next/link", () => {
  return function MockLink({ children, href, className }: any) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  };
});

// Mock the current year to make tests deterministic
const mockDate = new Date("2024");
global.Date = jest.fn(() => mockDate) as any;

describe("FooterSection Component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("renders with correct structure and styling", () => {
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass(
      "fixed",
      "bottom-0",
      "w-full",
      "bg-black/80",
      "backdrop-blur-md",
      "text-white",
      "z-50"
    );
  });

  it("displays the copyright notice with current year", () => {
    const copyright = screen.getByText(/© 2024 Influence Operations/);
    expect(copyright).toBeInTheDocument();
    expect(copyright.parentElement).toHaveClass(
      "flex",
      "flex-col",
      "md:flex-row",
      "justify-center",
      "md:justify-between",
      "items-center",
      "gap-4",
      "text-sm",
      "text-gray-400"
    );
  });

  it("renders all legal links", () => {
    const links = [
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Terms and Conditions", href: "/terms" },
      { text: "Cookie Policy", href: "/cookiepolicy" },
    ];

    links.forEach(({ text, href }) => {
      const link = screen.getByRole("link", { name: text });
      expect(link).toHaveAttribute("href", href);
      expect(link).toHaveClass(
        "text-gray-400",
        "hover:text-white",
        "transition-colors"
      );
    });
  });

  it("renders links in a list", () => {
    const list = screen.getByRole("list");
    expect(list).toHaveClass("flex", "flex-wrap", "gap-4", "justify-center");

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });

  it("has correct container structure", () => {
    const footer = screen.getByRole("contentinfo");
    const container = footer.querySelector(".container");
    expect(container).toHaveClass("container", "mx-auto", "px-4", "py-6");
  });
});
