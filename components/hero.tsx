"use client"

import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Facebook, Shield, Wifi, Monitor } from "lucide-react"
import React from "react"
import { useContactInfo } from "@/hooks/use-portfolio-data"

export function HeroSection() {
  const { t } = useI18n()
  const { contactInfo } = useContactInfo()

  const itBadges = [
    { icon: Monitor, label: "Help Desk" },
    { icon: Wifi, label: "Networking" },
    { icon: Shield, label: "IT Security" },
  ]

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium opacity-0 animate-fade-in-up animation-delay-100" style={{ animationFillMode: 'forwards' }}>
                {t("hero.greeting")}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance opacity-0 animate-fade-in-up animation-delay-200" style={{ animationFillMode: 'forwards' }}>
                <span className="animate-text-shimmer">
                  {contactInfo ? (contactInfo.name_en || contactInfo.name_th || t("hero.name")) : t("hero.name")}
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-primary font-semibold opacity-0 animate-fade-in-up animation-delay-300" style={{ animationFillMode: 'forwards' }}>
                {t("hero.role")}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg opacity-0 animate-fade-in-up animation-delay-400" style={{ animationFillMode: 'forwards' }}>
              {t("hero.description")}
            </p>

            {/* IT Badges */}
            <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in-up animation-delay-400" style={{ animationFillMode: 'forwards' }}>
              {itBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                  <Icon className="h-4 w-4" />
                  {label}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-in-up animation-delay-500" style={{ animationFillMode: 'forwards' }}>
              <Button asChild size="lg" className="btn-animated group">
                <Link href="/portfolio">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/kiatsakul2905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/%E0%B8%98%E0%B8%99%E0%B8%A7-%E0%B8%99%E0%B8%A8%E0%B8%97-%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%AA%E0%B8%81%E0%B8%B8%E0%B8%A5-%E0%B9%84%E0%B8%9E%E0%B8%A2%E0%B9%80%E0%B8%AA%E0%B8%99-805b943a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/kiatsakul.paiyasen?locale=th_TH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center items-center opacity-0 animate-fade-in-right animation-delay-300" style={{ animationFillMode: 'forwards' }}>
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 animate-float" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl">
                <Image
                  src="/images/profile-placeholder.jpg"
                  alt="Kiatsakul - IT Support"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/30 animate-bounce-subtle" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-primary/20 animate-bounce-subtle animation-delay-200" />
              {/* IT Support badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-4 py-2 shadow-lg flex items-center gap-2 whitespace-nowrap">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">IT Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex justify-center mt-20 opacity-0 animate-fade-in-up animation-delay-500" style={{ animationFillMode: 'forwards' }}>
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">{t("hero.scroll") || "Scroll to explore"}</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
