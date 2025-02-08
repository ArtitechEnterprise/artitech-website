import React from 'react'
import AboutSection from '@/sections/AboutSection';
import ServicesSection from '@/sections/ServicesSection';
import TeamSection from '@/sections/historysection';
import HistorySection from'@/sections/TeamSection';
import SectionHero from '@/sections/section-hero';


const AboutPage = () => {
  return (
    <main className="min-h-screen grow">
      <SectionHero/>
         <AboutSection />
        <ServicesSection />
        <TeamSection />
        <HistorySection/>
     </main>
  )
}

export default AboutPage