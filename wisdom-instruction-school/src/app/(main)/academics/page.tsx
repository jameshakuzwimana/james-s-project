import type { Metadata } from "next";
import AcademicsPage from "@/components/academics/academics-page";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Explore the nursery and primary academic programs, classes, subjects, curriculum, and learning approach at Wisdom Instruction School, Rwanda.",
};

export default function Academics() {
  return <AcademicsPage />;
}
