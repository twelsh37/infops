// File: __tests__/app/articles/article-detail/page.test.tsx
import { render, screen } from "@testing-library/react";
import ArticlePage, {
  generateMetadata,
  generateStaticParams,
} from "@/app/articles/[id]/page";

// Create a type that matches our usage
type MockSelectBuilder = {
  select: jest.Mock;
  from: jest.Mock;
  where: jest.Mock;
  limit: jest.Mock;
};

// Mock next/navigation first
const mockNotFound = jest.fn();
jest.mock("next/navigation", () => ({
  notFound: () => mockNotFound(),
}));

// Mock the database module
jest.mock("@/server/db", () => {
  const mockSelectBuilder: MockSelectBuilder = {
    select: jest.fn().mockReturnThis(),
    from: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    limit: jest.fn(),
  };
  return { db: mockSelectBuilder };
});

// Mock the components
jest.mock("@/app/components/ArticleLayout", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="article-layout">{children}</div>
  ),
}));

jest.mock("@/app/components/MarkdownRenderer", () => ({
  __esModule: true,
  default: ({
    content,
    className,
  }: {
    content: string;
    className?: string;
  }) => <div className={className}>{content}</div>,
}));

// Import the mocked db to manipulate in tests
import { db } from "@/server/db";

describe("ArticlePage", () => {
  const mockArticle = {
    id: 1,
    title: "Test Article",
    description: "Test Description",
    content: "Test Content",
    citations: [
      { number: 1, url: "https://example.com" },
      { number: 2, url: "https://test.com" },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // Reset the mock chain for each test
    (db as unknown as MockSelectBuilder).select.mockReturnThis();
    (db as unknown as MockSelectBuilder).from.mockReturnThis();
    (db as unknown as MockSelectBuilder).where.mockReturnThis();
  });

  describe("generateStaticParams", () => {
    it("should return params for all articles", async () => {
      const mockArticles = [
        { id: 1, title: "Article 1" },
        { id: 2, title: "Article 2" },
      ];

      // Mock db to return our articles
      (db as unknown as MockSelectBuilder).select.mockReturnThis();
      (db as unknown as MockSelectBuilder).from.mockResolvedValueOnce(
        mockArticles
      );

      const params = await generateStaticParams();

      expect(params).toEqual([{ id: "1" }, { id: "2" }]);

      expect((db as unknown as MockSelectBuilder).select).toHaveBeenCalled();
      expect((db as unknown as MockSelectBuilder).from).toHaveBeenCalled();
    });
  });

  describe("generateMetadata", () => {
    beforeEach(() => {
      // Setup notFound to throw error for metadata tests
      mockNotFound.mockImplementation(() => {
        throw new Error("NEXT_NOT_FOUND");
      });
    });

    it("should return article metadata for existing article", async () => {
      // Mock db to return our article
      (db as unknown as MockSelectBuilder).limit.mockResolvedValueOnce([
        mockArticle,
      ]);

      const metadata = await generateMetadata({
        params: Promise.resolve({ id: "1" }),
      });

      expect(metadata).toEqual({
        title: mockArticle.title,
        description: mockArticle.description,
      });
    });

    it("should handle not found article", async () => {
      // Mock db to return empty array
      (db as unknown as MockSelectBuilder).limit.mockResolvedValueOnce([]);

      const metadata = await generateMetadata({
        params: Promise.resolve({ id: "1" }),
      });

      expect(metadata).toEqual({
        title: "Article Not Found",
      });
    });

    it("should handle invalid article ID", async () => {
      // Mock db to return empty array for invalid ID
      (db as unknown as MockSelectBuilder).limit.mockResolvedValueOnce([]);

      // Mock notFound to just return undefined instead of throwing
      mockNotFound.mockImplementationOnce(() => undefined);

      // Call the component and expect notFound to be called
      await generateMetadata({
        params: Promise.resolve({ id: "invalid" }),
      });

      // Verify notFound was called
      expect(mockNotFound).toHaveBeenCalled();
    });
  });

  describe("ArticlePage", () => {
    beforeEach(() => {
      // Reset the mock chain for each test
      (db as unknown as MockSelectBuilder).limit.mockReset();
      // Reset notFound mock
      mockNotFound.mockReset();
    });

    it("should render article with citations", async () => {
      // Mock db to return our article
      (db as unknown as MockSelectBuilder).limit.mockResolvedValueOnce([
        mockArticle,
      ]);

      const page = await ArticlePage({
        params: Promise.resolve({ id: "1" }),
      });

      render(page);

      // Check if article layout is used
      expect(screen.getByTestId("article-layout")).toBeInTheDocument();

      // Check if title, description and content are rendered
      expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
      expect(screen.getByText(mockArticle.description)).toBeInTheDocument();
      expect(screen.getByText(mockArticle.content)).toBeInTheDocument();

      // Check if citations section is rendered
      expect(
        screen.getByRole("heading", { name: /citations/i })
      ).toBeInTheDocument();

      // Check if all citations are rendered
      mockArticle.citations.forEach((citation) => {
        const link = screen.getByRole("link", { name: citation.url });
        expect(link).toHaveAttribute("href", citation.url);
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
      });
    });

    it("should handle article without citations", async () => {
      const articleWithoutCitations = { ...mockArticle, citations: [] };
      (db as unknown as MockSelectBuilder).limit.mockResolvedValueOnce([
        articleWithoutCitations,
      ]);

      const page = await ArticlePage({
        params: Promise.resolve({ id: "1" }),
      });

      render(page);

      // Check if title, description and content are rendered
      expect(
        screen.getByText(articleWithoutCitations.title)
      ).toBeInTheDocument();
      expect(
        screen.getByText(articleWithoutCitations.description)
      ).toBeInTheDocument();
      expect(
        screen.getByText(articleWithoutCitations.content)
      ).toBeInTheDocument();

      // Check that citations section is not rendered
      expect(
        screen.queryByRole("heading", { name: /citations/i })
      ).not.toBeInTheDocument();
    });

    it("should handle article not found", async () => {
      // Mock db to return empty array
      (db as unknown as MockSelectBuilder).limit.mockResolvedValueOnce([]);

      // Setup notFound to throw error for this test
      mockNotFound.mockImplementation(() => {
        throw new Error("NEXT_NOT_FOUND");
      });

      // Call the component and expect it to throw
      await expect(
        ArticlePage({
          params: Promise.resolve({ id: "1" }),
        })
      ).rejects.toThrow("NEXT_NOT_FOUND");

      // Verify notFound was called
      expect(mockNotFound).toHaveBeenCalled();
    });

    it("should handle invalid article ID", async () => {
      // Mock db to return empty array for invalid ID
      (db as unknown as MockSelectBuilder).limit.mockResolvedValueOnce([]);

      // Setup notFound to throw error for this test
      mockNotFound.mockImplementation(() => {
        throw new Error("NEXT_NOT_FOUND");
      });

      // Call the component and expect it to throw
      await expect(
        ArticlePage({
          params: Promise.resolve({ id: "invalid" }),
        })
      ).rejects.toThrow("NEXT_NOT_FOUND");

      // Verify notFound was called
      expect(mockNotFound).toHaveBeenCalled();
    });
  });
});
