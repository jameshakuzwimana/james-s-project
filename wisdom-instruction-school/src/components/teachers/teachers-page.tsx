"use client";

import {
  Users,
  Award,
  Heart,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Star,
} from "lucide-react";
import FadeIn from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

export default function TeachersPage() {
  return (
    <div>
      <TeachersHero />
      <TeacherGrid />
      <WhyOurTeachers />
      <JoinUsSection />
    </div>
  );
}

function TeachersHero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <FadeIn direction="up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-semibold text-gold-300 ring-1 ring-gold-500/30">
            <Users className="h-4 w-4" />
            Our Teachers
          </span>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            The Heart of Our School
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Our dedicated and passionate teachers are the heart of Wisdom Instruction School,
             committed to every child&apos;s success and well-being.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function TeacherGrid() {
  const teachers = [
    { name: "Nursery Lead Teacher", role: "Early Childhood Education", bio: "Passionate about nurturing our youngest learners through play and discovery.", image: "/images/school/teacher-1.svg" },
    { name: "Primary Teacher", role: "Primary 1-3", bio: "Dedicated to building strong foundations in literacy and numeracy.", image: "/images/school/teacher-2.svg" },
    { name: "Primary Teacher", role: "Primary 4-6", bio: "Committed to developing critical thinking and independent learning.", image: "/images/school/teacher-3.svg" },
    { name: "Subject Specialist", role: "Science & Technology", bio: "Inspiring curiosity and innovation through hands-on learning.", image: "/images/school/teacher-4.svg" },
    { name: "Arts Facilitator", role: "Creative Arts & Music", bio: "Encouraging creativity, confidence, and self-expression.", image: "/images/school/teacher-2.svg" },
    { name: "Support Teacher", role: "Learning Support", bio: "Providing individualized support so every child can thrive.", image: "/images/school/teacher-3.svg" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Meet Our Team"
            title="Caring, Qualified, Dedicated"
            subtitle="Note: Teacher names and photos shown here are placeholders pending information from the school."
          />
        </FadeIn>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher, index) => (
            <FadeIn key={teacher.role + index} delay={index * 0.05}>
              <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={teacher.image} alt={teacher.role} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-charcoal-dark">{teacher.name}</h3>
                  <p className="text-sm font-medium text-primary">{teacher.role}</p>
                  <p className="mt-2 text-sm text-gray-600">{teacher.bio}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyOurTeachers() {
  const qualities = [
    { icon: Heart, title: "Genuinely Caring", description: "Teachers know every student and build warm, trusting relationships." },
    { icon: Award, title: "Qualified & Trained", description: "Committed to professional growth and best teaching practices." },
    { icon: BookOpen, title: "Skilled Educators", description: "Experienced in modern, engaging, child-centered teaching." },
    { icon: GraduationCap, title: "Lifelong Learners", description: "Passionate about learning themselves — and inspiring it in others." },
  ];
  return (
    <section className="bg-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Why Our Teachers Excel"
            title="What Makes Our Educators Special"
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {qualities.map((quality, index) => (
            <FadeIn key={quality.title} delay={index * 0.05}>
              <div className="flex h-full flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-2xl bg-primary p-4">
                  <quality.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 font-semibold text-charcoal-dark">{quality.title}</h3>
                <p className="text-sm text-gray-600">{quality.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function JoinUsSection() {
  const perks = [
    "A supportive, collaborative team culture",
    "Purposeful work that changes lives",
    "Professional development opportunities",
    "A warm, welcoming school community",
  ];
  return (
    <section className="gradient-primary py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-sm md:p-12">
            <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
              Interested in Teaching With Us?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/80">
               We&apos;re always looking for passionate educators who share our commitment to excellence
              and care for every child.
            </p>
            <div className="mx-auto mb-8 grid max-w-lg gap-3 text-left">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-3 text-sm text-white/90">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-400" />
                  {perk}
                </div>
              ))}
            </div>
            <a href="mailto:hr@wisdominstruction.edu.rw" className="inline-flex items-center gap-2 rounded-full gradient-gold px-8 py-4 font-semibold text-charcoal-dark transition-transform hover:scale-105">
              Contact Us to Apply
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
