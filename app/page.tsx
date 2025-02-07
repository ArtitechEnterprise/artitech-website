import SectionAvis from "@/sections/section-avis";
import SectionFaq from "@/sections/section-faq";
import SectionHero from "@/sections/section-hero";
import SectionRealisation from "@/sections/section-realisations";
import SectionSocials from "@/sections/section-socials";

import React from "react";

const HomePage = () => {
  return (
    <main className="min-h-screen grow">
      <SectionHero />
      <SectionSocials />
      <SectionRealisation />
      <SectionAvis />
      <SectionFaq />
    </main>
  );
};

export default HomePage;
