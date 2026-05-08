import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export async function getBlogs() {
  return fs.readdirSync(path.join(root, "blogs"));
}

export async function getBlogBySlug(slug: string) {
  const source = fs.readFileSync(path.join(root, "blogs", `${slug}.mdx`), "utf8");

  const { data, content } = matter(source);
  const normalizedContent = content
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<\/HighlightBox>\s+([^\n])/g, "</HighlightBox>\n\n$1");
  let mdxSource;
  try {
    mdxSource = await serialize(normalizedContent);
  } catch {
    mdxSource = await serialize(
      "This article has legacy MDX syntax that needs migration."
    );
  }

  return {
    mdxSource,
    frontMatter: {
      wordCount: normalizedContent.split(/\s+/gu).length,
      readingTime: readingTime(normalizedContent),
      slug: slug || null,
      title: data.title || null,
      publishedAt: data.publishedAt || null,
      ...data,
    },
  };
}

export async function getAllBlogsFrontMatter() {
  const files = fs.readdirSync(path.join(root, "blogs"));

  return files.reduce<{ slug: string; [key: string]: any }[]>((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "blogs", postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
