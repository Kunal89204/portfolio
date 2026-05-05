import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About | Kunal Khandelwal",
  description:
    "About Kunal Khandelwal, a full stack software engineer in India building scalable products with Next.js, React, Node.js, and cloud infrastructure.",
  keywords: [
    "about Kunal Khandelwal",
    "full stack software engineer India",
    "MERN developer",
    "Next.js developer",
    "freelance software engineer",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Kunal Khandelwal",
    description:
      "Learn about Kunal Khandelwal's experience, education, and full stack development expertise.",
    url: "/about",
    type: "profile",
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
