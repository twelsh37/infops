// File: __tests__/components/ui/Input.test.tsx
// Tests for the Input component

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "@/components/ui/input";

describe("Input Component", () => {
  it("renders with default props", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("flex", "h-9", "w-full", "rounded-md");
  });

  it("accepts different types", () => {
    const { rerender } = render(<Input />);
    let input = screen.getByRole("textbox");
    expect(input).not.toHaveAttribute("type");

    rerender(<Input type="password" />);
    input = screen.getByDisplayValue("");
    expect(input).toHaveAttribute("type", "password");

    rerender(<Input type="email" />);
    input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "email");
  });

  it("handles user input", async () => {
    const user = userEvent.setup();
    render(<Input />);
    const input = screen.getByRole("textbox");

    await user.type(input, "Hello, World!");
    expect(input).toHaveValue("Hello, World!");
  });

  it("can be disabled", () => {
    render(<Input disabled />);
    const input = screen.getByRole("textbox");

    expect(input).toBeDisabled();
    expect(input).toHaveClass(
      "disabled:cursor-not-allowed",
      "disabled:opacity-50"
    );
  });

  it("accepts custom className and preserves default classes", () => {
    render(<Input className="custom-class" />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveClass("custom-class");
    expect(input).toHaveClass("flex", "h-9", "w-full");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("handles placeholder text", () => {
    render(<Input placeholder="Enter your name" />);
    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Enter your name");
  });

  it("handles onChange events", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);

    const input = screen.getByRole("textbox");
    await user.type(input, "a");

    expect(handleChange).toHaveBeenCalled();
  });

  it("forwards additional props", () => {
    render(<Input placeholder="Enter text" data-testid="test-input" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("placeholder", "Enter text");
    expect(input).toHaveAttribute("data-testid", "test-input");
  });
});
