import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TransitionLayout from "@/components/misc/TransitionLayout";

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
  authors: [{ name: "Kunal Khandelwal", url: "https://kunalkhandelwal.dev" }],
  creator: "Kunal Khandelwal",
  openGraph: {
    title: "Kunal Khandelwal | Full Stack Developer",
    description:
      "Explore Kunal Khandelwal’s professional portfolio showcasing full stack web development projects built using the MERN stack and modern web technologies.",
    url: "https://kunalkhandelwal.dev",
    siteName: "Kunal Khandelwal Portfolio",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Kunal Khandelwal | Full Stack Developer",
    description:
      "Official portfolio of Kunal Khandelwal, a full stack developer specializing in the MERN stack and scalable web solutions.",
  },
  metadataBase: new URL("https://kunalkhandelwal.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TransitionLayout>
          <Navbar />
          {children}
        <Footer />
        </TransitionLayout>
      </body>
    </html>
  );
}
