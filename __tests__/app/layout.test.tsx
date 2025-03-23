import React from "react";
import { render, screen } from "@testing-library/react";
import RootLayout from "../../app/layout";

// Mock the required components and modules
jest.mock("@clerk/nextjs", () => ({
  ClerkProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

jest.mock("next/font/google", () => ({
  Inter: () => ({ className: "mock-inter" }),
  Geist: () => ({ variable: "mock-geist-sans" }),
  Geist_Mono: () => ({ variable: "mock-geist-mono" }),
}));

jest.mock("../../app/components/Navbar", () => {
  return function MockNavbar() {
    return <div>Navbar</div>;
  };
});

jest.mock("../../app/components/FooterSection", () => {
  return function MockFooter() {
    return <div>Footer</div>;
  };
});

jest.mock("sonner", () => ({
  Toaster: () => <div>Toaster</div>,
}));

describe("RootLayout", () => {
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it("renders the layout with all components", () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    // Check if all components are rendered
    expect(screen.getByText("Navbar")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
    expect(screen.getByText("Toaster")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies correct classes to html and body elements", () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    // Check html element classes
    const html = document.documentElement;
    expect(html).toHaveClass(
      "w-full",
      "h-full",
      "mock-geist-sans",
      "mock-geist-mono"
    );

    // Check body element classes
    const body = document.body;
    expect(body).toHaveClass(
      "mock-inter",
      "min-h-screen",
      "w-full",
      "relative"
    );
  });

  it("sets correct language attribute", () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    const html = document.documentElement;
    expect(html).toHaveAttribute("lang", "en");
  });

  it("renders children content", () => {
    const testContent = <div>Child Content</div>;
    render(<RootLayout>{testContent}</RootLayout>);

    expect(screen.getByText("Child Content")).toBeInTheDocument();
  });
});
