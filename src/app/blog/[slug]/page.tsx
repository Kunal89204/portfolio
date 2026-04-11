"use client";

import Image from "next/image";
import { motion } from "motion/react";
import React from "react";
import { TransitionLink } from "@/components/misc/TransitionLayout";
import { MoveLeft, Calendar, Clock, BookOpen, Brain, CheckCircle2, MessageSquare } from "lucide-react";

const STAR_SRC = "https://wpriverthemes.com/landing/gridx-html/assets/images/star-2.png";

const BlogPostDetail = () => {
    return (
        <div className="min-h-screen max-w-[900px] mx-auto mt-20 px-4 sm:px-6 lg:px-8 pb-16">
            {/* Back Button */}
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

            {/* Header Section */}
            <motion.header
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="mb-12"
            >
                <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#5b78f6]/10 text-[#5b78f6] rounded-full text-xs font-semibold uppercase tracking-wider">
                        Engineering
                    </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Shipping full-stack features without losing momentum
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-[#a0a0a0] text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>April 5, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>6 min read</span>
                    </div>
                </div>
            </motion.header>

            {/* Featured Image */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="mb-12 rounded-[30px] overflow-hidden border border-[#303030] relative aspect-video"
            >
                <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                    alt="Featured image"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* Pre-knowledge & TL;DR Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="gray-gradient-2 border rounded-[24px] p-6 lg:p-8"
                >
                    <div className="flex items-center gap-3 mb-4 text-[#5b78f6]">
                        <BookOpen className="w-5 h-5" />
                        <h3 className="font-bold uppercase tracking-wider text-sm">Pre-knowledge</h3>
                    </div>
                    <ul className="space-y-2 text-[#a0a0a0] text-sm leading-relaxed">
                        <li>• Familiarity with React & Next.js</li>
                        <li>• Basic understanding of REST/GraphQL APIs</li>
                        <li>• Concepts of Client vs Server Components</li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="gray-gradient-2 border rounded-[24px] p-6 lg:p-8"
                >
                    <div className="flex items-center gap-3 mb-4 text-[#5b78f6]">
                        <Brain className="w-5 h-5" />
                        <h3 className="font-bold uppercase tracking-wider text-sm">TL;DR</h3>
                    </div>
                    <p className="text-[#a0a0a0] text-sm leading-relaxed">
                        Break down features into atomic units, use strong typing for APIs early, and leverage
                        component-driven development to maintain high velocity without sacrificing code quality.
                    </p>
                </motion.div>
            </div>

            {/* Body Content */}
            <motion.article
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="prose prose-invert prose-lg max-w-none mb-16 text-[#e0e0e0] leading-loose"
            >
                <p>
                    Building features at scale often feels like a balancing act. On one side, there's the
                    pressure to deliver quickly; on the other, the need to maintain a codebase that doesn't
                    turn into a legacy nightmare in three months.
                </p>
                <h2 className="text-2xl font-bold mt-10 mb-4 text-white">The Atomic Breakdown</h2>
                <p>
                    I've found that the secret to consistent momentum is breaking every feature down into
                    its smallest testable pieces before a single line of code is written. This starts with
                    the data model and flows through the API contract up to the UI components.
                </p>
                <blockquote className="border-l-4 border-[#5b78f6] pl-6 py-2 my-10 italic text-[#a0a0a0]">
                    "Velocity is high speed in a specific direction. Without direction, you just have noise."
                </blockquote>
                <p>
                    When you have a clear API contract, the frontend and backend can progress in parallel.
                    Using tools like Prisma and Zod ensures that the types we define on the server are
                    shared or reflected on the client, catching bugs before they even reach a browser.
                </p>
                <h2 className="text-2xl font-bold mt-10 mb-4 text-white">UI Refinement</h2>
                <p>
                    Polish isn't something you add at the end; it's a habit you maintain throughout the
                    process. By using a consistent design system and component primitives, we can build
                    complex interfaces that feel cohesive and premium without reinventing the wheel
                    every time we need a button.
                </p>
            </motion.article>

            {/* Crux / Takeaways Section */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="gray-gradient border rounded-[30px] p-8 sm:p-12 mb-16"
            >
                <div className="flex items-center gap-3 mb-6 text-[#5b78f6]">
                    <CheckCircle2 className="w-6 h-6" />
                    <h2 className="text-2xl font-bold">Key Takeaways</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white">Plan the Contract</h4>
                        <p className="text-[#a0a0a0] text-sm leading-relaxed">
                            Define your API and types first. It prevents integration headaches later.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white">Component Architecture</h4>
                        <p className="text-[#a0a0a0] text-sm leading-relaxed">
                            Build reusable atoms and molecules. It makes iterating on complex UIs much faster.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white">Test Early</h4>
                        <p className="text-[#a0a0a0] text-sm leading-relaxed">
                            Don't wait for the full feature. Verify individual logic branches frequently.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-white">Iterative Polish</h4>
                        <p className="text-[#a0a0a0] text-sm leading-relaxed">
                            Maintain a high quality bar as you build, not as an afterthought.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Comments Section Dummy */}
            <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border-t border-[#303030] pt-12"
            >
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3 text-white">
                        <MessageSquare className="w-6 h-6" />
                        <h2 className="text-2xl font-bold">Comments (3)</h2>
                    </div>
                    <button className="px-5 py-2 bg-[#5b78f6] hover:bg-[#4a65e0] text-white rounded-xl text-sm font-semibold transition-colors">
                        Post a comment
                    </button>
                </div>

                <div className="space-y-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex gap-4 p-6 gray-gradient-2 border border-[#252525] rounded-[20px]">
                            <div className="w-10 h-10 rounded-full bg-[#303030] flex-shrink-0 flex items-center justify-center font-bold text-[#5b78f6]">
                                {String.fromCharCode(64 + i)}
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h4 className="font-semibold text-white">User {i}</h4>
                                    <span className="text-xs text-[#606060]">2 hours ago</span>
                                </div>
                                <p className="text-[#a0a0a0] text-sm leading-relaxed">
                                    Great insights on the API contract part. I've found that using Zod with
                                    React Query really makes the whole stack feel solid.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Footer Navigation */}
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-20 pt-10 border-t border-[#303030] flex items-center justify-center"
            >
                <Image
                    src={STAR_SRC}
                    alt=""
                    width={40}
                    height={40}
                    className="opacity-20 animate-pulse"
                />
            </motion.div>
        </div>
    );
};

export default BlogPostDetail;