"use client";

import { motion, Variants } from "framer-motion";

const animation: Variants = {
  offscreen: {
    y: 100,
    scale: 0.5,
  },
  onscreen: {
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Animation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={animation}>{children}</motion.div>
    </motion.div>
  );
};

export default Animation;
