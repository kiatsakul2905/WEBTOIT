import { getGalleryImages } from "@/lib/work-gallery"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const images = await getGalleryImages()
    return NextResponse.json(images)
  } catch (error) {
    console.error("Error fetching work gallery images:", error)
    return NextResponse.json([], { status: 500 })
  }
}
