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
        className="rounded-lg p-6"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          width={500}
          height={500}
          loading="lazy"
          onLoad={(e) => (e.currentTarget.style.opacity = "1")}
          src="/contact-image.svg"
          alt="service architech"
          className="aspect-square h-full w-full object-contain"
        />
      </motion.div>
    </BaseHeroSection>
  );
}
