import HistorySection from "@/sections/history-section";
import AboutSection from "@/sections/section-about";
import SectionEquipes from "@/sections/section-equipes";
import SectionHero from "@/sections/section-hero";
import SectionMissions from "@/sections/section-missions";

const AboutPage = () => {
  return (
    <main className="min-h-screen grow">
      <SectionHero />
      <AboutSection />
      <HistorySection />
      <SectionMissions />
      <SectionEquipes />
    </main>
  );
};

export default AboutPage;
