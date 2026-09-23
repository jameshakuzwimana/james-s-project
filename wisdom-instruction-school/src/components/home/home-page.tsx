"use client";

import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  Users,
  Shield,
  Heart,
  Lightbulb,
  Award,
  Clock,
  Calendar,
  MapPin,
  ChevronRight,
  Star,
  Sparkles,
  Play,
  Mail,
  Phone,
  CheckCircle2,
  Globe,
  Trophy,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";
import FadeIn from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { schoolValues } from "@/config/site";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <WhyChooseUs />
      <AccreditationSection />
      <NurserySection />
      <PrimarySection />
      <ActivitiesSection />
      <FacilitiesSection />
      <TeachersSection />
      <EventsSection />
      <NewsSection />
      <GalleryTeaser />
      <TourSection />
      <TestimonialsSection />
      <AdmissionsCTA />
      <ContactStrip />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <img
          src="/images/photos/school-campus.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/80 to-primary-dark/40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="max-w-3xl">
          <FadeIn direction="up">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-semibold text-gold-300 ring-1 ring-gold-500/30">
              <Sparkles className="h-4 w-4" />
              Welcome to {`Wisdom Instruction School`} Rwanda
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Nurturing Young Minds,
              <br />
              <span className="text-gold-400">Building Bright Futures</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Wisdom Instruction School is a premier nursery and primary school in Rwanda dedicated
              to academic excellence, character development, and holistic growth in a safe,
              nurturing environment.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 rounded-full gradient-gold px-8 py-4 text-base font-semibold text-charcoal-dark shadow-gold transition-transform hover:scale-105"
              >
                <GraduationCap className="h-5 w-5" />
                Apply Now
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Our School
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <div className="mt-12 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "Quality", label: "Education" },
                { value: "Safe", label: "Environment" },
                { value: "Nursery", label: "& Primary" },
                { value: "Caring", label: "Teachers" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-white/10 p-3 text-center backdrop-blur-sm">
                  <p className="text-sm font-semibold text-gold-300">{item.value}</p>
                  <p className="text-xs text-white/70">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function WelcomeSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/images/school/students.svg"
                  alt="Students learning at Wisdom Instruction School"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl gradient-primary p-5 text-white shadow-xl md:block">
                <p className="text-3xl font-bold">Excellence</p>
                <p className="text-sm opacity-90">In Every Child</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <SectionHeading
              eyebrow="Welcome"
              title="Welcome to Wisdom Instruction School"
              align="left"
            />
            <div className="-mt-6 space-y-4 text-gray-600">
              <p>
                At Wisdom Instruction School, we are committed to providing a world-class education
                that nurtures the whole child — intellectually, socially, emotionally, and
                spiritually. Our dedicated teachers create engaging learning experiences that
                inspire curiosity, creativity, and a lifelong love of learning.
              </p>
              <p>
                From our warm and stimulating nursery program to our comprehensive primary
                curriculum, we prepare every student for success in school and in life.
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "Experienced and caring teachers",
                "Modern, well-equipped classrooms",
                "Safe and nurturing learning environment",
                "Comprehensive curriculum in English",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all"
            >
              Learn More About Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="bg-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A Foundation for Lifelong Success"
            subtitle="Every aspect of our school is designed to help your child thrive academically, socially, and personally."
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {schoolValues.map((value, index) => (
            <FadeIn key={value.title} delay={index * 0.08}>
              <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-4 transition-colors group-hover:bg-primary">
                  <ValueIcon name={value.icon} className="h-7 w-7 transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-charcoal-dark">{value.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{value.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function AccreditationSection() {
  const stats = [
    { icon: GraduationCap, value: "100+", label: "Students" },
    { icon: Users, value: "20+", label: "Dedicated Teachers" },
    { icon: BookOpen, value: "2", label: "Programs (Nursery & Primary)" },
    { icon: Award, value: "10+", label: "Years of Excellence" },
  ];
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <FadeIn key={label} delay={index * 0.05}>
              <div className="flex items-center gap-4 rounded-2xl bg-cream p-6">
                <div className="shrink-0 rounded-xl bg-primary p-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-charcoal-dark">{value}</p>
                  <p className="text-sm text-gray-500">{label}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function NurserySection() {
  return (
    <section className="py-20 md:py-28" id="nursery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="up">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/school/nursery.svg"
                alt="Nursery students at Wisdom Instruction School"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <SectionHeading
              eyebrow="Nursery Education"
              title="Where Little Learners Blossom"
              align="left"
            />
            <div className="-mt-6 space-y-4 text-gray-600">
              <p>
                Our nursery program provides a warm, stimulating environment where our youngest
                learners develop essential early skills through play-based learning, exploration,
                and guided activities.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Play-based and child-centered learning",
                  "Early literacy and numeracy foundations",
                  "Creative arts, music, and movement",
                  "Social and emotional development",
                  "Safe, caring, and responsive caregivers",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/academics#nursery"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Explore Nursery Program
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function PrimarySection() {
  return (
    <section className="gradient-primary py-20 md:py-28" id="primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="up" className="order-2 lg:order-1 text-white">
            <SectionHeading
              eyebrow="Primary Education"
              title="Building Strong Academic Foundations"
              align="left"
            />
            <div className="-mt-6 space-y-4 text-white/80">
              <p>
                Our primary program provides a rigorous, engaging curriculum that builds strong
                academic foundations while nurturing critical thinking, creativity, and character.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Comprehensive core subjects: English, Math, Science, Social Studies",
                  "STEM education and digital literacy",
                  "Arts, music, and physical education",
                  "Character development and leadership skills",
                  "Individualized attention and support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/90">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/academics#primary"
              className="mt-8 inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 text-sm font-semibold text-charcoal-dark transition-transform hover:scale-105"
            >
              Explore Primary Program
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
          <FadeIn direction="up" className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/school/classroom.svg"
                alt="Primary students in a classroom at Wisdom Instruction School"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ActivitiesSection() {
  const activities = [
    { icon: BookOpen, title: "Reading Club", description: "Fostering a love for books and reading" },
    { icon: Lightbulb, title: "Science & Innovation", description: "Hands-on experiments and discovery" },
    { icon: Heart, title: "Arts & Crafts", description: "Creative expression through various mediums" },
    { icon: Globe, title: "Culture Day", description: "Celebrating our diverse heritage" },
    { icon: Trophy, title: "Sports Day", description: "Physical fitness and team spirit" },
    { icon: Users, title: "Music & Dance", description: "Rhythm, movement, and joyful expression" },
  ];
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Student Activities"
            title="Learning Beyond the Classroom"
            subtitle="We offer a rich variety of activities that help students discover their talents, build confidence, and develop important life skills."
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map(({ icon: Icon, title, description }, index) => (
            <FadeIn key={title} delay={index * 0.05}>
              <div className="group flex items-start gap-5 rounded-2xl border border-gray-100 bg-cream p-6 transition-all hover:shadow-lg">
                <div className="shrink-0 rounded-xl bg-white p-3 shadow-sm transition-colors group-hover:bg-primary">
                  <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-dark">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilitiesSection() {
  const facilities = [
    { title: "Modern Classrooms", image: "/images/school/classroom.svg", description: "Bright, spacious rooms designed for engaged learning" },
    { title: "Computer Lab", image: "/images/school/computer-lab.svg", description: "Digital literacy and technology skills" },
    { title: "Playground", image: "/images/school/playground.svg", description: "Safe outdoor space for physical activity and play" },
    { title: "Library", image: "/images/school/library.svg", description: "A rich collection of books and learning resources" },
  ];
  return (
    <section className="bg-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="School Facilities"
            title="A Beautiful Campus for Learning"
            subtitle="Our campus is designed to provide a safe, inspiring, and comfortable environment for every student."
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility, index) => (
            <FadeIn key={facility.title} delay={index * 0.05}>
              <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={facility.image}
                    alt={`${facility.title} at Wisdom Instruction School`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-charcoal-dark">{facility.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{facility.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeachersSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Our Teachers"
            title="Meet Our Dedicated Educators"
            subtitle="Our passionate teachers are the heart of our school, committed to every child's success."
          />
        </FadeIn>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Dedicated", role: "Early Childhood Educators", image: "/images/school/teacher-1.svg" },
            { name: "Caring", role: "Primary School Teachers", image: "/images/school/teacher-2.svg" },
            { name: "Skilled", role: "Subject Specialists", image: "/images/school/teacher-3.svg" },
            { name: "Committed", role: "Support Staff", image: "/images/school/teacher-4.svg" },
          ].map((teacher, index) => (
            <FadeIn key={teacher.name} delay={index * 0.05}>
              <div className="group text-center">
                <div className="relative mx-auto mb-4 h-40 w-40 overflow-hidden rounded-2xl">
                  <img
                    src={teacher.image}
                    alt={`${teacher.name} ${teacher.role} at Wisdom Instruction School`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-charcoal-dark">{teacher.name}</h3>
                <p className="text-sm text-primary">{teacher.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10 text-center">
          <Link
            href="/teachers"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            View All Teachers
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

function EventsSection() {
  const events = [
    { title: "Academic Year Opening", date: "September 15, 2026", time: "08:00 AM", location: "School Campus", category: "School Event" },
    { title: "Parent-Teacher Meeting", date: "September 30, 2026", time: "10:00 AM", location: "School Hall", category: "Meeting" },
    { title: "Sports Day", date: "October 20, 2026", time: "09:00 AM", location: "Sports Field", category: "Sports" },
  ];
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Upcoming Events"
            title="Mark Your Calendars"
            subtitle="Don't miss the exciting events happening at Wisdom Instruction School."
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event, index) => (
            <FadeIn key={event.title} delay={index * 0.05}>
              <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl">
                <span className="mb-3 inline-block w-fit rounded-full bg-gold-100 px-3 py-1 text-xs font-medium text-gold-700">
                  {event.category}
                </span>
                <h3 className="mb-4 font-serif text-lg font-semibold text-charcoal-dark">{event.title}</h3>
                <div className="mt-auto space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> {event.date}</p>
                  <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {event.time}</p>
                  <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {event.location}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10 text-center">
          <Link href="/events" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View All Events
            <ArrowRight className="h-5 w-5" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

function NewsSection() {
  const articles = [
    {
      title: "Admissions Now Open for the New Academic Year",
      excerpt: "We are now accepting applications for the upcoming academic year at Wisdom Instruction School.",
      date: "September 8, 2026",
      category: "Admissions",
      image: "/images/school/students.svg",
    },
    {
      title: "Celebrating Cultural Diversity in Our School Community",
      excerpt: "Our students showcased the rich cultural heritage of Rwanda and beyond during Cultural Day.",
      date: "September 1, 2026",
      category: "School Life",
      image: "/images/school/activities.svg",
    },
    {
      title: "Our Students Excel in Academic Competitions",
      excerpt: "We are proud of our students' achievements in local academic and artistic competitions.",
      date: "August 25, 2026",
      category: "Achievements",
      image: "/images/school/classroom.svg",
    },
  ];
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Latest News"
            title="What's Happening at Our School"
            subtitle="Stay up to date with the latest news and updates from Wisdom Instruction School."
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article, index) => (
            <FadeIn key={article.title} delay={index * 0.05}>
              <Link href="/news" className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary">
                    {article.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-2 flex items-center gap-1.5 text-xs text-gray-500">
                    <Calendar className="h-3.5 w-3.5" />
                    {article.date}
                  </p>
                  <h3 className="mb-2 font-serif text-lg font-semibold text-charcoal-dark group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-2">{article.excerpt}</p>
                  <span className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read More
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryTeaser() {
  const images = [
    { src: "/images/photos/assembly.jpg", alt: "Students at Wisdom Instruction School" },
    { src: "/images/photos/school-campus.jpg", alt: "School campus at Wisdom Instruction School" },
    { src: "/images/photos/school-building.jpg", alt: "School building at Wisdom Instruction School" },
    { src: "/images/photos/road-to-school.jpg", alt: "Road leading to Wisdom Instruction School" },
    { src: "/images/photos/tour-poster.jpg", alt: "School tour at Wisdom Instruction School" },
    { src: "/images/school/nursery.svg", alt: "Nursery students" },
  ];
  return (
    <section className="bg-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="School Gallery"
            title="Moments From Our School Life"
            subtitle="A glimpse into the vibrant, joyful life at Wisdom Instruction School."
          />
        </FadeIn>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((image, index) => (
            <FadeIn key={image.src} delay={index * 0.05}>
              <Link href="/gallery" className="group block overflow-hidden rounded-2xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </Link>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10 text-center">
          <Link href="/gallery" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105">
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

function TourSection() {
  return (
    <section className="py-20 md:py-28" id="tour">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="School Tour"
            title="Take a Virtual Tour of Our School"
            subtitle="Explore our campus, classrooms, and facilities in this guided school tour video."
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/images/photos/tour-poster.jpg"
              alt="Wisdom Instruction School campus tour preview"
              className="aspect-video w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Link
                href="/videos"
                className="group flex h-24 w-24 items-center justify-center rounded-full bg-white/90 shadow-2xl transition-transform hover:scale-110"
                aria-label="Watch school tour video"
              >
                <Play className="ml-1 h-10 w-10 text-primary" />
              </Link>
            </div>
            <div className="absolute bottom-4 left-4 rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm">
              Watch the full school tour video
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Parent of a Nursery Student",
      role: "Wisdom Instruction School Parent",
      content: "The teachers genuinely care about each child. My son has grown so much since joining, both academically and personally. We feel so fortunate to be part of this wonderful school community.",
    },
    {
      name: "Parent of a Primary Student",
      role: "Wisdom Instruction School Parent",
      content: "Wisdom Instruction School has exceeded our expectations. The curriculum is challenging, the environment is nurturing, and the open communication with parents is outstanding.",
    },
    {
      name: "Community Member",
      role: "Local Partner",
      content: "The school's commitment to academic excellence and character building is truly commendable. They are making a real difference in the lives of our children and community.",
    },
  ];
  return (
    <section className="gradient-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Community Says"
            subtitle="Hear from the parents and community members who know Wisdom Instruction School best."
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.1}>
              <div className="flex h-full flex-col rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-white/90">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-400 font-bold text-charcoal-dark">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs text-gold-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdmissionsCTA() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="gradient-mesh relative overflow-hidden rounded-3xl gradient-primary px-8 py-16 text-center md:px-16">
            <div className="relative">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-semibold text-gold-300">
                <ClipboardCheck className="h-4 w-4" />
                Admissions Open
              </span>
              <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                 Begin Your Child&apos;s Journey With Us
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/80">
                Applications for the upcoming academic year are now open. Give your child the gift
                of a quality education in a caring, nurturing environment.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 rounded-full gradient-gold px-8 py-4 text-base font-semibold text-charcoal-dark transition-transform hover:scale-105"
                >
                  <GraduationCap className="h-5 w-5" />
                  Apply Now
                </Link>
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Admission Process
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ContactStrip() {
  return (
    <section className="bg-cream-dark py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Phone, title: "Call Us", value: "+250 788 000 000", href: "tel:+250788000000" },
            { icon: Mail, title: "Email Us", value: "info@wisdominstruction.edu.rw", href: "mailto:info@wisdominstruction.edu.rw" },
            { icon: MapPin, title: "Visit Us", value: "Rubavu, Rwanda", href: "/contact" },
          ].map(({ icon: Icon, title, value, href }, index) => (
            <FadeIn key={title} delay={index * 0.05}>
              <a
                href={href}
                className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="shrink-0 rounded-xl bg-primary p-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">{title}</p>
                  <p className="font-semibold text-charcoal-dark">{value}</p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueIcon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    Award,
    Heart,
    Users,
    Lightbulb,
    Shield,
    Sprout: TrendingUp,
  };
  const Icon = icons[name] || Award;
  return <Icon className={className} />;
}
