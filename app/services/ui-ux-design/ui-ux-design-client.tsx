"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { ServicePageProps } from "@/types/service-types";
import { Eye, Layout, Palette, Smartphone, Users, Zap } from "lucide-react";

const iconMap = {
  Palette,
  Eye,
  Users,
  Zap,
  Layout,
  Smartphone,
};

const uiUxDesignData: ServicePageProps = {
  title: "Design UI/UX",
  description:
    "Créez des interfaces utilisateur intuitives et magnifiques qui raviront vos clients.",
  services: [
    {
      icon: Palette,
      name: "Design d'Interface",
      description:
        "Création d'interfaces visuellement attrayantes et intuitives",
    },
    {
      icon: Eye,
      name: "Design d'Expérience",
      description: "Conception de parcours utilisateur fluides et engageants",
    },
    {
      icon: Users,
      name: "Recherche Utilisateur",
      description:
        "Compréhension des besoins et comportements des utilisateurs",
    },
    {
      icon: Zap,
      name: "Prototypage",
      description:
        "Création de prototypes interactifs pour tester les concepts",
    },
    {
      icon: Layout,
      name: "Design Responsive",
      description: "Conception adaptative pour tous les appareils",
    },
    {
      icon: Smartphone,
      name: "Design d'Applications Mobiles",
      description: "Création d'interfaces mobiles natives et intuitives",
    },
  ],
  benefits: [
    {
      title: "Satisfaction Utilisateur Accrue",
      description:
        "Interfaces intuitives qui réduisent la frustration et augmentent l'engagement",
    },
    {
      title: "Conversion Améliorée",
      description: "Parcours utilisateur optimisés qui favorisent l'action",
    },
    {
      title: "Image de Marque Renforcée",
      description: "Design cohérent qui renforce l'identité de votre marque",
    },
    {
      title: "Réduction des Coûts de Développement",
      description:
        "Prototypes et spécifications claires qui rationalisent le processus de développement",
    },
    {
      title: "Accessibilité Améliorée",
      description:
        "Conception inclusive qui rend votre produit accessible à tous",
    },
    {
      title: "Avantage Concurrentiel",
      description:
        "Expérience utilisateur supérieure qui vous démarque de la concurrence",
    },
  ],
  processSteps: [
    {
      title: "Recherche",
      description:
        "Comprendre les utilisateurs, leurs besoins et comportements",
    },
    {
      title: "Idéation",
      description: "Générer des idées et créer des wireframes basse fidélité",
    },
    {
      title: "Design UI",
      description:
        "Créer des designs haute fidélité et des prototypes interactifs",
    },
    {
      title: "Test Utilisateur",
      description: "Valider les designs et recueillir des retours",
    },
    {
      title: "Itération",
      description: "Affiner le design basé sur les retours des utilisateurs",
    },
    {
      title: "Livraison",
      description:
        "Préparer les assets et la documentation pour le développement",
    },
  ],
  faqs: [
    {
      question: "Quelle est la différence entre UI et UX ?",
      answer:
        "L'UI (Interface Utilisateur) se concentre sur l'aspect visuel et interactif d'un produit, tandis que l'UX (Expérience Utilisateur) englobe l'ensemble du parcours et des interactions de l'utilisateur avec le produit. Un bon design combine les deux pour créer une expérience à la fois esthétique et fonctionnelle.",
    },
    {
      question: "Comment intégrez-vous l'accessibilité dans vos designs ?",
      answer:
        "L'accessibilité est une partie intégrante de notre processus de design. Nous suivons les directives WCAG, utilisons des contrastes de couleurs appropriés, concevons pour la navigation au clavier, et nous assurons que nos designs sont compatibles avec les technologies d'assistance.",
    },
    {
      question:
        "Combien de temps prend généralement un projet de design UI/UX ?",
      answer:
        "La durée d'un projet de design UI/UX varie en fonction de sa complexité. Un projet simple peut prendre 4-6 semaines, tandis qu'un projet plus complexe peut s'étendre sur plusieurs mois. Nous fournissons toujours une estimation détaillée après l'évaluation initiale de vos besoins.",
    },
    {
      question: "Comment mesurez-vous le succès d'un design UI/UX ?",
      answer:
        "Nous utilisons une combinaison de métriques quantitatives (taux de conversion, temps passé sur la page, taux de rebond) et qualitatives (retours utilisateurs, tests d'utilisabilité). L'objectif est d'améliorer à la fois la satisfaction des utilisateurs et les performances commerciales.",
    },
  ],
  featuredProject: {
    title: "Redesign Application Bancaire Mobile",
    description:
      "Nous avons redesigné une application bancaire mobile pour améliorer l'expérience utilisateur et augmenter l'engagement. Le nouveau design présente une interface épurée et intuitive avec une navigation facile à utiliser, des informations personnalisées et des fonctionnalités de sécurité améliorées.",
    imageSrc: "/ui_ux.webp",
    imageAlt: "Redesign Application Bancaire Mobile",
    challenges: [
      "Interface utilisateur obsolète et peu intuitive",
      "Faible engagement des utilisateurs",
      "Fonctionnalités difficiles à trouver",
      "Manque de personnalisation",
    ],
    solutions: [
      "Nouvelle interface épurée et moderne",
      "Navigation repensée pour un accès facile aux fonctionnalités",
      "Tableau de bord personnalisé avec des informations financières clés",
      "Intégration de fonctionnalités de sécurité avancées",
    ],
    results: [
      "Augmentation de 40% des utilisateurs actifs quotidiens",
      "Amélioration de 25% des scores de satisfaction client",
      "Réduction de 50% des appels au support client",
      "Augmentation de 30% de l'utilisation des fonctionnalités avancées",
    ],
  },
};

const UIUXDesignClient = () => {
  return <ServicePageLayout {...uiUxDesignData} iconMap={iconMap} />;
};

export default UIUXDesignClient;
