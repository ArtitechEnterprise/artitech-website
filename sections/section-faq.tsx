import { Accordion } from "@/components/customs/accordion";
import { AccordionMobile } from "@/components/customs/accordion-mobile";
import Container from "@/components/customs/container";
import Heading from "@/components/customs/heading";
import { accordionItems } from "@/data/accordion";
import React from "react";

const SectionFaq = () => {
  return (
    <Container className="py-8">
      <Heading
        text="Nous avons les reponses!"
        title="Vous avez des questions ?"
      />
      <Accordion items={accordionItems} allowMultiple={false} />
      <AccordionMobile items={accordionItems} allowMultiple={false} />
    </Container>
  );
};

export default SectionFaq;
