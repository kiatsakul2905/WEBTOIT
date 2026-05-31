"use client"

import { useI18n } from "@/lib/i18n"
import { useSkills } from "@/hooks/use-portfolio-data"
import { Loader2, Server, CheckCircle } from "lucide-react"

export default function SkillsPage() {
  const { language } = useI18n()
  const { skillCategories, isLoading, error } = useSkills()

  return (
    <section className="bg-background text-foreground min-h-screen py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            {language === "en" ? "Core Competencies" : "ความสามารถหลัก"}
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {language === "en"
              ? "IT Support & Infrastructure Expertise"
              : "ความเชี่ยวชาญด้าน IT Support และโครงสร้างพื้นฐาน"}
          </h1>
          <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
            {language === "en"
              ? "A modern, infrastructure-first skillset focused on hardware support, systems administration and automation that keeps production environments stable."
              : "ชุดทักษะที่เน้นโครงสร้างพื้นฐาน ไอทีฮาร์ดแวร์ การดูแลระบบ และการออโตเมชัน เพื่อให้สภาพแวดล้อมทำงานมีเสถียรภาพ"}
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid gap-6 xl:grid-cols-2">
            {skillCategories && skillCategories.length > 0 ? (
              skillCategories.map((category) => (
                <div key={category.id} className="rounded-3xl border border-border bg-card/80 p-6 shadow-lg shadow-card/10 ring-1 ring-ring/30 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-2xl bg-secondary/10 p-4 text-foreground shadow-lg shadow-card/20">
                      <Server className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {language === "en" ? category.name_en : category.name_th}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.id} className="rounded-2xl border border-border bg-background/80 p-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>{skill.name}</span>
                        </div>
                        {skill.description_en || skill.description_th ? (
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {language === "en" ? skill.description_en || skill.description_th : skill.description_th || skill.description_en}
                          </p>
                        ) : null}
                        {skill.technologies && skill.technologies.length > 0 ? (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {skill.technologies.map((tech) => (
                              <span key={tech} className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                                {tech}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-3xl border border-border bg-card/80 p-10 text-center text-sm text-muted-foreground">
                {error
                  ? language === "en"
                    ? "Could not load skills at this time. Please try again later."
                    : "ไม่สามารถโหลดทักษะได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง"
                  : language === "en"
                  ? "No skills are available right now."
                  : "ยังไม่มีทักษะสำหรับแสดงในขณะนี้"}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
