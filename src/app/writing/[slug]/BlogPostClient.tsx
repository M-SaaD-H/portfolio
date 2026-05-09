"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { BlogPostRendererProps } from "./BlogPostRenderer";
import { motion } from "motion/react";
import { childVariant } from "@/components/ui/animation-wrapper";
import { IndexBtn } from "@/components/blog/index-btn";

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
    <div className="relative">
      <motion.div variants={childVariant}>
        <IndexBtn className="lg:absolute lg:-left-[12rem] max-lg:mb-8 max-lg:mt-4" />
      </motion.div>
      <motion.h1 variants={childVariant} className="font-instrument-serif md:text-4xl text-3xl">
        {title}
      </motion.h1>
      <motion.div variants={childVariant} className="mb-[12rem]">
        <BlogPostRenderer mdxSource={mdxSource} />
      </motion.div>
      <div className="fixed inset-0 bg-background/80 pointer-events-none [mask-image:linear-gradient(180deg,transparent_80%,black)]" />
    </div>
  )
}