import React from "react";

const ArticlesSection = () => {
  return (
    <section id="articles" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 sm:text-3xl">Articles</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder articles */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">Article 1</h3>
            <p className="text-gray-700">Brief description of article 1.</p>
            <a href="#" className="text-blue-500 hover:underline mt-2 block">
              Read More
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">Article 2</h3>
            <p className="text-gray-700">Brief description of article 2.</p>
            <a href="#" className="text-blue-500 hover:underline mt-2 block">
              Read More
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">Article 3</h3>
            <p className="text-gray-700">Brief description of article 3.</p>
            <a href="#" className="text-blue-500 hover:underline mt-2 block">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
