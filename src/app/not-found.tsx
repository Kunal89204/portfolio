"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const NotFound = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "#000" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          {/* Blurred, minimal glow */}
          <motion.div
            className="absolute inset-0 rounded-full blur-2xl opacity-40"
            style={{
              background:
                "radial-gradient(circle at 50% 60%, #fff2 0%, #131313 60%, transparent 90%)",
            }}
            initial={{ scale: 0.8, opacity: 0.2 }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          <motion.span
            className="z-10 relative text-[8rem] sm:text-[10rem] lg:text-[12rem] text-transparent bg-clip-text bg-gradient-to-br from-white via-[#fff] to-[#131313] select-none drop-shadow-lg"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            404
          </motion.span>
        </div>
        <motion.h1
          className="text-3xl sm:text-4xl  text-white text-center tracking-tight"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6, type: "spring" }}
        >
          Page not found
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-[#292929] text-center max-w-md"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
        >
          {/* Sorry, the page you&rsquo;re looking for doesn&rsquo;t exist or has been moved. */}
        </motion.p>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <Link
            href="/"
            className="mt-4 px-6 py-2 rounded-full"
            style={{
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: "600",
              fontSize: "1.125rem",
              boxShadow: "0 2px 24px 0 #fff4",
              transition: "transform 0.15s",
              display: "inline-block",
            }}
          >
            Go Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;