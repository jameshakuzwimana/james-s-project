import type { Metadata } from "next";
import GalleryPage from "@/components/gallery/gallery-page";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View photos of Wisdom Instruction School in Rwanda â€” classrooms, students, teachers, facilities, activities, and more.",
};

export default function Gallery() {
  return <GalleryPage />;
}
