import { motion } from "motion/react";
import { gridEnterMotion } from "./constants";

const techList = [
  "React",
  "Next.js",
  "NestJS",
  "PostgreSQL",
  "Redis",
  "Plaid",
  "WebSockets",
  "Docker",
  "AWS",
];

const MARQUEE_REPEAT = 2;

const marqueeWidthStyle = {
  minWidth: "max-content",
};

function getMarqueeBlockItems(repeat: number, arr: string[]) {
  // Repeat arr so marquee is long enough
  const items = [];
  for (let i = 0; i < repeat; i++) {
    for (let j = 0; j < arr.length; j++) {
      items.push(arr[j]);
    }
  }
  return items;
}

const TechMarqueeBlock = () => {
  const items = getMarqueeBlockItems(MARQUEE_REPEAT, techList);

  return (
    <motion.div
      {...gridEnterMotion}
      className="relative overflow-hidden border gray-gradient rounded-full w-full py-3 h-14"
      style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" }}
    >
      <motion.div
        className="flex items-center h-full"
        style={{
          ...marqueeWidthStyle,
          width: "fit-content",
        }}
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 12,
          ease: "linear",
        }}
      >
        <div className="flex gap-0 px-6 text-sm lg:text-base font-medium select-none">
          {items.map((tech, idx) => (
            <span key={idx} className="flex items-center whitespace-nowrap">
              {tech}
              {/* Only add bullet & space if not last item */}
              {idx !== items.length - 1 && (
                <span className="mx-3 text-gray-300 select-none">&#8226;</span>
              )}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TechMarqueeBlock;
