// File: server/articles.ts
import { db } from "@/server/db";
import { articles } from "@/server/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export async function getArticleById(id: string | number) {
  try {
    const article = await db
      .select()
      .from(articles)
      .where(eq(articles.id, Number(id)))
      .limit(1);

    if (!article || article.length === 0) {
      return null;
    }

    return article[0];
  } catch {
    notFound();
  }
}
