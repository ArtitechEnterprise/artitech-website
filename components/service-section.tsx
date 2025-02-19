import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import type { ServiceItem } from "@/types/service-types";
import type { LucideIcon } from "lucide-react";

interface ServiceSectionProps {
  title: string;
  services: ServiceItem[];
  iconMap: Record<string, LucideIcon>;
}

export function ServiceSection({ title, services }: ServiceSectionProps) {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-3xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.name} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
        <CardHeader className="flex">
          <service.icon className="h-9 w-9 text-primary" />
          <CardTitle>{service.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{service.description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
