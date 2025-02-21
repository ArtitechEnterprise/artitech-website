"use client";
import { ServicePageLayout } from "@/components/service-page-layout";
import { ServicePageProps } from "@/types/service-types";
import {
  BarChart,
  Lightbulb,
  RefreshCw,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
const iconMap = {
  Lightbulb,
  TrendingUp,
  Users,
  BarChart,
  Target,
  RefreshCw,
};

const digitalConsultingData: ServicePageProps = {
  title: "Conseil Digital",
  description:
    "Guidez votre transformation numérique avec notre expertise en conseil digital.",
  services: [
    {
      icon: Lightbulb,
      name: "Stratégie Digitale",
      description: "Élaboration de stratégies numériques sur mesure",
    },
    {
      icon: TrendingUp,
      name: "Transformation Digitale",
      description: "Accompagnement dans la transition numérique",
    },
    {
      icon: Users,
      name: "Expérience Client",
      description: "Optimisation de l'expérience client digitale",
    },
    {
      icon: BarChart,
      name: "Analyse de Données",
      description: "Exploitation des données pour la prise de décision",
    },
    {
      icon: Target,
      name: "Marketing Digital",
      description: "Stratégies de marketing en ligne efficaces",
    },
    {
      icon: RefreshCw,
      name: "Innovation Technologique",
      description: "Intégration des dernières technologies",
    },
  ],
  benefits: [
    {
      title: "Avantage Concurrentiel",
      description:
        "Restez en avance sur vos concurrents grâce à l'innovation digitale",
    },
    {
      title: "Efficacité Opérationnelle",
      description: "Optimisez vos processus grâce aux solutions numériques",
    },
    {
      title: "Engagement Client Amélioré",
      description:
        "Renforcez la fidélité client avec des expériences personnalisées",
    },
    {
      title: "Prise de Décision Éclairée",
      description: "Utilisez les données pour prendre de meilleures décisions",
    },
    {
      title: "Agilité Organisationnelle",
      description: "Adaptez-vous rapidement aux changements du marché",
    },
    {
      title: "Croissance Durable",
      description:
        "Établissez une base solide pour une croissance à long terme",
    },
  ],
  processSteps: [
    {
      title: "Évaluation",
      description:
        "Analyse approfondie de votre situation actuelle et de vos objectifs",
    },
    {
      title: "Stratégie",
      description: "Élaboration d'une stratégie digitale personnalisée",
    },
    {
      title: "Planification",
      description:
        "Création d'une feuille de route détaillée pour la mise en œuvre",
    },
    {
      title: "Implémentation",
      description: "Exécution des initiatives digitales",
    },
    { title: "Mesure", description: "Suivi et analyse des résultats" },
    {
      title: "Optimisation",
      description: "Ajustements continus basés sur les performances",
    },
  ],
  faqs: [
    {
      question: "Qu'est-ce que le conseil digital ?",
      answer:
        "Le conseil digital est un service qui aide les entreprises à naviguer dans la transformation numérique, à optimiser leurs processus grâce à la technologie et à tirer parti des opportunités offertes par le monde digital.",
    },
    {
      question:
        "Combien de temps dure généralement un projet de conseil digital ?",
      answer:
        "La durée d'un projet de conseil digital peut varier considérablement en fonction de l'ampleur et de la complexité des objectifs. Certains projets peuvent durer quelques semaines, tandis que d'autres peuvent s'étendre sur plusieurs mois ou même devenir des partenariats à long terme.",
    },
    {
      question:
        "Comment mesurez-vous le succès d'un projet de conseil digital ?",
      answer:
        "Nous définissons des KPIs (Indicateurs Clés de Performance) spécifiques au début de chaque projet. Ces indicateurs peuvent inclure l'augmentation du trafic web, l'amélioration des taux de conversion, la réduction des coûts opérationnels, ou l'augmentation de la satisfaction client, entre autres.",
    },
    {
      question:
        "Quelle est la différence entre la transformation digitale et le conseil digital ?",
      answer:
        "La transformation digitale est le processus global de l'adoption des technologies numériques dans tous les aspects d'une entreprise. Le conseil digital, quant à lui, est le service qui guide et facilite ce processus de transformation, fournissant expertise, stratégie et support tout au long du parcours.",
    },
  ],
  featuredProject: {
    title: "Transformation Digitale d'une Chaîne de Retail",
    description:
      "Nous avons guidé une grande chaîne de retail dans sa transformation digitale, en intégrant des technologies innovantes pour améliorer l'expérience client et optimiser les opérations.",
    imageSrc: "/consultation.jpg",
    imageAlt: "Transformation Digitale Retail",
    challenges: [
      "Expérience client fragmentée entre les canaux en ligne et hors ligne",
      "Systèmes de gestion des stocks obsolètes",
      "Manque de visibilité sur les données clients",
      "Processus opérationnels inefficaces",
    ],
    solutions: [
      "Mise en place d'une stratégie omnicanale",
      "Implémentation d'un système de gestion des stocks en temps réel",
      "Développement d'une plateforme CRM intégrée",
      "Automatisation des processus clés",
    ],
    results: [
      "Augmentation de 35% des ventes en ligne",
      "Réduction de 25% des ruptures de stock",
      "Amélioration de 40% de la satisfaction client",
      "Augmentation de 20% de l'efficacité opérationnelle",
    ],
  },
};

const DigitalConsultingClient = () => {
  return <ServicePageLayout {...digitalConsultingData} iconMap={iconMap} />;
};

export default DigitalConsultingClient;
