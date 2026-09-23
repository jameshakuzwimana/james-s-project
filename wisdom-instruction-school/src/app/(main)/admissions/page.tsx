import type { Metadata } from "next";
import AdmissionsPage from "@/components/admissions/admissions-page";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Learn about the admission process, requirements, and how to apply to Wisdom Instruction School, a nursery and primary school in Rwanda.",
};

export default function Admissions() {
  return <AdmissionsPage />;
}
