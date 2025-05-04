import { useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import EducationSection from "@/components/education-section";
import HackathonsSection from "@/components/hackathons-section";
import ProjectsSection from "@/components/projects-section";
import AchievementsSection from "@/components/achievements-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Set page title
    document.title = "Vaishnavi Ahire - Portfolio";
    
    // The header component now handles navigation highlighting,
    // so we don't need this code anymore
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <HackathonsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
