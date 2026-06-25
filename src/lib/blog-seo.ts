import type { Metadata } from "next";

import type { BlogFrontmatter } from "@/lib/blog";
import { getBlogImage } from "@/lib/blog";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

export function getAbsoluteBlogImage(
  slug: string,
  image?: string
): string {
  const path = image ? getBlogImage(slug, image) : DEFAULT_OG_IMAGE;
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

export function getBlogCanonicalUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`;
}

export function buildBlogMetadata(frontmatter: BlogFrontmatter): Metadata {
  const title = `${frontmatter.title} | Kunal Khandelwal`;
  const description = frontmatter.description;
  const canonical = getBlogCanonicalUrl(frontmatter.slug);
  const ogImage = getAbsoluteBlogImage(
    frontmatter.slug,
    frontmatter.image
  );

  const images = [
    {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: frontmatter.title,
    },
  ];

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      siteName: SITE_NAME,
      locale: "en_IN",
      publishedTime: frontmatter.date,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function buildBlogJsonLd(frontmatter: BlogFrontmatter) {
  const url = getBlogCanonicalUrl(frontmatter.slug);
  const image = getAbsoluteBlogImage(frontmatter.slug, frontmatter.image);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    author: {
      "@type": "Person",
      name: "Kunal Khandelwal",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Kunal Khandelwal",
      url: SITE_URL,
    },
    mainEntityOfPage: url,
    image,
    articleSection: frontmatter.tag,
  };
}
