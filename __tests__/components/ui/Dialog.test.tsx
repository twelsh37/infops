import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogPortal,
  DialogOverlay,
  DialogClose,
} from "@/components/ui/dialog";

describe("Dialog Component", () => {
  it("renders dialog with all its parts", async () => {
    const user = userEvent.setup();
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
          <div>Content</div>
          <DialogFooter>Footer</DialogFooter>
        </DialogContent>
      </Dialog>
    );

    // Check trigger is rendered
    const trigger = screen.getByRole("button", { name: /open dialog/i });
    expect(trigger).toBeInTheDocument();

    // Open dialog
    await user.click(trigger);

    // Check dialog content is rendered
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();

    // Check all parts are rendered
    expect(screen.getByRole("heading", { name: /title/i })).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("renders with custom classes", async () => {
    const user = userEvent.setup();
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent className="custom-content">
          <DialogHeader className="custom-header">
            <DialogTitle className="custom-title">Title</DialogTitle>
            <DialogDescription className="custom-description">
              Description
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="custom-footer">Footer</DialogFooter>
        </DialogContent>
      </Dialog>
    );

    // Open dialog first
    await user.click(screen.getByRole("button", { name: /open dialog/i }));

    // Check content class
    const content = screen.getByRole("dialog");
    expect(content).toHaveClass("custom-content");

    // Check header class
    const header = screen
      .getByRole("heading", { name: /title/i })
      .closest("div");
    expect(header).toHaveClass("custom-header");

    // Check title class
    const title = screen.getByRole("heading", { name: /title/i });
    expect(title).toHaveClass("custom-title");

    // Check description class
    const description = screen.getByText("Description");
    expect(description).toHaveClass("custom-description");

    // Check footer class - using a more reliable selector
    const footer = screen.getByText("Footer").closest("div.custom-footer");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass("custom-footer");
  });

  it("handles close button click", async () => {
    const user = userEvent.setup();
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Test Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );

    // Open dialog
    await user.click(screen.getByRole("button", { name: /open/i }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    // Close dialog using the close button
    const closeButton = screen.getByRole("button", { name: /close/i });
    await user.click(closeButton);

    // Dialog should no longer be in the document
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders close button with sr-only text", async () => {
    const user = userEvent.setup();
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Test Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );

    // Open dialog first
    await user.click(screen.getByRole("button", { name: /open/i }));

    // Find close button and check for sr-only text
    const closeButton = screen.getByRole("button", { name: /close/i });
    expect(closeButton).toBeInTheDocument();

    // Find the sr-only element within the close button
    const srOnlyText = closeButton.querySelector(".sr-only");
    expect(srOnlyText).toBeInTheDocument();
    expect(srOnlyText).toHaveTextContent(/close/i);
  });

  it("renders with custom portal and overlay", async () => {
    const user = userEvent.setup();
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogPortal>
          <DialogOverlay className="custom-overlay" />
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    );

    // Open dialog
    await user.click(screen.getByRole("button", { name: /open/i }));

    // Check overlay is rendered with custom class
    const overlay = document.querySelector(".custom-overlay");
    expect(overlay).toBeInTheDocument();
  });

  it("handles custom close button", async () => {
    const user = userEvent.setup();
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
          <DialogClose className="custom-close">Custom Close</DialogClose>
        </DialogContent>
      </Dialog>
    );

    // Open dialog
    await user.click(screen.getByRole("button", { name: /open/i }));

    // Find and click custom close button
    const closeButton = screen.getByRole("button", { name: /custom close/i });
    expect(closeButton).toHaveClass("custom-close");
    await user.click(closeButton);

    // Dialog should be closed
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
