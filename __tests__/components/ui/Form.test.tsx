// File: __tests__/components/ui/Form.test.tsx
// Tests for the Form components

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Test schema and type
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;

// Test form component with onSubmit handler
interface TestFormProps {
  onSubmit?: (data: FormData) => void;
}

const TestForm = ({ onSubmit = () => {} }: TestFormProps) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
    mode: "onBlur", // Enable validation on blur
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} data-testid="test-form">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Enter your username</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </Form>
  );
};

describe("Form Components", () => {
  it("renders all form components correctly", () => {
    render(<TestForm />);

    const input = screen.getByRole("textbox", { name: /username/i });
    expect(input).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByText(/enter your username/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("applies correct styling to form components", () => {
    render(<TestForm />);

    const label = screen.getByText(/username/i);
    const description = screen.getByText(/enter your username/i);

    expect(label).toHaveClass("text-sm", "font-medium");
    expect(description).toHaveClass("text-[0.8rem]", "text-muted-foreground");
  });

  it("shows validation error when input is too short", async () => {
    const user = userEvent.setup();
    render(<TestForm />);

    const input = screen.getByRole("textbox", { name: /username/i });

    // Type a single character and blur the field
    await user.type(input, "a");
    await user.tab(); // Move focus away to trigger blur validation

    // Wait for the error message to appear
    await waitFor(() => {
      expect(
        screen.getByText(/username must be at least 2 characters/i)
      ).toBeInTheDocument();
    });
  });

  it("clears validation error when input becomes valid", async () => {
    const user = userEvent.setup();
    render(<TestForm />);

    const input = screen.getByRole("textbox", { name: /username/i });

    // First trigger the error
    await user.type(input, "a");
    await user.tab();

    // Wait for error to appear
    await waitFor(() => {
      expect(
        screen.getByText(/username must be at least 2 characters/i)
      ).toBeInTheDocument();
    });

    // Now fix the input
    await user.type(input, "bc"); // Now "abc"
    await user.tab();

    // Wait for error to disappear
    await waitFor(() => {
      expect(
        screen.queryByText(/username must be at least 2 characters/i)
      ).not.toBeInTheDocument();
    });
  });

  it("updates form state on input change", async () => {
    const user = userEvent.setup();
    render(<TestForm />);

    const input = screen.getByRole("textbox", { name: /username/i });
    await user.type(input, "testuser");

    expect(input).toHaveValue("testuser");
  });

  it("handles successful form submission with valid data", async () => {
    const user = userEvent.setup();
    const onSubmit = jest.fn();
    render(<TestForm onSubmit={onSubmit} />);

    const input = screen.getByRole("textbox", { name: /username/i });
    const submitButton = screen.getByRole("button", { name: /submit/i });

    // Type valid input
    await user.type(input, "testuser");
    await user.click(submitButton);

    // Wait for form submission
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        { username: "testuser" },
        expect.anything()
      );
    });
  });

  it("prevents form submission with invalid data", async () => {
    const user = userEvent.setup();
    const onSubmit = jest.fn();
    render(<TestForm onSubmit={onSubmit} />);

    const input = screen.getByRole("textbox", { name: /username/i });
    const submitButton = screen.getByRole("button", { name: /submit/i });

    // Type invalid input
    await user.type(input, "a");
    await user.click(submitButton);

    // Form should not be submitted
    await waitFor(() => {
      expect(onSubmit).not.toHaveBeenCalled();
      expect(
        screen.getByText(/username must be at least 2 characters/i)
      ).toBeInTheDocument();
    });
  });
});
