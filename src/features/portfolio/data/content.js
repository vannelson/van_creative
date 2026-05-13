import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import ApiRoundedIcon from "@mui/icons-material/ApiRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import CloudQueueRoundedIcon from "@mui/icons-material/CloudQueueRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import LaptopMacRoundedIcon from "@mui/icons-material/LaptopMacRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import PsychologyAltRoundedIcon from "@mui/icons-material/PsychologyAltRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import SchemaRoundedIcon from "@mui/icons-material/SchemaRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import SyncRoundedIcon from "@mui/icons-material/SyncRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import TrackChangesRoundedIcon from "@mui/icons-material/TrackChangesRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import siteData from "@/data/siteData.json";

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "techstack", label: "Stack" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export const heroContent = {
  badge: "Available for Projects",
  titleLead: "Smart Systems",
  titleAccent: "Standard Practices.",
  titleTail: "WITH AI Productivity.",
  subtitle: ["Full-Stack Developer", "IT Specialist", "CRM Automation Expert"],
  imageSrc: "/van/vaHero.png",
};

export const heroStats = [
  { label: "Years Experience", count: 8 },
  { label: "Projects Delivered", count: 50 },
  { label: "Happy Clients", count: 30 },
];

export const heroOrbitIcons = [
  SmartToyRoundedIcon,
  BoltRoundedIcon,
  PsychologyAltRoundedIcon,
  TerminalRoundedIcon,
  LinkRoundedIcon,
];

export const aboutContent = {
  label: "Who I Am",
  titleLead: "Full-Stack Developer,",
  titleAccent: "Standard Practices",
  titleTail: "& AI Productivity",
  ctaLabel: "Want to hear more?",
  summary: [
    "This experience is built around a full-stack developer who started with traditional software development - writing code from frontend to backend, solving real business problems, and building systems with standard engineering practices.",
    "Over time, the focus evolved beyond coding into architecture, productivity, and smarter execution - using AI not to replace engineering, but to speed up development, improve quality, and deliver scalable solutions faster.",
    "Today, the approach combines full-stack development, system design, automation, cloud thinking, and AI-driven workflows - building smart systems with standard practices that are efficient, secure, and built to last.",
  ],
};

export const aboutCards = [
  { Icon: CodeRoundedIcon, title: "Full-Stack", subtitle: "Development" },
  { Icon: SmartToyRoundedIcon, title: "AI & ML", subtitle: "Integration" },
  { Icon: SettingsSuggestRoundedIcon, title: "CRM", subtitle: "Automation" },
  { Icon: CloudQueueRoundedIcon, title: "Cloud", subtitle: "Architecture" },
];

export const storyContent = {
  label: "My Journey",
  title: "My",
  titleAccent: "Story",
  description:
    "A career shaped by internal systems, ETL workflows, CRM platforms, manufacturing automation, and AI-assisted delivery.",
};

export const storyModalContent = {
  kicker: "The real journey",
  title: "From full-stack coding to AI-powered productivity",
  quote: "Why not use AI for productivity and focus my energy on architecture?",
  paragraphs: [
    "I'm a full-stack developer - writing code from top to bottom, spending hours building features that already exist in my head, debugging syntax errors, and searching Stack Overflow and blogs just to fix one issue.",
    "Since I graduated in 2017, up until 2020, I worked on different projects and jobs, constantly learning, coding, and improving.",
    "My first corporate job was at EPI-Phil - doing what every developer knows: coding, debugging, and yes, sometimes suffering. But it worked.",
    "Then I got my second job at inriver, and that was when AI started booming.",
    "At first, we were all in denial. We told ourselves we were hard-core coders and did not need AI. Honestly, I think some programmers had pride. Some were quietly using ChatGPT in the background, then acting like it was all their code.",
    "That was when I thought: Why not use AI for productivity and focus my energy on architecture?",
    "Then I got my third corporate job as a senior developer. At first, I told myself I would do it the old way and code everything on my own. But behind the scenes, I was using OpenAI Codex to move faster while I focused on architecture, system design, testing, deployment, and code reviews.",
    "I'm not doing 100% of the coding anymore - maybe only 20%. Before, something that took me two weeks to finish now takes me one day. Clean frontend. Testing. Deployment. PR review.",
    "That approach worked for 1 year and 6 months. I kept that secret until one morning during a meeting when I introduced AI to the team.",
    "Some people asked me: Yes, it works, but can it replace us? Then boom - politics happened.",
    "That was when I fully committed to productivity with AI, building systems faster, more securely, and with best practices as a full-stack developer.",
    "And it worked. I landed a project-based client in Singapore, where I designed and implemented a complete system in just two months using standard practices, solid architecture, UI collaboration, and AI-assisted productivity.",
    "I even got the chance to visit Singapore for installation and training. And the best part? That system is still running today.",
  ],
};

export const timelineItems = [
  {
    year: "March 2020 - Dec 2022 / 2 yrs 10 mos",
    title: "Full Stack Developer (Promoted from Junior to Mid-Level)",
    desc: "Progressed from Junior to Mid-Level Developer while building accounting collection, sales monitoring, and SQL reporting systems with Vue.js and Laravel for internal business operations.",
    tag: "Vue.js / Laravel / SQL / Accounting / Sales",
  },
  {
    year: "Jan 2022 - Dec 2023 / 2 years",
    title: "Full Stack Developer II - Promoted",
    desc: "Developed Node.js APIs for ETL transactions, implemented Azure DevOps CI/CD pipelines, and handled ETL data presentation with Vue.js and Nuxt.",
    tag: "Node.js / ETL / Vue.js / Nuxt / Azure DevOps",
  },
  {
    year: "Jan 2023 - May 2025 / 2 yrs 5 mos",
    title: "Senior Full Stack Developer",
    desc: "Developed secure Laravel and Symfony APIs, led React Bootstrap frontend UI work, and maintained CRM and eCommerce backend systems for daily business operations.",
    tag: "Laravel / Symfony / React Bootstrap / CRM",
  },
  {
    year: "Present - CONTRACT",
    title: "IT Specialist - Automation, AI & Vibe Coding",
    desc: "Built a full-stack MES platform with React, Chakra UI, Redux Toolkit, Laravel APIs, dashboards, virtual screens, and AI-driven workflow automations for production operations.",
    tag: "React / Chakra UI / Redux Toolkit / Laravel / MES",
  },
];

export const techStackContent = {
  label: "Technical Expertise",
  title: "My",
  titleAccent: "Tech Stack",
  description:
    "A curated arsenal of modern technologies shaped around real product delivery, integrations, and automation work.",
};

export const skillCategoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database & Cloud",
  ai: "AI Skills",
  crm: "CRM & Automation",
};

export const skills = {
  frontend: [
    { name: "HTML / CSS", Icon: WebRoundedIcon, stars: 5 },
    { name: "JavaScript", Icon: ApiRoundedIcon, stars: 5 },
    { name: "TypeScript", Icon: SchemaRoundedIcon, stars: 4 },
    { name: "Vue.js", Icon: ViewQuiltRoundedIcon, stars: 5 },
    { name: "React", Icon: HubRoundedIcon, stars: 4 },
    { name: "Quasar", Icon: DashboardCustomizeRoundedIcon, stars: 5 },
  ],
  backend: [
    { name: "PHP", Icon: TerminalRoundedIcon, stars: 5 },
    { name: "Laravel", Icon: CodeRoundedIcon, stars: 5 },
    { name: "Node.js", Icon: HubRoundedIcon, stars: 4 },
    { name: "REST API", Icon: ApiRoundedIcon, stars: 5 },
  ],
  database: [
    { name: "MySQL", Icon: StorageRoundedIcon, stars: 5 },
    { name: "PostgreSQL", Icon: DnsRoundedIcon, stars: 4 },
    { name: "Docker", Icon: Inventory2RoundedIcon, stars: 4 },
    { name: "AWS", Icon: CloudQueueRoundedIcon, stars: 3 },
    { name: "Azure", Icon: CloudQueueRoundedIcon, stars: 3 },
  ],
  ai: [
    { name: "ChatGPT", Icon: SmartToyRoundedIcon, stars: 5 },
    { name: "Claude", Icon: PsychologyAltRoundedIcon, stars: 5 },
    { name: "Codex", Icon: MemoryRoundedIcon, stars: 5 },
    { name: "Prompt Systems", Icon: EditNoteRoundedIcon, stars: 5 },
  ],
  crm: [
    { name: "GoHighLevel", Icon: RocketLaunchRoundedIcon, stars: 5 },
    { name: "Zapier", Icon: BoltRoundedIcon, stars: 5 },
    { name: "Power Automate", Icon: SyncRoundedIcon, stars: 5 },
    { name: "Power Apps", Icon: WidgetsRoundedIcon, stars: 4 },
    { name: "API Integration", Icon: LinkRoundedIcon, stars: 5 },
  ],
};

export const projectsContent = {
  label: "Portfolio",
  title: "Featured",
  titleAccent: "Projects",
  description:
    "Selected work spanning enterprise systems, AI applications, and automation platforms.",
};

const projectCategoryMap = {
  CCL: "Manufacturing Execution System",
  Scanda: "CRM Platform",
  KNP: "Operations Platform",
  "EPI Phil - Collections": "Finance Reporting",
  "EPI Phil - Sales": "Sales Dashboard",
  "skillwise StartUp": "Marketing Website",
  "Music Sound Trip": "Interactive Platform",
};

export const projects = siteData.projects.map((project) => ({
  category: projectCategoryMap[project.id] || "Featured Project",
  desc: project.desc,
  id: project.id,
  images: project.images,
  objective: project.objective,
  preview: project.images[0],
  tags: project.tags,
  title: project.title,
  url: project.url,
}));

export const galleryContent = {
  label: "Visual Journal",
  title: "Gallery &",
  titleAccent: "Moments",
  description:
    "A behind-the-scenes view of workspace energy, collaboration, milestones, and uploaded visuals.",
  uploadHint: "JPG, PNG, WebP supported",
};

export const galleryFilters = [
  ["all", "All"],
  ["workspace", "Workspace"],
  ["meetings", "Client Meetings"],
  ["team", "Team Collaboration"],
  ["certs", "Certifications"],
  ["events", "Events"],
];

export const defaultGallery = [
  { Icon: LaptopMacRoundedIcon, label: "Workspace", filter: "workspace", tall: true },
  { Icon: GroupsRoundedIcon, label: "Client Meeting", filter: "meetings", tall: false },
  { Icon: GroupsRoundedIcon, label: "Team Collab", filter: "team", tall: false },
  { Icon: WorkspacePremiumRoundedIcon, label: "Certification", filter: "certs", tall: true },
  { Icon: MicRoundedIcon, label: "Tech Event", filter: "events", tall: false },
  { Icon: DesktopWindowsRoundedIcon, label: "Workspace Setup", filter: "workspace", tall: false },
  { Icon: EmojiEventsRoundedIcon, label: "Achievement", filter: "certs", tall: false },
  { Icon: TrackChangesRoundedIcon, label: "Strategy Session", filter: "meetings", tall: true },
  { Icon: EngineeringRoundedIcon, label: "Behind The Scenes", filter: "team", tall: false },
];

export const experienceContent = {
  label: "Work History",
  title: "Professional",
  titleAccent: "Experience",
  description:
    "Corporate experience across internal finance systems, ETL workflows, CRM platforms, and manufacturing automation.",
};

const experienceIconMap = {
  "CCL Design": PsychologyAltRoundedIcon,
  "Scandinavian Good Business AB": AccountTreeRoundedIcon,
  Inriver: SettingsRoundedIcon,
  "Envireau Pacific Incorporated": LightbulbRoundedIcon,
};

export const experiences = siteData.experiences.map((experience) => ({
  Icon: experienceIconMap[experience.company] || BusinessRoundedIcon,
  title: experience.role,
  company: experience.company,
  desc: experience.summary,
  highlights: experience.highlights,
  logo: experience.logo,
  period: experience.period,
  tags: experience.tags,
  current: experience.period.toLowerCase().includes("present"),
}));

export const contactContent = {
  label: "Get In Touch",
  title: "Let's",
  titleAccent: "Connect",
  description:
    "Ready to build something sharp, modern, and useful? Start the conversation here.",
  scheduleLabel: "Schedule a Meeting",
  formTopics: [
    "Project Inquiry",
    "CRM Automation",
    "AI Consulting",
    "Full-Stack Development",
    "Other",
  ],
};

export const contactLinks = [
  {
    Icon: MailOutlineRoundedIcon,
    type: "Email",
    value: "hello@signalstudio.dev",
    href: "mailto:hello@signalstudio.dev",
  },
  {
    Icon: LinkedInIcon,
    type: "LinkedIn",
    value: "linkedin.com/in/signalstudio",
    href: "https://linkedin.com",
  },
  {
    Icon: GitHubIcon,
    type: "GitHub",
    value: "github.com/signalstudio",
    href: "https://github.com",
  },
  {
    Icon: LanguageRoundedIcon,
    type: "Portfolio",
    value: "signalstudio.dev",
    href: "#",
  },
];

export const footerContent = {
  lead: "Designed & Built with AI",
  trail: "2026 All Rights Reserved",
};
