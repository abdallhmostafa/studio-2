
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import type { Locale } from "@/lib/i18n-config";
import { content as staticContent } from "@/lib/content";
import { TranslateClient } from "../translate-client";

export function ContactSection({ locale }: { locale: Locale }) {
  const cvPath = "/cv.pdf"; // Assuming CV is in public folder

  return (
    <section id="contact" className="bg-card py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
          <TranslateClient text={staticContent.contact.title} targetLanguage={locale} />
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          <TranslateClient text={staticContent.contact.description} targetLanguage={locale} placeholderLines={2}/>
        </p>
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          <Button variant="outline" size="lg" asChild className="hover:border-primary hover:text-primary">
            <Link href="mailto:alex.johnson.portfolio@example.com">
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="hover:border-primary hover:text-primary">
            <Link href="https://linkedin.com/in/alexjohnson" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="hover:border-primary hover:text-primary">
            <Link href="https://github.com/alexjohnson" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </Button>
        </div>
        <div>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <Link href={cvPath} target="_blank" download="AlexJohnson_CV.pdf">
              <Download className="mr-2 h-5 w-5" />
              <TranslateClient text={staticContent.contact.cvButton} targetLanguage={locale} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
