import React from "react";

const ArticlesSection = () => {
  return (
    <section id="articles" className="w-full h-screen md:h-[40vh] bg-white">
      <div className="w-full h-full px-8 py-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Articles</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Article cards */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Article 1</h3>
              <p className="text-gray-600 mb-4">
                Brief description of article 1.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                Read More
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Article 2</h3>
              <p className="text-gray-600 mb-4">
                Brief description of article 2.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                Read More
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Article 3</h3>
              <p className="text-gray-600 mb-4">
                Brief description of article 3.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
