// File: __tests__/components/ui/Form.test.tsx
// Tests for the Form components

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Test schema
const formSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

// Test form component
const TestForm = ({ onSubmit = jest.fn() }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        data-testid="test-form"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter email" type="email" {...field} />
              </FormControl>
              <FormDescription>Enter your email address.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </Form>
  );
};

describe("Form Component", () => {
  it("renders form with all its parts", () => {
    render(<TestForm />);

    // Check form elements are rendered
    expect(screen.getByTestId("test-form")).toBeInTheDocument();

    // Check username field
    expect(
      screen.getByRole("textbox", { name: /username/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
    expect(
      screen.getByText(/this is your public display name/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/enter your email address/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("handles form submission with valid data", async () => {
    const handleSubmit = jest.fn();
    const user = userEvent.setup();

    render(<TestForm onSubmit={handleSubmit} />);

    // Fill in form fields
    await user.type(
      screen.getByRole("textbox", { name: /username/i }),
      "testuser"
    );
    await user.type(
      screen.getByRole("textbox", { name: /email/i }),
      "test@example.com"
    );

    // Submit form
    await user.click(screen.getByRole("button", { name: /submit/i }));

    // Check if form was submitted with correct data
    expect(handleSubmit).toHaveBeenCalledWith(
      {
        username: "testuser",
        email: "test@example.com",
      },
      expect.anything()
    );
  });

  it("displays validation errors for invalid data", async () => {
    const handleSubmit = jest.fn();
    const user = userEvent.setup();

    render(<TestForm onSubmit={handleSubmit} />);

    // Submit form without filling in fields
    await user.click(screen.getByRole("button", { name: /submit/i }));

    // Check validation messages
    expect(
      screen.getByText(/username must be at least 2 characters/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
    expect(handleSubmit).not.toHaveBeenCalled();

    // Fill in invalid data
    await user.type(screen.getByRole("textbox", { name: /username/i }), "a");
    await user.type(
      screen.getByRole("textbox", { name: /email/i }),
      "invalid-email"
    );

    // Submit form again
    await user.click(screen.getByRole("button", { name: /submit/i }));

    // Check validation messages again
    expect(
      screen.getByText(/username must be at least 2 characters/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("updates form state correctly", async () => {
    const user = userEvent.setup();
    render(<TestForm />);

    const usernameInput = screen.getByRole("textbox", { name: /username/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });

    // Type in username
    await user.type(usernameInput, "testuser");
    expect(usernameInput).toHaveValue("testuser");

    // Type in email
    await user.type(emailInput, "test@example.com");
    expect(emailInput).toHaveValue("test@example.com");

    // Clear fields
    await user.clear(usernameInput);
    await user.clear(emailInput);
    expect(usernameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
  });

  it("applies correct styling to form elements", () => {
    render(<TestForm />);

    // Check form styling
    expect(screen.getByTestId("test-form")).toHaveClass("space-y-8");

    // Check input styling
    const inputs = screen.getAllByRole("textbox");
    inputs.forEach((input) => {
      expect(input).toHaveClass(
        "flex",
        "h-9",
        "w-full",
        "rounded-md",
        "border",
        "border-input",
        "bg-transparent",
        "px-3",
        "py-1",
        "text-base",
        "shadow-sm",
        "transition-colors",
        "focus-visible:outline-none",
        "focus-visible:ring-1",
        "focus-visible:ring-ring",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",
        "md:text-sm"
      );
    });

    // Check description styling
    const descriptions = [
      screen.getByText(/this is your public display name/i),
      screen.getByText(/enter your email address/i),
    ];
    descriptions.forEach((description) => {
      expect(description).toHaveClass("text-[0.8rem]", "text-muted-foreground");
    });
  });
});
