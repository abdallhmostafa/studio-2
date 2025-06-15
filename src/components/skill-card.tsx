
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Skill } from "@/lib/content";
import type { Locale } from "@/lib/i18n-config";
import { TranslateClient } from "./translate-client";

interface SkillCardProps {
  skill: Skill;
  locale: Locale;
}

export function SkillCard({ skill, locale }: SkillCardProps) {
  return (
    <Card className="shadow-md hover:shadow-primary/10 transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-medium">
          <TranslateClient text={skill.name} targetLanguage={locale} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-3" />
        <p className="text-sm text-muted-foreground mt-2 text-right">{skill.level}%</p>
      </CardContent>
    </Card>
  );
}
