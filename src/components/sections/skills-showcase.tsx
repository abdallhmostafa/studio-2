
"use client";

import { SkillCard } from "@/components/skill-card";
import type { Skill, SkillCategory } from "@/lib/content";
import { content as staticContent } from "@/lib/content";

export function SkillsShowcase() {
  const skills = staticContent.skills.items;
  
  const categorizedSkills = skills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {} as Record<SkillCategory, Skill[]>);

  return (
    <section id="skills" className="bg-card py-16 px-4">
      <div className="container mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
          {staticContent.skills.title}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(Object.keys(categorizedSkills) as SkillCategory[]).map((category) => (
              <div key={category} className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center mb-6">
                  <h3 className="font-headline text-2xl font-semibold">
                    {staticContent.skills.categories[category]}
                  </h3>
                </div>
                <div className="space-y-4">
                  {categorizedSkills[category].map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
