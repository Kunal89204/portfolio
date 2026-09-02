export const SITE_URL = "https://kunalkhandelwal.dev";

export const SITE_NAME = "Kunal Khandelwal";

export const DEFAULT_OG_IMAGE = "/profileimg.png";

export const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,

  name: "Kunal Khandelwal",

  url: SITE_URL,

  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,

  jobTitle: "Software Engineer",

  description:
    "Software engineer building full-stack applications, backend systems, infrastructure, and technical projects with TypeScript, React, Next.js, NestJS, PostgreSQL, Redis, and Docker.",

  sameAs: [
    "https://github.com/kunal89204",
    "https://www.linkedin.com/in/kunal89204/",
    "https://www.instagram.com/kunal_89204/",
    "https://www.twitter.com/kunal89204/",
  ],

  knowsAbout: [
    "Software Engineering",
    "Full Stack Development",
    "Backend Development",
    "TypeScript",
    "React",
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Cloud Infrastructure",
    "WebSocket Development",
    "Blockchain",
    "Distributed Systems",
  ],
};

export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,

  name: "Kunal Khandelwal",

  url: SITE_URL,

  inLanguage: "en-IN",

  description:
    "The personal website of Kunal Khandelwal, a software engineer building full-stack applications, backend systems, infrastructure, and technical projects.",

  publisher: {
    "@id": `${SITE_URL}/#person`,
  },

  mainEntity: {
    "@id": `${SITE_URL}/#person`,
  },
};
