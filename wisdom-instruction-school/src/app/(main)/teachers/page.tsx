import type { Metadata } from "next";
import TeachersPage from "@/components/teachers/teachers-page";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Teachers",
  description:
    "Meet the dedicated teachers and educators at Wisdom Instruction School in Rwanda, committed to nurturing every child's potential.",
};

export default function Teachers() {
  return <TeachersPage />;
}
