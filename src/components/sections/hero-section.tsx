
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import type { Locale } from "@/lib/i18n-config";
import { content as staticContent } from "@/lib/content";
import { TranslateClient } from "../translate-client";

export function HeroSection({ locale }: { locale: Locale }) {
  return (
    <section id="hero" className="container mx-auto min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center py-20 px-4">
      <div className="max-w-3xl">
        <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 animate-fadeInDown opacity-0">
          <TranslateClient text={staticContent.hero.name} targetLanguage={locale} />
        </h1>
        <p className="font-headline text-xl md:text-2xl text-primary mb-8 animate-fadeInUp opacity-0 delay-200">
          <TranslateClient text={staticContent.hero.role} targetLanguage={locale} />
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fadeInUp opacity-0 delay-400">
          <TranslateClient text={staticContent.hero.introduction} targetLanguage={locale} placeholderLines={3}/>
        </p>
        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fadeInUp opacity-0 delay-600"
          asChild
        >
          <Link href="#projects">
            <TranslateClient text={staticContent.hero.cta} targetLanguage={locale} />
            <ArrowDown className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
