import { HomeHeroSection } from "@/sections/home-hero-section";
import SectionAvis from "@/sections/section-avis";
import SectionFaq from "@/sections/section-faq";
import SectionRealisation from "@/sections/section-realisations";
import React from "react";

const HomePage = () => {
  return (
    <main className="min-h-screen grow">
      <HomeHeroSection />
      <SectionRealisation />
      <SectionAvis />
      <SectionFaq />
    </main>
  );
};

export default HomePage;
