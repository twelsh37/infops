"use server";

import { db } from "@/server/db";
import { articles } from "@/server/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { desc } from "drizzle-orm";

// Define a more specific type for citations
type Citation = {
  number?: number;
  url: string;
  source?: string;
};

interface ArticleData {
  title: string;
  description: string;
  content: string;
  citations: Citation[] | null;
}

export async function createArticle(data: ArticleData) {
  // Check if user is authenticated using currentUser
  const user = await currentUser();

  // If no user is found, the user is not authenticated
  if (!user) {
    throw new Error("You must be signed in to create an article");
  }

  try {
    // Get the highest existing ID to ensure we use a new one
    const existingArticles = await db
      .select({ id: articles.id })
      .from(articles)
      .orderBy(desc(articles.id))
      .limit(1);

    const nextId = existingArticles.length > 0 ? existingArticles[0].id + 1 : 1;

    // Insert article into database with the next available ID
    await db.insert(articles).values({
      id: nextId,
      title: data.title,
      description: data.description,
      content: data.content,
      citations: data.citations,
    });

    // Revalidate the articles page to show the new article
    revalidatePath("/articles");

    return { success: true };
  } catch (error) {
    console.error("Error creating article:", error);
    throw new Error("Failed to create article");
  }
}
