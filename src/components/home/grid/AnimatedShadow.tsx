import { motion } from "motion/react";

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

export default AnimatedShadow;
