"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Lightbulb, Users, Leaf, Zap, Globe } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "Nous sommes animés par une passion ardente pour l'innovation et la créativité.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Nous repoussons constamment les limites de ce qui est possible.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Nous croyons en la puissance de la diversité et de la synergie collective.",
  },
  {
    icon: Leaf,
    title: "Durabilité",
    description:
      "Nous nous engageons à créer un impact positif et durable sur le monde.",
  },
  {
    icon: Zap,
    title: "Agilité",
    description:
      "Nous nous adaptons rapidement aux changements et embrassons de nouveaux défis.",
  },
  {
    icon: Globe,
    title: "Impact global",
    description:
      "Nous aspirons à avoir un impact positif à l'échelle mondiale.",
  },
];

export function ImpactValuesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="overflow-hidden bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Notre Impact et Nos Valeurs
        </motion.h2>
        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <value.icon className="mr-2 text-primary" />
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          style={{ y }}
          className="rounded-lg bg-primary p-8 text-primary-foreground shadow-xl"
        >
          <h3 className="mb-4 text-2xl font-semibold">Notre Impact</h3>
          <p className="mb-6 text-lg">
            Bien qu&apos;<strong>Artitech </strong> soit une jeune entreprise,
            nous nous engageons déjà à avoir un impact significatif et positif :
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Lightbulb className="mr-2 mt-1 flex-shrink-0" />
              <span>
                Stimuler l&apos;innovation dans l&apos;industrie technologique
                Au Canada et au-delà
              </span>
            </li>
            <li className="flex items-start">
              <Users className="mr-2 mt-1 flex-shrink-0" />
              <span>
                Créer des emplois de haute qualité dans le secteur de la
                technologie créative
              </span>
            </li>
            <li className="flex items-start">
              <Leaf className="mr-2 mt-1 flex-shrink-0" />
              <span>
                Développer des solutions technologiques durables qui réduisent
                l&apos;empreinte environnementale
              </span>
            </li>
            <li className="flex items-start">
              <Globe className="mr-2 mt-1 flex-shrink-0" />
              <span>
                Inspirer la prochaine génération d&apos;innovateurs et
                d&apos;artistes-technologues
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
