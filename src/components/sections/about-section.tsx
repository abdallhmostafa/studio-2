
"use client";

import Image from "next/image";
import type { Locale } from "@/lib/i18n-config";
import { content as staticContent } from "@/lib/content";
import { TranslateClient } from "../translate-client";

export function AboutSection({ locale }: { locale: Locale }) {
  const aboutContent = staticContent.about;

  return (
    <section id="about" className="container mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
            <TranslateClient text={aboutContent.title} targetLanguage={locale} />
          </h2>
          <p className="font-headline text-xl text-primary mb-4">
            <TranslateClient text={aboutContent.greeting} targetLanguage={locale} />
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            <TranslateClient text={aboutContent.description} targetLanguage={locale} placeholderLines={3} />
          </p>
          {aboutContent.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground mb-4">
              <TranslateClient text={paragraph} targetLanguage={locale} placeholderLines={2}/>
            </p>
          ))}
        </div>
        <div className="order-1 md:order-2 relative aspect-square rounded-lg overflow-hidden shadow-xl mx-auto max-w-md w-full">
          {aboutContent.imageUrl && (
            <Image
              src={aboutContent.imageUrl}
              alt={aboutContent.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint={aboutContent.imageHint}
              className="rounded-lg"
            />
          )}
        </div>
      </div>
    </section>
  );
}
