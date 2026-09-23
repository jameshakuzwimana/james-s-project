export interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

export interface SchoolValue {
  title: string;
  description: string;
  icon: string;
}

export interface AcademicProgram {
  level: string;
  ages: string;
  description: string;
  highlights: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image?: string;
  category: string;
  publishedAt: string;
  featured: boolean;
}

export interface SchoolEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  image?: string;
  category: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  album?: string;
}

export interface GalleryAlbum {
  id: string;
  name: string;
  description?: string;
  coverImage: string;
  imageCount: number;
  category: string;
}

export interface SchoolVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  featured: boolean;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: "low" | "medium" | "high" | "urgent";
  publishedAt: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
  rating: number;
}

export interface Teacher {
  id: string;
  name: string;
  title: string;
  department: string;
  bio: string;
  image?: string;
  qualifications: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  officeHours: string;
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    whatsapp?: string;
  };
}

export interface DashboardStats {
  totalStudents: number;
  totalTeachers: number;
  totalClasses: number;
  totalApplications: number;
  pendingApplications: number;
  upcomingEvents: number;
  newAnnouncements: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
