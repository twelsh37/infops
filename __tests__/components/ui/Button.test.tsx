// File: __tests__/components/ui/Button.test.tsx
// Tests for the Button component

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/ui/button";

describe("Button Component", () => {
  it("renders with default variant and size", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "inline-flex",
      "items-center",
      "justify-center",
      "gap-2",
      "whitespace-nowrap",
      "rounded-md",
      "text-sm",
      "font-medium",
      "transition-colors",
      "focus-visible:outline-none",
      "focus-visible:ring-1",
      "focus-visible:ring-ring",
      "disabled:pointer-events-none",
      "disabled:opacity-50",
      "[&_svg]:pointer-events-none",
      "[&_svg]:size-4",
      "[&_svg]:shrink-0",
      "bg-primary",
      "text-primary-foreground",
      "shadow",
      "hover:bg-primary/90",
      "h-9",
      "px-4",
      "py-2"
    );
  });

  it("renders with different variants", () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>);
    let button = screen.getByRole("button", { name: /secondary/i });
    expect(button).toHaveClass(
      "bg-secondary",
      "text-secondary-foreground",
      "hover:bg-secondary/80"
    );

    rerender(<Button variant="destructive">Destructive</Button>);
    button = screen.getByRole("button", { name: /destructive/i });
    expect(button).toHaveClass(
      "bg-destructive",
      "text-destructive-foreground",
      "hover:bg-destructive/90"
    );

    rerender(<Button variant="outline">Outline</Button>);
    button = screen.getByRole("button", { name: /outline/i });
    expect(button).toHaveClass(
      "border",
      "border-input",
      "bg-background",
      "hover:bg-accent",
      "hover:text-accent-foreground"
    );

    rerender(<Button variant="ghost">Ghost</Button>);
    button = screen.getByRole("button", { name: /ghost/i });
    expect(button).toHaveClass(
      "hover:bg-accent",
      "hover:text-accent-foreground"
    );

    rerender(<Button variant="link">Link</Button>);
    button = screen.getByRole("button", { name: /link/i });
    expect(button).toHaveClass(
      "text-primary",
      "underline-offset-4",
      "hover:underline"
    );
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<Button size="default">Default</Button>);
    let button = screen.getByRole("button", { name: /default/i });
    expect(button).toHaveClass("h-9", "px-4", "py-2");

    rerender(<Button size="sm">Small</Button>);
    button = screen.getByRole("button", { name: /small/i });
    expect(button).toHaveClass("h-8", "rounded-md", "px-3");

    rerender(<Button size="lg">Large</Button>);
    button = screen.getByRole("button", { name: /large/i });
    expect(button).toHaveClass("h-10", "rounded-md", "px-8");

    rerender(<Button size="icon">Icon</Button>);
    button = screen.getByRole("button", { name: /icon/i });
    expect(button).toHaveClass("h-9", "w-9");
  });

  it("handles disabled state", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button", { name: /disabled/i });

    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      "disabled:pointer-events-none",
      "disabled:opacity-50"
    );
  });

  it("handles click events", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref Button</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("accepts custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole("button", { name: /custom/i });

    expect(button).toHaveClass("custom-class");
  });

  it("renders with asChild prop", () => {
    render(
      <Button asChild>
        <a href="#">Link Button</a>
      </Button>
    );

    const link = screen.getByRole("link", { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#");
    expect(link).toHaveClass(
      "inline-flex",
      "items-center",
      "justify-center",
      "whitespace-nowrap",
      "rounded-md",
      "text-sm",
      "font-medium"
    );
  });
});
