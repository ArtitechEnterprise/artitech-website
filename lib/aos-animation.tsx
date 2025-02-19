"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContainerAnimation = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <>{children}</>;
};

export default ContainerAnimation;
