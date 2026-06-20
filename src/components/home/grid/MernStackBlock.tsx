import {
  SiReact,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiDocker,
  SiRedis,
} from "@icons-pack/react-simple-icons";
import { motion } from "motion/react";

import { gridEnterMotion } from "./constants";

const MernStackBlock = () => (
  <motion.div
    {...gridEnterMotion}
    className="lg:w-2/4 w-full gray-gradient border rounded-[30px] p-4 my-6 lg:my-0"
  >
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
);

export default MernStackBlock;
