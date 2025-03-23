import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Terms from "@/app/terms/page";

// Mock console.error to prevent React warnings from cluttering test output
const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = originalError;
});

// Mock window.getComputedStyle
beforeEach(() => {
  window.getComputedStyle = jest.fn().mockReturnValue({
    getPropertyValue: jest.fn(),
  });
});

describe("Terms and Conditions Page", () => {
  it("renders the page title", () => {
    render(<Terms />);
    expect(
      screen.getByRole("heading", { name: /terms and conditions/i })
    ).toBeInTheDocument();
  });

  it("renders all terms sections", () => {
    render(<Terms />);

    // Test each section button individually using exact regex patterns
    const sections = [
      "1\\. Definitions and Interpretation",
      "2\\. Basis of Contract",
      "3\\. Provision of the Services and Service Provider(?:'|'|&apos;)s Obligations",
      "4\\. Client(?:'|'|&apos;)s Obligations",
      "5\\. Fees, Payment, and Records",
      "6\\. Intellectual Property Rights",
      "7\\. Confidentiality",
      "8\\. Health and Safety",
      "9\\. Limitation of Liability",
      "10\\. Data Protection",
      "11\\. Force Majeure",
    ];

    sections.forEach((section) => {
      const button = screen.getByRole("button", {
        name: new RegExp(section, "i"),
      });
      expect(button).toBeInTheDocument();
    });
  });

  it("toggles section content when clicked", async () => {
    render(<Terms />);

    // Get the first section using button role
    const firstSectionButton = screen.getByRole("button", {
      name: /1\. definitions and interpretation/i,
    });

    // Initially, content should be hidden
    expect(
      screen.queryByText(/in these terms and conditions, unless the context/i)
    ).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(firstSectionButton);

    // Wait for content to be visible
    await waitFor(() => {
      expect(
        screen.getByText(/in these terms and conditions, unless the context/i)
      ).toBeInTheDocument();
    });

    // Click to close
    fireEvent.click(firstSectionButton);

    // Wait for content to be hidden
    await waitFor(() => {
      expect(
        screen.queryByText(/in these terms and conditions, unless the context/i)
      ).not.toBeInTheDocument();
    });
  });

  it("shows only one section at a time", async () => {
    render(<Terms />);

    // Open first section using button role
    const firstSectionButton = screen.getByRole("button", {
      name: /1\. definitions and interpretation/i,
    });
    fireEvent.click(firstSectionButton);

    // Wait for first section content to be visible
    await waitFor(() => {
      expect(
        screen.getByText(/in these terms and conditions, unless the context/i)
      ).toBeInTheDocument();
    });

    // Open second section using button role
    const secondSectionButton = screen.getByRole("button", {
      name: /2\. basis of contract/i,
    });
    fireEvent.click(secondSectionButton);

    // Wait for first section to be closed and second section to be open
    await waitFor(() => {
      expect(
        screen.queryByText(/in these terms and conditions, unless the context/i)
      ).not.toBeInTheDocument();
      expect(
        screen.getByText(/an order shall constitute a contractual offer/i)
      ).toBeInTheDocument();
    });
  });

  it("displays the correct icons for expanded/collapsed sections", async () => {
    render(<Terms />);

    const firstSectionButton = screen.getByRole("button", {
      name: /1\. definitions and interpretation/i,
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
    render(<Terms />);

    const button = screen.getByRole("button", {
      name: /1\. definitions and interpretation/i,
    });
    const section = button.closest("div");
    expect(section).not.toBeNull();

    if (section) {
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
    }
  });

  it("displays definitions table in first section", async () => {
    render(<Terms />);

    // Open first section using button role
    const firstSectionButton = screen.getByRole("button", {
      name: /1\. definitions and interpretation/i,
    });
    fireEvent.click(firstSectionButton);

    // Wait for table to be visible and verify its contents
    await waitFor(() => {
      // Check table structure
      const table = screen.getByRole("table");
      expect(table).toBeInTheDocument();

      // Check table headers
      const headers = screen.getAllByRole("columnheader");
      expect(headers).toHaveLength(2);
      expect(headers[0]).toHaveTextContent(/expression/i);
      expect(headers[1]).toHaveTextContent(/meaning/i);

      // Check table cells
      const cells = screen.getAllByRole("cell");
      expect(cells.length).toBeGreaterThan(0);

      // Check specific definitions
      const applicableLawsCell = screen.getByRole("cell", {
        name: /applicable laws/i,
      });
      expect(applicableLawsCell).toBeInTheDocument();

      const businessDayCell = screen.getByRole("cell", {
        name: /business day/i,
      });
      expect(businessDayCell).toBeInTheDocument();
    });
  });
});
