"use client";

import {
  Users,
  Shield,
  Heart,
  Sparkles,
  Music,
  Trophy,
  Palette,
  Globe,
  Camera,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

export default function SchoolLifePage() {
  return (
    <div>
      <SchoolLifeHero />
      <DailyLife />
      <ClubsActivities />
      <SportsArts />
      <CultureCommunity />
      <GalleryStrip />
    </div>
  );
}

function SchoolLifeHero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <FadeIn direction="up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-semibold text-gold-300 ring-1 ring-gold-500/30">
            <Sparkles className="h-4 w-4" />
            School Life
          </span>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Life at Wisdom Instruction School
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            School is more than lessons — it's a vibrant community of discovery, friendship,
            creativity, and growth.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function DailyLife() {
  const dayParts = [
    { title: "Morning Assembly", description: "A joyful start to the day with songs, prayers, announcements, and energizing routines." },
    { title: "Learning Sessions", description: "Engaging, interactive lessons across all subjects." },
    { title: "Break Time", description: "Time to play, snack, and socialize with friends." },
    { title: "Lunch", description: "A healthy, shared meal that builds community." },
    { title: "Afternoon Activities", description: "Clubs, sports, arts, and creative projects." },
    { title: "Dismissal", description: "A safe, organized end to a fulfilling school day." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="A Day at School"
            title="A Day in the Life of Our Students"
            subtitle="Each day is thoughtfully structured to balance learning, play, rest, and social connection."
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {dayParts.map((part, index) => (
            <FadeIn key={part.title} delay={index * 0.05}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary font-bold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-dark">{part.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{part.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClubsActivities() {
  const clubs = [
    { icon: Heart, name: "Reading Club", description: "Fostering a lifelong love of books" },
    { icon: Palette, name: "Art & Craft Club", description: "Creative expression through art" },
    { icon: Music, name: "Music & Dance", description: "Song, rhythm, and joyful movement" },
    { icon: Globe, name: "Science Club", description: "Hands-on experiments and discovery" },
    { icon: Trophy, name: "Sports Club", description: "Athletics, teamwork, and sportsmanship" },
    { icon: Camera, name: "Culture Club", description: "Celebrating our heritage and diversity" },
  ];
  return (
    <section className="bg-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Clubs & Activities"
            title="Explore, Create, Belong"
            subtitle="A range of clubs and activities help students discover talents and build confidence."
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clubs.map((club, index) => (
            <FadeIn key={club.name} delay={index * 0.05}>
              <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
                <div className="shrink-0 rounded-xl bg-primary p-3">
                  <club.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-dark">{club.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{club.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function SportsArts() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img src="/images/school/playground.svg" alt="Students playing at Wisdom Instruction School" className="aspect-[4/3] w-full object-cover" />
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <SectionHeading eyebrow="Sports & Arts" title="Sports, Arts & Creativity" align="left" />
            <div className="-mt-6 space-y-4 text-gray-600">
              <p>
                We believe a healthy balance of physical activity and creative expression is
                essential for every child. Our students enjoy regular physical education, sports
                days, and opportunities to explore music, art, and drama.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Regular physical education classes",
                  "Sports days and friendly competitions",
                  "Music, singing, and dance",
                  "Art, craft, and creative projects",
                  "Annual cultural performances",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function CultureCommunity() {
  return (
    <section className="gradient-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Culture & Community" title="We Celebrate Who We Are" subtitle="Cultural days and community events bring our school family together and honor our Rwandan heritage." />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Users, title: "Cultural Day", description: "Students share the rich traditions of Rwanda and beyond." },
            { icon: Heart, title: "Community Projects", description: "Working together to help others and build character." },
            { icon: Globe, title: "School Celebrations", description: "Special days that bring joy, pride, and togetherness." },
          ].map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <div className="h-full rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
                <div className="mx-auto mb-4 inline-flex rounded-2xl bg-gold-500 p-4">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-white/80">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryStrip() {
  const images = [
    { src: "/images/school/students.svg", alt: "Students at Wisdom Instruction School" },
    { src: "/images/school/activities.svg", alt: "School activities" },
    { src: "/images/school/classroom.svg", alt: "Classroom learning" },
    { src: "/images/school/playground.svg", alt: "Outdoor play" },
  ];
  return (
    <section className="bg-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Gallery" title="Moments From School Life" />
        </FadeIn>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((image, index) => (
            <FadeIn key={image.src} delay={index * 0.05}>
              <Link href="/gallery" className="group block overflow-hidden rounded-2xl">
                <img src={image.src} alt={image.alt} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110" />
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
