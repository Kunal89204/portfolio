import React from "react";
import {
  SiReact,
  SiGithub,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiDocker,
  SiRedis,
  SiAndroid,
  SiApple,
  SiWeb3dotjs,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";
import { motion } from "motion/react";
import { FaLinkedin } from "react-icons/fa6";
import { TransitionLink } from "../misc/TransitionLayout";
import profileimg from "../../../public/profileimg.png";

const AnimatedShadow = () => (
  <motion.div
    initial={{ opacity: 0.5, scale: 1 }}
    animate={{
      opacity: [0.4, 0.7, 0.4],
      scale: [1, 1.08, 1],
      rotate: [0, 7, -7, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute inset-0 z-0 pointer-events-none rounded-[30px]"
    style={{
      filter: "blur(35px)",
      background:
        "radial-gradient(circle at 70% 35%, #3178c6 25%, #00c2ff 65%, transparent 80%)",
      opacity: 0.6,
      mixBlendMode: "plus-lighter",
    }}
  />
);

const Grid = () => {
  return (
    <div className=" px-6 lg:px-10 max-w-[1200px] mx-auto mt-20">
      {/* First Row */}
      <div className="lg:flex gap-6 ">
        {/* Profile Gris box */}
        <TransitionLink href={"/about"} className="lg:w-1/2 w-full ">
          <motion.div
           className="sm:flex sm:justify-start relative border items-center h-full cursor-pointer group gray-gradient rounded-[30px] p-6 lg:p-10 gap-6 transition-all duration-300">
            <Image
              src={"https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"}
              alt=""
              className="absolute bottom-8 right-8 lg:bottom-5 lg:right-5  w-10 h-10 opacity-40 group-hover:opacity-100 transition-all duration-300 "
              width={1000}
              height={1000}
            />
            <Image
              src={profileimg.src}
              alt="profile"
              width={1000}
              height={1000}
              className="img-gradient w-[200px] lg:w-[50%] mx-auto sm:mx-0  rounded-tr-3xl rounded-bl-3xl z-50"
            />

            <div className="z-10 mt-10">
              <p className="text-[#a0a0a0] lg:text-sm font-medium">
                A Full Stack Developer
              </p>
              <h2 className="text-4xl font-semibold">Kunal Khandelwal</h2>
              <p className="py-4 text-[#a0a0a0] ">
                I am a full stack developer based in India.
              </p>
            </div>
          </motion.div>
        </TransitionLink>

        {/* Projects and loop grid box */}
        <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
          <motion.div
             initial={{ scale: 0.5, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
           className="relative overflow-hidden border gray-gradient  rounded-full w-full py-3 h-14">
            <motion.div
              className="absolute top-0 left-0 flex items-center h-full whitespace-nowrap"
              initial={{ x: 0 }}
              animate={{ x: ["0%", "-30%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 8,
                ease: "linear",
              }}
              style={{ minWidth: "200%" }}
            >
              <span className="px-4 text-sm lg:text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                &nbsp;•&nbsp;
              </span>
              <span className="px-4 text-sm lg:text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                &nbsp;•&nbsp;
              </span>
              <span className="px-4 text-sm lg:text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                &nbsp;•&nbsp;
              </span>
              <span className="px-4 text-sm lg:text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                &nbsp;•&nbsp;
              </span>
              <span className="px-4 text-sm lg:text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                &nbsp;•&nbsp;
              </span>
              <span className="px-4 text-sm lg:text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                &nbsp;•&nbsp;
              </span>
            </motion.div>
          </motion.div>

          <div className="sm:flex gap-6 mt-6">
            <TransitionLink href={"/ss"} className="lg:w-1/2 w-full">
              <motion.div
                 initial={{ scale: 0.5, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
               className=" gray-gradient border group rounded-[30px] p-4 lg:aspect-[1/0.9]">
                <Image
                  src={"https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"}
                  alt=""
                  width={1000}
                  height={1000}
                  className="absolute bottom-5 right-5 w-10 h-10 opacity-40 group-hover:opacity-100 transition-all duration-300"
                />
                <Image
                  src={
                    "https://wpriverthemes.com/landing/gridx-html/assets/images/sign.png"
                  }
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full"
                />

                <p className="text-xs text-[#a0a0a0] mt-6">MORE ABOUT ME</p>
                <p className="text-xl">Credentials</p>
              </motion.div>
            </TransitionLink>
            <TransitionLink href={"/works"} className="lg:w-1/2 w-full ">
              <motion.div
                 initial={{ scale: 0.5, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                 className="relative gray-gradient border group rounded-[30px] p-4 h-full mt-8 sm:mt-0 overflow-hidden"
              >
                {/* Animated Gradient Shadow */}
                <AnimatedShadow />
                <Image
                  src={
                    "https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                  }
                  alt=""
                  width={1000}
                  height={1000}
                  className="absolute bottom-5 right-5 w-10 h-10 opacity-40 group-hover:opacity-100 transition-all duration-300 z-10"
                />
                <Image
                  src={
                    "https://wpriverthemes.com/landing/gridx-html/assets/images/my-works.png"
                  }
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full z-20 relative"
                />
                <p className="text-xs text-[#a0a0a0] mt-6 z-20 relative">
                  SHOWCASE
                </p>
                <p className="text-xl z-20 relative">Projects</p>
              </motion.div>
            </TransitionLink>
          </div>
        </div>
      </div>

      {/* Second Row */}

      <div className="lg:flex  my-8 gap-6">
        {/* First column */}
        <TransitionLink href={"/"} className=" lg:w-1/4 w-full">
          <motion.div
             initial={{ scale: 0.5, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
           className="relative  gray-gradient border group rounded-[30px] p-4 lg:aspect-[1/0.9]">
            <Image
              src={"https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"}
              alt=""
              width={1000}
              height={1000}
              className="absolute bottom-5 right-5 w-10 h-10 opacity-40 group-hover:opacity-100 transition-all duration-300"
            />
            <Image
              src={
                "https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/gfonts.png"
              }
              alt=""
              width={1000}
              height={1000}
              className="w-full"
            />

            <div>
              <p className="text-xs text-[#666666] font-semibold"> READ</p>
              <p className="text-lg  py-2 font-semibold">Blogs</p>
            </div>
          </motion.div>
        </TransitionLink>

        {/* Second column */}

        <motion.div
           initial={{ scale: 0.5, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
         className="lg:w-2/4 w-full gray-gradient border rounded-[30px] p-4 my-6 lg:my-0">
          <div className="flex justify-around py-3 lg:py-6">
            <SiMongodb size={44} className="z-10 scale-75" />
            <SiExpress size={44} className="z-10 scale-75" />
            <SiReact size={44} className="z-10 scale-75" />
            <SiNodedotjs size={44} className="z-10 scale-75" />
            <SiDocker size={44} className="z-10 scale-75" />
            <SiRedis size={44} className="z-10 scale-75" />
          </div>

          <div className="lg:pt-10 pt-6 pb-4">
            <p className="text-xs text-[#666666]">TECH STACK</p>
            <p className="text-xl  font-semibold">MERN Stack</p>
          </div>
        </motion.div>

        {/* Third column */}
        <motion.div
           initial={{ scale: 0.5, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
         className="lg:w-1/4 w-full gray-gradient border rounded-[30px] p-4 lg:aspect-[1/0.9] ">
          <div className="gray-gradient border-2 flex gap-2 p-4 justify-center rounded-[30px]">
            <div className="p-5 rounded-full gray-gradient border-2 group group-hover:bg-white transition-all duration-300 cursor-pointer">
              <FaLinkedin
                size={40}
                className="group-hover:text-black  text-white transition-all duration-300 "
              />
            </div>
            <div className="p-5 rounded-full gray-gradient hover-bg border-2 group group-hover:bg-white  transition-all duration-300 cursor-pointer">
              <SiGithub
                size={40}
                className="group-hover:text-black  text-white transition-all duration-300 "
              />
            </div>
          </div>

          <div className="lg:absolute bottom-5 left-5 my-4 lg:my-0">
            <p className="text-xs text-[#666666] font-semibold"> BLOG</p>
            <p className="text-lg  lg:py-2 font-semibold">Profiles</p>
          </div>
        </motion.div>
      </div>

      {/* Third Row */}
      <div className="sm:flex gap-6">
        <TransitionLink href={"/"} className="lg:w-1/3 w-full h-full">
          <motion.div
             initial={{ scale: 0.5, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
           className="gray-gradient border rounded-[30px] p-4 ">
            <div className="flex justify-around py-3">
              <SiAndroid size={40} className="z-10" />
              <SiApple size={40} className="z-10" />
              <SiWeb3dotjs size={40} className="z-10" />
            </div>

            <div className="pt-10 pb-4">
              <p className="text-xs text-[#666666]">SPECIALIZATION</p>
              <p className="text-xl  font-semibold">Services offering</p>
            </div>
          </motion.div>
        </TransitionLink>

        <TransitionLink
          href={"/"}
          className="lg:w-2/3 w-full h-full relative group "
        >
          <motion.div
             initial={{ scale: 0.5, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
           className="gray-gradient border rounded-[30px] p-4 z-10 mt-8 sm:mt-0">
            <Image
              src={"https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"}
              alt=""
              width={1000}
              height={1000}
              className="absolute bottom-5 right-5 w-10 h-10 opacity-40 group-hover:opacity-100 transition-all duration-300 -z-10"
            />
            <div className="text-5xl z-10 lg:pt-13 pb-4 max-w-[200px] lg:max-w-none">
              <p className="z-10">Let&apos;s</p>
              <p>
                work <span className="text-blue-700">together.</span>
              </p>
            </div>
          </motion.div>
        </TransitionLink>
      </div>
    </div>
  );
};

export default Grid;
