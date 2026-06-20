import Image from "next/image";
import { motion } from "motion/react";

import { TransitionLink } from "../../misc/TransitionLayout";
import GridIcon from "./GridIcon";
import { gridEnterMotion } from "./constants";

const CredentialsBlock = () => (
  <TransitionLink href="/credentials" className="lg:w-1/2 w-full">
    <motion.div
      {...gridEnterMotion}
      className="gray-gradient border group rounded-[30px] p-4 lg:aspect-[1/0.9] flex flex-col h-full justify-between"
    >
      <div className="relative flex-1 flex flex-col items-center">
        <GridIcon className="absolute bottom-5 right-5 w-10 h-10 opacity-40 group-hover:opacity-100 transition-all duration-300" />
        <Image
          src="/images/sign.png"
          alt=""
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
      <div className="mt-6">
        <p className="text-xs text-[#a0a0a0]">MORE ABOUT ME</p>
        <p className="text-xl">Credentials</p>
      </div>
    </motion.div>
  </TransitionLink>
);

export default CredentialsBlock;
