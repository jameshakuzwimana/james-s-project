import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateTime(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatRelativeTime(date: Date | string): string {
  const d = new Date(date);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return formatDate(d);
}

export function generateApplicationNumber(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `WIS-${year}-${random}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trimEnd() + "...";
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function getGradeFromMarks(marks: number): {
  grade: string;
  points: number;
  label: string;
} {
  if (marks >= 80) return { grade: "A", points: 1, label: "Excellent" };
  if (marks >= 70) return { grade: "B", points: 2, label: "Very Good" };
  if (marks >= 60) return { grade: "C", points: 3, label: "Good" };
  if (marks >= 50) return { grade: "D", points: 4, label: "Satisfactory" };
  if (marks >= 40) return { grade: "E", points: 5, label: "Pass" };
  return { grade: "F", points: 6, label: "Fail" };
}

export const APPLICATION_STATUSES = {
  PENDING: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
  UNDER_REVIEW: { label: "Under Review", color: "bg-blue-100 text-blue-800" },
  SHORTLISTED: { label: "Shortlisted", color: "bg-purple-100 text-purple-800" },
  ACCEPTED: { label: "Accepted", color: "bg-green-100 text-green-800" },
  REJECTED: { label: "Rejected", color: "bg-red-100 text-red-800" },
  WAITLISTED: { label: "Waitlisted", color: "bg-orange-100 text-orange-800" },
} as const;

export type ApplicationStatus = keyof typeof APPLICATION_STATUSES;

export const GRADE_LABELS: Record<string, string> = {
  NURSERY_1: "Nursery 1",
  NURSERY_2: "Nursery 2",
  NURSERY_3: "Nursery 3",
  P1: "Primary 1",
  P2: "Primary 2",
  P3: "Primary 3",
  P4: "Primary 4",
  P5: "Primary 5",
  P6: "Primary 6",
};

export const ATTENDANCE_TYPES = {
  PRESENT: { label: "Present", color: "bg-green-100 text-green-800" },
  ABSENT: { label: "Absent", color: "bg-red-100 text-red-800" },
  LATE: { label: "Late", color: "bg-yellow-100 text-yellow-800" },
  EXCUSED: { label: "Excused", color: "bg-blue-100 text-blue-800" },
} as const;

export type AttendanceType = keyof typeof ATTENDANCE_TYPES;
