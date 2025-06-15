
"use client";

import { useState, useMemo } from "react";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { content as staticContent } from "@/lib/content";
import { Filter } from "lucide-react";

export function ProjectsGallery() {
  const projects = staticContent.projects.items;
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const allTechStacks = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.techStack.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (!selectedTech) {
      return projects;
    }
    return projects.filter((project) =>
      project.techStack.includes(selectedTech)
    );
  }, [projects, selectedTech]);

  return (
    <section id="projects" className="container mx-auto py-16 px-4">
      <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
        {staticContent.projects.title}
      </h2>
      
      <div className="flex flex-wrap justify-center gap-2 mb-10 items-center">
        <Filter className="h-5 w-5 mr-2 text-muted-foreground" />
        <Button
          onClick={() => setSelectedTech(null)}
          variant={!selectedTech ? "default" : "secondary"}
          size="sm"
          className="filter-button"
          data-active={!selectedTech}
        >
          {staticContent.projects.filterAll}
        </Button>
        {allTechStacks.map((tech) => (
          <Button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            variant={selectedTech === tech ? "default" : "secondary"}
            size="sm"
            className="filter-button"
            data-active={selectedTech === tech}
          >
            {tech}
          </Button>
        ))}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg">
          {"No projects found for the selected filter."}
        </p>
      )}
    </section>
  );
}
