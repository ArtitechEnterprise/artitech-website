import Carousel from "@/components/customs/Carousel";
import Container from "@/components/customs/container";
import Heading from "@/components/customs/heading";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import React from "react";

const SectionRealisation = () => {
  return (
    <Container className="py-6">
      <div className="flex items-center justify-between">
        <Heading
          title="Realisations"
          text="Decouver nos differentes realisation"
        />
        <div className="flex items-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border bg-[#DAE3E5]">
            <ChevronLeftCircle className="h-6 w-6" strokeWidth={1.5} />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border bg-[#DAE3E5]">
            <ChevronRightCircle className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>
      <div className="my-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Carousel />
      </div>
    </Container>
  );
};

export default SectionRealisation;
