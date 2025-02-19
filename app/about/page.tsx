import { AboutHeroSection } from "@/sections/about-hero-section";
import { ArtitechHistory } from "@/sections/about-history-section";
import { ImpactValuesSection } from "@/sections/about-impact-valeur";
import { MissionVisionSection } from "@/sections/about-mission-vision";

const AboutPage = () => {
  return (
    <main className="min-h-screen grow">
      <AboutHeroSection />
      <ArtitechHistory />
      <MissionVisionSection />
      <ImpactValuesSection />
    </main>
  );
};

export default AboutPage;
