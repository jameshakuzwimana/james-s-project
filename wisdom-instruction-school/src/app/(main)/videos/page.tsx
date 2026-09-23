import type { Metadata } from "next";
import VideosPage from "@/components/videos/videos-page";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch school tours and videos of Wisdom Instruction School in Rwanda, including our campus, classrooms, and activities.",
};

export default function Videos() {
  return <VideosPage />;
}
