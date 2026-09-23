"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  Globe,
  Shield,
  Sparkles,
  Users,
  Heart,
  Lightbulb,
  Award,
  Menu,
  Phone,
  Mail,
  MapPin,
  Play,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SchoolLogo from "@/components/shared/school-logo";
import { siteConfig, schoolValues } from "@/config/site";

interface LandingPageProps {
  onEnter?: () => void;
}

export default function LandingPage({ onEnter }: LandingPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen scroll-smooth bg-cream text-charcoal">
      <LandingNav onEnter={onEnter} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <LandingHero onEnter={onEnter} />
      <LandingAbout />
      <LandingCommunity />
      <LandingTour />
      <LandingFooter onEnter={onEnter} />
    </div>
  );
}

function LandingNav({
  onEnter,
  isMenuOpen,
  setIsMenuOpen,
}: {
  onEnter?: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-50 gradient-primary shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <SchoolLogo variant="light" />
        <nav className="hidden items-center gap-2 text-sm font-medium text-white lg:flex" aria-label="Main navigation">
          {[
            { name: "Home", href: "#top" },
            { name: "About", href: "#about" },
            { name: "Academics", href: "#academics" },
            { name: "Admissions", href: "/admissions" },
            { name: "Gallery", href: "/gallery" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-full px-4 py-2 transition-colors hover:bg-white/10 hover:text-gold-300"
            >
              {item.name}
            </a>
          ))}
          <Link
            href="/home"
            onClick={(e) => {
              e.preventDefault();
              onEnter?.();
            }}
            className="ml-2 inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-2.5 font-semibold text-charcoal-dark shadow-gold transition-transform hover:scale-105"
          >
            Continue to Website
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-primary-dark lg:hidden"
          >
            <nav className="flex flex-col space-y-1 px-4 py-4" aria-label="Mobile navigation">
              {[
                { name: "Home", href: "#top" },
                { name: "About", href: "#about" },
                { name: "Academics", href: "#academics" },
                { name: "Admissions", href: "/admissions" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-white transition-colors hover:bg-white/10"
                >
                  {item.name}
                </a>
              ))}
              <Link
                href="/home"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  onEnter?.();
                }}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-gold px-6 py-3 font-semibold text-charcoal-dark"
              >
                Continue to Website
                <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function LandingHero({ onEnter }: { onEnter?: () => void }) {
  return (
    <section className="relative overflow-hidden" id="about">
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-100 px-4 py-1.5 text-sm font-semibold text-gold-700">
            <Sparkles className="h-4 w-4" />
            Welcome to {siteConfig.name}
          </span>
          <h1 className="font-serif text-4xl font-bold leading-tight text-charcoal-dark md:text-5xl lg:text-6xl text-balance">
            Nurturing Young Minds, <span className="text-primary">Building Bright Futures</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-charcoal-light">
            At Wisdom Instruction School, we provide a caring, nurturing environment in Rwanda where
            every child is encouraged to learn, grow, and discover their unique potential — from
            nursery to primary education.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onEnter}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-school transition-all hover:bg-primary-dark hover:scale-105"
            >
              Continue to Website
              <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href="#tour"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-4 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-white"
            >
              <Play className="h-5 w-5" />
              Watch School Tour
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/images/photos/school-campus.jpg"
              alt="Students learning at Wisdom Instruction School"
              className="aspect-[4/3] w-full object-cover"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" aria-hidden="true" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary p-3">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-charcoal-dark">Nursery</p>
                <p className="text-sm text-gray-500">& Primary Education</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 -top-4 hidden animate-float rounded-2xl bg-gold-500 p-4 shadow-xl sm:block">
            <div className="flex items-center gap-2">
              <Award className="h-8 w-8 text-white" />
              <div>
                <p className="text-xl font-bold text-white">Excellence</p>
                <p className="text-xs text-gold-50">In Education</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LandingAbout() {
  return (
    <section className="py-16 lg:py-24" id="academics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-gold-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-700">
            Our Values
          </span>
          <h2 className="font-serif text-3xl font-bold text-charcoal-dark md:text-4xl">
            What Makes Us Special
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {schoolValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-transform hover:scale-[1.02]"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                <ValueIcon name={value.icon} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-charcoal-dark">{value.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LandingCommunity() {
  return (
    <section className="gradient-primary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-white"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-gold-300">
              <Users className="h-4 w-4" />
              Our Community
            </span>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">
              A School, A Family, A Community
            </h2>
            <p className="text-lg leading-relaxed text-white/80">
              We believe that education goes beyond the classroom. Our school is a vibrant
              community where parents, teachers, and students work together to create a supportive
              environment where every child feels valued and inspired to be their best.
            </p>
            <div className="flex flex-wrap gap-4">
              <FeatureCard icon={BookOpen} title="Academic Excellence" />
              <FeatureCard icon={Heart} title="Character Building" />
              <FeatureCard icon={Lightbulb} title="Creative Learning" />
              <FeatureCard icon={Shield} title="Safe Environment" />
            </div>
            <Link
              href="/school-life"
              className="inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 font-semibold text-charcoal-dark transition-transform hover:scale-105"
            >
              Discover School Life
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-4"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/images/school/classroom.svg"
                alt="Classroom at Wisdom Instruction School"
                className="aspect-[16/10] w-full object-cover"
                width={600}
                height={375}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/images/school/students.svg"
                  alt="Students at Wisdom Instruction School"
                  className="aspect-square w-full object-cover"
                  width={280}
                  height={280}
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/images/school/activities.svg"
                  alt="School activities at Wisdom Instruction School"
                  className="aspect-square w-full object-cover"
                  width={280}
                  height={280}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LandingTour() {
  return (
    <section className="py-16 lg:py-24" id="tour">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/photos/tour-poster.jpg"
                alt="Wisdom Instruction School building"
                className="aspect-[4/3] w-full object-cover"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30" aria-hidden="true">
                <Link
                  href="/videos"
                  className="group flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform hover:scale-110"
                  aria-label="Watch school tour videos"
                >
                  <Play className="ml-1 h-8 w-8 text-primary" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-100 px-4 py-1.5 text-sm font-semibold text-gold-700">
              <Play className="h-4 w-4" />
              Take a Tour
            </span>
            <h2 className="font-serif text-3xl font-bold text-charcoal-dark md:text-4xl">
              Step Inside Our School
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Explore our vibrant campus, modern classrooms, and the warm atmosphere that makes
              Wisdom Instruction School a special place for your child to learn and grow.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-dark">Modern Facilities</h3>
                  <p className="text-sm text-gray-600">Well-equipped classrooms designed for engaging learning</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gold-100 p-3">
                  <Users className="h-5 w-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-dark">Caring Teachers</h3>
                  <p className="text-sm text-gray-600">Dedicated educators who know every student by name</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-dark">Global Curriculum</h3>
                  <p className="text-sm text-gray-600">Prepares students for success in a connected world</p>
                </div>
              </div>
            </div>
            <Link
              href="/about"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-school transition-all hover:bg-primary-dark hover:scale-105"
            >
              Explore Our School
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LandingFooter({ onEnter }: { onEnter?: () => void }) {
  return (
    <footer className="bg-charcoal-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <SchoolLogo variant="light" size="sm" />
            <p className="mt-4 max-w-md text-sm text-gray-400">
              Nurturing young minds and building bright futures through quality education in Rwanda.
            </p>
            <div className="mt-6 space-y-2">
              <p className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-gold-400" /> {siteConfig.phone}
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="h-4 w-4 text-gold-400" /> {siteConfig.email}
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-gold-400" /> {siteConfig.address}
              </p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-gold-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "About Us", href: "/about" },
                { name: "Academics", href: "/academics" },
                { name: "Admissions", href: "/admissions" },
                { name: "School Life", href: "/school-life" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-300 transition-colors hover:text-gold-400">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-gold-400">Get Started</h3>
            <p className="mb-4 text-sm text-gray-400">
              Explore everything Wisdom Instruction School has to offer.
            </p>
            <button
              onClick={onEnter}
              className="inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 font-semibold text-charcoal-dark"
            >
              Enter Website
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} (Nursery and Primary School), {siteConfig.location}. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Wisdom Instruction School is an independent educational institution. All content on this
            site is original and protected by copyright.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FeatureCard({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
      <Icon className="h-5 w-5 text-gold-400" />
      <span className="text-sm font-medium text-white">{title}</span>
    </div>
  );
}

function ValueIcon({ name }: { name: string }) {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    Award,
    Heart,
    Sprout: Lightbulb,
    Users,
    Lightbulb,
    Shield,
  };
  const Icon = icons[name] || Award;
  return <Icon className="h-6 w-6 text-primary" />;
}
