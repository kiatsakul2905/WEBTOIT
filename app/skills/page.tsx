"use client"

import { useI18n } from "@/lib/i18n"
import { ShieldCheck } from "lucide-react"
import { competencyGroups } from "@/lib/skill-competencies"

function CompetencyCard({
  title,
  description,
  icon: Icon,
  items,
}: {
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
  items: {
    label_en: string
    label_th: string
    details_en: string
    details_th: string
  }[]
}) {
  const { language } = useI18n()

  return (
    <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-lg shadow-card/10 ring-1 ring-ring/30 backdrop-blur-sm">
      <div className="flex items-start gap-4">
        <div className="shrink-0 rounded-2xl bg-secondary/10 p-4 text-foreground shadow-lg shadow-card/20">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">{language === "en" ? title : title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{language === "en" ? description : description}</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item.label_en} className="rounded-2xl border border-border bg-background/80 p-4">
            <p className="text-sm font-semibold text-foreground">{language === "en" ? item.label_en : item.label_th}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{language === "en" ? item.details_en : item.details_th}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SkillsPage() {
  const { language, t } = useI18n()

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

        <div className="grid gap-6 xl:grid-cols-2">
          {competencyGroups.map((group) => (
            <CompetencyCard
              key={group.id}
              title={language === "en" ? group.title_en : group.title_th}
              description={language === "en" ? group.description_en : group.description_th}
              icon={group.icon}
              items={group.items}
            />
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-lg shadow-card/10 ring-1 ring-ring/30 backdrop-blur-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-secondary-foreground">{language === "en" ? "Complementary Development Skills" : "ทักษะพัฒนาซอฟต์แวร์เสริม"}</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">{language === "en" ? "Automation that enhances IT support" : "ออโตเมชันที่เสริมงาน IT Support"}</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-3 text-sm font-medium text-foreground ring-1 ring-border">
              <ShieldCheck className="h-5 w-5 text-primary" />
              {language === "en"
                ? "Balanced between support and scripting"
                : "ผสานการสนับสนุนและการเขียนสคริปต์อย่างลงตัว"}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: language === "en" ? "Python / PHP / JS" : "Python / PHP / JS", value: true },
              { label: language === "en" ? "Supabase / Neon / MySQL" : "Supabase / Neon / MySQL", value: true },
              { label: language === "en" ? "Google Apps Script" : "Google Apps Script", value: true },
              { label: language === "en" ? "Discord Bot Integration" : "Discord Bot Integration", value: true },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-border bg-background/80 px-4 py-5 text-sm text-foreground">
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
