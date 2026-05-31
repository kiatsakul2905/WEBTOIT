import { hasDatabase, sql, type Education } from "@/lib/db"
import { education as fallbackEducation } from "@/lib/data"
import { NextResponse } from "next/server"

export async function GET() {
  if (!hasDatabase || !sql) {
    return NextResponse.json(fallbackEducation as Education[])
  }

  try {
    const education = await sql`
      SELECT * FROM education 
      WHERE is_active = true 
      ORDER BY sort_order ASC
    `
    return NextResponse.json(education as Education[])
  } catch (error) {
    console.error("Error fetching education:", error)
    return NextResponse.json(fallbackEducation as Education[])
  }
}
