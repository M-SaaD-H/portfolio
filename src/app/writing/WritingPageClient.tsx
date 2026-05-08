'use client';

import { motion } from "motion/react";
import { childVariant } from "@/components/ui/animation-wrapper";
import { BlogPost } from "@/components/BlogPost";

export type BlogIndex = {
  slug: string;
  title: string;
  publishedAt: string;
};

type WritingPageClientProps = {
  blogs: BlogIndex[];
};

export default function WritingPageClient({ blogs }: WritingPageClientProps) {
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
  );
}