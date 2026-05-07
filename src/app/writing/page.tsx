'use client';

import { motion } from "motion/react"
import { childVariant } from "@/components/ui/animation-wrapper"
import { BlogPost, type BlogPostProps } from "@/components/BlogPost"

const blogs: BlogPostProps[] = [
  {
    title: "Building Scalable Backend Systems",
    slug: "scalable-backend-systems",
    publishedAt: "2024-01-15",
  },
  {
    title: "Open Source Best Practices",
    slug: "open-source-best-practices",
    publishedAt: "2024-01-10",
  },
  {
    title: "Understanding Distributed Systems",
    slug: "distributed-systems",
    publishedAt: "2024-01-05",
  },
];

function page() {
  return (
    <div>
      <motion.p variants={childVariant} className="my-4 text-sm">
        Writing about software, backend systems, open source, and whatever else keeps me thinking.
      </motion.p>
      <div className="mt-8 space-y-2">
        {blogs.map((blog) => (
          <motion.div key={blog.slug} variants={childVariant}>
            <BlogPost {...blog} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}



export default page
