import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  name: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FeaturedProject {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  challenges: string[];
  solutions: string[];
  results: string[];
}

export interface ServicePageProps {
  title: string;
  description: string;
  services: ServiceItem[];
  benefits: Benefit[];
  processSteps: ProcessStep[];
  faqs: FAQ[];
  featuredProject: FeaturedProject;
}
