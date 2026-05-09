"use client";

import { BlogPost } from '../BlogPost'
import { childVariant } from '../ui/animation-wrapper'
import { getAllBlogsFrontMatter } from '@/lib/mdx';
import { BlogIndex } from '@/app/(main)/writing/WritingPageClient';
import { motion } from 'motion/react';

function HomePageBlogsClient({ blogs }: { blogs: BlogIndex[] }) {
  return (
    <div className='my-12'>
      <motion.h1
        variants={childVariant}
        className='text-2xl font-bold tracking-tight mb-2'
      >
        Writing
      </motion.h1>
      <div className="space-y-2 mb-8">
        {blogs.map((blog) => (
          <motion.div key={blog.slug} variants={childVariant}>
            <BlogPost {...blog} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default HomePageBlogsClient