// File: __tests__/components/HomeSection.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import HomeSection from "@/app/components/HomeSection";
import type { ImageProps } from "next/image";

// Mock next/image since it's not available in the test environment
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: Partial<ImageProps>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        alt={props.alt}
        src={props.src?.toString() || ""}
        className={props.className}
      />
    );
  },
}));

describe("HomeSection Component", () => {
  const testId = "test-home-section";

  beforeEach(() => {
    render(<HomeSection id={testId} />);
  });

  it("renders with correct id and structure", () => {
    const section = document.querySelector(`section[id="${testId}"]`);
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass("w-full", "h-screen", "relative", "z-0");
  });

  it("renders the main heading and subheading", () => {
    const mainHeading = screen.getByRole("heading", { level: 1 });
    expect(mainHeading).toHaveTextContent("Influence Operations");
    expect(mainHeading).toHaveClass(
      "text-6xl",
      "sm:text-7xl",
      "md:text-8xl",
      "font-bold",
      "text-white"
    );

    const subHeading = screen.getByRole("heading", { level: 2 });
    expect(subHeading).toHaveTextContent(
      "The Invisible Battlefield: The Battle for Truth in a World of Lies"
    );
    expect(subHeading).toHaveClass(
      "text-2xl",
      "sm:text-3xl",
      "md:text-4xl",
      "font-bold",
      "text-white"
    );
  });

  it("renders the background image with correct props", () => {
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "/kevin-horvat-cyber-warfare.jpg");
    expect(image).toHaveAttribute("alt", "Information warfare illustration");
    expect(image).toHaveClass("object-cover", "object-top");
  });

  it("renders the blockquote with correct content and styling", () => {
    const quote = screen.getByText(/If you tell a lie big enough/);
    expect(quote).toBeInTheDocument();

    const blockquote = quote.closest("blockquote");
    expect(blockquote).toHaveClass("border-l-4", "border-blue-500");

    const attribution = screen.getByRole("contentinfo");
    expect(attribution).toHaveTextContent(/Joseph Goebbels/);
    expect(attribution).toHaveClass("text-white", "font-light");
  });

  it("renders the overlay elements", () => {
    // Black overlay
    const blackOverlay = screen.getByTestId("black-overlay");
    expect(blackOverlay).toHaveClass("absolute", "inset-0", "bg-black/60");

    // Text overlay container
    const textOverlay = screen.getByTestId("text-overlay");
    expect(textOverlay).toHaveClass(
      "absolute",
      "inset-0",
      "flex",
      "flex-col",
      "justify-center"
    );

    // Divider
    const divider = screen.getByRole("separator");
    expect(divider).toHaveClass("border-t", "border-blue-500");
  });
});
