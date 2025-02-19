import { AboutHeroSection } from "@/sections/about-hero-section";
import AboutHistorySection from "@/sections/about-history-section";
import AboutImpactEtValeurs from "@/sections/about-impact-valeur";
import AboutMissionVision from "@/sections/about-mission-vision";

const AboutPage = () => {
  return (
    <main className="min-h-screen grow">
      <AboutHeroSection />
      <AboutHistorySection />
      <AboutMissionVision />
      <AboutImpactEtValeurs />
    </main>
  );
};

export default AboutPage;
