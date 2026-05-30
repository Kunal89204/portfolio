import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  DEFAULT_OG_IMAGE,
  PERSON_JSON_LD,
  SITE_NAME,
  SITE_URL,
  WEBSITE_JSON_LD,
} from "@/lib/site";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kunal Khandelwal | Full Stack Developer",
  description:
    "Portfolio of Kunal Khandelwal — a passionate full stack developer skilled in building scalable web and mobile applications using the MERN stack and modern technologies.",
  keywords: [
    "Kunal Khandelwal",
    "Full Stack Developer",
    "MERN Stack",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "Express.js",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Kunal Khandelwal", url: SITE_URL }],
  creator: "Kunal Khandelwal",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kunal Khandelwal | Full Stack Developer",
    description:
      "Explore Kunal Khandelwal’s professional portfolio showcasing full stack web development projects built using the MERN stack and modern web technologies.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Kunal Khandelwal full stack developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Kunal Khandelwal | Full Stack Developer",
    description:
      "Official portfolio of Kunal Khandelwal, a full stack developer specializing in the MERN stack and scalable web solutions.",
    images: [DEFAULT_OG_IMAGE],
  },
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XGFPCV10CX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XGFPCV10CX');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-black via-black/90 to-black bg-no-repeat `}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
        />

        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
