
"use client";

import { TestimonialCard } from "@/components/testimonial-card";
import { content as staticContent } from "@/lib/content";

export function TestimonialsDisplay() {
  const testimonials = staticContent.testimonials.items;

  return (
    <section id="testimonials" className="container mx-auto py-16 px-4">
      <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
        {staticContent.testimonials.title}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
