import { SiAndroid, SiApple, SiWeb3dotjs } from "@icons-pack/react-simple-icons";
import { motion } from "motion/react";

import { TransitionLink } from "../../misc/TransitionLayout";
import { gridEnterMotion } from "./constants";

const ServicesBlock = () => (
  <TransitionLink href="/" className="lg:w-1/3 w-full h-full">
    <motion.div
      {...gridEnterMotion}
      className="gray-gradient border rounded-[30px] p-4 "
    >
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
);

export default ServicesBlock;
