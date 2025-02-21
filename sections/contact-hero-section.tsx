"use client";
import { motion } from "framer-motion";
import { BaseHeroSection } from "@/components/customs/base-hero-section";

export function ContactHeroSection() {
  return (
    <BaseHeroSection
      title="Contactez-nous"
      subtitle="Une question ? Un projet en tête ?"
      description="Nous sommes là pour vous accompagner dans votre transformation digitale.
Réactivité, expertise et innovation au service de votre entreprise."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative -mt-8 mb-5 flex items-center justify-center rounded-lg border border-input bg-card md:max-w-[200px] lg:-m-0 lg:mb-0 lg:block lg:h-[500px] lg:max-w-full lg:border-none lg:bg-transparent"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          width={400}
          height={400}
          loading="lazy"
          src="/contact-image.png"
          alt="contact image"
          className="aspect-square w-full object-cover object-right lg:object-top"
        />
      </motion.div>
    </BaseHeroSection>
  );
}
