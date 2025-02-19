"use client";
import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface AccordionItemProps {
  title: string;
  content: string;
  isOpen?: boolean;
  image: string;
  onToggle?: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen = false,
  onToggle,
}) => {
  return (
    <div className="overflow-hidden rounded-md border border-input dark:bg-card">
      <button
        className="flex w-full items-center justify-between bg-card p-4 text-left focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-xl font-bold">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="p-4">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
