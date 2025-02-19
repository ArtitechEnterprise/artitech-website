"use client";

import Container from "@/components/customs/container";
import Heading from "@/components/customs/heading";
import ContainerAnimation from "@/lib/aos-animation";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ReadMoreLess from "@/components/customs/lire-plus-moins";

const AboutHistorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <Container className="overflow-hidden">
      <Heading title="Histoire de Artitech" text="Decouver notre histoire" />
      <div className="flex flex-col gap-10 md:flex-row">
        <ContainerAnimation>
          <div className="mt-5 space-y-5 md:w-1/2">
            <motion.p
              ref={ref}
              className="leading-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Tout a commencé avec une vision : celle de mettre la puissance de
              l’intelligence artificielle et du développement logiciel au
              service des entreprises. Constatant les défis auxquels les
              entreprises faisaient face en matière d’automatisation, de
              cybersécurité et d’innovation digitale, les fondateurs d’Artitech
              ont décidé de créer une agence capable de transformer ces
              obstacles en opportunités.
            </motion.p>
            <motion.p
              className="leading-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ReadMoreLess
                text="Fondée par une équipe d’experts passionnés par la technologie et
              l’innovation, Artitech est née de la volonté d’accompagner les
              entreprises dans leur transformation numérique. Dès ses débuts,
              l’agence s’est spécialisée dans le développement d’algorithmes
              intelligents, la création de solutions logicielles sur mesure et
              la sécurisation des infrastructures numériques."
              />
            </motion.p>
          </div>
        </ContainerAnimation>
        <ContainerAnimation>
          <div
            className="flex items-center justify-center overflow-hidden rounded-md border bg-card shadow-md lg:w-1/2"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="600"
          >
            <Image
              src={"/history-image.png"}
              width={500}
              height={400}
              objectFit="cover"
              alt="image de l'histoire de artitech"
              loading="lazy"
            />
          </div>
        </ContainerAnimation>
      </div>
    </Container>
  );
};

export default AboutHistorySection;
