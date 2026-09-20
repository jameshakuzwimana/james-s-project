"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Clock,
  GraduationCap,
  User,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SchoolLogo from "@/components/shared/school-logo";
import { siteConfig, navigation } from "@/config/site";
import { cn } from "@/lib/utils";

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setOpenDropdown(null);
  }

  const handleMouseEnter = (name: string) => {
    if (window.innerWidth >= 1024) {
      clearTimeout(timeoutRef.current!);
      setOpenDropdown(name);
    }
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current!);
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        isScrolled ? "bg-primary-dark shadow-lg" : "bg-primary"
      )}
    >
      {/* Top bar */}
      <div className="hidden bg-primary-dark text-white md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 hover:text-gold-300">
              <Phone className="h-3.5 w-3.5" /> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 hover:text-gold-300">
              <Mail className="h-3.5 w-3.5" /> {siteConfig.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> Mon - Fri: 8:00 AM - 5:00 PM
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/home" aria-label="Go to home page">
          <SchoolLogo variant="light" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10",
                  pathname === item.href && "bg-white/10"
                )}
              >
                {item.name}
                {item.children && <ChevronDown className="h-4 w-4" />}
              </Link>
              {item.children && openDropdown === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-1 w-52 overflow-hidden rounded-2xl bg-white shadow-xl"
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-3 text-sm text-charcoal transition-colors hover:bg-primary/5 hover:text-primary"
                    >
                      {child.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden items-center gap-1.5 rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 md:flex lg:flex"
          >
            <User className="h-4 w-4" />
            Login
          </Link>
          <Link
            href="/apply"
            className="hidden items-center gap-1.5 rounded-full gradient-gold px-5 py-2 text-sm font-semibold text-charcoal-dark shadow-gold transition-transform hover:scale-105 sm:flex"
          >
            <GraduationCap className="h-4 w-4" />
            Apply Now
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-gray-100 p-4">
                <SchoolLogo size="sm" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-4" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <div key={item.name} className="mb-1">
                    {item.children ? (
                      <>
                        <div className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-charcoal-dark">
                          <span>{item.name}</span>
                          <ChevronDown className="h-4 w-4 text-gray-400" />
                        </div>
                        <div className="ml-4 border-l border-gray-100 pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-primary/5 hover:text-primary"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block rounded-lg px-4 py-3 text-sm font-medium text-charcoal-dark transition-colors hover:bg-primary/5 hover:text-primary",
                          pathname === item.href && "bg-primary/5 text-primary"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              <div className="border-t border-gray-100 p-4">
                <Link
                  href="/apply"
                  onClick={() => setIsOpen(false)}
                  className="mb-2 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white"
                >
                  <GraduationCap className="h-4 w-4" />
                  Apply Now
                </Link>
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary"
                >
                  <User className="h-4 w-4" />
                  Login Portal
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
