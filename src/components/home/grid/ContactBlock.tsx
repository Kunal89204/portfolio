import { motion } from "motion/react";

import { TransitionLink } from "../../misc/TransitionLayout";
import GridIcon from "./GridIcon";
import { gridEnterMotion } from "./constants";

const ContactBlock = () => (
  <TransitionLink
    href="/contact"
    className="lg:w-2/3 w-full h-full relative group "
  >
    <motion.div
      {...gridEnterMotion}
      className="gray-gradient border rounded-[30px] p-4 z-10 mt-8 sm:mt-0"
    >
      <GridIcon className="absolute bottom-5 right-5 w-10 h-10 opacity-40 group-hover:opacity-100 transition-all duration-300 -z-10" />
      <div className="text-5xl z-10 lg:pt-13 pb-4 max-w-[200px] lg:max-w-none">
        <p className="z-10">Let&apos;s</p>
        <p>
          work <span className="text-blue-700">together.</span>
        </p>
      </div>
    </motion.div>
  </TransitionLink>
);

export default ContactBlock;
