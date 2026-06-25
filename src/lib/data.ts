export const experience = [
  {
    date: "Feb 2025 - Present",
    title: "Full Stack Developer",
    company: "Self-employed",
    description:
      "Working independently on web projects for clients and personal products: full-stack builds with modern JavaScript stacks, plus cloud infrastructure on AWS, GCP, and similar platforms hosting, networking, CI/CD, and operations alongside application delivery. Managing scope, timelines, and delivery directly with stakeholders.",
  },
  {
    date: "Oct 2024 - Feb 2025",
    title: "Full Stack Developer",
    company: "Build In Bharat",
    description:
      "Worked at a web development agency on client websites and web apps end to end: responsive front ends, CMS and API integrations, and deployment. Collaborated with designers and stakeholders, iterated on feedback, and kept projects maintainable and performant.",
  },
  {
    date: "Jan 2024 - Sep 2024",
    title: "Frontend Developer",
    company: "CodeFolder",
    description:
      "Built and maintained user interfaces with JavaScript, React, and modern CSS: reusable components, responsive layouts, and performance-minded front-end work. Collaborated with designers and backend engineers, shipped features through code review, and kept the UI layer maintainable.",
  },
];

export const education = [
  {
    date: "2010-2022",
    title: "High School",
    institute: "Salwan Public School",
    description:
      "Completed secondary education with a strong base in science and mathematics, setting up for undergraduate engineering.",
  },
  {
    date: "2023-2027",
    title: "B.Tech in Artificial Intelligence & Machine Learning",
    institute: "GGSIPU",
    description:
      "Pursuing a B.Tech focused on AI and ML, including data structures, algorithms, machine learning, deep learning, and core software engineering.",
  },
];

export const skills = [
  // Core
  { name: "Node.js" },
  { name: "TypeScript" },
  { name: "REST APIs" },

  // Frontend
  { name: "React.js" },
  { name: "Next.js" },
  { name: "React Native" },

  // Backend & Real-Time
  { name: "Express.js" },
  { name: "Nest.js" },
  { name: "WebSockets (Socket.IO)" },
  { name: "GraphQL" },

  // Databases & Caching
  { name: "MongoDB" },
  { name: "PostgreSQL" },
  { name: "Redis" },

  // Cloud & Infrastructure
  { name: "AWS (EC2, S3)" },
  { name: "Docker" },
  { name: "Firebase" },
  { name: "Cloudinary" },

  // Performance & Testing
  { name: "Caching" },
  { name: "Rate Limiting" },
  { name: "Load Testing (K6)" },

  // Tools
  { name: "Git" },
  { name: "Postman" },
];

export type Project = {
  title: string;
  category: string;
  image: string;
  url: string;
  slug?: string;
};

export const projects: Project[] = [
  // The following projects must be kept on top in the given order
  {
    title: "Admatrica",
    category: "Freelance",
    image: "/images/works/admatrica.png",
    url: "https://admatrica.at/",
    slug: "admatrica",
  },
  {
    title: "Codefolder",
    category: "Personal",
    image: "/images/works/codefolder.png",
    url: "https://codefolder.vercel.app/",
  },
  {
    title: "Envesty",
    category: "Freelance",
    image: "/images/works/envesty.png",
    url: "https://www.envesty.in/",
  },
  {
    title: "Rent for Reel",
    category: "Freelance",
    image: "/images/works/r4r.png",
    url: "https://www.rentforreel.in/",
    slug: "rentforreel",
  },
  {
    title: "Tvideo",
    category: "Personal",
    image: "/images/works/tvideo.png",
    url: "https://tvideo.kunalkhandelwal.dev/",
  },
  {
    title: "StudyByU",
    category: "Freelance",
    image: "/images/works/studybyu.png",
    url: "https://studybyu.com/",
  },
  {
    title: "QuantumWhale",
    category: "Freelance",
    image: "/images/works/qw.png",
    url: "https://thequantumwhale.com/",
    slug: "thequantumwhale",
  },
  // Rest of the projects (order does not matter, keeping original order below, minus the ones just listed)
  {
    title: "AraBazaar",
    category: "Founding Engineer",
    image: "/images/works/arabazaar.png",
    url: "https://arabazaar.com/",
    slug: "arabazaar",
  },
  {
    title: "Gymverse Assignment",
    category: "Personal",
    image: "/images/works/gymverse.png",
    url: "https://gymverseassignment.vercel.app/",
  },
  {
    title: "Camio PPF",
    category: "Freelance",
    image: "/images/works/camio.png",
    url: "https://camioppf.com/",
  },
  {
    title: "Quiro",
    category: "Freelance",
    image: "/images/works/quiro.png",
    url: "https://quiro-prod.vercel.app/",
  },
  {
    title: "MACH Visuals",
    category: "Freelance",
    image: "/images/works/mach.png",
    url: "https://machvisuals.com/",
  },
  {
    title: "Tatsat Yoga School",
    category: "Freelance",
    image: "/images/works/tatsat.png",
    url: "https://www.tatsatyogaschool.org/",
  },
  {
    title: "VisionSphere",
    category: "Freelance",
    image: "/images/works/vs.png",
    url: "https://www.visionsphere361.com/",
  },
  // {
  //   title: "Dot-com",
  //   category: "Personal",
  //   image: "/images/works/dot-com.png",
  //   url: "https://dot-com.vercel.app/",
  // },
  {
    title: "MULAH",
    category: "Freelance",
    image: "/images/works/mulah.png",
    url: "https://www.xn--mlah-0ra.com/",
  },
  {
    title: "CAA Beige",
    category: "Freelance",
    image: "/images/works/caa.png",
    url: "https://caa-beige.vercel.app/",
  },
  {
    title: "Markzenip",
    category: "Freelance",
    image: "/images/works/markzenip.png",
    url: "https://markzenip.com/",
  },
  {
    title: "TextureMaps",
    category: "Freelance",
    image: "/images/works/texturemaps.png",
    url: "https://www.texturemaps.co.in/",
  },
  {
    title: "Altique Silk",
    category: "Freelance",
    image: "/images/works/altique.png",
    url: "https://altique.in/",
  },
  {
    title: "Conscious India",
    category: "Freelance",
    image: "/images/works/mvp.png",
    url: "https://conscious-india.vercel.app/",
  },
  {
    title: "Bhashabandhu",
    category: "Freelance",
    image: "/images/works/bhashabandhu.png",
    url: "https://www.bhashabandhu.com/",
  },
];