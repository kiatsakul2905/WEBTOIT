import { hasDatabase, sql, type PortfolioProject } from "@/lib/db"
import { portfolioProjects as fallbackProjects } from "@/lib/data"
import { NextResponse } from "next/server"

export async function GET() {
  if (!hasDatabase || !sql) {
    return NextResponse.json(fallbackProjects as PortfolioProject[])
  }

  try {
    const projects = await sql`
      SELECT * FROM portfolio_projects 
      WHERE is_active = true 
      ORDER BY sort_order ASC
    `
    return NextResponse.json(projects as PortfolioProject[])
  } catch (error) {
    console.error("Error fetching portfolio:", error)
    return NextResponse.json(fallbackProjects as PortfolioProject[])
  }
}
