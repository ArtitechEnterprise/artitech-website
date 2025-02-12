import Container from "@/components/customs/container";
import ServiceItem from "@/components/customs/service-item";
import React from "react";
import servicesDatas from "@/data/services";

const SectionServices = () => {
  return (
    <Container className="flex flex-col gap-36 py-10 odd:flex-row-reverse">
      {servicesDatas.map((service) => (
        <ServiceItem key={service.id} {...service} />
      ))}
    </Container>
  );
};

export default SectionServices;
