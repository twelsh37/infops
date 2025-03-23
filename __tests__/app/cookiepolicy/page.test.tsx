// File: __tests__/app/cookiepolicy/page.test.tsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CookiePolicy from "@/app/cookiepolicy/page";

// Mock console.error to prevent React warnings from cluttering test output
const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = originalError;
});

describe("CookiePolicy Page", () => {
  it("renders the page title and introduction", () => {
    render(<CookiePolicy />);

    expect(
      screen.getByRole("heading", { name: /cookie policy/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/this cookie policy explains how the company/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/last updated:/i)).toBeInTheDocument();
  });

  it("renders all cookie policy sections", () => {
    render(<CookiePolicy />);

    // Test each section button individually
    expect(
      screen.getByRole("button", { name: /what are cookies\?/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /how we use cookies/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /managing your preferences/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /browser-level control/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /information we collect/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /how we use this data/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /under gdpr/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /under ccpa/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /contact us/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /changes and updates/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /additional information/i })
    ).toBeInTheDocument();
  });

  it("toggles section content when clicked", async () => {
    render(<CookiePolicy />);

    // Get the first section
    const firstSectionButton = screen.getByRole("button", {
      name: /what are cookies\?/i,
    });

    // Initially, content should be hidden
    expect(
      screen.queryByText(/cookies are small text files/i)
    ).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(firstSectionButton);

    // Wait for content to be visible
    await waitFor(() => {
      expect(
        screen.getByText(/cookies are small text files/i)
      ).toBeInTheDocument();
    });

    // Click to close
    fireEvent.click(firstSectionButton);

    // Wait for content to be hidden
    await waitFor(() => {
      expect(
        screen.queryByText(/cookies are small text files/i)
      ).not.toBeInTheDocument();
    });
  });

  it("shows only one section at a time", async () => {
    render(<CookiePolicy />);

    // Open first section
    const firstSectionButton = screen.getByRole("button", {
      name: /what are cookies\?/i,
    });
    fireEvent.click(firstSectionButton);

    // Wait for first section content to be visible
    await waitFor(() => {
      expect(
        screen.getByText(/cookies are small text files/i)
      ).toBeInTheDocument();
    });

    // Open second section
    const secondSectionButton = screen.getByRole("button", {
      name: /how we use cookies/i,
    });
    fireEvent.click(secondSectionButton);

    // Wait for first section to be closed and second section to be open
    await waitFor(() => {
      expect(
        screen.queryByText(/cookies are small text files/i)
      ).not.toBeInTheDocument();
      expect(
        screen.getByText(/we use different types of cookies/i)
      ).toBeInTheDocument();
    });
  });

  it("displays the correct icons for expanded/collapsed sections", async () => {
    render(<CookiePolicy />);

    const firstSectionButton = screen.getByRole("button", {
      name: /what are cookies\?/i,
    });

    // Initially should show Plus icon
    const initialPlusIcon = firstSectionButton.querySelector(
      'svg[stroke="currentColor"]'
    );
    expect(initialPlusIcon).toBeInTheDocument();
    expect(
      initialPlusIcon?.querySelector('path[d="M12 5v14"]')
    ).toBeInTheDocument();

    // Click to expand
    fireEvent.click(firstSectionButton);

    // Wait for minus icon to appear
    await waitFor(() => {
      const minusIcon = firstSectionButton.querySelector(
        'svg[stroke="currentColor"]'
      );
      expect(minusIcon).toBeInTheDocument();
      expect(
        minusIcon?.querySelector('path[d="M12 5v14"]')
      ).not.toBeInTheDocument();
    });

    // Click to collapse
    fireEvent.click(firstSectionButton);

    // Wait for plus icon to appear again
    await waitFor(() => {
      const plusIconAgain = firstSectionButton.querySelector(
        'svg[stroke="currentColor"]'
      );
      expect(plusIconAgain).toBeInTheDocument();
      expect(
        plusIconAgain?.querySelector('path[d="M12 5v14"]')
      ).toBeInTheDocument();
    });
  });

  it("has the correct styling for sections", () => {
    render(<CookiePolicy />);

    const section = screen.getByRole("button", {
      name: /what are cookies\?/i,
    }).parentElement;

    expect(section).toHaveClass(
      "mb-4",
      "border",
      "rounded-lg",
      "overflow-hidden",
      "transition-shadow",
      "duration-300",
      "hover:shadow-lg",
      "hover:shadow-[#FFB800]/90",
      "bg-[#FFB800]"
    );
  });

  it("displays contact information", () => {
    render(<CookiePolicy />);

    expect(screen.getByText(/contact\.us@company\.com/i)).toBeInTheDocument();
  });
});
