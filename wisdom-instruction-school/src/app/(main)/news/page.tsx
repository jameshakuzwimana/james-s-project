import type { Metadata } from "next";
import NewsPage from "@/components/news/news-page";

export const metadata: Metadata = {
  title: "News",
  description:
    "Read the latest news and updates from Wisdom Instruction School in Rwanda, including announcements and achievements.",
};

export default function News() {
  return <NewsPage />;
}
