import type { Metadata } from "next";
import type { ReactNode } from "react";

import { getProject } from "@/lib/project";
import { buildProjectMetadata } from "@/lib/project-seo";

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    return {
      title: "Project Not Found | Kunal Khandelwal",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return buildProjectMetadata(project.frontmatter);
}

export default function WorkDetailLayout({ children }: LayoutProps) {
  return children;
}
