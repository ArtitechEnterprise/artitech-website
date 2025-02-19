"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import {
  Brain,
  BotIcon as Robot,
  Cpu,
  Zap,
  BarChart,
  Lightbulb,
  Shield,
} from "lucide-react";
import type { ServicePageProps } from "@/types/service-types";

const iconMap = {
  Brain,
  Robot,
  Cpu,
  Zap,
  BarChart,
  Lightbulb,
  Shield,
};

const aiAutomationData: ServicePageProps = {
  title: "IA et Automatisation",
  description:
    "Transformez votre entreprise avec l'intelligence artificielle et l'automatisation",
  services: [
    {
      icon: Brain,
      name: "Apprentissage automatique",
      description: "Développez des modèles prédictifs puissants",
    },
    {
      icon: Robot,
      name: "Chatbots IA",
      description: "Améliorez le service client avec des assistants virtuels",
    },
    {
      icon: Cpu,
      name: "Automatisation des processus",
      description: "Optimisez vos opérations commerciales",
    },
    {
      icon: Zap,
      name: "Analyse de données",
      description: "Obtenez des insights précieux de vos données",
    },
    {
      icon: BarChart,
      name: "Prévisions avancées",
      description: "Anticipez les tendances du marché avec précision",
    },
    {
      icon: Lightbulb,
      name: "Innovation IA",
      description: "Créez de nouveaux produits et services basés sur l'IA",
    },
    {
      icon: Shield,
      name: "IA éthique",
      description: "Développez des solutions IA responsables et transparentes",
    },
  ],
  benefits: [
    {
      title: "Efficacité accrue",
      description:
        "Automatisez les tâches répétitives pour libérer vos employés",
    },
    {
      title: "Prise de décision améliorée",
      description:
        "Utilisez des données et des prédictions précises pour guider vos décisions",
    },
    {
      title: "Personnalisation avancée",
      description: "Offrez des expériences client sur mesure grâce à l'IA",
    },
    {
      title: "Réduction des coûts",
      description:
        "Optimisez vos opérations pour réaliser des économies significatives",
    },
    {
      title: "Innovation accélérée",
      description: "Développez rapidement de nouveaux produits et services",
    },
    {
      title: "Avantage concurrentiel",
      description:
        "Restez en avance sur vos concurrents grâce à l'IA et l'automatisation",
    },
  ],
  processSteps: [
    {
      title: "Évaluation",
      description:
        "Analyse de vos besoins et opportunités en IA et automatisation",
    },
    {
      title: "Stratégie",
      description:
        "Élaboration d'une feuille de route IA adaptée à votre entreprise",
    },
    {
      title: "Développement",
      description: "Création de solutions IA et d'automatisation sur mesure",
    },
    {
      title: "Intégration",
      description:
        "Mise en place des solutions dans votre infrastructure existante",
    },
    {
      title: "Formation",
      description:
        "Formation de votre équipe à l'utilisation des nouvelles technologies",
    },
    {
      title: "Optimisation",
      description:
        "Amélioration continue basée sur les retours et les performances",
    },
  ],
  faqs: [
    {
      question:
        "Qu'est-ce que l'IA et l'automatisation peuvent apporter à mon entreprise ?",
      answer:
        "L'IA et l'automatisation peuvent améliorer l'efficacité opérationnelle, réduire les coûts, améliorer la prise de décision, personnaliser les expériences client et accélérer l'innovation. Elles permettent d'automatiser les tâches répétitives, d'analyser de grandes quantités de données et de prédire les tendances futures.",
    },
    {
      question:
        "Combien de temps faut-il pour mettre en place une solution d'IA ?",
      answer:
        "Le temps de mise en place d'une solution d'IA varie en fonction de la complexité du projet. Un projet simple peut prendre quelques semaines, tandis qu'un projet plus complexe peut s'étendre sur plusieurs mois. Nous fournissons toujours une estimation détaillée après l'évaluation initiale de vos besoins.",
    },
    {
      question: "Comment assurez-vous que l'IA est éthique et responsable ?",
      answer:
        "Nous suivons des principes stricts d'IA éthique, notamment la transparence, l'équité, la confidentialité et la responsabilité. Nous effectuons des audits réguliers de nos algorithmes pour détecter les biais, nous assurons que les décisions de l'IA sont explicables, et nous mettons en place des mesures de protection des données personnelles.",
    },
    {
      question:
        "Quelle formation est nécessaire pour utiliser vos solutions d'IA et d'automatisation ?",
      answer:
        "Nous fournissons une formation complète adaptée à chaque solution. Cela inclut généralement une formation sur l'utilisation du système, l'interprétation des résultats et la gestion basique. Nous offrons également un support continu et des ressources en ligne pour assurer que votre équipe reste à jour avec les dernières fonctionnalités.",
    },
  ],
  featuredProject: {
    title: "Optimisation de la chaîne d'approvisionnement",
    description:
      "Nous avons mis en place un système d'IA pour optimiser la chaîne d'approvisionnement d'un grand détaillant, améliorant la prévision de la demande et la gestion des stocks.",
    imageSrc: "/ai.webp",
    imageAlt: "Optimisation de la chaîne d'approvisionnement par IA",
    challenges: [
      "Prévisions de demande imprécises",
      "Gestion des stocks inefficace",
      "Coûts élevés dus aux ruptures et surstocks",
      "Manque de visibilité sur la chaîne d'approvisionnement",
    ],
    solutions: [
      "Mise en place d'un modèle d'apprentissage automatique pour la prévision de la demande",
      "Développement d'un système d'optimisation des stocks basé sur l'IA",
      "Création d'un tableau de bord en temps réel pour la visibilité de la chaîne d'approvisionnement",
      "Automatisation des processus de réapprovisionnement",
    ],
    results: [
      "Réduction de 30% des ruptures de stock",
      "Amélioration de 25% de la précision des prévisions de demande",
      "Diminution de 20% des coûts de stockage",
      "Augmentation de 15% de la rotation des stocks",
    ],
  },
};

export default function AIAutomation() {
  return <ServicePageLayout {...aiAutomationData} iconMap={iconMap} />;
}
