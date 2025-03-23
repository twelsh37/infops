// File: __tests__/components/AboutSection.test.tsx
// Tests for the AboutSection component

import React from "react";
import { render, screen } from "@testing-library/react";
import AboutSection from "@/app/components/AboutSection";

// Mock the MarkdownRenderer component since we're not testing its functionality
jest.mock("@/app/components/MarkdownRenderer", () => {
  return function MockMarkdownRenderer({ content }: { content: string }) {
    return <div>{content}</div>;
  };
});

describe("AboutSection Component", () => {
  it("renders with correct id", () => {
    render(<AboutSection id="about" />);
    const section = screen.getByRole("region", { name: /about/i });
    expect(section).toHaveAttribute("id", "about");
  });

  it("renders with correct styling", () => {
    render(<AboutSection id="about" />);
    const section = screen.getByRole("region", { name: /about/i });
    expect(section).toHaveClass("py-24");

    const container = section.firstElementChild;
    expect(container).toHaveClass("container", "mx-auto", "px-4");

    const proseContainer = container?.firstElementChild;
    expect(proseContainer).toHaveClass("prose", "prose-lg", "max-w-none");
  });

  it("renders markdown content correctly", () => {
    render(<AboutSection id="about" />);

    // Check for specific sections in the content
    expect(
      screen.getByText(/influence operations: about us/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/our mission/i)).toBeInTheDocument();
    expect(screen.getByText(/our approach/i)).toBeInTheDocument();
  });
});
