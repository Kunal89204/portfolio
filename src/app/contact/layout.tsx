import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact | Kunal Khandelwal",
  description:
    "Contact Kunal Khandelwal for freelance full stack development, product builds, and web app consulting.",
  keywords: [
    "hire full stack developer",
    "freelance developer India",
    "contact Kunal Khandelwal",
    "Next.js freelancer",
    "web app consulting",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Kunal Khandelwal",
    description:
      "Get in touch with Kunal Khandelwal for full stack development projects and collaborations.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
