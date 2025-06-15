
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/content";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col justify-between p-6 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-primary mb-4" />
        <blockquote className="text-lg italic text-foreground mb-6 leading-relaxed">
          {testimonial.quote}
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
              {testimonial.name}
            </p>
            <p className="text-sm text-muted-foreground">
              {testimonial.role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
