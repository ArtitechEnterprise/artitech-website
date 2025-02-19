"use client";

import { ServiceLayout } from "@/components/service-layout";
import { ServiceSection } from "@/components/service-section";
import { BenefitsSection } from "@/components/benefits-section";
import { ProcessSection } from "@/components/process-section";
import { FeaturedProjectSection } from "@/components/featured-project-section";
import { FAQSection } from "@/components/faq-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import type { ServicePageProps } from "@/types/service-types";
import type { LucideIcon } from "lucide-react";

export function ServicePageLayout({
  title,
  description,
  services,
  benefits,
  processSteps,
  faqs,
  featuredProject,
  iconMap,
}: ServicePageProps & { iconMap: Record<string, LucideIcon> }) {
  return (
    <ServiceLayout title={title} description={description}>
      <div className="space-y-16 px-4 py-8 sm:px-6 lg:px-8">
        <ServiceSection
          title={`Nos Services de ${title}`}
          services={services}
          iconMap={iconMap}
        />
        <BenefitsSection title={`Avantages de ${title}`} benefits={benefits} />
        <ProcessSection
          title={`Notre Processus de ${title}`}
          steps={processSteps}
        />
        <FeaturedProjectSection
          title={`Projet de ${title} Vedette`}
          project={featuredProject}
        />
        <FAQSection title="Foire Aux Questions" faqs={faqs} />

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="mb-8 text-center text-3xl font-bold">
            Prêt à Commencer ?
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="mb-4 text-center text-lg sm:text-left">
                Discutons de la façon dont nos services de {title} peuvent
                propulser votre entreprise vers de nouveaux sommets.
              </p>
              <div className="flex justify-center sm:justify-start">
                <Button size="lg" className="group w-full">
                  Contactez nous
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </ServiceLayout>
  );
}
