import { cn } from "@/lib/utils";
import Link from "next/link";

export type BlogPostProps = {
  title: string;
  slug: string;
  publishedAt: string;
  className?: string;
};

export function BlogPost({
  title,
  slug,
  publishedAt,
  className,
}: BlogPostProps) {
  return (
    <Link
      href={`/writing/${slug}`}
      className={cn(
        "group flex items-center justify-between gap-8 transition-colors duration-200 md:gap-20",
        className,
      )}
    >
      <span className="text-foreground/80 text-sm truncate group-hover:text-primary">
        {title}
      </span>
      <span className="text-foreground/50 text-xs shrink-0 font-mono font-light group-hover:text-primary">
        {publishedAt}
      </span>
    </Link>
  );
}