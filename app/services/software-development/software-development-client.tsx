"use client";
import { ServicePageLayout } from "@/components/service-page-layout";
import { ServicePageProps } from "@/types/service-types";
import { Cloud, Code, Database, Globe, Server, Smartphone } from "lucide-react";
const iconMap = {
  Globe,
  Smartphone,
  Server,
  Database,
  Cloud,
  Code,
};

const softwareDevelopmentData: ServicePageProps = {
  title: "Développement Logiciel",
  description:
    "Créez des logiciels sur mesure pour propulser votre entreprise vers de nouveaux sommets.",
  services: [
    {
      icon: Globe,
      name: "Applications Web",
      description: "Développement d'applications web robustes et évolutives",
    },
    {
      icon: Smartphone,
      name: "Applications Mobiles",
      description: "Création d'apps iOS et Android performantes",
    },
    {
      icon: Server,
      name: "Solutions Backend",
      description: "Conception de systèmes backend puissants et sécurisés",
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
      icon: Code,
      name: "Logiciels sur Mesure",
      description:
        "Développement de logiciels adaptés à vos besoins spécifiques",
    },
  ],
  benefits: [
    {
      title: "Solutions Personnalisées",
      description: "Logiciels adaptés à vos besoins spécifiques",
    },
    {
      title: "Technologie de Pointe",
      description: "Utilisation des dernières technologies et frameworks",
    },
    {
      title: "Évolutivité",
      description: "Solutions conçues pour évoluer avec votre entreprise",
    },
    {
      title: "Sécurité Renforcée",
      description: "Implémentation des meilleures pratiques de sécurité",
    },
    {
      title: "Support Continu",
      description: "Maintenance et mises à jour régulières",
    },
    {
      title: "Intégration Transparente",
      description: "Compatibilité avec vos systèmes existants",
    },
  ],
  processSteps: [
    {
      title: "Analyse",
      description: "Compréhension approfondie de vos besoins et objectifs",
    },
    {
      title: "Conception",
      description: "Élaboration de l'architecture et du design du logiciel",
    },
    {
      title: "Développement",
      description: "Codage et implémentation des fonctionnalités",
    },
    { title: "Tests", description: "Assurance qualité et tests rigoureux" },
    { title: "Déploiement", description: "Mise en production et intégration" },
    { title: "Maintenance", description: "Support continu et mises à jour" },
  ],
  faqs: [
    {
      question:
        "Quelles technologies utilisez-vous pour le développement logiciel ?",
      answer:
        "Nous utilisons une large gamme de technologies modernes, incluant mais non limitées à React, Angular, Vue.js pour le frontend, Node.js, Python, Java pour le backend, ainsi que des technologies cloud comme AWS, Azure, et Google Cloud Platform. Le choix spécifique dépend des besoins de votre projet.",
    },
    {
      question:
        "Combien de temps prend généralement le développement d'un logiciel ?",
      answer:
        "La durée de développement varie considérablement selon la complexité et l'ampleur du projet. Un projet simple peut prendre quelques semaines, tandis qu'un système plus complexe peut nécessiter plusieurs mois. Nous fournissons toujours une estimation détaillée après l'analyse initiale de vos besoins.",
    },
    {
      question:
        "Offrez-vous des services de maintenance après le déploiement ?",
      answer:
        "Oui, nous proposons des services de maintenance et de support continus après le déploiement. Cela inclut la correction de bugs, les mises à jour de sécurité, l'optimisation des performances et l'ajout de nouvelles fonctionnalités selon vos besoins.",
    },
    {
      question:
        "Comment gérez-vous la sécurité dans le développement logiciel ?",
      answer:
        "La sécurité est une priorité dans tous nos projets. Nous suivons les meilleures pratiques de l'industrie en matière de sécurité, effectuons des tests de pénétration réguliers, et mettons en œuvre des mesures de protection des données dès la conception. Nous restons également à jour avec les dernières normes de sécurité et réglementations.",
    },
  ],
  featuredProject: {
    title: "Système de Gestion d'Entreprise sur Mesure",
    description:
      "Nous avons développé un système de gestion d'entreprise complet et sur mesure pour une entreprise de logistique, intégrant la gestion des commandes, l'inventaire, et les analyses en temps réel.",
    imageSrc: "/software-app.webp",
    imageAlt: "Système de Gestion d'Entreprise",
    challenges: [
      "Systèmes disparates et inefficaces",
      "Manque de visibilité en temps réel sur les opérations",
      "Processus manuels sujets aux erreurs",
      "Difficulté à s'adapter à la croissance de l'entreprise",
    ],
    solutions: [
      "Développement d'un système ERP personnalisé",
      "Intégration de tous les processus clés en une seule plateforme",
      "Mise en place d'un tableau de bord en temps réel",
      "Automatisation des flux de travail critiques",
    ],
    results: [
      "Augmentation de 40% de l'efficacité opérationnelle",
      "Réduction de 30% des erreurs de traitement",
      "Amélioration de 50% de la visibilité sur les opérations",
      "Capacité à gérer une croissance de 200% sans augmentation significative du personnel",
    ],
  },
};

const SoftwareDevelopmentClient = () => {
  return <ServicePageLayout {...softwareDevelopmentData} iconMap={iconMap} />;
};

export default SoftwareDevelopmentClient;
