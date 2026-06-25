import type { MDXComponents } from "mdx/types";

export const projectMdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-4 text-white first:mt-0 border-b border-[#303030] pb-3">
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3 text-white">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-[#a0a0a0] text-sm sm:text-base leading-relaxed mb-4">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="space-y-2.5 mb-6 list-none">{children}</ul>
  ),
  li: ({ children }) => (
    <li className="text-[#a0a0a0] text-sm sm:text-base leading-relaxed flex items-start gap-3">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5b78f6]" />
      <span>{children}</span>
    </li>
  ),
};
