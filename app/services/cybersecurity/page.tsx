"use client";
import { ServicePageLayout } from "@/components/service-page-layout";
import { ServicePageProps } from "@/types/service-types";
import {
  AlertTriangle,
  Cloud,
  Eye,
  FileCheck,
  Lock,
  Shield,
} from "lucide-react";
const iconMap = {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  Cloud,
  FileCheck,
};

const cybersecurityData: ServicePageProps = {
  title: "Cybersécurité",
  description:
    "Protégez vos actifs numériques contre les menaces cybernétiques croissantes.",
  services: [
    {
      icon: Shield,
      name: "Protection des Données",
      description: "Sécurisez vos données sensibles contre les menaces",
    },
    {
      icon: Lock,
      name: "Sécurité des Réseaux",
      description: "Renforcez la sécurité de votre infrastructure réseau",
    },
    {
      icon: Eye,
      name: "Surveillance Continue",
      description: "Détectez et répondez rapidement aux menaces de sécurité",
    },
    {
      icon: AlertTriangle,
      name: "Gestion des Risques",
      description: "Identifiez et atténuez les risques de cybersécurité",
    },
    {
      icon: Cloud,
      name: "Sécurité Cloud",
      description: "Protégez vos données et applications dans le cloud",
    },
    {
      icon: FileCheck,
      name: "Conformité",
      description: "Assurez la conformité avec les réglementations de sécurité",
    },
  ],
  benefits: [
    {
      title: "Protection Renforcée",
      description: "Défendez votre entreprise contre les cybermenaces avancées",
    },
    {
      title: "Continuité des Activités",
      description: "Minimisez les interruptions dues aux incidents de sécurité",
    },
    {
      title: "Confiance des Clients",
      description:
        "Renforcez la confiance en protégeant les données des clients",
    },
    {
      title: "Conformité Réglementaire",
      description: "Respectez les normes et réglementations de l'industrie",
    },
    {
      title: "Réduction des Coûts",
      description: "Évitez les coûts élevés associés aux violations de données",
    },
    {
      title: "Avantage Concurrentiel",
      description: "Différenciez-vous par une cybersécurité de pointe",
    },
  ],
  processSteps: [
    {
      title: "Évaluation",
      description:
        "Analyse approfondie de votre infrastructure et de vos risques",
    },
    {
      title: "Planification",
      description: "Élaboration d'une stratégie de sécurité personnalisée",
    },
    {
      title: "Implémentation",
      description: "Mise en place des mesures de sécurité",
    },
    {
      title: "Formation",
      description: "Sensibilisation et formation de votre équipe",
    },
    {
      title: "Surveillance",
      description: "Surveillance continue de votre environnement",
    },
    {
      title: "Amélioration",
      description: "Optimisation continue de votre posture de sécurité",
    },
  ],
  faqs: [
    {
      question:
        "Pourquoi la cybersécurité est-elle importante pour mon entreprise ?",
      answer:
        "La cybersécurité est cruciale car elle protège vos données sensibles, maintient la confiance de vos clients, assure la continuité de vos activités et vous aide à respecter les réglementations. Avec l'augmentation des cyberattaques, une solide stratégie de sécurité est essentielle pour toute entreprise moderne.",
    },
    {
      question:
        "Quelle est la fréquence recommandée pour les évaluations de sécurité ?",
      answer:
        "Nous recommandons des évaluations de sécurité au moins une fois par an, ou plus fréquemment si votre entreprise connaît des changements significatifs, comme l'adoption de nouvelles technologies ou l'expansion de vos opérations. Des évaluations régulières vous permettent de rester à jour face aux menaces émergentes.",
    },
    {
      question: "Comment gérez-vous la sécurité dans un environnement cloud ?",
      answer:
        "La sécurité dans le cloud implique une approche multicouche. Nous utilisons des pratiques telles que le chiffrement des données, l'authentification multifactorielle, la gestion des accès, la surveillance continue et la configuration sécurisée des services cloud. Nous travaillons également en étroite collaboration avec les principaux fournisseurs de cloud pour assurer la conformité et la sécurité optimale.",
    },
    {
      question: "Que faire en cas de violation de données ?",
      answer:
        "En cas de violation de données, notre équipe d'intervention rapide entre en action. Nous isolons la menace, évaluons l'étendue des dégâts, restaurons les systèmes et les données, et mettons en œuvre des mesures pour prévenir de futures violations. Nous vous guidons également dans le processus de notification aux parties concernées et de conformité aux exigences réglementaires.",
    },
  ],
  featuredProject: {
    title: "Sécurisation de l'Infrastructure Bancaire",
    description:
      "Nous avons renforcé la sécurité de l'infrastructure IT d'une grande banque, en mettant en place des mesures de protection avancées contre les cybermenaces et en assurant la conformité aux réglementations bancaires.",
    imageSrc: "/banck-app.webp",
    imageAlt: "Sécurisation Infrastructure Bancaire",
    challenges: [
      "Infrastructure vieillissante vulnérable aux attaques modernes",
      "Conformité insuffisante aux nouvelles réglementations",
      "Manque de visibilité sur les menaces en temps réel",
      "Formation inadéquate du personnel en matière de sécurité",
    ],
    solutions: [
      "Mise en place d'un système de détection et de réponse aux incidents (SIEM)",
      "Implémentation de contrôles d'accès basés sur les rôles (RBAC)",
      "Déploiement de solutions de chiffrement avancées",
      "Programme de formation complet en cybersécurité pour tous les employés",
    ],
    results: [
      "Réduction de 95% des vulnérabilités critiques",
      "Conformité à 100% avec les réglementations bancaires",
      "Détection et réponse aux menaces 60% plus rapides",
      "Amélioration de 80% de la sensibilisation à la sécurité des employés",
    ],
  },
};

export default function Cybersecurity() {
  return <ServicePageLayout {...cybersecurityData} iconMap={iconMap} />;
}
