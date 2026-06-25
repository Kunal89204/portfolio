import Image from "next/image";
import { motion } from "motion/react";

import { TransitionLink } from "../../misc/TransitionLayout";
import GridIcon from "./GridIcon";
import { gridEnterMotion } from "./constants";

const BlogsBlock = () => (
  <TransitionLink href="/blog" className=" lg:w-1/4 w-full">
    <motion.div
      {...gridEnterMotion}
      className="relative  gray-gradient border group rounded-[30px] p-4 lg:aspect-[1/0.9]"
    >
      <GridIcon className="absolute bottom-5 right-5 w-10 h-10 opacity-40 group-hover:opacity-100 transition-all duration-300" />
      <Image
        src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/gfonts.png"
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
);

export default BlogsBlock;
