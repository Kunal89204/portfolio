import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Credentials | Kunal Khandelwal",
  description:
    "Experience, education, and technical skills of Kunal Khandelwal, full stack developer focused on React, Next.js, Node.js, and cloud systems.",
  keywords: [
    "full stack developer resume",
    "Kunal Khandelwal credentials",
    "software engineer skills",
    "React Node.js developer profile",
  ],
  alternates: {
    canonical: "/credentials",
  },
  openGraph: {
    title: "Credentials | Kunal Khandelwal",
    description:
      "Professional profile of Kunal Khandelwal covering experience, education, and development skills.",
    url: "/credentials",
    type: "profile",
  },
};

export default function CredentialsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
