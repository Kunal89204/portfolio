import type { Metadata } from "next";
import type { ReactNode } from "react";

import { getBlog } from "@/lib/blog";
import { buildBlogMetadata } from "@/lib/blog-seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlog(slug);

  if (!post || post.frontmatter.published === false) {
    return {
      title: "Post Not Found | Kunal Khandelwal",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return buildBlogMetadata(post.frontmatter);
}

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return children;
}
