import Container from "@/components/customs/container";
import Image from "next/image";

export default function SectionMissions() {
  return (
    <Container className="py-20">
      <h2 className="mb-12 text-left text-4xl font-bold">Mission et Vision</h2>

      <div className="flex justify-between gap-5">
        <div className="flex w-full flex-col items-center">
          <Image
            width={600}
            height={600}
            src=""
            alt="Mission Image"
            className="mb-4 h-auto w-full"
          />
          <p className="text-xl">
            Artitech a pour mission d’accompagner les entreprises et
            organisations dans leur transformation numérique en combinant
            expertise en intelligence artificielle, développement logiciel et
            cybersécurité. Nous créons des solutions technologiques innovantes
            et sur mesure pour automatiser les processus, améliorer la
            productivité et sécuriser les infrastructures digitales. Notre
            objectif est de rendre l’innovation accessible et performante pour
            aider nos clients à exploiter pleinement le potentiel du digital.
          </p>
        </div>

        <div className="flex w-full flex-col items-center">
          <Image
            src=""
            alt="Vision Image"
            width={600}
            height={600}
            className="mb-4 h-auto w-full"
          />
          <p className="text-xl">
            Nous aspirons à devenir un acteur incontournable de l’intelligence
            artificielle et du développement logiciel à l’échelle
            internationale. Artitech vise à façonner un avenir où la technologie
            devient un véritable levier de croissance pour les entreprises, leur
            permettant d’optimiser leurs performances tout en restant
            compétitives. En mettant l’innovation et l’excellence au cœur de nos
            solutions, nous voulons bâtir un monde où l’intelligence
            artificielle et le digital simplifient et améliorent la vie des
            entreprises et des individus.
          </p>
        </div>
      </div>
    </Container>
  );
}
