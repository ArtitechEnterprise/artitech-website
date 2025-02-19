"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import type { FeaturedProject } from "@/types/service-types";

interface FeaturedProjectSectionProps {
  title: string;
  project: FeaturedProject;
}

export function FeaturedProjectSection({
  title,
  project,
}: FeaturedProjectSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="mb-16">
      <h2 className="mb-8 text-3xl font-bold">{title}</h2>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 items-center gap-8 md:grid-cols-2"
      >
        <div>
          <Image
            src={project.imageSrc || "/placeholder.svg"}
            alt={project.imageAlt}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h3 className="mb-4 text-2xl font-semibold">{project.title}</h3>
          <p className="mb-4 text-muted-foreground">{project.description}</p>
          <Tabs defaultValue="challenge" className="w-full">
            <TabsList>
              <TabsTrigger value="challenge">Défi</TabsTrigger>
              <TabsTrigger value="solution">Solution</TabsTrigger>
              <TabsTrigger value="results">Résultats</TabsTrigger>
            </TabsList>
            <TabsContent value="challenge">
              <ul className="list-disc space-y-2 pl-5">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="solution">
              <ul className="list-disc space-y-2 pl-5">
                {project.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="results">
              <ul className="list-disc space-y-2 pl-5">
                {project.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
          <Button size="lg" className="group mt-4 w-full">
            Voir l&apos;Étude de Cas Complète
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
