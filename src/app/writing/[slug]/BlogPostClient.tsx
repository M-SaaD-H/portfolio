"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { BlogPostRendererProps } from "./BlogPostRenderer";
import { motion } from "motion/react";
import { childVariant } from "@/components/ui/animation-wrapper";

const BlogPostRenderer = dynamic(() => import("./BlogPostRenderer"), {
  ssr: false,
}) as React.ComponentType<BlogPostRendererProps>;

type BlogPostClientProps = {
  mdxSource: MDXRemoteSerializeResult;
  title: string;
};

export default function BlogPostClient({
  mdxSource,
  title
}: BlogPostClientProps) {
  return (
    <>
      <motion.h1 variants={childVariant} className="font-instrument-serif md:text-4xl text-3xl">
        {title}
      </motion.h1>
      <motion.div variants={childVariant} className="mb-24">
        <BlogPostRenderer mdxSource={mdxSource} />
      </motion.div>
    </>
  )
}