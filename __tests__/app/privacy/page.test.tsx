import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Privacy from "@/app/privacy/page";

// Mock console.error to prevent React warnings from cluttering test output
const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = originalError;
});

describe("Privacy Policy Page", () => {
  it("renders the page title and introduction", () => {
    render(<Privacy />);

    expect(
      screen.getByRole("heading", { name: /privacy policy/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /at the company limited, we take your privacy seriously/i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/last updated:/i)).toBeInTheDocument();
  });

  it("renders all privacy policy sections", () => {
    render(<Privacy />);

    // Test each section button individually using more flexible regex patterns
    expect(
      screen.getByRole("button", {
        name: /^what information are we collecting and how are we collecting it\?$/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /^how we use your information$/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /^who may we disclose your information to\?$/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /^what rights do you have\?$/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /^how we protect your information$/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /^why we collect your information$/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /^how we protect your information in data transfers$/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /^how you can protect your information$/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /^how long we hold your information$/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /^cookies and our cookie policy$/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /^what to do if you have a complaint$/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /^changes to our privacy policy$/i })
    ).toBeInTheDocument();
  });

  it("toggles section content when clicked", async () => {
    render(<Privacy />);

    // Get the first section
    const firstSectionButton = screen.getByRole("button", {
      name: /what information are we collecting/i,
    });

    // Initially, content should be hidden
    expect(
      screen.queryByText(/we will collect and process/i)
    ).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(firstSectionButton);

    // Wait for content to be visible
    await waitFor(() => {
      expect(
        screen.getByText(/we will collect and process/i)
      ).toBeInTheDocument();
    });

    // Click to close
    fireEvent.click(firstSectionButton);

    // Wait for content to be hidden
    await waitFor(() => {
      expect(
        screen.queryByText(/we will collect and process/i)
      ).not.toBeInTheDocument();
    });
  });

  it("shows only one section at a time", async () => {
    render(<Privacy />);

    // Open first section
    const firstSectionButton = screen.getByRole("button", {
      name: /what information are we collecting/i,
    });
    fireEvent.click(firstSectionButton);

    // Wait for first section content to be visible
    await waitFor(() => {
      expect(
        screen.getByText(/we will collect and process/i)
      ).toBeInTheDocument();
    });

    // Open second section
    const secondSectionButton = screen.getByRole("button", {
      name: /how we use your information/i,
    });
    fireEvent.click(secondSectionButton);

    // Wait for first section to be closed and second section to be open
    await waitFor(() => {
      expect(
        screen.queryByText(/we will collect and process/i)
      ).not.toBeInTheDocument();
      expect(
        screen.getByText(/we may use your personal information/i)
      ).toBeInTheDocument();
    });
  });

  it("displays the correct icons for expanded/collapsed sections", async () => {
    render(<Privacy />);

    const firstSectionButton = screen.getByRole("button", {
      name: /what information are we collecting/i,
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
    render(<Privacy />);

    const section = screen.getByRole("button", {
      name: /what information are we collecting/i,
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
    render(<Privacy />);

    expect(screen.getByText(/contact@company\.com/i)).toBeInTheDocument();
  });
});
