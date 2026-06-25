import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export type BlogFrontmatter = {
  title: string;
  slug: string;
  tag: string;
  description: string;
  date: string;
  dateLabel: string;
  readTime: string;
  image?: string;
  tldr?: string;
  preKnowledge?: string[];
  published?: boolean;
};

function normalizeDate(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "string") {
    return value.slice(0, 10);
  }

  return new Date().toISOString().slice(0, 10);
}

function buildFallbackDescription(title: string, tag: string): string {
  return `${tag} article by Kunal Khandelwal — ${title}.`;
}

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(blogsDirectory)) return [];

  return fs
    .readdirSync(blogsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getBlogLastModified(slug: string): Date | undefined {
  const filePath = path.join(blogsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  return fs.statSync(filePath).mtime;
}

export function getBlog(slug: string) {
  const filePath = path.join(blogsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const frontmatter = data as Partial<BlogFrontmatter>;
  const title = frontmatter.title ?? slug;
  const tag = frontmatter.tag ?? "Engineering";

  return {
    frontmatter: {
      title,
      slug: frontmatter.slug ?? slug,
      tag,
      description:
        frontmatter.description ?? buildFallbackDescription(title, tag),
      date: normalizeDate(frontmatter.date),
      dateLabel:
        frontmatter.dateLabel ??
        new Date(normalizeDate(frontmatter.date)).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
      readTime: frontmatter.readTime ?? "5 min read",
      image: frontmatter.image,
      tldr: frontmatter.tldr,
      preKnowledge: frontmatter.preKnowledge ?? [],
      published: frontmatter.published !== false,
    } satisfies BlogFrontmatter,
    content,
  };
}

export function getAllBlogPosts(): BlogFrontmatter[] {
  return getBlogSlugs()
    .map((slug) => getBlog(slug))
    .filter((post): post is NonNullable<typeof post> => post !== null)
    .filter((post) => post.frontmatter.published !== false)
    .map((post) => post.frontmatter)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogImage(slug: string, image?: string) {
  return image ?? `/images/blog/${slug}.png`;
}
