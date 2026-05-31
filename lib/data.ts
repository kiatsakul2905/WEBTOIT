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
        "id": 1,
        "title_en": "certificate KU Digital Literacy",
        "title_th": "ใบประกาศนียบัตร KU Digital Literacy",
        "description_en": "A certificate recognizing essential foundational digital literacy competencies (Digital Literacy Certificate) for students and staff of Kasetsart University (KU), issued by the Office of Computer Services. The assessment evaluates knowledge and skills in computer usage, internet usage, office applications, artificial intelligence (AI), and digital law through an online examination system (exam.ku.th), aiming to enhance and modernize digital skills.",
        "description_th": "เอกสารรับรองสมรรถนะทักษะดิจิทัลพื้นฐานที่จำเป็น (Digital Literacy Certificate) สำหรับนิสิตและบุคลากรมหาวิทยาลัยเกษตรศาสตร์ (มก.) โดยสำนักบริการคอมพิวเตอร์ ประเมินความรู้ด้านการใช้งานคอมพิวเตอร์ อินเทอร์เน็ต โปรแกรมสำนักงาน AI และกฎหมายดิจิทัล ผ่านระบบออนไลน์ (exam.ku.th) เพื่อยกระดับทักษะให้ทันสมัย",
        "image_url": "/certificates/Screenshot 2026-02-12 135105.png",
        "video_url": null,
        "technologies": [],
        "is_featured": false,
        "sort_order": 1,
        "is_active": true,
        "created_at": "2026-02-12T02:03:51.354Z",
        "updated_at": "2026-02-12T02:03:51.354Z"
    },
    {
        "id": 2,
        "title_en": "certificate completing participation KUSE AI Hackathon",
        "title_th": "ใบประกาศนียบัตร completing participation KUSE AI Hackathon",
        "description_en": "Participated in the KUSE AI Hackathon 2025 (June 26–28, 2025), using Python on Google Colab as the primary development environment. The competition focused on building AI solutions in Natural Language Processing (NLP) and Image Processing, emphasizing model experimentation, data preprocessing, and rapid prototyping.",
        "description_th": "เข้าร่วมการแข่งขัน KUSE AI Hackathon 2025 ระหว่างวันที่ 26–28 มิถุนายน 2025 โดยใช้ Python บน Google Colab เป็นสภาพแวดล้อมหลักในการพัฒนา โจทย์การแข่งขันมุ่งเน้นการสร้างโซลูชันด้าน ปัญญาประดิษฐ์ (AI) ในสาขา Natural Language Processing (NLP) และ Image Processing โดยเน้นการทดลองโมเดล การเตรียมข้อมูล (data preprocessing) และการพัฒนาต้นแบบอย่างรวดเร็ว (rapid prototyping)",
        "image_url": "/certificates/Screenshot 2026-01-09 145635.png",
        "video_url": "https://youtube.com/watch?v=demo",
        "technologies": [
            "google colab",
            "python",
            "kaggle dataset"
        ],
        "is_featured": false,
        "sort_order": 2,
        "is_active": true,
        "created_at": "2026-02-12T02:03:51.354Z",
        "updated_at": "2026-02-12T02:03:51.354Z"
    },
    {
        "id": 3,
        "title_en": "AUCC-Award-Certificate",
        "title_th": "ใบประกาศนียบัตร AUCC-Award-Certificate",
        "description_en": "Participated in the 14th Asian Undergraduate Conference on Computing (AUCC 2026) as an oral research presenter.",
        "description_th": "เข้าร่วมการประชุมวิชาการระดับปริญญาตรีด้านคอมพิวเตอร์ภูมิภาคเอเชีย ครั้งที่ 14 (AUCC 2026) ในฐานะผู้นำเสนอบทความวิจัยแบบบรรยาย",
        "image_url": "/certificates/Screenshot 2026-02-12 113105.png",
        "video_url": null,
        "technologies": [
            "เว็บแนะนำอาหารตามอารมณ์-ความรู้สึก"
        ],
        "is_featured": false,
        "sort_order": 3,
        "is_active": true,
        "created_at": "2026-02-12T02:03:51.354Z",
        "updated_at": "2026-02-12T02:03:51.354Z"
    },
    {
        "id": 4,
        "title_en": "Website Security Standards 1.0: Preparing for Modern Cyber Threats",
        "title_th": "มาตรฐานความปลอดภัยเว็บไซต์ (Website Security Standards 1.0) การเตรียมตัวให้พร้อมรับมือภัยไซเบอร์ยุคใหม่",
        "description_en": "\tThis course focuses on establishing knowledge and understanding of Thailand's Website Security Standards version 1.0. It aims to empower website administrators and developers to apply these standards in securing websites against increasingly complex modern cyber threats and ensuring digital trust.",
        "description_th": "\tหลักสูตรนี้มุ่งเน้นการสร้างความรู้และความเข้าใจเกี่ยวกับมาตรฐานความปลอดภัยเว็บไซต์เวอร์ชัน 1.0 ของประเทศไทย เพื่อให้ผู้ที่เกี่ยวข้องกับการบริหารจัดการและดูแลเว็บไซต์สามารถนำไปประยุกต์ใช้ในการพัฒนาและป้องกันเว็บไซต์จากภัยคุกคามไซเบอร์ที่ซับซ้อนในปัจจุบันได้อย่างถูกต้อง",
        "image_url": "/certificates/641431922_917945710966721_3092283332133523834_n.png",
        "video_url": null,
        "technologies": [],
        "is_featured": false,
        "sort_order": 4,
        "is_active": true,
        "created_at": "2026-03-06T03:26:48.252Z",
        "updated_at": "2026-03-06T03:26:48.252Z"
    }
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
