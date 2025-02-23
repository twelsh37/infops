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
  const articles = await db.select().from(articlesTable);
  return articles.map((article) => ({
    id: article.id.toString(),
  }));
}

async function getArticle(id: number) {
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
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolvedParams = await params;
  const articleId = parseInt(resolvedParams.id);
  const article = await getArticle(articleId);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="prose prose-lg max-w-none prose-headings:mt-8 prose-headings:mb-4 prose-p:my-4 prose-li:my-2">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({node, ...props}) => <h1 className="text-4xl font-bold mb-6" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-3xl font-semibold mt-8 mb-4" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-2xl font-semibold mt-6 mb-3" {...props} />,
            p: ({node, ...props}) => <p className="my-4" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc ml-6 my-4" {...props} />,
            ol: ({node, ...props}) => <ol className="list-decimal ml-6 my-4" {...props} />,
            li: ({node, ...props}) => <li className="my-2" {...props} />,
            hr: ({node, ...props}) => <hr className="my-8 border-gray-300" {...props} />,
          }}
        >
          {article.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
