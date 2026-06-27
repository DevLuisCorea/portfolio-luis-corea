import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ing. Luis Aaron Corea Nuñez - Developer",
  author: "Luis Aaron Corea Nuñez",
  description:
    "Software Engineer based in Nicaragua. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/menu-icon.svg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/luis-a-corea-n-565471309/" },
    { text: "Github", href: "https://github.com/DevLuisCorea" },
  ],
  socialImage: "favicon.svg",
  canonicalURL: "/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Luis Corea Nuñez",
    specialty: "Frontend & Backend Developer",
    summary:
      "Developer based in Nicaragua. I specialize in application development and maintenance across various environments, including web and desktop.",
    email: "icoreanuez@gmail.com",
  },
  experience: [
    {
      company: "Banco LAFISE Bancentro",
      position: "Trainne Technical Support",
      startDate: "Oct 2023",
      endDate: "Abril 2024",
      summary: [
        "Technical and Operational Support and Incident Management: Diagnosing and resolving hardware, software, and connectivity issues for internal users, ensuring strict compliance with Service Level Agreements (SLAs) to maintain business continuity.",
        "Systems Administration and Configuration: Installing, maintaining, and updating operating systems, productivity tools, and peripherals, as well as basic user access and permission management using Active Directory.",
        "Information Security Compliance: Rigorously applying institutional security policies, ensuring the installation of patches, antivirus software, and the confidential handling of the financial institution's information and data.",
      ],
    },
    {
      company: "SISTEMATICA INTERNACIONAL",
      position: "Frontend Developer Junior",
      startDate: "May 2024",
      endDate: "Actually",
      summary: [
        "Internal Systems and Web Platform Development: Design and construction of dynamic interfaces using React and Next.js, balancing the creation of internal tools to optimize company workflows with high-performance public websites.",
        "Onboarding Experience Optimization: Development and improvement of strategic flows and websites focused on user acquisition and retention, implementing advanced validations, interactive forms, and seamless navigation to ensure successful customer onboarding.",
        "Service Integration and API Consumption: Efficient connection of the frontend with RESTful APIs and external services for secure form data processing, real-time data synchronization, and automation of key business processes."
      ],
    }
  ],
  projects: [
    {
      name: "SI-FINANZAS",
      summary: "Financial and accounting control system for the church I attend, developed in Next.js and Express.js with Supabase and PostgreSQL",
      linkPreview: "/",
      linkSource: "https://github.com/DevLuisCorea",
      image: "/web-resources/si-finanzas.webp",
    },
    {
      name: "Inventory System for Hardware Stores",
      summary: "A customized system for hardware stores to track inventory inflows and outflows.",
      linkPreview: "/",
      linkSource: "https://github.com/DevLuisCorea",
      image: "/web-resources/siinvetnario-ferreteria.webp",
    }
  ],
  about: {
    description: `
    Hi, I'm Luis Corea, a passionate developer with a knack for creating seamless digital experiences. With a solid background in front-end and back-end web development, I thrive at the intersection of creativity and technology. Over the years, I've honed my skills to build robust and user-friendly applications that not only meet user needs but also push the boundaries of what's possible. My projects range from innovative applications, always with a focus on performance, security, and scalability.
    `,
    image: "/web-resources/image-profile.jpg",
  },
};