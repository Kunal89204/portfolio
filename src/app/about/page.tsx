"use client"
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import profileimg from "../../../public/profileimg.png";
import arrow from "../../../public/arrow.png";
const About = () => {

  const experience = [
    {
      date: "2007 - 2009",
      title: "Framework Developer",
      company: "Quiro",
    },
    {
      date: "2007 - 2009",
      title: "Framework Developer",
      company: "Quiro",
    },
  ];

  const education = [
    {
      date: "2010-2022",
      title: "High School",
      institute: "Salwan Public School",
    },
    {
      date: "2023-2027",
      title: "B.Tech AIML",
      institute: "GGSIPU",
    },
  ];

  
  return (
    <div className="max-w-[1150px] mx-auto mt-20 px-4 sm:px-6 lg:px-8">
      <div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/3 p-4 sm:p-6 border gray-gradient-2 rounded-3xl z-10"
          >
            <Image
              src={profileimg}
              alt="about"
              width={1000}
              height={1000}
              className="w-full img-gradient rounded-3xl"
            />
          </motion.div>



          <div className="w-full lg:w-2/3 flex flex-col justify-between gap-6 lg:gap-0">
            <motion.div
             initial={{ scale: 0.5, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
             className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <Image
                src={
                  "https://wpriverthemes.com/landing/gridx-html/assets/images/star-2.png"
                }
                alt="star"
                width={1000}
                height={1000}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
              />
              <p className="text-3xl sm:text-5xl lg:text-7xl text-center font-bold">SELF-SUMMARY</p>
              <Image
                src={
                  "https://wpriverthemes.com/landing/gridx-html/assets/images/star-2.png"
                }
                alt="star"
                width={1000}
                height={1000}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
              />
            </motion.div>


            <motion.div
             initial={{ scale: 0.5, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
             className="gray-gradient-2 border p-6 sm:p-8 lg:p-10 rounded-3xl pt-20 sm:pt-28 lg:pt-36 relative">
              <Image
                src={arrow}
                alt="arrow"
                width={1000}
                height={1000}
                className="absolute top-4 sm:top-6 lg:top-0 left-6 sm:left-8 lg:left-10 w-8 sm:w-9 lg:w-10"
              />
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Kunal Khandelwal</h1>
              <p className="text-base sm:text-lg pt-2 leading-6 sm:leading-7">
                I am a software engineer with a passion for building scalable
                and efficient systems. I am a quick learner and I am always
                looking for new challenges.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 my-6 lg:my-8">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 gray-gradient-2 rounded-3xl p-6 sm:p-8 lg:p-10"
          >
            <p className="text-lg sm:text-xl font-bold">Experience</p>

            {experience.map((item, index) => (
              <div className="mt-4" key={index}>
                <p className="text-[gray] font-semibold text-sm sm:text-base">{item.date}</p>
                <p className="text-base sm:text-lg font-semibold">{item.title}</p>
                <p className="text-[gray] text-xs sm:text-sm">{item.company}</p>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
           className="w-full lg:w-1/2 gray-gradient-2 rounded-3xl p-6 sm:p-8 lg:p-10">
            <p className="text-lg sm:text-xl font-bold">Education</p>
            {education.map((item, index) => (
              <div className="mt-4" key={index}>
                <p className="text-[gray] font-semibold text-sm sm:text-base">{item.date}</p>
                <p className="text-base sm:text-lg font-semibold">{item.title}</p>
                <p className="text-[gray] text-xs sm:text-sm">{item.institute}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
