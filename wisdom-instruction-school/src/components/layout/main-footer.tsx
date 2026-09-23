import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import SchoolLogo from "@/components/shared/school-logo";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { siteConfig, footerLinks } from "@/config/site";

export function MainFooter() {
  return (
    <footer className="bg-charcoal-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <SchoolLogo variant="light" size="sm" />
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Nurturing young minds and building bright futures in Rwanda through quality nursery and
              primary education, character development, and a love for learning.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, label: "Facebook", href: siteConfig.social.facebook },
                { icon: Instagram, label: "Instagram", href: siteConfig.social.instagram },
                { icon: Youtube, label: "YouTube", href: siteConfig.social.youtube },
                { icon: Twitter, label: "Twitter", href: siteConfig.social.twitter },
                { icon: WhatsAppIcon, label: "WhatsApp", href: siteConfig.social.whatsapp },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold-500 hover:text-charcoal-dark"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-gold-400">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 transition-colors hover:text-gold-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-gold-400">Academics</h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.academics.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 transition-colors hover:text-gold-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-gold-400">Resources</h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 transition-colors hover:text-gold-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-6 rounded-2xl bg-white/5 p-6 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 text-gold-400" />
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400">Phone</p>
              <p className="text-sm text-white">{siteConfig.phone}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 text-gold-400" />
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400">Email</p>
              <p className="text-sm text-white">{siteConfig.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-gold-400" />
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400">Location</p>
              <p className="text-sm text-white">{siteConfig.address}, {siteConfig.location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-gray-500 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} ({siteConfig.tagline}), {siteConfig.location}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gold-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
