"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import {
  TrendingUp,
  Search,
  Mail,
  Share2,
  BarChart,
  Target,
  Users,
} from "lucide-react";
import type { ServicePageProps } from "@/types/service-types";

const iconMap = {
  TrendingUp,
  Search,
  Mail,
  Share2,
  BarChart,
  Target,
  Users,
};

const marketingDigitalData: ServicePageProps = {
  title: "Marketing Digital",
  description:
    "Boostez votre présence en ligne et attirez plus de clients grâce à nos stratégies de marketing digital innovantes.",
  services: [
    {
      icon: Search,
      name: "SEO",
      description:
        "Optimisation pour les moteurs de recherche pour améliorer votre visibilité en ligne",
    },
    {
      icon: TrendingUp,
      name: "Marketing de Contenu",
      description:
        "Création et distribution de contenu pertinent pour attirer et fidéliser votre audience",
    },
    {
      icon: Mail,
      name: "Email Marketing",
      description:
        "Campagnes d'emailing ciblées pour engager vos prospects et clients",
    },
    {
      icon: Share2,
      name: "Marketing sur les Réseaux Sociaux",
      description:
        "Stratégies pour accroître votre présence et votre engagement sur les réseaux sociaux",
    },
    {
      icon: BarChart,
      name: "Publicité en Ligne",
      description:
        "Campagnes publicitaires ciblées sur les plateformes digitales",
    },
    {
      icon: Target,
      name: "Marketing d'Affiliation",
      description:
        "Partenariats stratégiques pour élargir votre portée et augmenter vos ventes",
    },
    {
      icon: Users,
      name: "Marketing d'Influence",
      description:
        "Collaboration avec des influenceurs pour promouvoir votre marque",
    },
  ],
  benefits: [
    {
      title: "Visibilité Accrue",
      description:
        "Augmentez votre présence en ligne et atteignez un public plus large",
    },
    {
      title: "Ciblage Précis",
      description:
        "Touchez votre audience idéale avec des messages personnalisés",
    },
    {
      title: "ROI Mesurable",
      description:
        "Suivez et optimisez vos campagnes pour maximiser votre retour sur investissement",
    },
    {
      title: "Engagement Client",
      description:
        "Créez des relations durables avec vos clients grâce à des interactions significatives",
    },
    {
      title: "Adaptabilité",
      description:
        "Ajustez rapidement vos stratégies en fonction des données en temps réel",
    },
    {
      title: "Compétitivité",
      description: "Restez en avance sur vos concurrents dans l'espace digital",
    },
  ],
  processSteps: [
    {
      title: "Audit",
      description:
        "Analyse de votre présence en ligne actuelle et de vos objectifs",
    },
    {
      title: "Stratégie",
      description: "Élaboration d'un plan marketing digital personnalisé",
    },
    {
      title: "Création",
      description: "Développement de contenu et de campagnes engageantes",
    },
    {
      title: "Mise en œuvre",
      description: "Lancement et gestion de vos campagnes marketing",
    },
    {
      title: "Analyse",
      description: "Suivi des performances et collecte de données",
    },
    {
      title: "Optimisation",
      description:
        "Ajustement continu basé sur les résultats pour maximiser l'efficacité",
    },
  ],
  faqs: [
    {
      question:
        "Pourquoi le marketing digital est-il important pour mon entreprise ?",
      answer:
        "Le marketing digital est crucial car il vous permet d'atteindre votre audience cible là où elle passe le plus de temps : en ligne. Il offre des moyens rentables et mesurables pour toucher un public plus large, engager vos clients et augmenter vos conversions.",
    },
    {
      question:
        "Combien de temps faut-il pour voir des résultats en marketing digital ?",
      answer:
        "Les délais peuvent varier en fonction des stratégies utilisées. Certaines tactiques, comme la publicité payante, peuvent produire des résultats rapides, tandis que d'autres, comme le SEO, peuvent prendre plusieurs mois pour montrer un impact significatif. Nous établissons des attentes réalistes et fournissons des rapports réguliers sur les progrès.",
    },
    {
      question:
        "Comment mesurez-vous le succès des campagnes de marketing digital ?",
      answer:
        "Nous utilisons une variété de métriques selon vos objectifs, incluant le trafic du site web, les taux de conversion, l'engagement sur les réseaux sociaux, le ROI des campagnes publicitaires, et plus encore. Nous utilisons des outils d'analyse avancés pour suivre ces métriques et fournir des rapports détaillés.",
    },
    {
      question:
        "Pouvez-vous adapter vos services de marketing digital à mon secteur d'activité ?",
      answer:
        "Absolument. Nous personnalisons nos stratégies de marketing digital en fonction de votre secteur, de votre audience cible et de vos objectifs spécifiques. Notre équipe effectue des recherches approfondies pour comprendre votre marché et développer des approches sur mesure.",
    },
  ],
  featuredProject: {
    title: "Campagne de Marketing Digital pour une Startup E-commerce",
    description:
      "Nous avons conçu et mis en œuvre une stratégie de marketing digital complète pour une startup e-commerce de mode durable, augmentant significativement sa visibilité en ligne et ses ventes.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    imageAlt: "Campagne de Marketing Digital E-commerce",
    challenges: [
      "Faible notoriété de la marque dans un marché concurrentiel",
      "Budget marketing limité",
      "Besoin d'attirer un public conscient de l'environnement",
      "Conversion des visiteurs du site en clients fidèles",
    ],
    solutions: [
      "Stratégie SEO ciblée pour améliorer le classement pour les termes liés à la mode durable",
      "Campagne de marketing de contenu mettant en avant les pratiques durables de la marque",
      "Utilisation ciblée des médias sociaux pour engager la communauté éco-consciente",
      "Mise en place d'une stratégie d'email marketing pour nurturing et fidélisation",
    ],
    results: [
      "Augmentation de 200% du trafic organique en 6 mois",
      "Croissance de 150% de l'engagement sur les réseaux sociaux",
      "Augmentation de 80% du taux de conversion du site web",
      "Croissance de 120% des ventes en ligne sur un an",
    ],
  },
};

const MarketingDigitalClient = () => {
  return <ServicePageLayout {...marketingDigitalData} iconMap={iconMap} />;
};

export default MarketingDigitalClient;
