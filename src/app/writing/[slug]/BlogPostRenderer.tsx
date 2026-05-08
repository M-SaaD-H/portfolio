"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

import MDXComponents from "@/components/mdx-components";
import { BlogArticleShell } from "@/components/blog/blog-article-shell";

export type BlogPostRendererProps = {
	mdxSource: MDXRemoteSerializeResult;
};

export default function BlogPostRenderer({
	mdxSource,
}: BlogPostRendererProps) {
	return (
		<BlogArticleShell>
			<MDXRemote {...mdxSource} components={MDXComponents} />
		</BlogArticleShell>
	);
}