import type { Metadata } from "next";
import { MainNav } from "@/components/layout/main-nav";
import { MainFooter } from "@/components/layout/main-footer";
import { Toaster } from "@/components/ui/toast";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline} Rwanda`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <MainNav />
      <main className="flex-1">{children}</main>
      <MainFooter />
      <Toaster />
      <WhatsAppButton />
    </div>
  );
}
