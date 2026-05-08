import WritingPageClient, { type BlogIndex } from "./WritingPageClient";
import { getAllBlogsFrontMatter } from "@/lib/mdx";

async function page() {
  const blogs = (await getAllBlogsFrontMatter()) as BlogIndex[];
  return <WritingPageClient blogs={blogs} />;
}

export default page;
