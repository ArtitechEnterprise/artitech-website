"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

interface BaseHeroSectionProps {
  title: string;
  subtitle: string | JSX.Element;
  description: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  href?: string;
  children?: React.ReactNode;
}

export function BaseHeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  children,
  href,
}: BaseHeroSectionProps) {
  return (
    <div className="relative flex items-center justify-between overflow-hidden">
      <BackgroundBeams />
      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="text-left md:w-1/2">
            <motion.h1
              className="mt-8 scroll-m-20 text-3xl font-extrabold leading-8 tracking-tight lg:mt-0 lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h1>
            <motion.h2
              className="mb-6 text-3xl font-bold text-primary md:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {subtitle}
            </motion.h2>
            <motion.p
              className="leading-7 lg:w-5/6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              {primaryCTA && (
                <Link
                  href={href as string}
                  className={`mb-4 mr-6 md:mb-0 ${buttonVariants({ variant: "default", size: "lg" })}`}
                >
                  {primaryCTA}
                </Link>
              )}
              {secondaryCTA && (
                <Button size="lg" variant="outline">
                  {secondaryCTA}
                </Button>
              )}
            </motion.div>
          </div>
          <div className="relative z-10 mt-10 w-full md:mt-0 md:w-1/2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
