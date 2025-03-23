import React from "react";
import { render, screen } from "@testing-library/react";
import { Label } from "@/components/ui/label";

describe("Label Component", () => {
  it("renders with default styles", () => {
    render(<Label>Test Label</Label>);
    const label = screen.getByText("Test Label");

    expect(label).toBeInTheDocument();
    expect(label).toHaveClass(
      "text-sm",
      "font-medium",
      "leading-none",
      "peer-disabled:cursor-not-allowed",
      "peer-disabled:opacity-70"
    );
  });

  it("accepts custom className", () => {
    render(<Label className="custom-class">Test Label</Label>);
    const label = screen.getByText("Test Label");

    expect(label).toHaveClass("custom-class");
    expect(label).toHaveClass("text-sm", "font-medium"); // Default classes should still be present
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLLabelElement>();
    render(<Label ref={ref}>Test Label</Label>);

    expect(ref.current).toBeInstanceOf(HTMLLabelElement);
  });

  it("handles htmlFor prop", () => {
    render(<Label htmlFor="test-input">Test Label</Label>);
    const label = screen.getByText("Test Label");

    expect(label).toHaveAttribute("for", "test-input");
  });

  it("renders with children", () => {
    render(
      <Label>
        <span>Child Element</span>
      </Label>
    );

    expect(screen.getByText("Child Element")).toBeInTheDocument();
  });

  it("handles disabled state through peer classes", () => {
    render(<Label>Test Label</Label>);
    const label = screen.getByText("Test Label");

    expect(label).toHaveClass(
      "peer-disabled:cursor-not-allowed",
      "peer-disabled:opacity-70"
    );
  });
});
