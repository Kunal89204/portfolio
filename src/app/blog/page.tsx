"use client";

import Image from "next/image";
import { motion } from "motion/react";
import React from "react";
import { TransitionLink } from "@/components/misc/TransitionLayout";

const STAR_SRC =
  "https://wpriverthemes.com/landing/gridx-html/assets/images/star-2.png";

type BlogPost = {
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  readTime: string;
  href?: string;
  external?: boolean;
};

const posts: BlogPost[] = [
  {
    tag: "Engineering",
    title: "Shipping full-stack features without losing momentum",
    excerpt:
      "How I break down client work—from scoping and APIs to UI polish—so delivery stays predictable.",
    date: "Apr 2025",
    readTime: "6 min read",
    href: "/blog/shipping-full-stack-features-without-losing-momentum",
  },
  {
    tag: "Cloud",
    title: "Practical notes on AWS, GCP, and day-to-day infra",
    excerpt:
      "Hosting, networking, and CI/CD patterns I reach for when a project leaves localhost.",
    date: "Mar 2025",
    readTime: "8 min read",
  },
  {
    tag: "Frontend",
    title: "React patterns that keep larger UIs maintainable",
    excerpt:
      "Composition, boundaries, and a few habits that save refactors later.",
    date: "Feb 2025",
    readTime: "5 min read",
  },
  {
    tag: "Career",
    title: "From agency work to self-employed: what stayed the same",
    excerpt:
      "Communication, estimates, and quality bars—lessons that transfer across every setup.",
    date: "Jan 2025",
    readTime: "4 min read",
  },
];

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  const inner = (
    <>
      <p className="text-[#a0a0a0] text-sm font-semibold uppercase tracking-wide">
        {post.tag}
      </p>
      <h2 className="font-semibold mt-2 text-xl sm:text-2xl">{post.title}</h2>
      <p className="text-[#a0a0a0] text-sm sm:text-base mt-3 leading-relaxed">
        {post.excerpt}
      </p>
      <div className="flex flex-wrap items-center gap-3 mt-5 text-sm text-[#606060]">
        <span>{post.date}</span>
        <span className="text-[#404040]">·</span>
        <span>{post.readTime}</span>
        {!post.href && (
          <>
            <span className="text-[#404040]">·</span>
            <span className="text-[#5b78f6] font-medium">Coming soon</span>
          </>
        )}
      </div>
    </>
  );

  const cardClass = `gray-gradient-2 border rounded-[30px] p-6 sm:p-8 relative group h-full flex flex-col ${
    post.href ? "cursor-pointer hover:border-[#303030] transition-colors" : ""
  }`;

  if (post.href) {
    return (
      <motion.article
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15 + index * 0.08, ease: "easeOut" }}
      >
        <a
          href={post.href}
          target={post.external ? "_blank" : undefined}
          rel={post.external ? "noopener noreferrer" : undefined}
          className={`block ${cardClass}`}
        >
          {inner}
          {post.external && (
            <Image
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
              alt=""
              width={40}
              height={40}
              className="absolute bottom-5 right-5 w-8 h-8 sm:w-10 sm:h-10 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}
        </a>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.08, ease: "easeOut" }}
    >
      <div className={cardClass}>{inner}</div>
    </motion.article>
  );
}

const Blog = () => {
  return (
    <div className="min-h-screen max-w-[1150px] mx-auto mt-20 px-4 sm:px-6 lg:px-8 pb-16">
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-10"
      >
        <Image
          src={STAR_SRC}
          alt=""
          width={1000}
          height={1000}
          className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
        />
        <p className="text-3xl sm:text-5xl lg:text-7xl text-center font-bold">
          BLOG
        </p>
        <Image
          src={STAR_SRC}
          alt=""
          width={1000}
          height={1000}
          className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
        />
      </motion.div>

      <motion.div
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="gray-gradient border rounded-3xl p-6 sm:p-10 mb-12 sm:mb-14"
      >
        <p className="text-[#a0a0a0] text-sm font-semibold uppercase tracking-wide">
          Writing
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold mt-2">
          Notes on building for the web
        </h1>
        <p className="text-[#a0a0a0] text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
          Longer-form thoughts on full-stack work, cloud infra, and frontend
          craft—same stack and standards as the rest of this portfolio. New
          posts will land here as I publish them.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {posts.map((post, index) => (
          <PostCard key={post.title} post={post} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
        className="mt-14 sm:mt-20"
      >
        <TransitionLink
          href="/contact"
          className="block gray-gradient-2 border rounded-[30px] p-8 sm:p-10 relative group overflow-hidden hover:border-[#303030] transition-colors"
        >
          <Image
            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
            alt=""
            width={40}
            height={40}
            className="absolute bottom-5 right-5 w-10 h-10 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
          />
          <p className="text-xs text-[#a0a0a0] font-semibold uppercase tracking-wide">
            Collaborate
          </p>
          <p className="text-2xl sm:text-4xl font-bold mt-2 max-w-md">
            Have a topic or project in mind?{" "}
            <span className="text-[#5b78f6]">Let&apos;s talk.</span>
          </p>
        </TransitionLink>
      </motion.div>
    </div>
  );
};

export default Blog;
