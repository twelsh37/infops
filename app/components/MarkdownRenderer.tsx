"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { useEffect, useState } from "react";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({
  content,
  className = "",
}: MarkdownRendererProps) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(
    null
  );

  useEffect(() => {
    const processMdx = async () => {
      const mdxSource = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
        },
      });
      setMdxSource(mdxSource);
    };

    processMdx();
  }, [content]);

  if (!mdxSource) {
    return (
      <div
        data-testid="loading-placeholder"
        className="animate-pulse bg-gray-200 h-10 w-full rounded"
      ></div>
    );
  }

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <MDXRemote {...mdxSource} />
    </div>
  );
}
