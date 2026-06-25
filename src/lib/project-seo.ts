import type { Metadata } from "next";

import type { ProjectFrontmatter } from "@/lib/project";
import { getProjectImage } from "@/lib/project";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function getAbsoluteProjectImage(
  slug: string,
  image?: string
): string | undefined {
  const path = getProjectImage(slug, image);
  if (!path) return undefined;
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

export function getProjectCanonicalUrl(slug: string): string {
  return `${SITE_URL}/works/${slug}`;
}

export function buildProjectMetadata(
  frontmatter: ProjectFrontmatter
): Metadata {
  const title = `${frontmatter.title} | Kunal Khandelwal`;
  const description = frontmatter.description;
  const canonical = getProjectCanonicalUrl(frontmatter.slug);
  const ogImage = getAbsoluteProjectImage(
    frontmatter.slug,
    frontmatter.image
  );

  const images = ogImage
    ? [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${frontmatter.title} — project case study`,
        },
      ]
    : undefined;

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
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

export function buildProjectJsonLd(frontmatter: ProjectFrontmatter) {
  const url = getProjectCanonicalUrl(frontmatter.slug);
  const image = getAbsoluteProjectImage(
    frontmatter.slug,
    frontmatter.image
  );

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: frontmatter.title,
    description: frontmatter.description,
    url,
    ...(image ? { image } : {}),
    author: {
      "@type": "Person",
      name: "Kunal Khandelwal",
      url: SITE_URL,
    },
    genre: frontmatter.category,
    ...(frontmatter.website ? { sameAs: frontmatter.website } : {}),
  };
}
