import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Works | Kunal Khandelwal",
  description:
    "Portfolio projects and case studies by Kunal Khandelwal across full stack web development, SaaS products, and client builds.",
  keywords: [
    "full stack developer projects",
    "web development case studies",
    "Next.js portfolio projects",
    "freelance developer work samples",
  ],
  alternates: {
    canonical: "/works",
  },
  openGraph: {
    title: "Works | Kunal Khandelwal",
    description:
      "Explore selected full stack web development projects built by Kunal Khandelwal.",
    url: "/works",
    type: "website",
  },
};

export default function WorksLayout({ children }: { children: ReactNode }) {
  return children;
}
