"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function ArtitechHistory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={ref} className="overflow-hidden bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-4xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          L&apos;Histoire d&apos;Artitech
        </motion.h2>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <motion.div style={{ opacity, scale }}>
            <Image
              src="/history-image.png"
              alt="Fondateurs d'Artitech"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <div>
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <motion.h3
                  className="mb-4 text-2xl font-semibold"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Une Vision Audacieuse
                </motion.h3>
                <motion.p
                  className="mb-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Artitech est née en 2025 de la vision audacieuse de
                  l&apos;expert en technologie : <strong>Mr Dylan</strong>. Son
                  ambition ? Révolutionner le paysage numérique en combinant
                  l&apos;art et la technologie de manière inédite.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Dès ses premiers mois, Artitech a attiré l&apos;attention de
                  grands noms de l&apos;industrie grâce à ses approches
                  novatrices et sa capacité à repousser les limites de
                  l&apos;innovation.
                </motion.p>
              </CardContent>
            </Card>
            <motion.div
              className="mt-8 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className="text-xl font-semibold">Nos Réalisations Clés</h4>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Lancement de notre première plateforme d&apos;IA créative
                </li>
                <li>Partenariat stratégique avec une entreprise du CAC 40</li>
                <li>
                  Obtention d&apos;un financement de série A de 10 millions
                  d&apos;euros
                </li>
                <li>
                  Expansion de l&apos;équipe à 50 talents en seulement 6 mois
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
