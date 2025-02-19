"use client";
import { ServicePageLayout } from "@/components/service-page-layout";
import { ServicePageProps } from "@/types/service-types";
import { Cloud, Code, Database, Globe, Server, Zap } from "lucide-react";
const iconMap = {
  Globe,
  Code,
  Zap,
  Database,
  Server,
  Cloud,
};

const apiIntegrationData: ServicePageProps = {
  title: "Intégration API",
  description:
    "Connectez de manière transparente vos systèmes et débloquez de nouvelles possibilités avec nos services d'intégration API experts.",
  services: [
    {
      icon: Globe,
      name: "REST APIs",
      description: "Intégration avec des services web RESTful",
    },
    {
      icon: Code,
      name: "GraphQL",
      description: "Requêtes et manipulations de données efficaces",
    },
    {
      icon: Zap,
      name: "Webhooks",
      description: "Intégrations en temps réel basées sur les événements",
    },
    {
      icon: Database,
      name: "SOAP APIs",
      description: "Intégrations avec des systèmes legacy",
    },
    {
      icon: Server,
      name: "gRPC",
      description: "Communication inter-services haute performance",
    },
    {
      icon: Cloud,
      name: "Microservices",
      description: "Intégration d'architectures de microservices",
    },
  ],
  benefits: [
    {
      title: "Efficacité Améliorée",
      description: "Automatisez les processus et réduisez le travail manuel",
    },
    {
      title: "Fonctionnalités Étendues",
      description: "Étendez les capacités de votre application",
    },
    {
      title: "Meilleure Expérience Utilisateur",
      description: "Fournissez un accès transparent aux services tiers",
    },
    {
      title: "Évolutivité Accrue",
      description:
        "Ajoutez facilement de nouvelles fonctionnalités et services",
    },
    {
      title: "Interopérabilité",
      description:
        "Permettez à différents systèmes de communiquer efficacement",
    },
    {
      title: "Intégration de Données",
      description: "Synchronisez les données entre différentes plateformes",
    },
  ],
  processSteps: [
    {
      title: "Analyse des Besoins",
      description:
        "Nous commençons par comprendre vos besoins commerciaux et les systèmes que vous souhaitez intégrer.",
    },
    {
      title: "Évaluation de l'API",
      description:
        "Notre équipe évalue les APIs impliquées, examinant la documentation, les méthodes d'authentification et les structures de données.",
    },
    {
      title: "Conception & Développement",
      description:
        "Nous concevons et implémentons l'intégration, assurant un flux de données efficace, une gestion des erreurs et une évolutivité.",
    },
    {
      title: "Tests",
      description:
        "Des tests rigoureux sont effectués pour s'assurer que l'intégration fonctionne comme prévu, gérant divers scénarios et cas limites.",
    },
    {
      title: "Déploiement",
      description:
        "Une fois les tests terminés, nous déployons l'intégration dans votre environnement de production.",
    },
    {
      title: "Surveillance & Support",
      description:
        "Nous fournissons une surveillance et un support continus pour garantir que l'intégration continue de fonctionner de manière optimale.",
    },
  ],
  faqs: [
    {
      question: "Qu'est-ce que l'intégration API ?",
      answer:
        "L'intégration API est le processus de connexion de différentes applications logicielles ou systèmes via leurs APIs (Interfaces de Programmation d'Applications) pour leur permettre d'échanger des données et des fonctionnalités.",
    },
    {
      question:
        "Combien de temps prend généralement un projet d'intégration API ?",
      answer:
        "La durée d'un projet d'intégration API peut varier en fonction de la complexité des systèmes impliqués et de l'étendue de l'intégration. Des intégrations simples peuvent prendre quelques jours, tandis que des projets plus complexes pourraient prendre plusieurs semaines ou mois.",
    },
    {
      question: "Pouvez-vous intégrer n'importe quelle API ?",
      answer:
        "Nous pouvons intégrer la plupart des APIs modernes, y compris REST, GraphQL et SOAP. Cependant, la faisabilité et la complexité de l'intégration dépendent de la documentation spécifique de l'API, des méthodes d'authentification et des structures de données.",
    },
    {
      question: "Comment assurez-vous la sécurité des intégrations API ?",
      answer:
        "Nous mettons en œuvre des pratiques de sécurité standard de l'industrie, notamment des méthodes d'authentification sécurisées (comme OAuth), le chiffrement des données et des audits de sécurité réguliers. Nous suivons également les meilleures pratiques pour la gestion des données sensibles et nous conformons aux réglementations pertinentes en matière de protection des données.",
    },
  ],
  featuredProject: {
    title: "Intégration Plateforme E-commerce",
    description:
      "Nous avons intégré la plateforme e-commerce d'un client avec plusieurs services tiers, notamment des passerelles de paiement, des systèmes de gestion des stocks et des fournisseurs d'expédition. Cette intégration complète a rationalisé les opérations, réduit le travail manuel et amélioré l'efficacité globale.",
    imageSrc: "/api.webp",
    imageAlt: "Intégration E-commerce",
    challenges: [
      "Systèmes disparates causant des inefficacités",
      "Processus manuels sujets aux erreurs",
      "Manque de visibilité en temps réel sur les stocks",
      "Expérience client incohérente",
    ],
    solutions: [
      "Intégration API avec les passerelles de paiement",
      "Synchronisation en temps réel avec le système de gestion des stocks",
      "Intégration avec les API des fournisseurs d'expédition",
      "Mise en place d'un système de notification automatisé",
    ],
    results: [
      "Augmentation de 30% de la vitesse de traitement des commandes",
      "Réduction de 25% des écarts d'inventaire",
      "Amélioration de 40% de la précision des délais de livraison",
      "Augmentation de 20% de la satisfaction client",
    ],
  },
};

export default function APIIntegration() {
  return <ServicePageLayout {...apiIntegrationData} iconMap={iconMap} />;
}
