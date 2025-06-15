"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/dictionaries/content";
import type { Locale } from "@/lib/i18n-config";
import { TranslateClient } from "./translate-client";

interface TestimonialCardProps {
  testimonial: Testimonial;
  locale: Locale;
}

export function TestimonialCard({ testimonial, locale }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col justify-between p-6 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-primary mb-4" />
        <blockquote className="text-lg italic text-foreground mb-6 leading-relaxed">
          <TranslateClient text={testimonial.quote} targetLanguage={locale} placeholderLines={4}/>
        </blockquote>
        <div className="flex items-center">
          {testimonial.avatarUrl && (
            <Avatar className="h-12 w-12 mr-4">
              <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.avatarHint}/>
              <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
          )}
          <div>
            <p className="font-semibold font-headline text-primary">
              <TranslateClient text={testimonial.name} targetLanguage={locale} />
            </p>
            <p className="text-sm text-muted-foreground">
              <TranslateClient text={testimonial.role} targetLanguage={locale} />
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
