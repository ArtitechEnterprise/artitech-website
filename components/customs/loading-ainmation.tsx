"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // L'animation dure 3 secondes

    return () => clearTimeout(timer);
  }, []);

  const mountainVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-64 w-64">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <motion.path
                d="M10 90 L50 10 L90 90 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                variants={mountainVariants}
                initial="hidden"
                animate="visible"
              />
            </svg>
            <motion.div
              className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 pt-10 text-center text-2xl font-bold"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {"ARTITECH".split("").map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
