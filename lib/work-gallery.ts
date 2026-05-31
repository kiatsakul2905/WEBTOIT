import fs from "fs"
import path from "path"
import { sql } from "@/lib/db"
import type { WorkGalleryImage } from "@/lib/db"

const validImageExtensions = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]

export async function getGalleryImages(): Promise<WorkGalleryImage[]> {
  if (sql) {
    try {
      const rows = await sql`
        SELECT * FROM work_gallery_images
        WHERE is_active = true
        ORDER BY sort_order ASC
      `
      return (rows as WorkGalleryImage[]).map((row) => ({
        ...row,
        image_path: row.image_path.startsWith("/")
          ? row.image_path.replace(/\/$/, "")
          : `/${row.image_path.replace(/\/$/, "")}`,
      }))
    } catch (error) {
      console.error("Error fetching gallery images from DB:", error)
    }
  }

  const galleryDir = path.join(process.cwd(), "public", "imgws")

  if (!fs.existsSync(galleryDir)) {
    return []
  }

  return fs
    .readdirSync(galleryDir)
    .filter((file) => validImageExtensions.includes(path.extname(file).toLowerCase()))
    .sort()
    .map((file, index) => ({
      id: index + 1,
      image_file: file,
      image_path: "/imgws/",
      title_en: file,
      title_th: file,
      description_en: null,
      description_th: null,
      sort_order: index + 1,
      is_active: true,
    }))
}
