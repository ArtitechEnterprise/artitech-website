"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";
import { BaseHeroSection } from "@/components/customs/base-hero-section";

export function AboutHeroSection() {
  return (
    <BaseHeroSection
      title="A propos de nous"
      subtitle={
        <span className="text-3xl">
          Notre ambition ? Transformer chaque idée en une solution sur-mesure
          qui façonne l&apos;avenir et captive l&apos;imagination.
        </span>
      }
      description="Nous sommes une équipe de professionnels dévoués, engagés à fournir des solutions digital exceptionnelles qui permettent aux entreprises de réussir dans le paysage numérique."
    >
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full overflow-hidden rounded-lg lg:h-[400px]"
        >
          <Image
            src="/teams.jpg"
            alt="notre equipe"
            layout="fill"
            objectFit="cover"
            className="aspect-square w-full rounded-lg object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent shadow-sm dark:from-background/80 dark:to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="mb-2 text-2xl font-bold">Nos missions</h3>
            <p className="text-sm">
              To empower businesses with innovative web solutions that drive
              growth and success in the digital age.
            </p>
          </div>
        </motion.div>
      </Tilt>
    </BaseHeroSection>
  );
}
