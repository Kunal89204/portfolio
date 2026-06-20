"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
// import { SiGithub } from "@icons-pack/react-simple-icons";
// import { SiLinkedin } from "react-icons/si";
import { Linkedin, Github, Instagram, Twitter } from "iconoir-react";
import Link from "next/link";
import { education, experience, skills } from "@/lib/data";

const Credentials = () => {
  const socialLinks = [
    {
      icon: (
        <div className="border border-[#202020] hover:border-white p-3 rounded-full bg-[#191919] group hover:bg-white hover:text-black transition-all duration-300">
          <Linkedin
            className="group-hover:text-black transition-all duration-300"
            fontSize={18}
          />
        </div>
      ),
      link: "https://www.linkedin.com/in/kunal89204/",
      label: "LinkedIn",
    },
    {
      icon: (
        <div className="border border-[#202020] hover:border-white p-3 rounded-full bg-[#191919] group hover:bg-white hover:text-black transition-all duration-300">
          <Github
            className="group-hover:text-black transition-all duration-300"
            fontSize={18}
          />
        </div>
      ),
      link: "https://github.com/kunal89204",
      label: "GitHub",
    },
    {
      icon: (
        <div className="border border-[#202020] hover:border-white p-3 rounded-full bg-[#191919] group hover:bg-white hover:text-black transition-all duration-300">
          <Instagram
            className="group-hover:text-black transition-all duration-300"
            fontSize={18}
          />
        </div>
      ),
      link: "https://www.instagram.com/kunal89204/",
      label: "Instagram",
    },
    {
      icon: (
        <div className="border border-[#202020] hover:border-white p-3 rounded-full bg-[#191919] group hover:bg-white hover:text-black transition-all duration-300">
          <Twitter
            className="group-hover:text-black transition-all duration-300"
            fontSize={18}
          />
        </div>
      ),
      link: "https://www.twitter.com/kunal89204/",
      label: "Twitter",
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto mt-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 items-start">
        {/* Left Sidebar - Sticky */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-1/3 lg:sticky lg:top-20"
        >
          <div className="rounded-[40px] bg-[#131313] p-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="img-gradient w-full rounded-[30px] overflow-hidden mx-auto "
            >
              <Image
                src={"/profileimg.png"}
                alt="credentials"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="text-center py-8"
            >
              <h1 className="text-2xl sm:text-3xl font-bold">Kunal Khandelwal</h1>
              <p className="text-sm sm:text-base text-[#a0a0a0]">@kunal89204</p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                className="flex justify-center py-6 sm:py-8"
              >
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1, ease: "easeOut" }}
                    className="p-1 sm:p-2 rounded-full"
                  >
                    <a href={link.link} target="_blank" rel="noopener noreferrer">
                      {link.icon}
                    </a>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                className="flex flex-col gap-4"
              >
                <Link href="/contact">
                  <button className="bg-[#191919] cursor-pointer hover:bg-white hover:text-black transition-all duration-300 text-white px-4 py-3 rounded-xl w-full font-semibold text-sm sm:text-base">
                    Contact Me
                  </button>
                </Link>
                <Link href="/resume">
                  <button className="bg-transparent border border-[#191919] hover:bg-[#191919] hover:text-white hover:border-white transition-all duration-300 text-white px-4 py-3 rounded-xl w-full font-semibold text-sm sm:text-base">
                    View Resume
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content - Scrollable */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-full lg:w-2/3"
        >
          {/* About Me */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-xl sm:text-2xl font-bold">About Me</h2>
            <p className="text-base sm:text-lg text-[#a0a0a0] pt-6 sm:pt-10 leading-6 sm:leading-7">
            Full stack developer focused on building real products and solving complex problems. Strong in debugging, system integration, rapid learning, and leveraging AI responsibly to accelerate development without compromising engineering quality.
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="mt-16 sm:mt-20"
          >
            <h2 className="text-xl sm:text-2xl font-bold">Experience</h2>

            <div>
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2, ease: "easeOut" }}
                  style={{
                    marginTop: index === 0 ? "20px" : "40px",
                  }}
                >
                  <p className="text-[#404040] font-semibold text-sm sm:text-lg">
                    {item.date}
                  </p>
                  <p className="text-base sm:text-lg pt-1 sm:text-xl font-semibold text-[#5b78f6]">
                    {item.title}
                  </p>
                  <p className="text-[#404040] text-sm sm:text-base">
                    {item.company}
                  </p>
                  <p className="text-[#a0a0a0] text-sm sm:text-base mt-2">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            className="mt-16 sm:mt-20"
          >
            <h2 className="text-xl sm:text-2xl font-bold">Education</h2>
            <div>
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.2, ease: "easeOut" }}
                  style={{
                    marginTop: index === 0 ? "20px" : "40px",
                  }}
                >
                  <p className="text-[#404040] font-semibold text-sm sm:text-lg">
                    {item.date}
                  </p>
                  <p className="text-base sm:text-lg pt-1 sm:text-xl font-semibold text-[#5b78f6]">
                    {item.title}
                  </p>
                  <p className="text-[#404040] text-sm sm:text-base">
                    {item.institute}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
            className="mt-16 sm:mt-20 mb-10"
          >
            <h2 className="text-xl sm:text-2xl font-bold">Skills</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
              {skills.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.8 + index * 0.1, ease: "easeOut" }}
                >
                  <p className="text-[#606060] font-semibold text-sm sm:text-lg">{item.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Credentials;
