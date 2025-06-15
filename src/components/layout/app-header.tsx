
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Code2 } from "lucide-react";
import { content as staticContent } from "@/lib/content";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#hero", labelKey: "home" },
  { href: "#about", labelKey: "about" },
  { href: "#projects", labelKey: "projects" },
  { href: "#skills", labelKey: "skills" },
  { href: "#testimonials", labelKey: "testimonials" },
  { href: "#contact", labelKey: "contact" },
] as const;


export function AppHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      for (const link of navLinks) {
        const sectionId = link.href.substring(1); // Remove #
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= window.scrollY + 100) { 
          currentSection = link.href;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItems = ({ isMobile = false }: { isMobile?: boolean }) => (
    navLinks.map((link) => (
      <Button
        key={link.labelKey}
        variant="ghost"
        asChild
        className={`font-headline text-lg hover:text-primary transition-colors ${
          activeSection === link.href ? 'text-primary font-semibold' : ''
        } ${isMobile ? 'w-full justify-start py-4 text-xl' : ''}`}
        onClick={() => isMobile && setIsSheetOpen(false)}
      >
        <Link href={link.href}> 
          {staticContent.nav[link.labelKey as keyof typeof staticContent.nav]}
        </Link>
      </Button>
    ))
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="#hero" className="flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">
            {staticContent.hero.name.split(' ')[0]} 
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          <NavItems />
        </nav>
        
        <div className="flex items-center space-x-2">
          {/* LanguageSwitcher removed */}
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
