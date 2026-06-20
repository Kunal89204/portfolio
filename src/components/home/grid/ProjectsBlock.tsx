import Image from "next/image";
import { motion } from "motion/react";

import { TransitionLink } from "../../misc/TransitionLayout";
import AnimatedShadow from "./AnimatedShadow";
import GridIcon from "./GridIcon";
import { gridEnterMotion } from "./constants";

const ProjectsBlock = () => (
  <TransitionLink href="/works" className="lg:w-1/2 w-full ">
    <motion.div
      {...gridEnterMotion}
      className="relative gray-gradient border group rounded-[30px] p-4 sm:mt-0 mt-8 flex flex-col h-full justify-between overflow-hidden"
    >
      <AnimatedShadow />
      <GridIcon className="absolute bottom-5 right-5 w-10 h-10 opacity-40 group-hover:opacity-100 transition-all duration-300 z-10" />
      <div className="flex-1 flex flex-col items-center">
        <p className="text-4xl font-semibold z-20 relative text-white/60 text-center translate-y-[5px]">
          My Works
        </p>
        <Image
          src="/project.png"
          alt=""
          width={1000}
          height={1000}
          className="w-[70%] mx-auto z-20 relative translate-y-[-10px]"
        />
      </div>
      <div className="mt-6 z-20 relative">
        <p className="text-xs text-[#a0a0a0]">SHOWCASE</p>
        <p className="text-xl">Projects</p>
      </div>
    </motion.div>
  </TransitionLink>
);

export default ProjectsBlock;
