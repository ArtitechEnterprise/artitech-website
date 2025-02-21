"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import {
  PieChart,
  BarChart,
  LineChart,
  Palette,
  Eye,
  Layout,
  Share2,
} from "lucide-react";
import type { ServicePageProps } from "@/types/service-types";

const iconMap = {
  PieChart,
  BarChart,
  LineChart,
  Palette,
  Eye,
  Layout,
  Share2,
};

const infographieData: ServicePageProps = {
  title: "Infographie",
  description:
    "Transformez vos données complexes en visuels captivants et informatifs.",
  services: [
    {
      icon: PieChart,
      name: "Infographies Statiques",
      description:
        "Création d'images fixes riches en informations pour divers supports",
    },
    {
      icon: BarChart,
      name: "Infographies Interactives",
      description:
        "Conception de visualisations de données interactives pour le web",
    },
    {
      icon: LineChart,
      name: "Rapports Visuels",
      description:
        "Transformation de rapports textuels en présentations visuelles engageantes",
    },
    {
      icon: Palette,
      name: "Design d'Information",
      description:
        "Structuration visuelle de l'information pour une compréhension optimale",
    },
    {
      icon: Eye,
      name: "Storytelling Visuel",
      description:
        "Narration de données à travers des séquences visuelles captivantes",
    },
    {
      icon: Layout,
      name: "Infographies pour Réseaux Sociaux",
      description:
        "Création de visuels optimisés pour les plateformes sociales",
    },
    {
      icon: Share2,
      name: "Infographies Animées",
      description: "Conception d'animations pour donner vie à vos données",
    },
  ],
  benefits: [
    {
      title: "Compréhension Améliorée",
      description:
        "Simplifiez des concepts complexes pour une meilleure compréhension du public",
    },
    {
      title: "Engagement Accru",
      description:
        "Captivez votre audience avec des visuels attrayants et informatifs",
    },
    {
      title: "Mémorisation Renforcée",
      description:
        "Augmentez la rétention d'information grâce à des représentations visuelles",
    },
    {
      title: "Partage Facilité",
      description:
        "Créez du contenu hautement partageable sur les réseaux sociaux",
    },
    {
      title: "Crédibilité Renforcée",
      description:
        "Présentez vos données de manière professionnelle et convaincante",
    },
    {
      title: "Communication Efficace",
      description:
        "Transmettez rapidement des informations complexes à votre audience",
    },
  ],
  processSteps: [
    {
      title: "Analyse des Données",
      description: "Examen approfondi des données et informations à visualiser",
    },
    {
      title: "Conceptualisation",
      description:
        "Élaboration de concepts visuels pour représenter les données",
    },
    {
      title: "Design",
      description: "Création de maquettes et sélection des éléments visuels",
    },
    {
      title: "Itération",
      description: "Affinement du design basé sur les retours",
    },
    {
      title: "Production",
      description: "Finalisation de l'infographie et préparation des fichiers",
    },
    {
      title: "Intégration",
      description:
        "Incorporation de l'infographie dans les supports de communication",
    },
  ],
  faqs: [
    {
      question:
        "Pourquoi l'infographie est-elle importante pour mon entreprise ?",
      answer:
        "L'infographie permet de communiquer des informations complexes de manière claire et engageante. Elle peut augmenter l'engagement de votre audience, améliorer la compréhension de vos produits ou services, et renforcer votre image de marque.",
    },
    {
      question:
        "Quels types de données peuvent être transformés en infographie ?",
      answer:
        "Presque tous les types de données peuvent être transformés en infographie, incluant des statistiques, des processus, des comparaisons, des chronologies, des hiérarchies, et bien plus encore. L'important est de choisir le bon type de visualisation pour vos données spécifiques.",
    },
    {
      question: "Combien de temps faut-il pour créer une infographie ?",
      answer:
        "Le temps de création d'une infographie varie en fonction de sa complexité. Une infographie simple peut prendre quelques jours, tandis qu'une infographie plus complexe ou interactive peut nécessiter plusieurs semaines. Nous fournissons toujours une estimation détaillée après l'évaluation de vos besoins.",
    },
    {
      question:
        "Comment puis-je utiliser les infographies dans ma stratégie marketing ?",
      answer:
        "Les infographies peuvent être utilisées de nombreuses façons dans votre stratégie marketing : sur votre site web, dans vos emails, sur les réseaux sociaux, dans des présentations, des rapports annuels, ou même dans des campagnes publicitaires. Elles sont particulièrement efficaces pour expliquer des concepts complexes ou pour présenter des données de manière attrayante.",
    },
  ],
  featuredProject: {
    title: "Campagne d'Infographie pour une Entreprise Tech",
    description:
      "Nous avons créé une série d'infographies pour une entreprise technologique leader, visant à expliquer leurs innovations de manière accessible au grand public. Cette campagne a considérablement augmenté l'engagement sur les réseaux sociaux et amélioré la compréhension des produits de l'entreprise.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    imageAlt: "Infographie Tech Innovation",
    challenges: [
      "Expliquer des concepts technologiques complexes au grand public",
      "Créer du contenu viral pour les réseaux sociaux",
      "Maintenir la cohérence de la marque à travers diverses infographies",
      "Adapter le contenu pour différentes plateformes",
    ],
    solutions: [
      "Création d'une série d'infographies explicatives sur les innovations de l'entreprise",
      "Conception de versions animées pour les réseaux sociaux",
      "Développement d'un guide de style visuel cohérent pour toutes les infographies",
      "Adaptation des infographies pour différents formats (web, mobile, impression)",
    ],
    results: [
      "Augmentation de 300% de l'engagement sur les réseaux sociaux",
      "Amélioration de 70% de la compréhension des produits par les clients",
      "Couverture médiatique accrue grâce au partage viral des infographies",
      "Augmentation de 50% des demandes de démonstration de produits",
    ],
  },
};

const InfographieClient = () => {
  return <ServicePageLayout {...infographieData} iconMap={iconMap} />;
};

export default InfographieClient;
