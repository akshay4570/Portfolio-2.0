import React from "react";
import { TECHNOLOGY } from "../constants";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const renderIcon = (obj) => {
    const Icon = obj.name;
    const IconColour = `text-7xl ${obj.color}`;
    const randomNum = 2;
    return (
      <motion.div
        variants={iconVariants(randomNum)}
        initial="initial"
        animate="animate"
        key={Icon}
        className="rounded-2xl border-4 border-neutral-800 p-4 hover:transform hover:scale-110"
      >
        <Icon className={IconColour} />
      </motion.div>
    );
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technology
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {TECHNOLOGY.map((obj) => renderIcon(obj))}
      </motion.div>
    </div>
  );
};

export default Technologies;
