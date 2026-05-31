export const experiences = [
  {
    id: 1,
    title_en: "IT Support Technician Intern",
    title_th: "นักศึกษาฝึกงาน IT Support",
    company: "TechCare Solutions",
    period_en: "Jun 2024 - Sep 2024",
    period_th: "มิ.ย. 2567 - ก.ย. 2567",
    description_en:
      "Provided first-line support for hardware, software, and network issues while assisting over 100 users across desktop and mobile environments.",
    description_th:
      "ให้การช่วยเหลือด้านฮาร์ดแวร์ ซอฟต์แวร์ และระบบเครือข่ายแก่ผู้ใช้งานกว่า 100 คนทั้งในคอมพิวเตอร์และอุปกรณ์เคลื่อนที่",
    technologies: ["Help Desk", "Windows", "LAN", "Printer Support"],
    sort_order: 1,
    is_active: true,
  },
  {
    id: 2,
    title_en: "IT Support Assistant",
    title_th: "ผู้ช่วยงาน IT Support",
    company: "Fresh Start Office",
    period_en: "Oct 2024 - Dec 2024",
    period_th: "ต.ค. 2567 - ธ.ค. 2567",
    description_en:
      "Managed ticket triage, performed user onboarding, and completed troubleshooting for common workstation and connectivity problems.",
    description_th:
      "จัดการตั๋วงาน คอยช่วยเหลือผู้ใช้งานใหม่ และแก้ไขปัญหาคอมพิวเตอร์และการเชื่อมต่อทั่วไป",
    technologies: ["Ticketing", "Active Directory", "VPN", "Remote Support"],
    sort_order: 2,
    is_active: true,
  },
  {
    id: 3,
    title_en: "Freelance IT Support",
    title_th: "IT Support ฟรีแลนซ์",
    company: "Self-Employed",
    period_en: "Jan 2025 - Present",
    period_th: "ม.ค. 2568 - ปัจจุบัน",
    description_en:
      "Delivered PC maintenance, system refresh, and software installation services for small business clients and new graduates.",
    description_th:
      "ให้บริการดูแลรักษาเครื่องคอมพิวเตอร์ ติดตั้งซอฟต์แวร์ และรีเฟรชระบบสำหรับลูกค้าธุรกิจขนาดเล็กและผู้จบใหม่",
    technologies: ["System Maintenance", "Software Deployment", "Backup", "Troubleshooting"],
    sort_order: 3,
    is_active: true,
  },
]

export const education = [
  {
    id: 1,
    degree_en: "Bachelor of Science in Information Technology",
    degree_th: "ปริญญาตรี วิทยาศาสตร์ สาขาเทคโนโลยีสารสนเทศ",
    institution_en: "Bangkok University",
    institution_th: "มหาวิทยาลัยกรุงเทพ",
    period_en: "2020 - 2024",
    period_th: "2563 - 2567",
    field_en: "Information Technology",
    field_th: "เทคโนโลยีสารสนเทศ",
    sort_order: 1,
    is_active: true,
  },
  {
    id: 2,
    degree_en: "Diploma in Computer Hardware and Networking",
    degree_th: "ปวส. คอมพิวเตอร์และเครือข่าย",
    institution_en: "IT Training Center",
    institution_th: "สถาบันฝึกอบรม IT",
    period_en: "2018 - 2020",
    period_th: "2561 - 2563",
    field_en: "Computer Hardware & Networking",
    field_th: "ฮาร์ดแวร์คอมพิวเตอร์และเครือข่าย",
    sort_order: 2,
    is_active: true,
  },
]

export const skillCategories = [
  {
    id: 1,
    name: "Networking",
    name_en: "Networking",
    name_th: "เครือข่าย",
    icon: "Server",
    sort_order: 1,
    is_active: true,
  },
  {
    id: 2,
    name: "Systems & Servers",
    name_en: "Systems & Servers",
    name_th: "ระบบและเซิร์ฟเวอร์",
    icon: "Code2",
    sort_order: 2,
    is_active: true,
  },
  {
    id: 3,
    name: "Tools & Software",
    name_en: "Tools & Software",
    name_th: "เครื่องมือและซอฟต์แวร์",
    icon: "Wrench",
    sort_order: 3,
    is_active: true,
  },
]

export const skills = [
  {
    id: 1,
    category_id: 1,
    name: "LAN/WAN Setup",
    skill_type: "Networking",
    level: 85,
    description_en: "Design and maintain wired and wireless network infrastructure for reliable connectivity.",
    description_th: "ออกแบบและดูแลระบบเครือข่าย LAN/WAN เพื่อให้การเชื่อมต่อมีความเสถียร",
    technologies: ["Switches", "Routers", "VLAN", "TCP/IP"],
    sort_order: 1,
    is_active: true,
  },
  {
    id: 2,
    category_id: 1,
    name: "Wi-Fi Troubleshooting",
    skill_type: "Networking",
    level: 90,
    description_en: "Resolve wireless coverage, authentication, and interference issues for end users.",
    description_th: "แก้ปัญหาเครือข่ายไร้สาย ครอบคลุมการเชื่อมต่อ การยืนยันตัวตน และสัญญาณรบกวน",
    technologies: ["Wi-Fi 6", "Access Points", "SSID", "Wireless Security"],
    sort_order: 2,
    is_active: true,
  },
  {
    id: 3,
    category_id: 2,
    name: "Windows 10 / 11",
    skill_type: "Systems",
    level: 95,
    description_en: "Support desktop operating systems with installation, patching, and troubleshooting.",
    description_th: "สนับสนุนระบบปฏิบัติการเดสก์ท็อปด้วยการติดตั้ง อัปเดต และแก้ไขปัญหา",
    technologies: ["Windows Update", "Group Policy", "Sysinternals"],
    sort_order: 1,
    is_active: true,
  },
  {
    id: 4,
    category_id: 2,
    name: "Active Directory",
    skill_type: "Systems",
    level: 80,
    description_en: "Manage users, groups, and access control in Windows domain environments.",
    description_th: "จัดการผู้ใช้ กลุ่ม และการควบคุมการเข้าถึงในระบบโดเมน Windows",
    certifications: ["Microsoft Certified: Modern Desktop Administrator Associate"],
    technologies: ["AD Users", "Group Policy", "Domain Services"],
    sort_order: 2,
    is_active: true,
  },
  {
    id: 5,
    category_id: 3,
    name: "Office 365",
    skill_type: "Tools",
    level: 90,
    description_en: "Administer cloud productivity services and support end-user collaboration tools.",
    description_th: "ดูแลบริการคลาวด์สำหรับการทำงานร่วมกันและช่วยเหลือผู้ใช้ในเครื่องมือ Office 365",
    technologies: ["Exchange Online", "SharePoint", "Teams"],
    sort_order: 1,
    is_active: true,
  },
  {
    id: 6,
    category_id: 3,
    name: "Remote Support Tools",
    skill_type: "Tools",
    level: 88,
    description_en: "Provide remote troubleshooting and desktop support using remote access software.",
    description_th: "ให้การแก้ไขปัญหาจากระยะไกลและสนับสนุนเดสก์ท็อปด้วยซอฟต์แวร์เข้าถึงระยะไกล",
    technologies: ["TeamViewer", "AnyDesk", "Remote Desktop"],
    sort_order: 2,
    is_active: true,
  },
]

export const portfolioProjects = [
  {
    id: 1,
    title_en: "Office Network Setup",
    title_th: "ติดตั้งเครือข่ายสำนักงาน",
    description_en:
      "Designed and deployed a secure wired and wireless office network for a small business, reducing connection issues by 80%.",
    description_th:
      "ออกแบบและติดตั้งระบบเครือข่ายสายและไร้สายในสำนักงาน ช่วยลดปัญหาการเชื่อมต่อได้ 80%",
    image_url: "/globe.svg",
    technologies: ["Cisco", "Wi-Fi", "Switch", "Firewall"],
    project_link: "#",
    github_link: null,
    is_featured: true,
    sort_order: 1,
    is_active: true,
  },
  {
    id: 2,
    title_en: "Helpdesk Ticket System",
    title_th: "ระบบจัดการตั๋วงาน Helpdesk",
    description_en:
      "Implemented a ticket tracking workflow for a training lab, improving response times and documentation for recurring problems.",
    description_th:
      "สร้างระบบติดตามตั๋วงานสำหรับห้องปฏิบัติการฝึกอบรม ช่วยปรับปรุงเวลาตอบกลับและจัดเก็บปัญหาที่เกิดซ้ำ",
    image_url: "/file.svg",
    technologies: ["Jira", "Zendesk", "Documentation"],
    project_link: "#",
    github_link: null,
    is_featured: true,
    sort_order: 2,
    is_active: true,
  },
  {
    id: 3,
    title_en: "PC Maintenance Package",
    title_th: "แพ็กเกจดูแล PC",
    description_en:
      "Delivered end-to-end workstation maintenance, backup planning, and software updates for startup users and entry-level teams.",
    description_th:
      "ให้บริการดูแลเครื่องและอัปเดตซอฟต์แวร์ครบวงจร พร้อมวางแผนการสำรองข้อมูลสำหรับทีมเริ่มต้น",
    image_url: "/window.svg",
    technologies: ["Backup", "Patch Management", "Diagnostic"],
    project_link: "#",
    github_link: null,
    is_featured: true,
    sort_order: 3,
    is_active: true,
  },
]

export const certificates = [
  {
    id: 1,
    title_en: "CompTIA A+ Certified",
    title_th: "ได้รับการรับรอง CompTIA A+",
    description_en:
      "Core certification for computer hardware, operating systems, and basic troubleshooting techniques.",
    description_th:
      "ใบรับรองพื้นฐานด้านฮาร์ดแวร์คอมพิวเตอร์ ระบบปฏิบัติการ และเทคนิคการแก้ปัญหาเบื้องต้น",
    image_url: "/file.svg",
    technologies: ["Hardware", "OS", "Troubleshooting"],
    is_featured: true,
    sort_order: 1,
    is_active: true,
  },
  {
    id: 2,
    title_en: "Cisco Certified Technician Entry",
    title_th: "Cisco Certified Technician Entry",
    description_en:
      "Certification covering cabling, networking devices, and basic network diagnostics.",
    description_th:
      "ใบรับรองครอบคลุมการเดินสาย อุปกรณ์เครือข่าย และการวินิจฉัยเครือข่ายพื้นฐาน",
    image_url: "/file.svg",
    technologies: ["Cisco", "Network Diagnostics"],
    is_featured: true,
    sort_order: 2,
    is_active: true,
  },
  {
    id: 3,
    title_en: "Microsoft Azure Fundamentals",
    title_th: "Microsoft Azure Fundamentals",
    description_en:
      "Foundation-level validation of cloud computing concepts and Azure services for hybrid IT environments.",
    description_th:
      "ใบรับรองพื้นฐานด้านแนวคิดคลาวด์และบริการ Azure สำหรับสภาพแวดล้อม IT แบบไฮบริด",
    image_url: "/file.svg",
    technologies: ["Azure", "Cloud", "Hybrid IT"],
    is_featured: true,
    sort_order: 3,
    is_active: true,
  },
]

export const contactInfo = {
  id: 1,
  name_en: "Kiatsakul Paiyasen",
  name_th: "เกียรติสกุล ไพยเสน",
  email: "kiatsakul@example.com",
  phone: "+66 9 1234 5678",
  address_en: "Bangkok, Thailand",
  address_th: "กรุงเทพมหานคร ประเทศไทย",
  github_url: "https://github.com/kiatsakul2905",
  linkedin_url:
    "https://www.linkedin.com/in/%E0%B8%98%E0%B8%99%E0%B8%A7-%E0%B8%99%E0%B8%A8%E0%B8%97-%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%AA%E0%B8%81%E0%B8%B8%E0%B8%A5-%E0%B9%84%E0%B8%9E%E0%B8%A2%E0%B9%80%E0%B8%AA%E0%B8%99-805b943a8/",
  facebook_url: "https://www.facebook.com/kiatsakul.paiyasen?locale=th_TH",
  is_active: true,
}
