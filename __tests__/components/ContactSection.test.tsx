// File: __tests__/components/ContactSection.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactSection from "@/app/components/ContactSection";

describe("ContactSection Component", () => {
  const testId = "test-contact-section";

  beforeEach(() => {
    render(<ContactSection id={testId} />);
  });

  it("renders with correct id and structure", () => {
    const section = document.querySelector(`section[id="${testId}"]`);
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass("py-10", "bg-gray-100");
  });

  it("renders the heading", () => {
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Contact");
    expect(heading).toHaveClass(
      "text-2xl",
      "font-bold",
      "mb-4",
      "sm:text-3xl",
      "text-center"
    );
  });

  it("renders the form with all inputs", () => {
    // Form
    const form = screen.getByRole("form");
    expect(form).toHaveClass("max-w-md", "mx-auto");

    // Name input
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    expect(nameInput).toHaveAttribute("type", "text");
    expect(nameInput).toHaveAttribute("id", "name");
    expect(nameInput).toHaveAttribute("placeholder", "Your Name");
    expect(nameInput).toHaveClass(
      "shadow",
      "appearance-none",
      "border",
      "rounded",
      "w-full",
      "py-2",
      "px-3",
      "text-gray-700",
      "leading-tight",
      "focus:outline-none",
      "focus:shadow-outline"
    );

    // Email input
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("id", "email");
    expect(emailInput).toHaveAttribute("placeholder", "Your Email");
    expect(emailInput).toHaveClass(
      "shadow",
      "appearance-none",
      "border",
      "rounded",
      "w-full",
      "py-2",
      "px-3",
      "text-gray-700",
      "leading-tight",
      "focus:outline-none",
      "focus:shadow-outline"
    );

    // Message textarea
    const messageInput = screen.getByRole("textbox", { name: /message/i });
    expect(messageInput).toHaveAttribute("id", "message");
    expect(messageInput).toHaveAttribute("placeholder", "Your Message");
    expect(messageInput).toHaveAttribute("rows", "4");
    expect(messageInput).toHaveClass(
      "shadow",
      "appearance-none",
      "border",
      "rounded",
      "w-full",
      "py-2",
      "px-3",
      "text-gray-700",
      "leading-tight",
      "focus:outline-none",
      "focus:shadow-outline"
    );
  });

  it("renders the submit button", () => {
    const button = screen.getByRole("button", { name: /send/i });
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveClass(
      "bg-blue-500",
      "hover:bg-blue-700",
      "text-white",
      "font-bold",
      "py-2",
      "px-4",
      "rounded",
      "focus:outline-none",
      "focus:shadow-outline"
    );
  });

  it("allows typing in all inputs", async () => {
    const user = userEvent.setup();

    // Name input
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    await user.type(nameInput, "John Doe");
    expect(nameInput).toHaveValue("John Doe");

    // Email input
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    await user.type(emailInput, "john@example.com");
    expect(emailInput).toHaveValue("john@example.com");

    // Message textarea
    const messageInput = screen.getByRole("textbox", { name: /message/i });
    await user.type(messageInput, "Hello, this is a test message");
    expect(messageInput).toHaveValue("Hello, this is a test message");
  });
});
