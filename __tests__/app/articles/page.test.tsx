import { render } from "@testing-library/react";
import ArticlesPage from "@/app/articles/page";
import { db } from "@/server/db";
import { articles } from "@/server/db/schema";
import { desc } from "drizzle-orm";

// Mock the database
jest.mock("@/server/db", () => ({
  db: {
    select: jest.fn(),
  },
}));

// Mock next/link since we're using it in the component
jest.mock("next/link", () => {
  const MockLink = ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) => (
    <a href={href} data-testid="article-link" className={className}>
      {children}
    </a>
  );
  MockLink.displayName = "MockLink";
  return MockLink;
});

// Mock react-markdown
jest.mock("react-markdown", () => {
  const MockMarkdown = ({ children }: { children: string }) => (
    <div>{children}</div>
  );
  MockMarkdown.displayName = "MockMarkdown";
  return MockMarkdown;
});

// Mock remark-gfm
jest.mock("remark-gfm", () => {
  return () => {};
});

describe("ArticlesPage", () => {
  // Mock article data
  const mockArticles = [
    {
      id: 1,
      title: "Test Article 1",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Test Article 2",
      description: "Description 2",
    },
  ];

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Setup default mock implementation for db.select
    const mockFrom = jest.fn().mockReturnValue({
      orderBy: jest.fn().mockResolvedValue(mockArticles),
    });

    (db.select as jest.Mock).mockReturnValue({
      from: mockFrom,
    });
  });

  it("should render the articles page title", async () => {
    const { container } = await render(await ArticlesPage());
    const heading = container.querySelector("h1");
    expect(heading).toHaveTextContent("Articles");
  });

  it("should render a list of articles", async () => {
    const { container } = await render(await ArticlesPage());

    // Check if articles are rendered
    const links = container.querySelectorAll("[data-testid='article-link']");
    expect(links).toHaveLength(mockArticles.length);

    mockArticles.forEach((article, index) => {
      const link = links[index];
      expect(link).toHaveAttribute("href", `/articles/${article.id}`);
      expect(link.textContent).toContain(article.title);
      expect(link.textContent).toContain(article.description);
    });
  });

  it("should render articles in correct order", async () => {
    // Mock db to verify ordering
    const mockOrderBy = jest.fn().mockResolvedValue(mockArticles);
    const mockFrom = jest.fn().mockReturnValue({ orderBy: mockOrderBy });
    (db.select as jest.Mock).mockReturnValue({ from: mockFrom });

    await render(await ArticlesPage());

    // Verify the database query
    expect(db.select).toHaveBeenCalledWith({
      id: articles.id,
      title: articles.title,
      description: articles.description,
    });
    expect(mockFrom).toHaveBeenCalledWith(articles);
    expect(mockOrderBy).toHaveBeenCalledWith(desc(articles.id));
  });

  it("should handle empty articles list", async () => {
    // Mock db to return empty array
    const mockFrom = jest.fn().mockReturnValue({
      orderBy: jest.fn().mockResolvedValue([]),
    });
    (db.select as jest.Mock).mockReturnValue({ from: mockFrom });

    const { container } = await render(await ArticlesPage());

    // Verify no article links are rendered
    const articleLinks = container.querySelectorAll(
      "[data-testid='article-link']"
    );
    expect(articleLinks).toHaveLength(0);
  });

  it("should handle database errors gracefully", async () => {
    // Mock db to throw error
    const mockFrom = jest.fn().mockReturnValue({
      orderBy: jest.fn().mockRejectedValue(new Error("Database error")),
    });
    (db.select as jest.Mock).mockReturnValue({ from: mockFrom });

    // We expect the error to be caught by Next.js error boundary
    await expect(ArticlesPage()).rejects.toThrow("Database error");
  });

  it("should apply correct styling to article cards", async () => {
    const { container } = await render(await ArticlesPage());

    // Check container styling
    const mainContainer = container.firstChild as HTMLElement;
    expect(mainContainer).toHaveClass("min-h-screen bg-gray-100 pt-16");

    // Check inner container styling
    const innerContainer = mainContainer.firstChild as HTMLElement;
    expect(innerContainer).toHaveClass("max-w-7xl mx-auto px-8 py-8");

    // Check article grid styling
    const grid = container.querySelector(".grid");
    expect(grid).toHaveClass(
      "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
    );

    // Check article card styling
    const articleCards = container.querySelectorAll(
      "[data-testid='article-link']"
    );
    articleCards.forEach((card) => {
      expect(card).toHaveClass(
        "bg-white rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgba(218,165,32,0.6)] cursor-pointer"
      );
    });
  });
});
