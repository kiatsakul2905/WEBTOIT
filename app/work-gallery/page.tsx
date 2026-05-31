import { WorkGallery } from "@/components/work-gallery"
import { getGalleryImages } from "@/lib/work-gallery"

export default async function WorkGalleryPage() {
  const galleryImages = await getGalleryImages()

  return <WorkGallery images={galleryImages} />
}
