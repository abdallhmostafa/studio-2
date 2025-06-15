
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import type { Locale } from "@/lib/i18n-config";
import { content as staticContent } from "@/lib/content";
import { TranslateClient } from "../translate-client";

export function AppFooter({ locale }: { locale: Locale }) {
  const currentYear = new Date().getFullYear();
  const cvPath = "/cv.pdf"; // Assuming CV is in public folder

  return (
    <footer className="border-t border-border/40 py-12 bg-card">
      <div className="container max-w-screen-2xl text-center">
        <div className="mb-8 flex justify-center space-x-6">
          <Button variant="ghost" size="icon" asChild aria-label="Email">
            <Link href="mailto:alex.johnson.portfolio@example.com">
              <Mail className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
            <Link href="https://linkedin.com/in/alexjohnson" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="GitHub">
            <Link href="https://github.com/alexjohnson" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
            </Link>
          </Button>
        </div>
        <div className="mb-8">
          <Button variant="outline" asChild className="hover:bg-accent hover:text-accent-foreground">
            <Link href={cvPath} target="_blank" download="AlexJohnson_CV.pdf">
              <Download className="mr-2 h-4 w-4" />
              <TranslateClient text={staticContent.contact.cvButton} targetLanguage={locale} />
            </Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          <TranslateClient 
            text={staticContent.footer.copy.replace("{year}", currentYear.toString())} 
            targetLanguage={locale} 
          />
        </p>
      </div>
    </footer>
  );
}
