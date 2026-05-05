import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Projects | Kunal Khandelwal",
  description:
    "Project listing page for Kunal Khandelwal portfolio. This section is currently being expanded with detailed case studies.",
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
