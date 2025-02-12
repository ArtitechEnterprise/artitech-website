"use client";

import React, { useEffect, useState, useCallback } from "react";
import Container from "@/components/customs/container";
import { ArrowRight } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Link from "next/link";
import SvgWithImage from "@/components/customs/svg-with-image";
import heroData from "@/data/hero";
import { AnimatePresence, motion } from "framer-motion";

const services = [
  {
    id: 1,
    name: "Service 1",
    designation: "Software Engineer",
    image: "/service-1.png",
  },
  {
    id: 2,
    name: "Service 2",
    designation: "Software Engineer",
    image: "/service-2.png",
  },
  {
    id: 3,
    name: "Service 3",
    designation: "Software Engineer",
    image: "/service-3.png",
  },
];

const SectionHero = () => {
  const [hero, setHero] = useState(0);
  const data = heroData[hero];

  // Remplacer setTimeout par setInterval pour un cycle plus propre
  useEffect(() => {
    const interval = setInterval(() => {
      setHero((prev) => (prev === heroData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Mémorisation de la fonction de gestion du clic
  const handleHeroClick = useCallback((index: number) => {
    setHero(index);
  }, []);

  return (
    <Container className="w-full py-8">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <SvgWithImage
            key={data.image}
            imageUrl={data.image}
            className="relative"
          >
            <div className="absolute left-0 top-0 flex h-screen items-center justify-center ps-10 text-white">
              <div className="flex flex-col justify-between lg:ml-12 lg:max-w-[850px]">
                <motion.span
                  className="w-fit p-4 text-sm font-medium leading-none"
                  initial={{ y: "30px", opacity: 0 }}
                  animate={{ y: "0", opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {data.subtitle}
                </motion.span>
                <motion.h2
                  className="my-12 scroll-m-20 text-balance text-4xl font-extrabold tracking-tight lg:text-7xl"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {data.title}
                </motion.h2>
                <motion.button
                  className="w-fit rounded-full border border-white/50 bg-[#2DC2E1]/70 px-7 py-3 text-white backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-white/80 hover:text-[#2DC2E1] hover:backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {data.buttonText}
                </motion.button>
              </div>

              <div className="absolute left-10 top-1/2 h-[66%] w-[3px] -translate-y-1/2 transform rounded-sm">
                {heroData.map((_, index) => (
                  <span
                    onClick={() => handleHeroClick(index)}
                    key={index}
                    className={`absolute left-1/2 flex h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-white hover:bg-white hover:text-black ${index === hero ? "bg-white text-black" : "text-white"} text-xl font-semibold ${
                      index === 0
                        ? ""
                        : index === 1
                          ? "top-1/2"
                          : "top-[calc(100%)]"
                    }`}
                  >
                    {index + 1}
                  </span>
                ))}

                <span className="absolute left-1/2 top-[30px] h-[36%] w-[3px] -translate-x-1/2 bg-white"></span>
                <span className="absolute left-1/2 top-[calc(57%)] h-[36%] w-[3px] -translate-x-1/2 bg-white"></span>
              </div>
            </div>
          </SvgWithImage>
        </AnimatePresence>

        <div className="absolute bottom-0 right-0 z-10 h-[170px] w-[450px]">
          <Link
            href="/about"
            className="relative flex w-full items-center justify-end p-4"
          >
            <div className="group relative mr-10 flex w-fit items-center justify-end gap-1 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:origin-bottom-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 hover:before:scale-x-100">
              <span className="text-2xl">A propos de nous</span>
              <ArrowRight className="size-6 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </Link>
          <div className="flex w-full items-center gap-10 py-7">
            <div className="z-1 flex flex-row items-center justify-center">
              <AnimatedTooltip items={services} />
            </div>
            <div className="space-y-px">
              <h2 className="text-3xl font-semibold">Nos Services</h2>
              <p className="text-base font-medium">
                Decouver nos differents services
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SectionHero;
