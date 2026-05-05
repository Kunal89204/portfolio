export const SITE_URL = "https://kunalkhandelwal.dev";

export const SITE_NAME = "Kunal Khandelwal Portfolio";

export const DEFAULT_OG_IMAGE = "/profileimg.png";

export const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kunal Khandelwal",
  url: SITE_URL,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  jobTitle: "Full Stack Developer",
  sameAs: [
    "https://github.com/kunal89204",
    "https://www.linkedin.com/in/kunal89204/",
    "https://www.instagram.com/kunal89204/",
    "https://www.twitter.com/kunal89204/",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "AWS",
    "GCP",
    "Web Development",
    "Full Stack Development",
  ],
};

export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-IN",
};
