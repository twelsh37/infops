// File: __tests__/components/ArticleLayout.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import ArticleLayout from "@/app/components/ArticleLayout";

describe("ArticleLayout Component", () => {
  it("renders with correct structure and styling", () => {
    render(
      <ArticleLayout>
        <div>Test Content</div>
      </ArticleLayout>
    );

    // Check main element
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    expect(main).toHaveClass("min-h-screen", "pt-16", "bg-gray-100");

    // Check article element
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
    expect(article).toHaveClass("max-w-4xl", "mx-auto", "px-4");
  });

  it("renders children correctly", () => {
    const testContent = "Test Content";
    render(
      <ArticleLayout>
        <div>{testContent}</div>
      </ArticleLayout>
    );

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it("renders multiple children", () => {
    render(
      <ArticleLayout>
        <div>First Child</div>
        <div>Second Child</div>
        <div>Third Child</div>
      </ArticleLayout>
    );

    expect(screen.getByText("First Child")).toBeInTheDocument();
    expect(screen.getByText("Second Child")).toBeInTheDocument();
    expect(screen.getByText("Third Child")).toBeInTheDocument();
  });
});
