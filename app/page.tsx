import ProjectsSection from "../components/sections/ProjectsSection";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main> 
  );
}