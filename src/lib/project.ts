import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  category: string;
  client: string;
  website: string;
  image?: string;
  stack: string[];
};

export function getProjectSlugs() {
  if (!fs.existsSync(projectsDirectory)) return [];

  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProject(slug: string) {
  const filePath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const frontmatter = data as Partial<ProjectFrontmatter>;

  return {
    frontmatter: {
      title: frontmatter.title ?? slug,
      slug: frontmatter.slug ?? slug,
      category: frontmatter.category ?? "Project",
      client: frontmatter.client ?? frontmatter.title ?? slug,
      website: frontmatter.website ?? "",
      image: frontmatter.image,
      stack: frontmatter.stack ?? [],
    },
    content,
  };
}

export function getProjectImage(slug: string, image?: string) {
  return image ?? `/images/works/${slug}.png`;
}
