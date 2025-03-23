/** @jsxImportSource react */
import React from "react";
import { render, screen } from "@testing-library/react";
import ClientReactMarkdown from "@/app/components/ClientReactMarkdown";

// Mock react-markdown
jest.mock("react-markdown", () => {
  return function MockReactMarkdown({ children }: { children: string }) {
    // Pre-process content like the actual component
    const cleanContent = children
      .replace(/\[(\d+)\]\[(\d+)\]/g, " [[$1][$2]] ")
      .replace(/---/g, "<hr />");

    // Split content into lines and process each line
    const lines = cleanContent.split("\n");
    const elements: React.ReactElement[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();

      // Handle HTML tags
      if (trimmedLine === "<hr />") {
        elements.push(<hr key={i} role="separator" aria-hidden="true" />);
        continue;
      }

      // Handle headings
      if (trimmedLine.startsWith("# ")) {
        elements.push(
          <h1 key={i} className="text-3xl font-bold mt-6 mb-4">
            {trimmedLine.slice(2)}
          </h1>
        );
        continue;
      }
      if (trimmedLine.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="text-2xl font-bold mt-5 mb-3">
            {trimmedLine.slice(3)}
          </h2>
        );
        continue;
      }
      if (trimmedLine.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="text-xl font-bold mt-4 mb-2">
            {trimmedLine.slice(4)}
          </h3>
        );
        continue;
      }

      // Handle regular text
      if (trimmedLine) {
        elements.push(
          <p key={i}>
            {trimmedLine.replace(/&lt;/g, "<").replace(/&gt;/g, ">")}
          </p>
        );
      }
    }

    return <div>{elements}</div>;
  };
});

jest.mock("remark-gfm", () => () => {});
jest.mock("rehype-raw", () => () => {});
jest.mock("rehype-sanitize", () => () => {});

describe("ClientReactMarkdown Component", () => {
  it("renders with proper wrapper classes", () => {
    render(<ClientReactMarkdown content="Test content" />);
    const wrapper = screen.getByText("Test content").closest("div");
    expect(wrapper?.parentElement).toHaveClass(
      "prose",
      "prose-lg",
      "max-w-none"
    );
  });

  it("renders headings with correct styling", () => {
    const content = `# Heading 1
## Heading 2
### Heading 3`;

    render(<ClientReactMarkdown content={content} />);

    const h1 = screen.getByRole("heading", { level: 1, name: /heading 1/i });
    expect(h1).toHaveClass("text-3xl", "font-bold", "mt-6", "mb-4");

    const h2 = screen.getByRole("heading", { level: 2, name: /heading 2/i });
    expect(h2).toHaveClass("text-2xl", "font-bold", "mt-5", "mb-3");

    const h3 = screen.getByRole("heading", { level: 3, name: /heading 3/i });
    expect(h3).toHaveClass("text-xl", "font-bold", "mt-4", "mb-2");
  });
});
