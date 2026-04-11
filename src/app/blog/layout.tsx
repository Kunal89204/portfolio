import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog | Kunal Khandelwal",
  description:
    "Writing from Kunal Khandelwal on full-stack development, cloud infrastructure, and frontend engineering.",
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
