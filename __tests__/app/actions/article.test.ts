// File: __tests__/app/actions/article.test.ts
import { createArticle } from "@/app/actions/article";
import { db } from "@/server/db";
import { articles } from "@/server/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

// Mock the external dependencies
jest.mock("@clerk/nextjs/server", () => ({
  currentUser: jest.fn(),
}));

jest.mock("next/cache", () => ({
  revalidatePath: jest.fn(),
}));

jest.mock("@/server/db", () => {
  const mockDb = {
    select: jest.fn(),
    insert: jest.fn(),
  };
  return { db: mockDb };
});

// Mock console.error to prevent issues with jest.setup.ts
const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = originalError;
});

describe("Article Actions", () => {
  // Create mock functions for database operations
  const mockValues = jest.fn(() => Promise.resolve());
  const mockInsert = jest.fn(() => ({ values: mockValues }));
  const mockLimit = jest.fn(() => Promise.resolve([]));
  const mockOrderBy = jest.fn(() => ({ limit: mockLimit }));
  const mockFrom = jest.fn(() => ({ orderBy: mockOrderBy }));
  const mockSelect = jest.fn(() => ({ from: mockFrom }));

  const mockUser = {
    id: "user_123",
    emailAddresses: [{ emailAddress: "test@example.com" }],
  };

  const mockArticleData = {
    title: "Test Article",
    description: "Test Description",
    content: "Test Content",
    citations: [
      {
        url: "https://example.com",
        source: "Example Source",
      },
    ],
  };

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Setup database mock chain
    (db.select as jest.Mock).mockImplementation(mockSelect);
    (db.insert as jest.Mock).mockImplementation(mockInsert);
  });

  describe("createArticle", () => {
    it("should create an article successfully when user is authenticated", async () => {
      // Mock currentUser to return a user
      (currentUser as jest.Mock).mockResolvedValue(mockUser);

      // Mock db select to return no existing articles
      mockLimit.mockResolvedValue([]);

      const result = await createArticle(mockArticleData);

      // Verify the database operations
      expect(db.select).toHaveBeenCalledWith({ id: articles.id });
      expect(mockFrom).toHaveBeenCalledWith(articles);
      expect(db.insert).toHaveBeenCalledWith(articles);
      expect(mockValues).toHaveBeenCalledWith({
        id: 1,
        ...mockArticleData,
      });

      // Verify revalidatePath was called
      expect(revalidatePath).toHaveBeenCalledWith("/articles");

      // Verify the result
      expect(result).toEqual({ success: true });
    });

    it("should use next available ID when articles exist", async () => {
      // Mock currentUser to return a user
      (currentUser as jest.Mock).mockResolvedValue(mockUser);

      // Mock db select to return an existing article
      mockLimit.mockResolvedValue([{ id: 5 }]);

      await createArticle(mockArticleData);

      // Verify the database operations
      expect(db.select).toHaveBeenCalledWith({ id: articles.id });
      expect(mockFrom).toHaveBeenCalledWith(articles);
      expect(db.insert).toHaveBeenCalledWith(articles);
      expect(mockValues).toHaveBeenCalledWith({
        id: 6,
        ...mockArticleData,
      });
    });

    it("should throw error when user is not authenticated", async () => {
      // Mock currentUser to return null (unauthenticated)
      (currentUser as jest.Mock).mockResolvedValue(null);

      await expect(createArticle(mockArticleData)).rejects.toThrow(
        "You must be signed in to create an article"
      );

      // Verify no database operations were attempted
      expect(db.insert).not.toHaveBeenCalled();
      expect(revalidatePath).not.toHaveBeenCalled();
    });

    it("should handle database errors gracefully", async () => {
      // Mock currentUser to return a user
      (currentUser as jest.Mock).mockResolvedValue(mockUser);

      // Mock db select to return no existing articles
      mockLimit.mockResolvedValue([]);

      // Mock db insert to throw an error
      mockValues.mockRejectedValue(new Error("Database error"));

      await expect(createArticle(mockArticleData)).rejects.toThrow(
        "Failed to create article"
      );

      // Verify revalidatePath was not called after error
      expect(revalidatePath).not.toHaveBeenCalled();
    });
  });
});
