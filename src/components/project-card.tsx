
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hasMultipleImages = project.imageUrls && project.imageUrls.length > 1;
  const displayImageUrl = project.imageUrls && project.imageUrls.length > 0 
    ? project.imageUrls[currentImageIndex] 
    : "https://placehold.co/600x400.png";
  const displayImageHint = project.imageHints && project.imageHints.length > 0 
    ? project.imageHints[currentImageIndex] 
    : "project image";

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.imageUrls.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow duration-300 group">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
           <TranslateClient text={project.title} targetLanguage={locale} />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="relative aspect-video mb-4 rounded-md overflow-hidden">
          <Image
            src={displayImageUrl}
            alt={`${project.title} - image ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="cover"
            data-ai-hint={displayImageHint}
            className="transition-transform duration-300 group-hover:scale-105"
            key={currentImageIndex} // Add key to force re-render on image change for transitions
          />
          {hasMultipleImages && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"
                onClick={handleNextImage}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                {currentImageIndex + 1} / {project.imageUrls.length}
              </div>
            </>
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
