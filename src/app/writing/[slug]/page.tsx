import type { Metadata } from "next";
import { getBlogs, getBlogBySlug } from "@/lib/mdx";
import BlogPostClient from "./BlogPostClient";

const siteUrl = "https://saad.works";

type PostFrontMatter = {
  title: string;
  publishedAt: string;
  readingTime?: { text: string };
};

export async function generateStaticParams() {
  const posts = await getBlogs();
  return posts.map((p) => ({
    slug: p.replace(/\.mdx/, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  const { title } = post.frontMatter as unknown as PostFrontMatter;

  return {
    title,
    alternates: {
      canonical: `/writing/${slug}`,
    },
    openGraph: {
      title,
      type: "article",
      url: `${siteUrl}/writing/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
    },
  };
}

async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  console.log("post", post);
  return (
    <div className="mt-2 mb-24">
      <h1 className="font-instrument-serif text-4xl">{post.frontMatter.title}</h1>
      <BlogPostClient mdxSource={post.mdxSource} />
    </div>
  )
}

export default page;
