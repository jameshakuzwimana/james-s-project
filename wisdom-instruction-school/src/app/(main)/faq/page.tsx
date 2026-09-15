import type { Metadata } from "next";
import FaqPage from "@/components/faq/faq-page";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about admissions, academics, fees, and school life at Wisdom Instruction School in Rwanda.",
};

export default function Faq() {
  return <FaqPage />;
}
