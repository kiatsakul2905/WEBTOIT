import type { ComponentType } from "react"
import { HardDrive, Mic, Server, Zap } from "lucide-react"

export type CompetencyItem = {
  label_en: string
  label_th: string
  details_en: string
  details_th: string
}

export type CompetencyGroup = {
  id: string
  title_en: string
  title_th: string
  description_en: string
  description_th: string
  icon: ComponentType<{ className?: string }>
  items: CompetencyItem[]
}

export const competencyGroups: CompetencyGroup[] = [
  {
    id: "infra",
    title_en: "System & Network Infrastructure",
    title_th: "ระบบและโครงสร้างพื้นฐานเครือข่าย",
    description_en:
      "Design, deploy and manage secure infrastructure for desktop, server and remote access environments.",
    description_th:
      "ออกแบบ ติดตั้ง และดูแลโครงสร้างพื้นฐานสำหรับเดสก์ท็อป เซิร์ฟเวอร์ และการเข้าถึงระยะไกลอย่างปลอดภัย",
    icon: Server,
    items: [
      {
        label_en: "OS Deployment",
        label_th: "การติดตั้ง OS",
        details_en: "Windows 10/11, Windows Server, Linux",
        details_th: "Windows 10/11, Windows Server, Linux",
      },
      {
        label_en: "Domain & Policy Control",
        label_th: "จัดการโดเมนและนโยบาย",
        details_en: "Active Directory, Group Policy (gpupdate /force)",
        details_th: "Active Directory, Group Policy (gpupdate /force)",
      },
      {
        label_en: "Network Configuration",
        label_th: "ตั้งค่าเครือข่าย",
        details_en: "LAN/WLAN, TCP/IP, VPN (Ivanti Secure Access), Router/Switch",
        details_th: "LAN/WLAN, TCP/IP, VPN (Ivanti Secure Access), Router/Switch",
      },
      {
        label_en: "Infrastructure Tools",
        label_th: "เครื่องมือโครงสร้างพื้นฐาน",
        details_en: "Cisco Packet Tracer, VirtualBox",
        details_th: "Cisco Packet Tracer, VirtualBox",
      },
    ],
  },
  {
    id: "hardware",
    title_en: "Hardware & Technical Support",
    title_th: "ฮาร์ดแวร์และการสนับสนุนทางเทคนิค",
    description_en:
      "Hands-on troubleshooting, maintenance, and asset management for modern desktop and laptop environments.",
    description_th:
      "แก้ไขปัญหาเชิงลึก ดูแลรักษา และจัดการสินทรัพย์สำหรับคอมพิวเตอร์และแล็ปท็อป",
    icon: HardDrive,
    items: [
      {
        label_en: "Troubleshooting",
        label_th: "แก้ไขปัญหา",
        details_en:
          "PC, All-in-One (Dell OptiPlex), Laptop (HP EliteBook, Lenovo ThinkPad)",
        details_th:
          "คอมพิวเตอร์ PC, All-in-One (Dell OptiPlex), แล็ปท็อป (HP EliteBook, Lenovo ThinkPad)",
      },
      {
        label_en: "Component Upgrades",
        label_th: "อัปเกรดอุปกรณ์",
        details_en:
          "RAM, M.2 NVMe SSD, CMOS battery replacement, system rebuild",
        details_th:
          "อัปเกรด RAM, M.2 NVMe SSD, เปลี่ยนถ่าน CMOS, ประกอบเครื่อง",
      },
      {
        label_en: "Data Protection",
        label_th: "ปกป้องข้อมูล",
        details_en:
          "Acronis True Image, external backup, system recovery",
        details_th:
          "Acronis True Image, สำรองข้อมูลภายนอก, กู้คืนระบบ",
      },
      {
        label_en: "IT Asset Management",
        label_th: "จัดการสินทรัพย์ IT",
        details_en:
          "Document delivery, inventory, serial numbers and cost center tracking",
        details_th:
          "จัดทำเอกสารตรวจรับ ส่งมอบ และบันทึกรายละเอียดสินทรัพย์ (Serial Number, Cost Center)",
      },
    ],
  },
  {
    id: "av",
    title_en: "Audio-Visual & Meeting Room Support",
    title_th: "ระบบโสตทัศนูปกรณ์และห้องประชุม",
    description_en:
      "Support hybrid meetings and large events with AV control, conferencing devices and on-site issue resolution.",
    description_th:
      "สนับสนุนการประชุมไฮบริดและงานใหญ่ด้วยการควบคุม AV อุปกรณ์ประชุม และแก้ไขปัญหาเฉพาะหน้า",
    icon: Mic,
    items: [
      {
        label_en: "AV Control",
        label_th: "ควบคุม AV",
        details_en:
          "Audio systems, mixers, speakers and presentation equipment",
        details_th:
          "ระบบเสียง เครื่องผสมเสียง Audio Mixer และอุปกรณ์นำเสนอ",
      },
      {
        label_en: "Hybrid Meeting Setup",
        label_th: "ตั้งค่าประชุมทางไกล",
        details_en:
          "MS Teams, Zoom with Jabra speakerphone and hybrid room configuration",
        details_th:
          "MS Teams, Zoom ร่วมกับ Jabra speakerphone และการตั้งค่าห้องไฮบริด",
      },
      {
        label_en: "On-site Operation",
        label_th: "ปฏิบัติงานหน้างาน",
        details_en:
          "Projector setup, slide presentation and fast troubleshooting for town halls",
        details_th:
          "ติดตั้งโปรเจกเตอร์ ควบคุมสไลด์ และแก้ปัญหาเฉพาะหน้าในงานประชุมใหญ่",
      },
    ],
  },
  {
    id: "automation",
    title_en: "Developer & IT Automation",
    title_th: "นักพัฒนาและระบบออโตเมชัน IT",
    description_en:
      "Coding skills that empower automation in IT support, data handling and custom workflow integration.",
    description_th:
      "ทักษะเขียนโค้ดที่ช่วยสร้างออโตเมชันในงานสนับสนุน IT การจัดการข้อมูล และการเชื่อมต่อระบบ",
    icon: Zap,
    items: [
      {
        label_en: "Programming Languages",
        label_th: "ภาษาโปรแกรม",
        details_en: "Python, PHP, JavaScript, SQL",
        details_th: "Python, PHP, JavaScript, SQL",
      },
      {
        label_en: "Database & Backend",
        label_th: "ฐานข้อมูลและแบ็กเอนด์",
        details_en: "Supabase, Neon PostgreSQL, MySQL, XAMPP",
        details_th: "Supabase, Neon PostgreSQL, MySQL, XAMPP",
      },
      {
        label_en: "IT Automation",
        label_th: "ออโตเมชัน IT",
        details_en:
          "Google Apps Script, Python scripts for workflow and support data automation",
        details_th:
          "Google Apps Script, Python สคริปต์ลดขั้นตอนและจัดการข้อมูลงาน Support",
      },
      {
        label_en: "API Integration",
        label_th: "เชื่อมต่อ API",
        details_en:
          "Discord Chat/Music Bot development and API integration experience",
        details_th:
          "พัฒนา Discord Chat/Music Bot และเชื่อมต่อระบบผ่าน API",
      },
    ],
  },
]
