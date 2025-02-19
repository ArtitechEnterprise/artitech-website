"use client";

import Container from "@/components/customs/container";
import Heading from "@/components/customs/heading";
import ReadMoreLess from "@/components/customs/lire-plus-moins";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const AboutMissionVision = () => {
  return (
    <Container className="my-10 py-5">
      <Heading
        title="Mission et vision"
        text="Decouver notre mission et notre vision"
      />
      <Card className="mt-8 grid grid-cols-1 gap-5 p-8 md:grid-cols-2">
        <Card className="rounded-3xl border-none shadow-none">
          <article className="overflow-hidden">
            <Image
              src="/mission-image-1.png"
              alt="Mission image"
              loading="lazy"
              width={600}
              height={600}
              objectFit="cover"
            />
          </article>
          <CardContent className="mt-8 p-0">
            <ReadMoreLess
              text="Artitech a pour mission d’accompagner les entreprises et
                organisations dans leur transformation numérique en combinant
                expertise en intelligence artificielle, développement logiciel
                et cybersécurité. Nous créons des solutions technologiques
                innovantes et sur mesure pour automatiser les processus,
                améliorer la productivité et sécuriser les infrastructures
                digitales. Notre objectif est de rendre l’innovation accessible
                et performante pour aider nos clients à exploiter pleinement le
                potentiel du digital."
            />
          </CardContent>
        </Card>
        <Card className="rounded-3xl border-none shadow-none">
          <article className="overflow-hidden">
            <Image
              src="/mission-image-1.png"
              alt="Mission image"
              loading="lazy"
              width={600}
              height={600}
              objectFit="cover"
            />
          </article>
          <CardContent className="mt-8 p-0">
            <ReadMoreLess
              text="Artitech a pour mission d’accompagner les entreprises et
                organisations dans leur transformation numérique en combinant
                expertise en intelligence artificielle, développement logiciel
                et cybersécurité. Nous créons des solutions technologiques
                innovantes et sur mesure pour automatiser les processus,
                améliorer la productivité et sécuriser les infrastructures
                digitales. Notre objectif est de rendre l’innovation accessible
                et performante pour aider nos clients à exploiter pleinement le
                potentiel du digital."
            />
          </CardContent>
        </Card>
      </Card>
    </Container>
  );
};

export default AboutMissionVision;
