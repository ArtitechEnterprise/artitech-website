import { Accordion } from "@/components/customs/accordion";
import Container from "@/components/customs/container";
import { accordionItems } from "@/data/accordion";
import React from "react";

const SectionFaq = () => {
  return (
    <Container className="py-8">
      <h2 className="mb-8 text-center text-2xl font-semibold lg:text-4xl">
        Vous avez des questions ? Nous avons les réponses !
      </h2>
      <Accordion items={accordionItems} allowMultiple={true} />
    </Container>
  );
};

export default SectionFaq;
