"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProcessStep } from "@/types/service-types";

interface ProcessSectionProps {
  title: string;
  steps: ProcessStep[];
}

export function ProcessSection({ title, steps }: ProcessSectionProps) {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-3xl font-bold">{title}</h2>
      <Tabs defaultValue={steps[0].title.toLowerCase()} className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
          {steps.map((step) => (
            <TabsTrigger key={step.title} value={step.title.toLowerCase()}>
              {step.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {steps.map((step) => (
          <TabsContent
            key={step.title}
            className="mt-2 lg:mt-4"
            value={step.title.toLowerCase()}
          >
            <Card>
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{step.description}</p>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
