export const siteConfig = {
  name: "Wisdom Instruction School",
  shortName: "WIS",
  tagline: "Nursery and Primary School",
  location: "Rwanda",
  description:
    "Wisdom Instruction School is a premier nursery and primary school in Rwanda dedicated to nurturing young minds through excellence in education, character development, and holistic growth.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  email: "info@wisdominstruction.edu.rw",
  phone: "+250 788 000 000",
  whatsapp: "250788788183",
  address: "Rubavu, Rwanda",
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    youtube: "#",
    whatsapp: "https://wa.me/250788788183",
  },
};

export const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "Our Story", href: "/about#history" },
      { name: "Mission & Vision", href: "/about#mission" },
      { name: "Core Values", href: "/about#values" },
      { name: "Leadership", href: "/about#leadership" },
    ],
  },
  {
    name: "Academics",
    href: "/academics",
    children: [
      { name: "Nursery", href: "/academics#nursery" },
      { name: "Primary", href: "/academics#primary" },
      { name: "Curriculum", href: "/academics#curriculum" },
      { name: "Calendar", href: "/academics#calendar" },
    ],
  },
  { name: "Admissions", href: "/admissions" },
  { name: "School Life", href: "/school-life" },
  { name: "Gallery", href: "/gallery" },
  {
    name: "News",
    href: "/news",
    children: [
      { name: "Latest News", href: "/news" },
      { name: "Events", href: "/events" },
      { name: "Announcements", href: "/announcements" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export const footerLinks = {
  quickLinks: [
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "School Life", href: "/school-life" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ],
  academics: [
    { name: "Nursery Education", href: "/academics#nursery" },
    { name: "Primary Education", href: "/academics#primary" },
    { name: "Curriculum", href: "/academics#curriculum" },
    { name: "Academic Calendar", href: "/academics#calendar" },
  ],
  resources: [
    { name: "News & Updates", href: "/news" },
    { name: "Events", href: "/events" },
    { name: "FAQ", href: "/faq" },
    { name: "Apply Online", href: "/apply" },
    { name: "Student Portal", href: "/login" },
    { name: "Parent Portal", href: "/login" },
  ],
};

export const schoolValues = [
  {
    title: "Excellence",
    description:
      "We strive for the highest standards in everything we do, empowering every student to reach their full potential.",
    icon: "Award",
  },
  {
    title: "Integrity",
    description:
      "We cultivate honesty, responsibility, and strong moral character in our students and community.",
    icon: "Heart",
  },
  {
    title: "Growth",
    description:
      "We foster a love of learning and continuous personal and academic development.",
    icon: "Sprout",
  },
  {
    title: "Community",
    description:
      "We build a supportive, inclusive environment where every child feels valued and connected.",
    icon: "Users",
  },
  {
    title: "Innovation",
    description:
      "We embrace creative teaching methods and modern tools to prepare students for the future.",
    icon: "Lightbulb",
  },
  {
    title: "Safety",
    description:
      "We provide a secure, nurturing environment where children can learn, play, and thrive.",
    icon: "Shield",
  },
];

export const academicPrograms = [
  {
    level: "Nursery",
    ages: "3-5 years",
    description:
      "A warm, stimulating environment where our youngest learners develop foundational skills through play-based learning and exploration.",
    highlights: [
      "Play-based learning",
      "Early literacy & numeracy",
      "Creative arts",
      "Social skills development",
      "Physical activities",
    ],
  },
  {
    level: "Primary",
    ages: "6-12 years",
    description:
      "A comprehensive program that builds strong academic foundations while nurturing critical thinking, creativity, and character.",
    highlights: [
      "Rigorous academics",
      "STEM education",
      "Arts & sports",
      "Character development",
      "Leadership opportunities",
    ],
  },
];

export type UserRole =
  | "SUPER_ADMIN"
  | "ADMIN"
  | "TEACHER"
  | "STUDENT"
  | "PARENT"
  | "APPLICANT";

export const roleDashboardPaths: Record<UserRole, string> = {
  SUPER_ADMIN: "/dashboard/admin",
  ADMIN: "/dashboard/admin",
  TEACHER: "/dashboard/teacher",
  STUDENT: "/dashboard/student",
  PARENT: "/dashboard/parent",
  APPLICANT: "/dashboard/applicant",
};
