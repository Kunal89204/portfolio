import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  category: string;
  description: string;
  client: string;
  website: string;
  image?: string;
  stack: string[];
};

function buildFallbackDescription(
  title: string,
  category: string
): string {
  return `${category} case study for ${title} — full stack development work by Kunal Khandelwal.`;
}

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) return [];

  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjectLastModified(slug: string): Date | undefined {
  const filePath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  return fs.statSync(filePath).mtime;
}

export function getProject(slug: string) {
  const filePath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const frontmatter = data as Partial<ProjectFrontmatter>;
  const title = frontmatter.title ?? slug;
  const category = frontmatter.category ?? "Project";

  return {
    frontmatter: {
      title,
      slug: frontmatter.slug ?? slug,
      category,
      description:
        frontmatter.description ?? buildFallbackDescription(title, category),
      client: frontmatter.client ?? title,
      website: frontmatter.website ?? "",
      image: frontmatter.image,
      stack: frontmatter.stack ?? [],
    } satisfies ProjectFrontmatter,
    content,
  };
}

export function getProjectImage(slug: string, image?: string) {
  return image ?? `/images/works/${slug}.png`;
}
