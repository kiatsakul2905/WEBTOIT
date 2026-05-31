import { hasDatabase, sql, type Experience } from "@/lib/db"
import { experiences as fallbackExperiences } from "@/lib/data"
import { NextResponse } from "next/server"

export async function GET() {
  if (!hasDatabase || !sql) {
    return NextResponse.json(fallbackExperiences as Experience[])
  }

  try {
    const experiences = await sql`
      SELECT * FROM experiences 
      WHERE is_active = true 
      ORDER BY sort_order ASC
    `
    return NextResponse.json(experiences as Experience[])
  } catch (error) {
    console.error("Error fetching experiences:", error)
    return NextResponse.json(fallbackExperiences as Experience[])
  }
}
