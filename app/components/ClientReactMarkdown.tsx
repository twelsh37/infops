"use client"; // This directive ensures the component is rendered on the client

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Define props for our component
interface ClientReactMarkdownProps {
  content: string;
}

// Render the markdown content with GitHub-flavored markdown support
export default function ClientReactMarkdown({ content }: ClientReactMarkdownProps) {
  const plugins = [remarkGfm]; // assign the plugin to a variable
  return (
    <ReactMarkdown remarkPlugins={plugins}>
      {content}
    </ReactMarkdown>
  );
} 
