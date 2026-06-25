"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Building2, Globe, Layers, MoveLeft } from "lucide-react";

import { TransitionLink } from "@/components/misc/TransitionLayout";
import type { ProjectFrontmatter } from "@/lib/project";

type ProjectDetailProps = {
  frontmatter: ProjectFrontmatter;
  image: string;
  children: React.ReactNode;
};

const ProjectDetail = ({ frontmatter, image, children }: ProjectDetailProps) => {
  return (
    <div className="min-h-screen max-w-[1000px] mx-auto mt-20 px-4 sm:px-6 lg:px-8 pb-20">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8"
      >
        <TransitionLink
          href="/works"
          className="inline-flex items-center gap-2 text-[#a0a0a0] hover:text-white transition-colors group"
        >
          <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to all projects</span>
        </TransitionLink>
      </motion.div>

      <motion.header
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="mb-10"
      >
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="px-3 py-1 bg-[#5b78f6]/10 text-[#5b78f6] rounded-full text-xs font-semibold uppercase tracking-wider">
            {frontmatter.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[#a0a0a0] text-sm">
            <Building2 className="w-3.5 h-3.5" />
            {frontmatter.client}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          {frontmatter.title}
        </h1>

        {frontmatter.website ? (
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={frontmatter.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#303030] gray-gradient-2 text-sm font-medium hover:border-[#5b78f6]/40 hover:text-[#5b78f6] transition-colors group"
            >
              <Globe className="w-4 h-4" />
              Visit website
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        ) : null}
      </motion.header>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="mb-10 gray-gradient-2 border rounded-[30px] p-3 sm:p-4 overflow-hidden"
      >
        <div className="relative aspect-[16/8] rounded-[24px] overflow-hidden border border-[#303030]">
          <Image
            src={image}
            alt={frontmatter.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {(frontmatter.stack ?? []).length > 0 ? (
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mb-10 gray-gradient-2 border rounded-[24px] p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-4 text-[#5b78f6]">
            <Layers className="w-5 h-5" />
            <h2 className="font-bold uppercase tracking-wider text-sm">
              Tech Stack
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {(frontmatter.stack ?? []).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full border border-[#303030] bg-[#1a1a1a] text-[#d0d0d0] text-xs sm:text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ) : null}

      <motion.article
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="gray-gradient-2 border rounded-[30px] p-6 sm:p-10 lg:p-12"
      >
        {children}
      </motion.article>
    </div>
  );
};

export default ProjectDetail;
