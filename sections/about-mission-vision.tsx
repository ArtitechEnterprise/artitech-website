"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crosshair, Eye, ArrowRight } from "lucide-react";

export function MissionVisionSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={ref} className="overflow-hidden bg-muted py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Notre Mission et Notre Vision
        </motion.h2>
        <motion.div style={{ x }} className="mb-12 flex space-x-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="w-96 flex-shrink-0">
              <CardHeader>
                <CardTitle>L&apos;Art de l&apos;Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Chez Artitech, nous repoussons constamment les limites de ce
                  qui est possible en fusionnant créativité et technologie.
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Crosshair className="mr-2" />
                  Notre Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Artitech s&apos;engage à révolutionner l&apos;industrie
                  technologique en créant des solutions qui transcendent les
                  frontières entre l&apos;art et la technologie. Notre mission
                  est de :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Développer des technologies innovantes qui inspirent et
                      transforment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Cultiver un écosystème où la créativité et
                      l&apos;expertise technique s&apos;épanouissent
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Repousser les limites de l&apos;innovation pour résoudre
                      des défis complexes
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Eye className="mr-2" />
                  Notre Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Nous aspirons à devenir le catalyseur d&apos;une nouvelle ère
                  où l&apos;art et la technologie convergent pour créer un
                  avenir plus inspirant et innovant. Notre vision englobe :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Un monde où chaque interaction technologique est une
                      expérience artistique
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Une industrie tech redéfinie par la fusion de la
                      créativité et de l&apos;innovation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Un écosystème global d&apos;artistes-technologues
                      façonnant l&apos;avenir
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
