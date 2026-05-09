import { BlogIndex } from "@/app/(main)/writing/WritingPageClient";
import { getAllBlogsFrontMatter } from "@/lib/mdx";
import HomePageBlogsClient from "./HomePageBlogsClient";

async function HomePageBlogs() {
  const blogs = (await getAllBlogsFrontMatter()) as BlogIndex[];
  return <HomePageBlogsClient blogs={blogs} />
}

export default HomePageBlogs