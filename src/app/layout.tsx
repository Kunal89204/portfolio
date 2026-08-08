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
  title: "Kunal Khandelwal | Software Engineer",
  description:
    "Kunal Khandelwal is a software engineer building full-stack applications, backend systems and infrastructure with TypeScript, React, Next.js, NestJS, PostgreSQL, Redis and Docker.",

  authors: [{ name: "Kunal Khandelwal", url: SITE_URL }],
  creator: "Kunal Khandelwal",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kunal Khandelwal | Software Engineer",
    description:
      "Software engineer building web applications, backend systems and technical experiments with TypeScript, React, Next.js, NestJS, PostgreSQL, Redis and Docker.",
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
    card: "summary_large_image",
    title: "Kunal Khandelwal | Software Engineer",
    description:
      "Software engineer building web applications, backend systems and technical experiments with TypeScript, React, Next.js, NestJS, PostgreSQL, Redis and Docker.",
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KB7M5KBL');
            `,
          }}
        />
        {/* End Google Tag Manager */}

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
