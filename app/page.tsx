import { HeroSection } from "@/components/hero"
import { ExperiencePreview } from "@/components/experience-preview"
import { EducationPreview } from "@/components/education-preview"
import { SkillsPreview } from "@/components/skills-preview"
import { WorkGallery } from "@/components/work-gallery"
import { PortfolioPreview } from "@/components/portfolio-preview"
import { CertificatesPreview } from "@/components/certificate-preview"
import { getGalleryImages } from "@/lib/work-gallery"

export default async function HomePage() {
  const galleryImages = await getGalleryImages()

  return (
    <>
      <HeroSection />
      <ExperiencePreview />
      <EducationPreview />
      <SkillsPreview />
      <WorkGallery images={galleryImages} maxItems={3} moreLink="/work-gallery" />
      <PortfolioPreview />
      <CertificatesPreview />
    </>
  )
}
