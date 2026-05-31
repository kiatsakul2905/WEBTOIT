"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { competencyGroups } from "@/lib/skill-competencies"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"

const topSkills = competencyGroups
  .flatMap((group) => group.items.slice(0, 2).map((item) => ({
    id: `${group.id}-${item.label_en}`,
    name_en: item.label_en,
    name_th: item.label_th,
  })))
  .slice(0, 6)

export function SkillsPreview() {
  const { t, language } = useI18n()

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <Code2 className="h-6 w-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              {t("section.skills")}
            </h2>
          </div>
          <Button variant="ghost" asChild className="group">
            <Link href="/skills">
              {t("section.viewMore")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {topSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors text-center"
            >
              <p className="font-medium text-foreground">{language === "en" ? skill.name_en : skill.name_th}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
