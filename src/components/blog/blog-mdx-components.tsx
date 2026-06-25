import type { MDXComponents } from "mdx/types";

export const blogMdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h2 className="text-3xl sm:text-4xl font-bold mt-12 mb-5 text-white first:mt-0 border-b border-[#303030] pb-3">
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-white">
      {children}
    </h3>
  ),
  h3: ({ children }) => (
    <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-2 text-white">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-[#a0a0a0] text-base sm:text-lg leading-relaxed mb-5">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="space-y-2.5 mb-6 list-none">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-3 mb-6 list-decimal list-inside text-[#a0a0a0] text-base sm:text-lg leading-relaxed">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-[#a0a0a0] text-base sm:text-lg leading-relaxed flex items-start gap-3">
      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5b78f6]" />
      <span>{children}</span>
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#5b78f6] pl-6 py-2 my-8 italic text-[#a0a0a0] text-base sm:text-lg leading-relaxed">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="px-1.5 py-0.5 rounded bg-[#1a1a1a] border border-[#303030] text-[#7b93f8] text-base font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mb-6 p-5 rounded-xl bg-[#111] border border-[#303030] overflow-x-auto text-base sm:text-[0.95rem] font-mono text-[#d0d0d0] leading-relaxed">
      {children}
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),
};
