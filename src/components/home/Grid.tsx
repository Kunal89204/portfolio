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
import Link from "next/link";
import profileimg from "../../../public/profileimg.png";

const Grid = () => {
  return (
    <div className=" px-6 lg:px-10 max-w-[1200px] mx-auto mt-20">
      {/* First Row */}
      <div className="lg:flex gap-6 ">
        {/* Profile Gris box */}
        <Link href={"/about"} className="lg:w-1/2 w-full ">
          <motion.div className="sm:flex sm:justify-start relative border items-center h-full cursor-pointer group gray-gradient rounded-[30px] p-6 lg:p-10 gap-6 transition-all duration-300">
            <img
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
              alt=""
              className="absolute bottom-8 right-8 lg:bottom-5 lg:right-5  w-10 h-10 opacity-40 group-hover:opacity-100 transition-all duration-300 "
            />
            <Image
              src={profileimg}
              alt=""
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
        </Link>

        {/* Projects and loop grid box */}
        <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
          <div className="relative overflow-hidden border gray-gradient  rounded-full w-full py-3 h-14">
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
              <span className="px-4 text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                &nbsp;•&nbsp;
              </span>
              <span className="px-4 text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                &nbsp;•&nbsp;
              </span>
              <span className="px-4 text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                &nbsp;•&nbsp;
              </span>
              <span className="px-4 text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                &nbsp;•&nbsp;
              </span>
              <span className="px-4 text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                &nbsp;•&nbsp;
              </span>
              <span className="px-4 text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                &nbsp;•&nbsp;
              </span>
            </motion.div>
          </div>

          <div className="sm:flex gap-6 pt-7 ">
            <Link href={"/ss"} className="lg:w-1/2 w-full">
              <div className=" gray-gradient border group rounded-[30px] p-4 lg:aspect-[1/0.9]">
                <img
                  src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                  alt=""
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
              </div>
            </Link>
            <Link href={"/projects"} className="lg:w-1/2 w-full ">
              <div className=" gray-gradient border group rounded-[30px] p-4 h-full mt-8 sm:mt-0">
                <img
                  src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                  alt=""
                  className="absolute bottom-5 right-5 w-10 h-10 opacity-40 group-hover:opacity-100 transition-all duration-300"
                />
                <Image
                  src={
                    "https://wpriverthemes.com/landing/gridx-html/assets/images/my-works.png"
                  }
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full"
                />
                <p className="text-xs text-[#a0a0a0] mt-6">SHOWCASE</p>
                <p className="text-xl">Projects</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Second Row */}

      <div className="sm:flex  my-8 gap-6">
        {/* First column */}
        <Link href={"/"} className="lg:w-1/4 w-full">
          <div className="relative  gray-gradient border group rounded-[30px] p-4 lg:aspect-[1/0.9]">
            <img
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
              alt=""
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
          </div>
        </Link>

        {/* Second column */}

        <div className="lg:w-2/4 w-full relative group  gray-gradient border rounded-[30px] p-4 flex flex-col justify-around my-8 lg:my-0 sm:hidden lg:flex">
          <img
            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
            alt=""
            className="absolute bottom-5 right-5 w-10 h-10 opacity-40 group-hover:opacity-100 transition-all duration-300"
          />
          <div className="flex gap-4 justify-around items-center lg:mt-2  py-10 lg:py-0">
            <SiMongodb size={40} className="z-10" />
            <SiExpress size={40} className="z-10" />
            <SiReact size={40} className="z-10" />
            <SiNodedotjs size={40} className="z-10" />
            <SiDocker size={40} className="z-10" />
            <SiRedis size={40} className="z-10" />
            {/* <SiNestjs size={40} className="z-10" /> */}
          </div>

          <div className="lg:mt-2">
            <p className="text-xs text-[#666666] font-semibold">SKILLS</p>
            <p className="text-xl py-2 font-semibold">Tech Stack</p>
          </div>
        </div>

        {/* Third column */}

        <div className="lg:w-1/4 w-full gray-gradient border rounded-[30px] p-4 lg:aspect-[1/0.9]">
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

          <div className="absolute bottom-5 left-5">
            <p className="text-xs text-[#666666] font-semibold"> BLOG</p>
            <p className="text-lg  py-2 font-semibold">Profiles</p>
          </div>
        </div>
      </div>


      <div className="lg:w-2/4 w-full relative group  gray-gradient border rounded-[30px] p-4 hidden sm:flex lg:hidden flex-col justify-around my-8 lg:my-0 ">
          <img
            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
            alt=""
            className="absolute bottom-5 right-5 w-10 h-10 opacity-40 group-hover:opacity-100 transition-all duration-300"
          />
          <div className="flex gap-4 justify-around items-center pt-4 py-10 lg:py-0">
            <SiMongodb size={40} className="z-10" />
            <SiExpress size={40} className="z-10" />
            <SiReact size={40} className="z-10" />
            <SiNodedotjs size={40} className="z-10" />
            <SiDocker size={40} className="z-10" />
            <SiRedis size={40} className="z-10" />
            {/* <SiNestjs size={40} className="z-10" /> */}
          </div>

          <div>
            <p className="text-xs text-[#666666] font-semibold">SKILLS</p>
            <p className="text-xl py-2 font-semibold">Tech Stack</p>
          </div>
        </div>

      {/* Thirst Row */}

      <div className="sm:flex gap-6">
        <Link href={"/"} className="lg:w-1/3 w-full h-full">
          <div className="gray-gradient border rounded-[30px] p-4 ">
            <div className="flex justify-around py-3">
              <SiAndroid size={40} className="z-10" />
              <SiApple size={40} className="z-10" />
              <SiWeb3dotjs size={40} className="z-10" />
            </div>

            <div className="pt-10 pb-4">
              <p className="text-xs text-[#666666]">SPECIALIZATION</p>
              <p className="text-xl  font-semibold">Services offering</p>
            </div>
          </div>
        </Link>

        <Link href={"/"} className="lg:w-2/3 w-full h-full relative group ">
          <div className="gray-gradient border rounded-[30px] p-4 z-10 mt-8 sm:mt-0">
            <img
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
              alt=""
              className="absolute bottom-5 right-5 w-10 h-10 opacity-40 group-hover:opacity-100 transition-all duration-300 -z-10"
            />
            <div className="text-5xl z-10 pt-13 pb-4">
              <p className="z-10">Let&apos;'s</p>
              <p>
                work <span className="text-blue-700">together.</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Grid;
