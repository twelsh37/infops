import { notFound } from "next/navigation";
import { db } from "@/server/db";
import { articles as articlesTable } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import ArticleLayout from "@/app/components/ArticleLayout";
import ClientReactMarkdown from "@/app/components/ClientReactMarkdown";

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

  // Type assertion to ensure citations matches the Article interface
  if (article[0]) {
    return {
      ...article[0],
      citations: article[0].citations as
        | Array<{ number: number; url: string }>
        | undefined,
    };
  }
  return undefined;
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
    <ArticleLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="text-gray-600 mb-8">{article.description}</div>
        {/* <div className="prose prose-lg max-w-none"> */}
          <ClientReactMarkdown content={article.content} />
          {article.citations && article.citations.length > 0 && (
            <>
              <br />
              <div className="mt-8">
                <h2 className="text-2xl font-bold">Citations</h2>
                <ul className="list-disc list-inside">
                  {article.citations.map((citation) => (
                    <li key={citation.number}>
                      <a
                        href={citation.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {citation.url}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        {/* </div> */}
      </div>
    </ArticleLayout>
  );
}
