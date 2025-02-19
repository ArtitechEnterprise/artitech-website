"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const IndicatorOnScroll = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-2 rounded-md bg-primary"
      style={{ scaleX, transformOrigin: "left" }}
    />
  );
};

export default IndicatorOnScroll;
