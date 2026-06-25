"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BookOpen, Brain, Calendar, Clock, MoveLeft } from "lucide-react";

import { TransitionLink } from "@/components/misc/TransitionLayout";
import type { BlogFrontmatter } from "@/lib/blog";

type BlogPostDetailProps = {
  frontmatter: BlogFrontmatter;
  image: string;
  children: React.ReactNode;
};

const BlogPostDetail = ({
  frontmatter,
  image,
  children,
}: BlogPostDetailProps) => {
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto mt-20 px-4 sm:px-6 lg:px-8 pb-20">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8"
      >
        <TransitionLink
          href="/blog"
          className="inline-flex items-center gap-2 text-[#a0a0a0] hover:text-white transition-colors group"
        >
          <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to all posts</span>
        </TransitionLink>
      </motion.div>

      <motion.header
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-[#5b78f6]/10 text-[#5b78f6] rounded-full text-xs font-semibold uppercase tracking-wider">
            {frontmatter.tag}
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          {frontmatter.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-[#a0a0a0] text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{frontmatter.dateLabel}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{frontmatter.readTime}</span>
          </div>
        </div>
      </motion.header>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="mb-10 gray-gradient-2 border rounded-[30px] p-3 sm:p-4 overflow-hidden"
      >
        <div className="relative aspect-video rounded-[24px] overflow-hidden border border-[#303030]">
          <Image
            src={image}
            alt={frontmatter.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {(frontmatter.tldr || (frontmatter.preKnowledge?.length ?? 0) > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {(frontmatter.preKnowledge?.length ?? 0) > 0 ? (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="gray-gradient-2 border rounded-[24px] p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-5 text-[#5b78f6]">
                <BookOpen className="w-6 h-6" />
                <h2 className="font-bold uppercase tracking-wider text-base">
                  Pre-knowledge
                </h2>
              </div>
              <ul className="space-y-3 text-[#a0a0a0] text-base sm:text-lg leading-relaxed">
                {frontmatter.preKnowledge?.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#5b78f6] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}

          {frontmatter.tldr ? (
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="gray-gradient-2 border rounded-[24px] p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-5 text-[#5b78f6]">
                <Brain className="w-6 h-6" />
                <h2 className="font-bold uppercase tracking-wider text-base">
                  TL;DR
                </h2>
              </div>
              <p className="text-[#a0a0a0] text-base sm:text-lg leading-relaxed">
                {frontmatter.tldr}
              </p>
            </motion.div>
          ) : null}
        </div>
      )}

      <motion.article
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="gray-gradient-2 border rounded-[30px] p-6 sm:p-10 lg:p-12 text-base sm:text-lg"
      >
        {children}
      </motion.article>
    </div>
  );
};

export default BlogPostDetail;
