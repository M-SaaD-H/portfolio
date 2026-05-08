"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { BlogPostRendererProps } from "./BlogPostRenderer";

const BlogPostRenderer = dynamic(() => import("./BlogPostRenderer"), {
  ssr: false,
}) as React.ComponentType<BlogPostRendererProps>;

type BlogPostClientProps = {
  mdxSource: MDXRemoteSerializeResult;
};

export default function BlogPostClient({
  mdxSource,
}: BlogPostClientProps) {
  return <BlogPostRenderer mdxSource={mdxSource} />;
}