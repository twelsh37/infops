"use client"; // This directive ensures the component is rendered on the client

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

// Define props for our component
interface ClientReactMarkdownProps {
  content: string;
}

// Render the markdown content with GitHub-flavored markdown support
export default function ClientReactMarkdown({
  content,
}: ClientReactMarkdownProps) {
  // Clean up the content if needed
  const cleanContent = content
    .replace(/\[(\d+)\]\[(\d+)\]/g, " [[$1][$2]] ") // Add spaces around citation brackets
    .replace(/---/g, "<hr />"); // Replace markdown horizontal rules with HTML

  // Add a wrapper div with prose classes for proper markdown styling
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          // Custom component for headings to ensure proper rendering
          h1: ({ ...props }) => (
            <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="text-2xl font-bold mt-5 mb-3" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="text-xl font-bold mt-4 mb-2" {...props} />
          ),
        }}
      >
        {cleanContent}
      </ReactMarkdown>
    </div>
  );
}
