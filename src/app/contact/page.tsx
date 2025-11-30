"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen px-6 lg:px-10 max-w-[800px] mx-auto mt-20 flex flex-col items-center">
      {/* Header */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
      >
        <Image
          src="https://wpriverthemes.com/landing/gridx-html/assets/images/star-2.png"
          alt="star"
          width={50}
          height={50}
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
        />
        <h1 className="text-3xl sm:text-5xl lg:text-7xl text-center font-bold">
          CONTACT
        </h1>
        <Image
          src="https://wpriverthemes.com/landing/gridx-html/assets/images/star-2.png"
          alt="star"
          width={50}
          height={50}
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
        />
      </motion.div>

      {/* Info and Form */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="gray-gradient border rounded-[30px] p-8 mt-12 w-full max-w-xl shadow-lg relative overflow-hidden"
      >
   
        <div className="mb-8">
          <p className="text-[#a0a0a0] mb-2">
            Feel free to get in touch with me for any project or collaboration!
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="mailto:kunalkhandelwalcontact@gmail.com"
              className="text-sm text-white bg-[#181818] px-4 py-2 rounded-md font-medium hover:bg-[#252525] transition"
            >
              kunalkhandelwalcontact@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/kunal-khandelwal-19a52127b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white bg-[#181818] px-4 py-2 rounded-md font-medium hover:bg-[#252525] transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
        {/* Simple Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            required
            className="border bg-transparent rounded-md px-4 py-2 outline-none focus:ring-2 ring-[#222] transition"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            required
            className="border bg-transparent rounded-md px-4 py-2 outline-none focus:ring-2 ring-[#222] transition"
            placeholder="Your Email"
          />
          <textarea
            name="message"
            rows={4}
            required
            className="border bg-transparent rounded-md px-4 py-2 outline-none focus:ring-2 ring-[#222] transition"
            placeholder="Your Message"
          />
          <button
            type="submit"
            className="mt-2 bg-[#252525] hover:bg-[#1a1a1a] text-white py-2 rounded-md font-bold transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
