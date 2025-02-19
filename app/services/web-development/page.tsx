"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { ServicePageProps } from "@/types/service-types";
import { Cloud, Database, Globe, Lock, Server, Smartphone } from "lucide-react";
const iconMap = {
  Globe,
  Smartphone,
  Server,
  Database,
  Cloud,
  Lock,
};

const webDevelopmentData: ServicePageProps = {
  title: "Développement Web",
  description:
    "Créez des sites web et des applications web époustouflants qui génèrent des résultats.",
  services: [
    {
      icon: Globe,
      name: "Sites Web Responsifs",
      description: "Création de sites web adaptatifs pour tous les appareils",
    },
    {
      icon: Smartphone,
      name: "Applications Web Progressives",
      description:
        "Développement d'applications web offrant une expérience similaire aux applications natives",
    },
    {
      icon: Server,
      name: "Développement Backend",
      description: "Création d'APIs robustes et évolutives",
    },
    {
      icon: Database,
      name: "Bases de Données",
      description: "Conception et optimisation de bases de données",
    },
    {
      icon: Cloud,
      name: "Solutions Cloud",
      description: "Déploiement et gestion d'applications dans le cloud",
    },
    {
      icon: Lock,
      name: "Sécurité Web",
      description: "Implémentation de mesures de sécurité avancées",
    },
  ],
  benefits: [
    {
      title: "Performance Optimisée",
      description:
        "Sites web rapides et réactifs pour une meilleure expérience utilisateur",
    },
    {
      title: "Design Attrayant",
      description:
        "Interfaces modernes et esthétiques qui captivent vos visiteurs",
    },
    {
      title: "SEO-Friendly",
      description:
        "Optimisation pour les moteurs de recherche pour améliorer votre visibilité en ligne",
    },
    {
      title: "Évolutivité",
      description:
        "Solutions conçues pour s'adapter à la croissance de votre entreprise",
    },
    {
      title: "Intégration Facile",
      description:
        "Compatibilité avec vos systèmes existants et les services tiers",
    },
    {
      title: "Support Continu",
      description:
        "Maintenance régulière et mises à jour pour garder votre site performant",
    },
  ],
  processSteps: [
    {
      title: "Découverte",
      description: "Nous analysons vos besoins et objectifs",
    },
    {
      title: "Planification",
      description: "Nous créons une feuille de route détaillée du projet",
    },
    {
      title: "Design",
      description: "Nous concevons l'interface utilisateur et l'expérience",
    },
    {
      title: "Développement",
      description: "Nous construisons votre application web",
    },
    {
      title: "Tests",
      description: "Nous assurons la qualité et les performances",
    },
    { title: "Déploiement", description: "Nous lançons votre application web" },
    {
      title: "Maintenance",
      description: "Nous assurons le suivi et les mises à jour",
    },
  ],
  faqs: [
    {
      question: "Combien de temps faut-il pour développer un site web ?",
      answer:
        "La durée de développement varie en fonction de la complexité du projet. Un site vitrine simple peut prendre 4-6 semaines, tandis qu'une application web complexe peut nécessiter plusieurs mois. Nous fournissons toujours une estimation détaillée après l'analyse initiale de vos besoins.",
    },
    {
      question:
        "Utilisez-vous des CMS comme WordPress ou développez-vous des sites sur mesure ?",
      answer:
        "Nous offrons les deux options. Pour certains projets, un CMS comme WordPress peut être la solution idéale, tandis que pour d'autres, un développement sur mesure est plus approprié. Nous recommandons la meilleure approche en fonction de vos besoins spécifiques.",
    },
    {
      question:
        "Comment assurez-vous la compatibilité avec différents navigateurs et appareils ?",
      answer:
        "Nous utilisons des techniques de conception responsive et effectuons des tests approfondis sur une variété de navigateurs et d'appareils pour garantir une expérience utilisateur cohérente. Nous suivons également les meilleures pratiques en matière de développement web pour assurer une large compatibilité.",
    },
    {
      question: "Offrez-vous des services d'hébergement web ?",
      answer:
        "Oui, nous proposons des solutions d'hébergement web sécurisées et performantes. Nous pouvons également vous conseiller sur les meilleures options d'hébergement en fonction de vos besoins spécifiques et vous aider à configurer votre environnement d'hébergement.",
    },
  ],
  featuredProject: {
    title: "Plateforme E-commerce",
    description:
      "Nous avons développé une plateforme e-commerce de pointe utilisant React et Next.js, avec une gestion des stocks en temps réel, un traitement sécurisé des paiements et un design responsive pour une expérience utilisateur optimale sur tous les appareils.",
    imageSrc: "/ecommerce-app.webp",
    imageAlt: "Projet E-commerce",
    challenges: [
      "Gestion complexe des stocks multi-fournisseurs",
      "Besoin d'une expérience utilisateur fluide sur mobile",
      "Intégration de multiples passerelles de paiement",
      "Nécessité d'une performance élevée pour gérer les pics de trafic",
    ],
    solutions: [
      "Développement d'un système de gestion des stocks en temps réel",
      "Conception d'une interface mobile-first avec React",
      "Intégration sécurisée de plusieurs options de paiement",
      "Utilisation de Next.js pour le rendu côté serveur et l'optimisation des performances",
    ],
    results: [
      "Augmentation de 50% du taux de conversion",
      "Réduction de 30% du temps de chargement des pages",
      "Augmentation de 40% du panier moyen",
      "Amélioration de 60% de la rétention client",
    ],
  },
};

export default function WebDevelopment() {
  return <ServicePageLayout {...webDevelopmentData} iconMap={iconMap} />;
}
