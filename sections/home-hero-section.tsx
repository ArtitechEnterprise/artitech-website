"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import Tilt from "react-parallax-tilt";
import { BaseHeroSection } from "@/components/customs/base-hero-section";
import { Carousel } from "@/components/customs/Carousel";

const slideData = [
  {
    title: "Livraison & Accompagnement",
    button: "Essayer maintenant",
    description:
      "Déploiement, formation et support pour une solution clé en main.",
    src: "/third-image.jpg",
  },
  {
    title: "Développement & Suivi",
    button: "Suivre l'avancement",
    description:
      "Conception, développement et validation progressive avec vous.",
    src: "/second-image.jpg",
  },
  {
    title: "Définition de votre projet",
    button: "Discutons de votre projet",
    description:
      "Ensemble realison tout vos projets de digital et d'automatisation",
    src: "/first-image.jpg",
  },
];
export function HomeHeroSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["a s'innover.", "a se créer.", "s'élever."],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <BaseHeroSection
      title="Solutions digitales qui propulsent votre entreprise"
      subtitle={<span className="text-blue-500" ref={typedRef}></span>}
      description="Nous transformons vos idées en expériences digitales innovantes en combinant IA, développement web & mobile et cybersécurité de pointe pour propulser votre entreprise."
      primaryCTA="Contacter Nous"
      secondaryCTA="En savoir plus sur Artitech"
    >
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          <Carousel slides={slideData} />
        </motion.div>
      </Tilt>
    </BaseHeroSection>
  );
}
