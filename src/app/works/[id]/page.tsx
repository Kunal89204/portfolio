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
import { buildProjectJsonLd } from "@/lib/project-seo";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((id) => ({ id }));
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

  const jsonLd = buildProjectJsonLd(project.frontmatter);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetail
        frontmatter={project.frontmatter}
        image={getProjectImage(id, project.frontmatter.image)}
      >
        {content}
      </ProjectDetail>
    </>
  );
};

export default Work;
