import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog | Kunal Khandelwal",
  description:
    "Writing from Kunal Khandelwal on full-stack development, cloud infrastructure, and frontend engineering.",
  keywords: [
    "full stack engineering blog",
    "Next.js articles",
    "React best practices",
    "cloud infrastructure notes",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Kunal Khandelwal",
    description:
      "Articles on full-stack development, cloud infrastructure, and frontend engineering.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
