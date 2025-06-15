"use client";

import { TestimonialCard } from "@/components/testimonial-card";
import type { Locale } from "@/lib/i18n-config";
import { content as staticContent } from "@/dictionaries/content";
import { TranslateClient } from "../translate-client";

export function TestimonialsDisplay({ locale }: { locale: Locale }) {
  const testimonials = staticContent.testimonials.items;

  return (
    <section id="testimonials" className="container mx-auto py-16 px-4">
      <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
        <TranslateClient text={staticContent.testimonials.title} targetLanguage={locale} />
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} locale={locale} />
        ))}
      </div>
    </section>
  );
}
