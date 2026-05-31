"use client"

import { WorkGallery } from "@/components/work-gallery"
import { useWorkGallery } from "@/hooks/use-portfolio-data"

export function WorkGallerySection() {
  const { images } = useWorkGallery()
  return (
    <WorkGallery
      images={images ?? []}
      maxItems={3}
      moreLink="/work-gallery"
    />
  )
}
