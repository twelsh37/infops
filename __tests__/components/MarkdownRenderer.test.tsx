import React from "react";
import { render, screen, act } from "@testing-library/react";
import MarkdownRenderer from "@/app/components/MarkdownRenderer";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

// Mock console.error to prevent errors from React state updates
const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = originalError;
});

// Mock next-mdx-remote
jest.mock("next-mdx-remote", () => ({
  MDXRemote: ({
    compiledSource,
  }: {
    compiledSource: MDXRemoteSerializeResult["compiledSource"];
  }) => <div className="mdx-content">{compiledSource}</div>,
}));

// Mock next-mdx-remote/serialize with a synchronous implementation
const mockSerialize = jest.fn().mockImplementation((source) =>
  Promise.resolve({
    compiledSource: source,
  })
);

jest.mock("next-mdx-remote/serialize", () => ({
  serialize: (source: string) => mockSerialize(source),
}));

// Mock remark and rehype plugins
jest.mock("remark-gfm", () => () => {});
jest.mock("rehype-slug", () => () => {});
jest.mock("rehype-autolink-headings", () => () => {});

describe("MarkdownRenderer Component", () => {
  beforeEach(() => {
    mockSerialize.mockClear();
  });

  it("shows loading state initially", () => {
    render(<MarkdownRenderer content="Test content" />);
    const loadingElement = screen.getByTestId("loading-placeholder");
    expect(loadingElement).toHaveClass(
      "animate-pulse",
      "bg-gray-200",
      "h-10",
      "w-full",
      "rounded"
    );
  });

  it("renders markdown content after loading", async () => {
    await act(async () => {
      render(<MarkdownRenderer content="# Test heading" />);
    });

    expect(screen.queryByTestId("loading-placeholder")).not.toBeInTheDocument();
    expect(screen.getByText(/# test heading/i)).toBeInTheDocument();
  });

  it("applies custom className when provided", async () => {
    await act(async () => {
      render(
        <MarkdownRenderer content="Test content" className="custom-class" />
      );
    });

    const wrapper = screen.getByText(/test content/i).closest("div.prose");
    expect(wrapper).toHaveClass(
      "prose",
      "prose-lg",
      "max-w-none",
      "custom-class"
    );
  });

  it("handles empty content gracefully", async () => {
    await act(async () => {
      render(<MarkdownRenderer content="" />);
    });

    expect(screen.queryByTestId("loading-placeholder")).not.toBeInTheDocument();
    const wrapper = document.querySelector(".prose");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.textContent).toBe("");
  });
});
