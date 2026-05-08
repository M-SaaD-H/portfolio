import React from "react";

const MDXComponents: Record<string, React.ComponentType<any>> = {
  h1: function H1(props: any) {
    return <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" {...props} />;
  },
  h2: function H2(props: any) {
    return <h2 className="text-2xl font-semibold mt-10 mb-4" {...props} />;
  },
  h3: function H3(props: any) {
    return <h3 className="text-xl font-medium mt-8 mb-3" {...props} />;
  },
  p: function P(props: any) {
    return <p className="leading-8 mb-5" {...props} />;
  },
  a: function A(props: any) {
    return <a className="underline decoration-slate-600 hover:text-slate-200" {...props} />;
  },
  blockquote: function Blockquote(props: any) {
    return <blockquote className="blog-quote" {...props} />;
  },
  pre: function Pre(props: any) {
    return <pre className="blog-code-block" {...props} />;
  },
  code: function Code({ className = "", ...props }: any) {
    const isBlock = className.includes("language-");
    return (
      <code
        className={isBlock ? `blog-code ${className}` : "blog-inline-code"}
        {...props}
      />
    );
  },
};

export default MDXComponents;