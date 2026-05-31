"use client"

import { Loader2 } from "lucide-react"
import { WorkGallery } from "@/components/work-gallery"
import { useWorkGallery } from "@/hooks/use-portfolio-data"

export default function WorkGalleryPage() {
  const { images, isLoading } = useWorkGallery()

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return <WorkGallery images={images ?? []} />
}
