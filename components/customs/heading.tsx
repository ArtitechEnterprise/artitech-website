import ContainerAnimation from "@/lib/aos-animation";
import React from "react";

const Heading = ({ title, text }: { title: string; text: string }) => {
  return (
    <ContainerAnimation>
      <div className="space-y-2 py-8">
        <h3
          className="text-3xl font-semibold text-blue-500"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="300"
        >
          {title}
        </h3>
        <p
          className="text-pretty text-base font-light"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="400"
        >
          {text}
        </p>
      </div>
    </ContainerAnimation>
  );
};

export default Heading;
