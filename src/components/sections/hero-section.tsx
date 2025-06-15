
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import type { Locale } from "@/lib/i18n-config";
import { content as staticContent } from "@/lib/content";
import { TranslateClient } from "../translate-client";

export function HeroSection({ locale }: { locale: Locale }) {
  const heroContent = staticContent.hero;
  return (
    <section id="hero" className="container mx-auto min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 px-4">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full max-w-screen-lg">
        <div className="md:order-1 text-center md:text-left">
          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 animate-fadeInDown opacity-0">
            <TranslateClient text={heroContent.name} targetLanguage={locale} />
          </h1>
          <p className="font-headline text-xl md:text-2xl text-primary mb-8 animate-fadeInUp opacity-0 delay-200">
            <TranslateClient text={heroContent.role} targetLanguage={locale} />
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fadeInUp opacity-0 delay-400">
            <TranslateClient text={heroContent.introduction} targetLanguage={locale} placeholderLines={3}/>
          </p>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fadeInUp opacity-0 delay-600"
            asChild
          >
            <Link href="#projects">
              <TranslateClient text={heroContent.cta} targetLanguage={locale} />
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="md:order-2 flex justify-center animate-fadeInUp opacity-0 delay-200">
          {heroContent.imageUrl && (
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary/50">
              <Image
                src={heroContent.imageUrl}
                alt={heroContent.name}
                layout="fill"
                objectFit="cover"
                data-ai-hint={heroContent.imageHint}
                priority 
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
