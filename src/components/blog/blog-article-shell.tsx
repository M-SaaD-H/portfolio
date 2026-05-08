import React from "react";

interface BlogArticleShellProps {
  children: React.ReactNode;
}

export function BlogArticleShell({ children }: BlogArticleShellProps) {
  return <article className="blog-article">{children}</article>;
}