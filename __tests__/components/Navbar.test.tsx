// File: __tests__/components/Navbar.test.tsx
// Tests for the Navbar component

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/app/components/Navbar";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/"),
}));

// Mock next/link
jest.mock("next/link", () => {
  const NextLink = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>;
  NextLink.displayName = "NextLink";
  return NextLink;
});

// Mock @clerk/nextjs
jest.mock("@clerk/nextjs", () => ({
  SignInButton: ({ children }: { children: React.ReactNode }) => {
    const SignInBtn = () => <div data-testid="sign-in-button">{children}</div>;
    SignInBtn.displayName = "SignInButton";
    return SignInBtn();
  },
  SignedIn: ({ children }: { children: React.ReactNode }) => {
    const SignedInComp = () => <div data-testid="signed-in">{children}</div>;
    SignedInComp.displayName = "SignedIn";
    return SignedInComp();
  },
  SignedOut: ({ children }: { children: React.ReactNode }) => {
    const SignedOutComp = () => <div data-testid="signed-out">{children}</div>;
    SignedOutComp.displayName = "SignedOut";
    return SignedOutComp();
  },
  UserButton: () => {
    const UserBtn = () => <div data-testid="user-button">User Button</div>;
    UserBtn.displayName = "UserButton";
    return UserBtn();
  },
}));

describe("Navbar Component", () => {
  const mockScrollIntoView = jest.fn();

  beforeEach(() => {
    // Mock scrollIntoView
    Element.prototype.scrollIntoView = mockScrollIntoView;
    // Mock getElementById
    document.getElementById = jest.fn().mockImplementation(() => ({
      scrollIntoView: mockScrollIntoView,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByRole("button", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /articles/i })).toBeInTheDocument();
  });

  it("applies correct styling based on path", () => {
    render(<Navbar />);
    const nav = screen.getByRole("navigation", { hidden: true });
    expect(nav).toHaveClass(
      "w-full",
      "transition-all",
      "duration-300",
      "shadow-md",
      "bg-black/100",
      "text-white",
      "backdrop-blur-[2px]"
    );
  });

  it("scrolls to section when home/about buttons are clicked", () => {
    render(<Navbar />);

    fireEvent.click(screen.getByRole("button", { name: /home/i }));
    expect(document.getElementById).toHaveBeenCalledWith("home");
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });

    fireEvent.click(screen.getByRole("button", { name: /about/i }));
    expect(document.getElementById).toHaveBeenCalledWith("about");
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("renders authentication components", () => {
    render(<Navbar />);
    expect(screen.getByTestId("signed-out")).toBeInTheDocument();
    expect(screen.getByTestId("sign-in-button")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign in/i })
    ).toBeInTheDocument();
  });

  it("renders Story link only when signed in", () => {
    render(<Navbar />);
    const signedInSections = screen.getAllByTestId("signed-in");
    const storySection = signedInSections.find((section) =>
      section.textContent?.includes("Story")
    );
    expect(storySection).toBeTruthy();
    expect(storySection).toContainHTML("Story");
  });

  it("redirects to home page section when not on home page", () => {
    // Mock usePathname to return a different path
    const usePathname = jest.requireMock("next/navigation").usePathname;
    (usePathname as jest.Mock).mockReturnValue("/articles");

    render(<Navbar />);

    // Save original window.location
    const originalLocation = window.location;

    // Mock window.location
    const mockLocation = { href: "" };
    Object.defineProperty(window, "location", {
      writable: true,
      value: mockLocation,
    });

    fireEvent.click(screen.getByRole("button", { name: /home/i }));
    expect(window.location.href).toBe("/#home");

    fireEvent.click(screen.getByRole("button", { name: /about/i }));
    expect(window.location.href).toBe("/#about");

    // Restore window.location
    Object.defineProperty(window, "location", {
      writable: true,
      value: originalLocation,
    });

    // Reset the mock
    (usePathname as jest.Mock).mockReturnValue("/");
  });
});
