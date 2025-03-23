// File: __tests__/app/articles/article-detail/page.test.tsx
import ArticlePage, { generateMetadata } from "@/app/articles/[id]/page";

// Create a type that matches our usage
type MockDb = {
  select: jest.Mock;
  from: jest.Mock;
  where: jest.Mock;
  limit: jest.Mock;
};

// Mock next/navigation first
jest.mock("next/navigation", () => {
  const mockNotFound = jest.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  });
  return { notFound: mockNotFound };
});

// Mock the database module
jest.mock("@/server/db", () => {
  const mockDb: MockDb = {
    select: jest.fn().mockReturnThis(),
    from: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    limit: jest.fn(),
  };
  return { db: mockDb };
});

// Mock the components
jest.mock("@/app/components/ArticleLayout", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock("@/app/components/MarkdownRenderer", () => ({
  __esModule: true,
  default: ({ content }: { content: string }) => <div>{content}</div>,
}));

// Import the mocked db and notFound to manipulate in tests
import { db } from "@/server/db";
import { notFound } from "next/navigation";

describe("ArticlePage", () => {
  const mockArticle = {
    id: 1,
    title: "Test Article",
    description: "Test Description",
    content: "Test Content",
    citations: [{ number: 1, url: "https://example.com" }],
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // Reset the mock chain for each test
    (db.select as jest.Mock).mockReturnThis();
    (db.from as jest.Mock).mockReturnThis();
    (db.where as jest.Mock).mockReturnThis();
  });

  describe("generateMetadata", () => {
    it("should return article metadata for existing article", async () => {
      // Mock db to return our article
      (db.limit as jest.Mock).mockResolvedValueOnce([mockArticle]);

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
      (db.limit as jest.Mock).mockResolvedValueOnce([]);

      const metadata = await generateMetadata({
        params: Promise.resolve({ id: "1" }),
      });

      expect(metadata).toEqual({
        title: "Article Not Found",
      });
    });

    it("should handle invalid article ID", async () => {
      // Mock db to return empty array for invalid ID
      (db.limit as jest.Mock).mockResolvedValueOnce([]);

      await expect(
        generateMetadata({
          params: Promise.resolve({ id: "invalid" }),
        })
      ).rejects.toThrow("NEXT_NOT_FOUND");

      expect(notFound).toHaveBeenCalled();
    });
  });

  describe("ArticlePage", () => {
    it("should handle invalid article ID", async () => {
      // Mock db to return empty array for invalid ID
      (db.limit as jest.Mock).mockResolvedValueOnce([]);

      let error;
      try {
        await ArticlePage({
          params: Promise.resolve({ id: "invalid" }),
        });
      } catch (e) {
        error = e;
      }

      expect(error).toEqual(new Error("NEXT_NOT_FOUND"));
      expect(notFound).toHaveBeenCalled();
    });
  });
});
