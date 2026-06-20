import { Github, Linkedin } from "iconoir-react";
import { motion } from "motion/react";

import { gridEnterMotion } from "./constants";

const SocialProfilesBlock = () => (
  <motion.div
    {...gridEnterMotion}
    className="lg:w-1/4 w-full gray-gradient border rounded-[30px] p-4 lg:aspect-[1/0.9] "
  >
    <div className="gray-gradient border-2 flex gap-2 p-4 justify-center rounded-[30px]">
      <div className="p-5 rounded-full gray-gradient border-2 group group-hover:bg-white transition-all duration-300 cursor-pointer">
        <a
          href="https://www.linkedin.com/in/kunal89204/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            fontSize={40}
            className="group-hover:text-blue-500  group-hover:rounded-full  relative z-10 transition-all duration-300 "
          />
        </a>
      </div>
      <div className="p-5 rounded-full gray-gradient hover-bg border-2 group group-hover:bg-white  transition-all duration-300 cursor-pointer overflow-visible">
        <a
          href="https://github.com/kunal89204"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github
            className="group-hover:text-blue-500  group-hover:rounded-full  relative z-10  transition-all duration-300 "
            fontSize={40}
          />
        </a>
      </div>
    </div>

    <div className="lg:absolute bottom-5 left-5 my-4 lg:my-0">
      <p className="text-xs text-[#666666] font-semibold"> Social</p>
      <p className="text-lg  lg:py-2 font-semibold">Profiles</p>
    </div>
  </motion.div>
);

export default SocialProfilesBlock;
