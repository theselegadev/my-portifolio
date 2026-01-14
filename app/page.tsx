import ProjectsSection from "../components/sections/ProjectsSection";
import HeroSection from "../components/sections/HeroSection";
import HabilitySection from "@/components/sections/HabilitySection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HabilitySection />
      <ProjectsSection />
      <AboutSection />
    </main> 
  );
}