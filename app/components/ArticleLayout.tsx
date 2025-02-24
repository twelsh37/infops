import React from 'react';

interface ArticleLayoutProps {
  children: React.ReactNode;
}

const ArticleLayout = ({ children }: ArticleLayoutProps) => {
  return (
    <main className="min-h-screen pt-16"> {/* Add padding-top to account for navbar height */}
      <article className="max-w-4xl mx-auto px-4">
        {children}
      </article>
    </main>
  );
};

export default ArticleLayout; 
