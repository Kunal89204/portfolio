import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

import ProjectDetail from "@/components/works/ProjectDetail";
import { projectMdxComponents } from "@/components/works/project-mdx-components";
import {
  getProject,
  getProjectImage,
  getProjectSlugs,
  type ProjectFrontmatter,
} from "@/lib/project";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const { title, category } = project.frontmatter;

  return {
    title: `${title} | Works | Kunal Khandelwal`,
    description: `${category} project case study for ${title}.`,
    alternates: {
      canonical: `/works/${id}`,
    },
    openGraph: {
      title: `${title} | Works`,
      description: `${category} project case study for ${title}.`,
      url: `/works/${id}`,
      type: "article",
    },
  };
}

const Work = async ({ params }: Props) => {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  const { content } = await compileMDX<ProjectFrontmatter>({
    source: project.content,
    components: projectMdxComponents,
    options: { parseFrontmatter: false },
  });

  return (
    <ProjectDetail
      frontmatter={project.frontmatter}
      image={getProjectImage(id, project.frontmatter.image)}
    >
      {content}
    </ProjectDetail>
  );
};

export default Work;
