import Container from "@/components/customs/container";
import Heading from "@/components/customs/heading";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Cpu, Globe, Layout, Shield, Smartphone } from "lucide-react";
import React from "react";

const SectionRealisation = () => {
  return (
    <Container className="py-6">
      <div className="flex items-center justify-between">
        <Heading
          title="Realisations"
          text="Decouver nos differentes realisation"
        />
      </div>
      <BentoGrid className="mt-8">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </Container>
  );
};
const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-slate-900 dark:to-slate-800"></div>
);

const items = [
  {
    title: "Révolution IA",
    description:
      "Exploiter la puissance de l'intelligence artificielle pour transformer les processus métier.",
    header: <Skeleton />,
    icon: <Cpu className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Application Web Moderne",
    description:
      "Développer une solution web intuitive pour améliorer l'interaction et la gestion des données.",
    header: <Skeleton />,
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cyber Sécurité",
    description:
      "Créer un site dédié à la prévention des cyberattaques et à la sécurisation des informations sensibles.",
    header: <Skeleton />,
    icon: <Shield className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Design UI/UX",
    description:
      "Optimiser l'interface utilisateur pour offrir une expérience engageante et accessible.",
    header: <Skeleton />,
    icon: <Layout className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Application Mobile Innovante",
    description:
      "Concevoir une application mobile performante, adaptée aux usages modernes en mobilité.",
    header: <Skeleton />,
    icon: <Smartphone className="h-4 w-4 text-neutral-500" />,
  },
];

export default SectionRealisation;
