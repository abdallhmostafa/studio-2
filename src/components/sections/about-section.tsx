
"use client";

import Image from "next/image";
import { content as staticContent } from "@/lib/content";

export function AboutSection() {
  const aboutContent = staticContent.about;

  return (
    <section id="about" className="container mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
            {aboutContent.title}
          </h2>
          <p className="font-headline text-xl text-primary mb-4">
            {aboutContent.greeting}
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            {aboutContent.description}
          </p>
          {aboutContent.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground mb-4">
              {paragraph}
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
