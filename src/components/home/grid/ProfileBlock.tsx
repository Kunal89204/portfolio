import Image from "next/image";
import { motion } from "motion/react";

import { TransitionLink } from "../../misc/TransitionLayout";
import profileimg from "../../../../public/profileimg.png";
import GridIcon from "./GridIcon";
import { profileEnterMotion } from "./constants";

const ProfileBlock = () => (
  <TransitionLink href="/about" className="lg:w-1/2 w-full ">
    <motion.div
      {...profileEnterMotion}
      style={{ willChange: "transform, opacity" }}
      className="sm:flex sm:justify-start relative border items-center min-h-[260px] h-full cursor-pointer group gray-gradient rounded-[30px] p-6 lg:p-10 gap-6 transition-all duration-300"
    >
      <GridIcon className="absolute bottom-8 right-8 lg:bottom-5 lg:right-5  w-10 h-10 opacity-40 group-hover:opacity-100 transition-all duration-300 " />
      <Image
        src={profileimg.src}
        alt="profile"
        width={1000}
        height={1000}
        className="img-gradient w-[200px] lg:w-[50%] mx-auto sm:mx-0  rounded-tr-3xl rounded-bl-3xl z-50"
        priority
      />

      <div className="z-10 mt-10">
        <p className="text-[#a0a0a0] lg:text-sm font-medium">
          A Full Stack Developer
        </p>
        <h2 className="text-4xl font-semibold">Kunal Khandelwal</h2>
        <p className="py-4 text-sm text-[#a0a0a0] ">
        Building scalable web applications with
        React, Next.js, NestJS, PostgreSQL and Docker.
        </p>
      </div>
    </motion.div>
  </TransitionLink>
);

export default ProfileBlock;
