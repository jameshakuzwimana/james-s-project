import type { Metadata } from "next";
import HomePage from "@/components/home/home-page";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline} Rwanda`,
  description: siteConfig.description,
};

export default function Home() {
  return <HomePage />;
}
