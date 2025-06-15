
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Youtube } from "lucide-react";
import type { Project } from "@/lib/content";
import type { Locale } from "@/lib/i18n-config";
import { content as staticContent } from "@/lib/content";
import { TranslateClient } from "./translate-client";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
}

export function ProjectCard({ project, locale }: ProjectCardProps) {
  const [showVideo, setShowVideo] = useState(false);
  const displayImageUrl = project.imageUrls && project.imageUrls.length > 0 ? project.imageUrls[0] : "https://placehold.co/600x400.png";
  const displayImageHint = project.imageHints && project.imageHints.length > 0 ? project.imageHints[0] : "project image";

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow duration-300 group">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
           <TranslateClient text={project.title} targetLanguage={locale} />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="relative aspect-video mb-4 rounded-md overflow-hidden">
          {!showVideo && (
            <>
              <Image
                src={displayImageUrl}
                alt={project.title} // Alt text remains project title for main image
                layout="fill"
                objectFit="cover"
                data-ai-hint={displayImageHint}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              {project.mediaEmbed && (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute inset-0 m-auto bg-black/50 hover:bg-black/70 text-white"
                  onClick={() => setShowVideo(true)}
                  aria-label="Play video"
                >
                  <Youtube className="h-12 w-12" />
                </Button>
              )}
            </>
          )}
          {showVideo && project.mediaEmbed && (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${project.mediaEmbed}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video"
            ></iframe>
          )}
        </div>
        
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          <TranslateClient text={project.description} targetLanguage={locale} placeholderLines={3} />
        </p>
        <div className="mb-4">
          <span className="font-semibold mr-2">
            <TranslateClient text={staticContent.projects.techStackLabel} targetLanguage={locale} />
          </span>
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="mr-1 mb-1">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 justify-start">
        {project.liveUrl && (
          <Button variant="outline" size="sm" asChild className="hover:border-accent hover:text-accent">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              <TranslateClient text={staticContent.projects.liveDemo} targetLanguage={locale} />
            </Link>
          </Button>
        )}
        {project.repoUrl && (
          <Button variant="outline" size="sm" asChild className="hover:border-accent hover:text-accent">
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              <TranslateClient text={staticContent.projects.viewCode} targetLanguage={locale} />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
