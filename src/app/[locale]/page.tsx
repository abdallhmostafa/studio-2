import { AppHeader } from "@/components/layout/app-header";
import { AppFooter } from "@/components/layout/app-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsGallery } from "@/components/sections/projects-gallery";
import { SkillsShowcase } from "@/components/sections/skills-showcase";
import { TestimonialsDisplay } from "@/components/sections/testimonials-display";
import { ContactSection } from "@/components/sections/contact-section";
import type { Locale } from "@/lib/i18n-config";

interface HomePageProps {
  params: {
    locale: Locale;
  };
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader locale={locale} />
      <main className="flex-grow">
        <HeroSection locale={locale} />
        <ProjectsGallery locale={locale} />
        <SkillsShowcase locale={locale} />
        <TestimonialsDisplay locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <AppFooter locale={locale} />
    </div>
  );
}
