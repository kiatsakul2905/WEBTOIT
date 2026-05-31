"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "th" | "en"

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.portfolio": "Projects",
    "nav.workGallery": "Work Gallery",
    "nav.contact": "Contact",
    "nav.certificates": "Certifications",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.name": "Kiatsakul Paiyasen",
    "hero.role": "IT Support",
    "hero.description": "Dedicated IT Support professional with hands-on experience in troubleshooting hardware, software, and network issues. Committed to delivering fast, reliable solutions and exceptional user experiences.",
    "hero.cta": "View My Portfolio",
    "hero.scroll": "Scroll to explore",

    // Sections
    "section.experience": "Work Experience",
    "section.education": "Education",
    "section.skills": "Technical Skills",
    "section.portfolio": "Projects",
    "section.workPhotos": "Work Gallery",
    "section.viewMore": "View More",
    "section.certificates": "Certifications",

    // Work Gallery
    "workGallery.description": "Showcasing real work environments and support tasks captured from the field.",
    "workGallery.galleryReady": "Gallery is ready",
    "workGallery.empty": "No work images yet. Add files to /public/imgws.",
    "workGallery.placeholderText": "Add your own work photos in the imgws folder to replace this placeholder.",
    "workGallery.photoCaption": "Work image pulled from public/imgws.",

    // Experience
    "exp.present": "Present",

    // Skills Categories
    "skills.frontend": "Networking",
    "skills.backend": "Systems & Servers",
    "skills.tools": "Tools & Software",

    // Contact
    "contact.title": "Get In Touch",
    "contact.description": "Looking for reliable IT Support? Feel free to reach out — I'm always happy to help or discuss opportunities.",
    "contact.form.firstName": "First Name",
    "contact.form.lastName": "Last Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.name": "Name",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",

    // Footer
    "footer.rights": "All rights reserved.",

    // Common
    "common.loading": "Loading...",
    "common.noData": "No data available.",

    // Portfolio
    "portfolio.technologies": "Technologies Used",
    "portfolio.viewProject": "View Project",
  },
  th: {
    // Navigation
    "nav.experience": "ประสบการณ์",
    "nav.education": "การศึกษา",
    "nav.skills": "ทักษะ",
    "nav.portfolio": "โปรเจกต์",
    "nav.workGallery": "รูปการทำงาน",
    "nav.contact": "ติดต่อ",
    "nav.certificates": "ใบรับรอง",

    // Hero
    "hero.greeting": "สวัสดีครับ, ผมชื่อ",
    "hero.name": "เกียรติสกุล ไพยเสน",
    "hero.role": "IT Support",
    "hero.description": "IT Support มีประสบการณ์จริงในการแก้ไขปัญหาฮาร์ดแวร์ ซอฟต์แวร์ และระบบเครือข่าย มุ่งมั่นให้บริการที่รวดเร็วและมีประสิทธิภาพ",
    "hero.cta": "ดูผลงานของผม",
    "hero.scroll": "เลื่อนเพื่อสำรวจ",

    // Sections
    "section.experience": "ประสบการณ์ทำงาน",
    "section.education": "การศึกษา",
    "section.skills": "ทักษะทางเทคนิค",
    "section.portfolio": "โปรเจกต์",
    "section.workPhotos": "รูปการทำงาน",
    "section.viewMore": "ดูเพิ่มเติม",
    "section.certificates": "ใบรับรอง",

    // Work Gallery
    "workGallery.description": "แสดงผลงานและการทำงานจริงผ่านภาพจากโฟลเดอร์ imgws",
    "workGallery.galleryReady": "แกลเลอรีพร้อมแสดง",
    "workGallery.empty": "ยังไม่มีรูปการทำงาน เพิ่มไฟล์ไว้ที่ /public/imgws",
    "workGallery.placeholderText": "เพิ่มรูปการทำงานของคุณในโฟลเดอร์ imgws เพื่อแทนที่รูปตัวอย่างนี้",
    "workGallery.photoCaption": "รูปการทำงานจาก public/imgws",

    // Experience
    "exp.present": "ปัจจุบัน",

    // Skills Categories
    "skills.frontend": "เครือข่าย",
    "skills.backend": "ระบบและเซิร์ฟเวอร์",
    "skills.tools": "เครื่องมือและซอฟต์แวร์",

    // Contact
    "contact.title": "ติดต่อเรา",
    "contact.description": "กำลังมองหาผู้เชี่ยวชาญด้าน IT Support อยู่ไหม? ติดต่อมาได้เลยครับ ยินดีช่วยเหลือและพูดคุยเสมอ",
    "contact.form.firstName": "ชื่อ",
    "contact.form.lastName": "นามสกุล",
    "contact.form.email": "อีเมล",
    "contact.form.message": "ข้อความ",
    "contact.form.submit": "ส่งข้อความ",
    "contact.info.title": "ข้อมูลติดต่อ",
    "contact.info.name": "ชื่อ",
    "contact.info.phone": "โทรศัพท์",
    "contact.info.email": "อีเมล",

    // Footer
    "footer.rights": "สงวนลิขสิทธิ์",

    // Common
    "common.loading": "กำลังโหลด...",
    "common.noData": "ไม่มีข้อมูล",

    // Portfolio
    "portfolio.technologies": "เทคโนโลยีที่ใช้",
    "portfolio.viewProject": "ดูโปรเจกต์",
  },
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("th")

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
