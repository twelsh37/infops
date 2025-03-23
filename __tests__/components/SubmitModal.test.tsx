// File: __tests__/components/SubmitModal.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SubmitModal from "@/app/components/SubmitModal";

describe("SubmitModal Component", () => {
  const mockOnClose = jest.fn();
  const mockOnConfirm = jest.fn();
  const defaultProps = {
    isOpen: true,
    onClose: mockOnClose,
    onConfirm: mockOnConfirm,
    title: "Test Article",
  };

  beforeEach(() => {
    mockOnClose.mockClear();
    mockOnConfirm.mockClear();
  });

  it("renders the modal when isOpen is true", () => {
    render(<SubmitModal {...defaultProps} />);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /confirm submission/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /are you sure you want to submit the article "test article"\?/i
      )
    ).toBeInTheDocument();
  });

  it("does not render the modal when isOpen is false", () => {
    render(<SubmitModal {...defaultProps} isOpen={false} />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("calls onClose when Cancel button is clicked", () => {
    render(<SubmitModal {...defaultProps} />);

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    fireEvent.click(cancelButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("calls onConfirm when Submit Article button is clicked", () => {
    render(<SubmitModal {...defaultProps} />);

    const submitButton = screen.getByRole("button", {
      name: /submit article/i,
    });
    fireEvent.click(submitButton);

    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });

  it("displays the correct article title", () => {
    const customTitle = "Custom Article Title";
    render(<SubmitModal {...defaultProps} title={customTitle} />);

    expect(
      screen.getByText(
        new RegExp(
          `are you sure you want to submit the article "${customTitle}"\\?`,
          "i"
        )
      )
    ).toBeInTheDocument();
  });

  it("has the correct button styling", () => {
    render(<SubmitModal {...defaultProps} />);

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    const submitButton = screen.getByRole("button", {
      name: /submit article/i,
    });

    // Cancel button should have border and background styling
    expect(cancelButton).toHaveClass("border", "border-input", "bg-background");

    // Submit button should have primary styling
    expect(submitButton).toHaveClass("bg-primary", "text-primary-foreground");
  });

  it("has the correct dialog content styling", () => {
    render(<SubmitModal {...defaultProps} />);

    const dialogContent = screen.getByRole("dialog");
    expect(dialogContent).toHaveClass("sm:max-w-md");
  });
});
