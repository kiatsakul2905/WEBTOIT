"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, ImageIcon } from "lucide-react"

interface GalleryImage {
  image_file: string
  image_path: string
  title_en?: string | null
  title_th?: string | null
  description_en?: string | null
  description_th?: string | null
}

interface WorkGalleryProps {
  images: GalleryImage[]
  maxItems?: number
  moreLink?: string
  moreLabel?: string
}

export function WorkGallery({ images, maxItems, moreLink, moreLabel }: WorkGalleryProps) {
  const { language, t } = useI18n()
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({})

  const fallbackSrc = "/images/profile-placeholder.jpg"
  const fallbackImage: GalleryImage = {
    image_file: fallbackSrc,
    image_path: "",
    title_en: "Fallback image",
    title_th: "รูปสำรอง",
    description_en: t("workGallery.placeholderText"),
    description_th: t("workGallery.placeholderText"),
  }

  const gallery = images.length > 0 ? images.slice(0, maxItems || images.length) : [fallbackImage]

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
          <div className="flex items-center gap-3">
            <ImageIcon className="h-6 w-6 text-primary" />
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-primary">
                {t("section.workPhotos")}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {language === "en" ? "Work Gallery" : "รูปการทำงาน"}
              </h2>
            </div>
          </div>

          {moreLink ? (
            <Button variant="ghost" asChild className="group">
              <Link href={moreLink}>
                {moreLabel ?? t("section.viewMore")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          ) : null}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image, index) => {
            const imageSrc = image.image_path
              ? `${image.image_path.replace(/\/$/, "")}/${image.image_file}`
              : image.image_file
            const key = `${imageSrc}-${index}`
            const title = language === "en"
              ? image.title_en || `Work Photo ${index + 1}`
              : image.title_th || `รูปที่ ${index + 1}`
            const details = image.description_en || image.description_th ||
              (language === "en" ? "Work photo details from the gallery" : "รายละเอียดรูปภาพจากแกลเลอรี")

            return (
              <div key={key} className="group rounded-xl bg-card border border-border hover:border-primary/50 transition-colors overflow-hidden shadow-sm">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <Image
                    src={failedImages[key] ? fallbackSrc : imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition duration-300 ease-in-out group-hover:scale-105"
                    onError={() => {
                      if (!failedImages[key]) {
                        setFailedImages((prev) => ({ ...prev, [key]: true }))
                      }
                    }}
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                    <Link
                      href={imageSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={language === "en" ? "Open image" : "เปิดรูปภาพ"}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {details}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
