
import { AppHeader } from "@/components/layout/app-header";
import { AppFooter } from "@/components/layout/app-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsGallery } from "@/components/sections/projects-gallery";
import { SkillsShowcase } from "@/components/sections/skills-showcase";
import { TestimonialsDisplay } from "@/components/sections/testimonials-display";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProjectsGallery />
        <SkillsShowcase />
        <TestimonialsDisplay />
        <ContactSection />
      </main>
      <AppFooter />
    </div>
  );
}
