"use client";

import type React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ServiceLayout({
  title,
  description,
  children,
}: ServiceLayoutProps) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen bg-background">
      <header className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary/50 to-background"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          }}
        />
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="mb-4 text-4xl font-bold text-white md:text-5xl"
              style={{ opacity, scale, transformOrigin: "left" }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="text-xl text-white/80 md:text-2xl"
              style={{ opacity, scale }}
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">{children}</main>
      <motion.div
        className="fixed bottom-8 right-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button
          size="sm"
          className="rounded-full shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronDown className="h-6 w-6 rotate-180 transform" />
        </Button>
      </motion.div>
    </div>
  );
}
