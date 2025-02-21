import React from "react";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "The Evolution of Russian Cyber Warfare",
    description: "From the 2007 Estonia Incidents to Modern Hybrid Conflict Strategies.",
  },
  {
    id: 2,
    title: "Russian Cyber Warfare in the Chechen and Georgian Wars",
    description: "A look at the role of cyber warfare in the Chechen and Georgian Wars.",
  },
  {
    id: 3,
    title: "Article 3",
    description: "Brief description of article 3.",
  },
];

const ArticlesSection = () => {
  return (
    <section id="articles" className="w-full h-screen md:h-[40vh] bg-white">
      <div className="w-full h-full px-8 py-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Articles</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                href={`/articles/${article.id}`}
                key={article.id}
                className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgba(218,165,32,0.6)] cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <span className="text-blue-500 hover:text-blue-600">
                  Read More
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
