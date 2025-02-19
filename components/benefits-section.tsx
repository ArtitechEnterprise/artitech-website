"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import type { Benefit } from "@/types/service-types";

interface BenefitsSectionProps {
  title: string;
  benefits: Benefit[];
}

export function BenefitsSection({ title, benefits }: BenefitsSectionProps) {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-3xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {benefits.map((benefit, index) => (
          <BenefitCard key={benefit.title} benefit={benefit} index={index} />
        ))}
      </div>
    </section>
  );
}

function BenefitCard({ benefit, index }: { benefit: Benefit; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start"
    >
      <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
        {index + 1}
      </div>
      <div>
        <h3 className="text-xl font-semibold">{benefit.title}</h3>
        <p className="text-muted-foreground">{benefit.description}</p>
      </div>
    </motion.div>
  );
}
