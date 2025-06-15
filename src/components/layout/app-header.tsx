"use client";

import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Code2 } from "lucide-react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n-config";
import { content as staticContent } from "@/dictionaries/content";
import { TranslateClient } from "../translate-client";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#hero", labelKey: "home" },
  { href: "#projects", labelKey: "projects" },
  { href: "#skills", labelKey: "skills" },
  { href: "#testimonials", labelKey: "testimonials" },
  { href: "#contact", labelKey: "contact" },
] as const;


export function AppHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      navLinks.forEach(link => {
        const section = document.getElementById(link.href.substring(1));
        if (section && section.offsetTop <= window.scrollY + 100) { // Adjust offset as needed
          currentSection = link.href;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItems = ({ isMobile = false }: { isMobile?: boolean }) => (
    navLinks.map((link) => (
      <Button
        key={link.labelKey}
        variant="ghost"
        asChild
        className={`font-headline text-lg hover:text-primary transition-colors ${
          activeSection === link.href ? 'text-primary' : ''
        } ${isMobile ? 'w-full justify-start py-4 text-xl' : ''}`}
        onClick={() => isMobile && setIsSheetOpen(false)}
      >
        <Link href={link.href}>
          <TranslateClient text={staticContent.nav[link.labelKey]} targetLanguage={locale} />
        </Link>
      </Button>
    ))
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href={`/${locale}#hero`} className="flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">
            <TranslateClient text={staticContent.hero.name.split(' ')[0]} targetLanguage={locale} />
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-2">
          <NavItems />
        </nav>
        
        <div className="flex items-center space-x-2">
          <LanguageSwitcher />
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-6">
                <div className="flex flex-col space-y-4">
                  <NavItems isMobile={true} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
