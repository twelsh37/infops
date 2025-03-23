import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Textarea } from "@/components/ui/textarea";

describe("Textarea Component", () => {
  it("renders with default styles", () => {
    render(<Textarea aria-label="test-textarea" />);
    const textarea = screen.getByRole("textbox", { name: "test-textarea" });

    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveClass(
      "flex",
      "min-h-[60px]",
      "w-full",
      "rounded-md",
      "border",
      "border-input",
      "bg-transparent",
      "px-3",
      "py-2",
      "text-base",
      "shadow-sm",
      "placeholder:text-muted-foreground",
      "focus-visible:outline-none",
      "focus-visible:ring-1",
      "focus-visible:ring-ring",
      "disabled:cursor-not-allowed",
      "disabled:opacity-50",
      "md:text-sm"
    );
  });

  it("accepts custom className", () => {
    render(<Textarea className="custom-class" aria-label="test-textarea" />);
    const textarea = screen.getByRole("textbox", { name: "test-textarea" });

    expect(textarea).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLTextAreaElement>();
    render(<Textarea ref={ref} aria-label="test-textarea" />);

    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it("handles user input", () => {
    render(<Textarea aria-label="test-textarea" />);
    const textarea = screen.getByRole("textbox", { name: "test-textarea" });

    fireEvent.change(textarea, { target: { value: "Test input" } });
    expect(textarea).toHaveValue("Test input");
  });

  it("handles disabled state", () => {
    render(<Textarea disabled aria-label="test-textarea" />);
    const textarea = screen.getByRole("textbox", { name: "test-textarea" });

    expect(textarea).toBeDisabled();
    expect(textarea).toHaveClass(
      "disabled:cursor-not-allowed",
      "disabled:opacity-50"
    );
  });

  it("handles placeholder text", () => {
    render(
      <Textarea placeholder="Enter text here" aria-label="test-textarea" />
    );
    const textarea = screen.getByRole("textbox", { name: "test-textarea" });

    expect(textarea).toHaveAttribute("placeholder", "Enter text here");
  });

  it("handles rows prop", () => {
    render(<Textarea rows={5} aria-label="test-textarea" />);
    const textarea = screen.getByRole("textbox", { name: "test-textarea" });

    expect(textarea).toHaveAttribute("rows", "5");
  });

  it("handles required prop", () => {
    render(<Textarea required aria-label="test-textarea" />);
    const textarea = screen.getByRole("textbox", { name: "test-textarea" });

    expect(textarea).toBeRequired();
  });
});
