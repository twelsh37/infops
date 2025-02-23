import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { db } from "@/server/db";
import { articles as articlesTable } from "@/server/db/schema";
import { eq } from "drizzle-orm";

// Define proper types for our articles
interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  citations?: Array<{
    number: number;
    url: string;
  }>;
}

// Generate static paths
export async function generateStaticParams() {
  const articlesList = await db.select().from(articlesTable);
  return articlesList.map((article) => ({
    id: article.id.toString(),
  }));
}

async function getArticle(id: number): Promise<Article | undefined> {
  const article = await db
    .select()
    .from(articlesTable)
    .where(eq(articlesTable.id, id))
    .limit(1);
  return article[0];
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const articleId = parseInt(resolvedParams.id);
  const article = await getArticle(articleId);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="prose prose-lg max-w-none">
        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.title}
          </ReactMarkdown>
        </div>
        <div className="text-gray-600 mb-8">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.description}
          </ReactMarkdown>
        </div>
        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
