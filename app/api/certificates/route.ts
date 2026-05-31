import { hasDatabase, sql, type Certificates } from "@/lib/db"
import { certificates as fallbackCertificates } from "@/lib/data"
import { NextResponse } from "next/server"

export async function GET() {
  if (!hasDatabase || !sql) {
    return NextResponse.json(fallbackCertificates as Certificates[])
  }

  try {
    const projects = await sql`
      SELECT * FROM certificates
      WHERE is_active = true 
      ORDER BY sort_order ASC
    `
    return NextResponse.json(projects as Certificates[])
  } catch (error) {
    console.error("Error fetching certificates:", error)
    return NextResponse.json(fallbackCertificates as Certificates[])
  }
}
