import React from "react";
import Link from "next/link";
import { db } from "@/server/db";
import { articles } from "@/server/db/schema";
import { desc } from "drizzle-orm";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Type for our article data
type Article = {
  id: number;
  title: string;
  description: string;
};

// Server component to fetch articles
async function getArticles(): Promise<Article[]> {
  return await db
    .select({
      id: articles.id,
      title: articles.title,
      description: articles.description,
    })
    .from(articles)
    .orderBy(desc(articles.id));
}

export default async function ArticlesPage() {
  const articleData = await getArticles();

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Articles</h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articleData.map((article) => (
            <Link
              href={`/articles/${article.id}`}
              key={article.id}
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgba(218,165,32,0.6)] cursor-pointer"
            >
              <div className="prose prose-sm">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {article.title}
                </ReactMarkdown>
                <div className="text-gray-600">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {article.description}
                  </ReactMarkdown>
                </div>
              </div>
              <span className="text-blue-500 hover:text-blue-600">
                Read More
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
