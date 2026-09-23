import type { Metadata } from "next";
import AboutPage from "@/components/about/about-page";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the history, mission, vision, values, leadership, and achievements of Wisdom Instruction School, a nursery and primary school in Rwanda.",
};

export default function About() {
  return <AboutPage />;
}
