import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

import BlogPostDetail from "@/components/blog/BlogPostDetail";
import { blogMdxComponents } from "@/components/blog/blog-mdx-components";
import {
  getBlog,
  getBlogSlugs,
  type BlogFrontmatter,
} from "@/lib/blog";
import { buildBlogJsonLd } from "@/lib/blog-seo";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

const BlogPostPage = async ({ params }: Props) => {
  const { slug } = await params;
  const post = getBlog(slug);

  if (!post || post.frontmatter.published === false) {
    notFound();
  }

  const { content } = await compileMDX<BlogFrontmatter>({
    source: post.content,
    components: blogMdxComponents,
    options: { parseFrontmatter: false },
  });

  const jsonLd = buildBlogJsonLd(post.frontmatter);
  const image =
    post.frontmatter.image ??
    DEFAULT_OG_IMAGE;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostDetail frontmatter={post.frontmatter} image={image}>
        {content}
      </BlogPostDetail>
    </>
  );
};

export default BlogPostPage;
