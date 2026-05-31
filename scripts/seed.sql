-- Portfolio Website Seed Data
-- Run this after schema.sql to populate initial data

-- =============================================
-- EXPERIENCES DATA
-- =============================================
INSERT INTO experiences (title_en, title_th, company, period_en, period_th, description_en, description_th, technologies, sort_order) VALUES
(
  'Senior Frontend Developer',
  'Senior Frontend Developer',
  'Tech Corp',
  '2022 - Present',
  '2565 - ปัจจุบัน',
  'Lead the frontend development team, building scalable web applications using React and Next.js. Implemented design systems and improved performance by 40%.',
  'เป็นผู้นำทีมพัฒนา Frontend สร้างเว็บแอปพลิเคชันที่รองรับการขยายตัวด้วย React และ Next.js ออกแบบระบบและปรับปรุงประสิทธิภาพได้ 40%',
  ARRAY['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  1
),
(
  'IT Support',
  'IT Support',
  'Digital Agency',
  '2020 - 2022',
  '2563 - 2565',
  'Provided IT support for various clients, resolving hardware, software, and network issues while maintaining high uptime and user satisfaction.',
  'ให้บริการ IT Support สำหรับลูกค้าหลากหลาย แก้ไขปัญหาฮาร์ดแวร์ ซอฟต์แวร์ และเครือข่าย พร้อมรักษาความเสถียรและความพึงพอใจของผู้ใช้',
  ARRAY['Node.js', 'Express', 'MongoDB', 'Vue.js'],
  2
),
(
  'Junior Web Developer',
  'Junior Web Developer',
  'Startup Inc',
  '2018 - 2020',
  '2561 - 2563',
  'Started my career building websites and web applications. Learned best practices in code quality, testing, and agile development.',
  'เริ่มต้นอาชีพด้วยการสร้างเว็บไซต์และเว็บแอปพลิเคชัน เรียนรู้แนวทางปฏิบัติที่ดีในคุณภาพโค้ด การทดสอบ และการพัฒนาแบบ Agile',
  ARRAY['HTML', 'CSS', 'JavaScript', 'PHP'],
  3
);

-- =============================================
-- EDUCATION DATA
-- =============================================
INSERT INTO education (degree_en, degree_th, institution_en, institution_th, period_en, period_th, field_en, field_th, sort_order) VALUES
(
  'Master of Computer Science',
  'วิทยาศาสตรมหาบัณฑิต สาขาวิทยาการคอมพิวเตอร์',
  'Stanford University',
  'มหาวิทยาลัยสแตนฟอร์ด',
  '2016 - 2018',
  '2559 - 2561',
  'Software Engineering',
  'วิศวกรรมซอฟต์แวร์',
  1
),
(
  'Bachelor of Science in Computer Science',
  'วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์',
  'Chulalongkorn University',
  'จุฬาลงกรณ์มหาวิทยาลัย',
  '2012 - 2016',
  '2555 - 2559',
  'Computer Science',
  'วิทยาการคอมพิวเตอร์',
  2
);

-- =============================================
-- SKILL CATEGORIES DATA
-- =============================================
INSERT INTO skill_categories (name, name_en, name_th, icon, sort_order) VALUES
('networking', 'Networking', 'เครือข่าย', 'Server', 1),
('systems', 'Systems & Servers', 'ระบบและเซิร์ฟเวอร์', 'Code2', 2),
('tools', 'Tools & Software', 'เครื่องมือและซอฟต์แวร์', 'Wrench', 3);

-- =============================================
-- SKILLS DATA
-- =============================================
INSERT INTO skills (category_id, name, skill_type, level, description_en, description_th, certifications, technologies, last_used, sort_order) VALUES
((SELECT id FROM skill_categories WHERE name = 'networking'), 'LAN/WAN Setup', 'Networking', 85, 'Design and maintain wired and wireless network infrastructure for reliable connectivity.', 'ออกแบบและดูแลระบบเครือข่าย LAN/WAN เพื่อให้การเชื่อมต่อมีความเสถียร', ARRAY[]::text[], ARRAY['Switches','Routers','VLAN','TCP/IP'], '2024', 1),
((SELECT id FROM skill_categories WHERE name = 'networking'), 'Wi-Fi Troubleshooting', 'Networking', 90, 'Resolve wireless coverage, authentication, and interference issues for end users.', 'แก้ปัญหาเครือข่ายไร้สาย ครอบคลุมการเชื่อมต่อ การยืนยันตัวตน และสัญญาณรบกวน', ARRAY[]::text[], ARRAY['Wi-Fi 6','Access Points','SSID','Wireless Security'], '2024', 2),
((SELECT id FROM skill_categories WHERE name = 'systems'), 'Windows 10 / 11', 'Systems', 95, 'Support desktop operating systems with installation, patching, and troubleshooting.', 'สนับสนุนระบบปฏิบัติการเดสก์ท็อปด้วยการติดตั้ง อัปเดต และแก้ไขปัญหา', ARRAY[]::text[], ARRAY['Windows Update','Group Policy','Sysinternals'], '2025', 3),
((SELECT id FROM skill_categories WHERE name = 'systems'), 'Active Directory', 'Systems', 80, 'Manage users, groups, and access control in Windows domain environments.', 'จัดการผู้ใช้ กลุ่ม และการควบคุมการเข้าถึงในระบบโดเมน Windows', ARRAY['Microsoft Certified: Modern Desktop Administrator Associate'], ARRAY['AD Users','Group Policy','Domain Services'], '2024', 4),
((SELECT id FROM skill_categories WHERE name = 'tools'), 'Office 365', 'Tools', 90, 'Administer cloud productivity services and support end-user collaboration tools.', 'ดูแลบริการคลาวด์สำหรับการทำงานร่วมกันและช่วยเหลือผู้ใช้ในเครื่องมือ Office 365', ARRAY[]::text[], ARRAY['Exchange Online','SharePoint','Teams'], '2024', 5),
((SELECT id FROM skill_categories WHERE name = 'tools'), 'Remote Support Tools', 'Tools', 88, 'Provide remote troubleshooting and desktop support using remote access software.', 'ให้การแก้ไขปัญหาจากระยะไกลและสนับสนุนเดสก์ท็อปด้วยซอฟต์แวร์เข้าถึงระยะไกล', ARRAY[]::text[], ARRAY['TeamViewer','AnyDesk','Remote Desktop'], '2025', 6);

-- =============================================
-- WORK GALLERY IMAGES DATA
-- =============================================
INSERT INTO work_gallery_images (image_file, image_path, title_en, title_th, description_en, description_th, sort_order, is_active) VALUES
('office-setup.jpg', '/imgws/', 'Office Support Setup', 'ติดตั้งสำนักงาน', 'Captured a live workspace installation with cabling and assets organized for handover.', 'ภาพติดตั้งสำนักงานจริงที่มีการจัดวางสายและอุปกรณ์พร้อมส่งมอบงาน', 1, true),
('server-room.jpg', '/imgws/', 'Server Room Maintenance', 'บำรุงรักษาห้องเซิร์ฟเวอร์', 'Routine server room maintenance and rack checks to ensure uptime.', 'การบำรุงรักษาห้องเซิร์ฟเวอร์และตรวจสอบแร็คอย่างสม่ำเสมอเพื่อรักษา uptime', 2, true),
('remote-assist.jpg', '/imgws/', 'Remote Assistance', 'ช่วยเหลือระยะไกล', 'Remote troubleshooting session screenshot demonstrating support workflow.', 'ภาพตัวอย่างการแก้ปัญหาระยะไกลที่แสดงขั้นตอนการสนับสนุน', 3, true);

-- =============================================
-- PORTFOLIO PROJECTS DATA
-- =============================================
INSERT INTO portfolio_projects (title_en, title_th, description_en, description_th, image_url, technologies, project_link, is_featured, sort_order) VALUES
(
  'E-Commerce Platform',
  'แพลตฟอร์มอีคอมเมิร์ซ',
  'A full-featured e-commerce platform with product management, cart functionality, and payment integration.',
  'แพลตฟอร์มอีคอมเมิร์ซครบวงจร พร้อมการจัดการสินค้า ตะกร้าสินค้า และการชำระเงิน',
  '/projects/ecommerce.jpg',
  ARRAY['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
  '#',
  true,
  1
),
(
  'Task Management App',
  'แอปจัดการงาน',
  'A collaborative task management application with real-time updates, team features, and progress tracking.',
  'แอปพลิเคชันจัดการงานแบบร่วมมือ พร้อมการอัปเดตแบบเรียลไทม์ ฟีเจอร์ทีม และการติดตามความคืบหน้า',
  '/projects/taskapp.jpg',
  ARRAY['React', 'Firebase', 'Tailwind CSS', 'Redux'],
  '#',
  true,
  2
),
(
  'Portfolio Website',
  'เว็บไซต์พอร์ตโฟลิโอ',
  'A modern portfolio website with dark/light theme, multi-language support, and responsive design.',
  'เว็บไซต์พอร์ตโฟลิโอสมัยใหม่ พร้อมธีมมืด/สว่าง รองรับหลายภาษา และดีไซน์ตอบสนอง',
  '/projects/portfolio.jpg',
  ARRAY['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  '#',
  false,
  3
),
(
  'Weather Dashboard',
  'แดชบอร์ดพยากรณ์อากาศ',
  'A weather dashboard that displays real-time weather data with beautiful visualizations and forecasts.',
  'แดชบอร์ดสภาพอากาศที่แสดงข้อมูลแบบเรียลไทม์ พร้อมการแสดงผลที่สวยงามและการพยากรณ์',
  '/projects/weather.jpg',
  ARRAY['React', 'Chart.js', 'OpenWeather API', 'CSS Modules'],
  '#',
  false,
  4
),
(
  'Social Media App',
  'แอปโซเชียลมีเดีย',
  'A social media application with user profiles, posts, comments, and real-time messaging.',
  'แอปพลิเคชันโซเชียลมีเดียพร้อมโปรไฟล์ผู้ใช้ โพสต์ คอมเมนต์ และการส่งข้อความแบบเรียลไทม์',
  '/projects/social.jpg',
  ARRAY['Next.js', 'Supabase', 'Tailwind CSS', 'Socket.io'],
  '#',
  true,
  5
),
(
  'AI Chat Assistant',
  'ผู้ช่วยแชท AI',
  'An AI-powered chat assistant with natural language processing and contextual understanding.',
  'ผู้ช่วยแชทที่ขับเคลื่อนด้วย AI พร้อมการประมวลผลภาษาธรรมชาติและความเข้าใจบริบท',
  '/projects/aichat.jpg',
  ARRAY['Next.js', 'OpenAI API', 'Vercel AI SDK', 'Tailwind CSS'],
  '#',
  true,
  6
);

-- =============================================
-- CONTACT INFO DATA
-- =============================================
INSERT INTO contact_info (name_en, name_th, phone, email, github_url, linkedin_url, facebook_url) VALUES
(
  'kiatsakul paiyasen',
  'เกียรติสกุลไพยเสน',
  '+66 12 345 6789',
  'john.doe@email.com',
  'https://github.com',
  'https://linkedin.com',
  'https://facebook.com'
);

-- =============================================
-- SITE SETTINGS DATA
-- =============================================
INSERT INTO site_settings (key, value_en, value_th, description) VALUES
('site_title', 'John Doe | IT Support', 'จอห์น โด | IT Support', 'Website title'),
('site_description', 'IT support portfolio showcasing technical troubleshooting, network management, and user support skills.', 'พอร์ตโฟลิโอ IT Support แสดงทักษะการแก้ปัญหาเชิงเทคนิค การจัดการเครือข่าย และการสนับสนุนผู้ใช้งาน', 'Meta description'),
('hero_greeting', 'Hello, I''m', 'สวัสดี, ผมคือ', 'Hero section greeting'),
('hero_description', 'Passionate about creating secure and reliable IT systems with a focus on rapid issue resolution and end user satisfaction.', 'หลงใหลในการสร้างระบบ IT ที่ปลอดภัยและเชื่อถือได้ พร้อมมุ่งมั่นแก้ปัญหาอย่างรวดเร็วและสร้างความพึงพอใจให้ผู้ใช้', 'Hero section description');
