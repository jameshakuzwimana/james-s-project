import type { Metadata } from "next";
import SchoolLifePage from "@/components/school-life/school-life-page";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "School Life",
  description:
    "Discover daily life, clubs, activities, sports, arts, and culture at Wisdom Instruction School, a nursery and primary school in Rwanda.",
};

export default function SchoolLife() {
  return <SchoolLifePage />;
}
