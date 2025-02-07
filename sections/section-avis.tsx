import AvisCarrousel from "@/components/customs/avis-carousel";
import Container from "@/components/customs/container";
import Heading from "@/components/customs/heading";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import React from "react";

const SectionAvis = () => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <Heading title="Avis clients" text="Quelques retours clients" />
        <div className="flex items-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border bg-[#DAE3E5]">
            <ChevronLeftCircle className="h-6 w-6" strokeWidth={1.5} />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border bg-[#DAE3E5]">
            <ChevronRightCircle className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>
      <AvisCarrousel />
    </Container>
  );
};

export default SectionAvis;
