import type { Metadata } from "next";
import AnnouncementsPage from "@/components/announcements/announcements-page";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Announcements",
  description:
    "View official announcements and important updates from Wisdom Instruction School in Rwanda.",
};

export default function Announcements() {
  return <AnnouncementsPage />;
}
