import AvisCarrousel from "@/components/customs/avis-carousel";
import Container from "@/components/customs/container";
import Heading from "@/components/customs/heading";
import React from "react";

const SectionAvis = () => {
  return (
    <Container className="space-y-4">
      <Heading title="Avis clients" text="Quelques retours clients" />
      <AvisCarrousel />
    </Container>
  );
};

export default SectionAvis;
