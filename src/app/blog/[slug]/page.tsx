import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import BlogPostClient from "./BlogPostClient";

const POST_SLUG = "shipping-full-stack-features-without-losing-momentum";

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    if (slug !== POST_SLUG) {
      return {
        title: "Post Not Found | Kunal Khandelwal",
        robots: { index: false, follow: false },
      };
    }

    return {
      title:
        "Shipping full-stack features without losing momentum | Kunal Khandelwal",
      description:
        "How to ship full-stack features predictably by breaking work into atomic units, defining API contracts early, and iterating with strong quality bars.",
      alternates: {
        canonical: `/blog/${POST_SLUG}`,
      },
      openGraph: {
        title: "Shipping full-stack features without losing momentum",
        description:
          "A practical engineering workflow for shipping full-stack features without sacrificing quality.",
        url: `/blog/${POST_SLUG}`,
        type: "article",
      },
    };
  });
}
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug !== POST_SLUG) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Shipping full-stack features without losing momentum",
    datePublished: "2025-04-05",
    author: {
      "@type": "Person",
      name: "Kunal Khandelwal",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Kunal Khandelwal",
    },
    mainEntityOfPage: `${SITE_URL}/blog/${POST_SLUG}`,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogPostClient />
    </>
  );
}