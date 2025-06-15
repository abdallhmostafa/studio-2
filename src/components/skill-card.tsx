
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Skill } from "@/lib/content";
import type { Locale } from "@/lib/i18n-config";
import { TranslateClient } from "./translate-client";
import { 
  Smartphone, 
  TabletSmartphone, 
  Palette, 
  Cloud, 
  Server, 
  Network, 
  GitFork, 
  Container, 
  ClipboardList,
  LucideProps
} from "lucide-react";
import React from "react";

interface SkillCardProps {
  skill: Skill;
  locale: Locale;
}

const iconMap: Record<string, React.ElementType<LucideProps>> = {
  Smartphone,
  TabletSmartphone,
  Palette,
  Cloud,
  Server,
  Network,
  GitFork,
  Container,
  ClipboardList,
};

export function SkillCard({ skill, locale }: SkillCardProps) {
  const IconComponent = iconMap[skill.icon] || Smartphone; // Fallback to a default icon

  return (
    <Card className="shadow-md hover:shadow-primary/10 transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <IconComponent className="h-6 w-6 text-primary" />
          <CardTitle className="text-lg font-medium">
            <TranslateClient text={skill.name} targetLanguage={locale} />
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-3" />
        <p className="text-sm text-muted-foreground mt-2 text-right">{skill.level}%</p>
      </CardContent>
    </Card>
  );
}
