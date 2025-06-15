
"use client";

import { SkillCard } from "@/components/skill-card";
import type { Skill, SkillCategory } from "@/lib/content";
import type { Locale } from "@/lib/i18n-config";
import { content as staticContent } from "@/lib/content";
import { TranslateClient } from "../translate-client";

export function SkillsShowcase({ locale }: { locale: Locale }) {
  const skills = staticContent.skills.items;
  
  const categorizedSkills = skills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {} as Record<SkillCategory, Skill[]>);

  return (
    <section id="skills" className="bg-card py-16 px-4">
      <div className="container mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
          <TranslateClient text={staticContent.skills.title} targetLanguage={locale} />
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(Object.keys(categorizedSkills) as SkillCategory[]).map((category) => (
              <div key={category} className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center mb-6">
                  {/* Category icon removed as individual skills now have icons */}
                  <h3 className="font-headline text-2xl font-semibold">
                    <TranslateClient text={staticContent.skills.categories[category]} targetLanguage={locale} />
                  </h3>
                </div>
                <div className="space-y-4">
                  {categorizedSkills[category].map((skill) => (
                    <SkillCard key={skill.name} skill={skill} locale={locale} />
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
