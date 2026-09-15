"use client";

import {
  Target,
  Eye,
  Heart,
  Users,
  Shield,
  Lightbulb,
  Award,
  Award as Trophy,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Quote,
} from "lucide-react";
import FadeIn from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <HistorySection />
      <MissionVision />
      <CoreValues />
      <LeadershipSection />
      <PrincipalMessage />
      <EnvironmentSection />
      <FacilitiesSection />
      <CommunitySection />
      <AchievementsSection />
    </div>
  );
}

function AboutHero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <FadeIn direction="up">
          <span className="mb-4 inline-block rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-semibold text-gold-300 ring-1 ring-gold-500/30">
            About Our School
          </span>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            About Wisdom Instruction School
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Discover our story, mission, and the values that shape every child who walks through
            our doors.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function HistorySection() {
  return (
    <section className="py-20 md:py-28" id="history">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/school/school-building.svg"
                alt="Wisdom Instruction School building"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <SectionHeading eyebrow="Our Story" title="A Journey of Dedication and Growth" align="left" />
            <div className="-mt-6 space-y-4 text-gray-600">
              <p>
                Wisdom Instruction School was founded with a clear vision: to provide an excellent,
                holistic education that nurtures the whole child within the community of Rwanda.
                From our humble beginnings, we have grown into a vibrant learning community serving
                nursery and primary students.
              </p>
              <p>
                The name "Wisdom Instruction" reflects our belief that true education goes beyond
                academic knowledge — it fosters wisdom, character, critical thinking, and a deep
                love for learning that lasts a lifetime.
              </p>
              <p>
                Today, our school is home to a diverse and inspiring community of learners, guided
                by committed educators who treat every child as an individual with unique gifts and
                potential.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="gradient-primary py-20 md:py-28" id="mission">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <FadeIn direction="up">
            <div className="h-full rounded-3xl bg-white/10 p-8 backdrop-blur-sm md:p-10">
              <div className="mb-4 inline-flex rounded-2xl bg-gold-500 p-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-4 font-serif text-2xl font-bold text-white md:text-3xl">Our Mission</h2>
              <p className="text-lg leading-relaxed text-white/85">
                To provide a caring, inclusive, and academically excellent education that empowers
                every child to reach their full potential — intellectually, socially, emotionally,
                and morally — preparing them to become responsible, confident, and compassionate
                citizens of Rwanda and the world.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <div className="h-full rounded-3xl bg-white/10 p-8 backdrop-blur-sm md:p-10">
              <div className="mb-4 inline-flex rounded-2xl bg-gold-500 p-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-4 font-serif text-2xl font-bold text-white md:text-3xl">Our Vision</h2>
              <p className="text-lg leading-relaxed text-white/85">
                To be a leading nursery and primary school in Rwanda recognized for academic
                excellence, character development, and innovative teaching — a place where every
                child discovers their passion and builds a strong foundation for lifelong learning
                and success.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function CoreValues() {
  const values = [
    { title: "Excellence", icon: Trophy, description: "We pursue the highest standards in academics and character." },
    { title: "Integrity", icon: Shield, description: "We act with honesty, responsibility, and respect." },
    { title: "Compassion", icon: Heart, description: "We care deeply for each other and our community." },
    { title: "Growth", icon: Lightbulb, description: "We embrace continuous learning and personal development." },
    { title: "Community", icon: Users, description: "We build strong, supportive relationships." },
    { title: "Creativity", icon: Sparkles, description: "We encourage curiosity, innovation, and imagination." },
  ];
  return (
    <section className="bg-cream-dark py-20 md:py-28" id="values">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Core Values"
            title="The Values That Guide Us"
            subtitle="These values shape our culture, our decisions, and the way we care for every student."
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 0.05}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-xl">
                <div className="mx-auto mb-4 inline-flex rounded-2xl bg-primary/10 p-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-charcoal-dark">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  const leaders = [
    { name: "Head of School", title: "School Leadership", image: "/images/school/teacher-1.svg" },
    { name: "Academic Coordinator", title: "Academics Department", image: "/images/school/teacher-2.svg" },
    { name: "Early Years Lead", title: "Nursery Program", image: "/images/school/teacher-3.svg" },
    { name: "Primary Lead", title: "Primary Program", image: "/images/school/teacher-4.svg" },
  ];
  return (
    <section className="bg-white py-20 md:py-28" id="leadership">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Leadership"
            title="Meet Our School Leadership"
            subtitle="Guided by experienced and dedicated leaders who are passionate about education."
          />
        </FadeIn>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader, index) => (
            <FadeIn key={leader.name} delay={index * 0.05}>
              <div className="group text-center">
                <div className="relative mx-auto mb-4 h-40 w-40 overflow-hidden rounded-2xl">
                  <img
                    src={leader.image}
                    alt={`${leader.name} portrait at Wisdom Instruction School`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-charcoal-dark">{leader.name}</h3>
                <p className="text-sm text-primary">{leader.title}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrincipalMessage() {
  return (
    <section className="gradient-primary py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative rounded-3xl bg-white/10 p-8 backdrop-blur-sm md:p-12">
            <Quote className="absolute right-6 top-6 h-12 w-12 text-gold-400/40" />
            <div className="mb-6 flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-2xl">
                <img src="/images/school/teacher-1.svg" alt="Head of School" className="h-full w-full object-cover" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-white">A Message From Our Head of School</h2>
                <p className="text-sm text-gold-300">Welcome to Wisdom Instruction School</p>
              </div>
            </div>
            <blockquote className="space-y-4 text-lg leading-relaxed text-white/90">
              <p>
                "Welcome to Wisdom Instruction School — a place where every child is known, valued,
                and inspired to grow. We believe that education is not just about what children
                learn, but about who they become.
              </p>
              <p>
                Our dedicated team works tirelessly to create a warm, safe, and challenging
                environment where curiosity is encouraged, effort is celebrated, and every child's
                unique gifts are nurtured."
              </p>
            </blockquote>
            <div className="mt-6 border-t border-white/20 pt-4">
              <p className="font-semibold text-white">Head of School</p>
              <p className="text-sm text-gold-300">Wisdom Instruction School</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function EnvironmentSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Our Environment"
            title="A Safe, Nurturing Place to Learn"
            subtitle="Every corner of our school is designed to help children feel safe, happy, and eager to learn."
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Safe & Secure Campus", image: "/images/school/school-building.svg", description: "A welcoming campus where children are protected and cared for." },
            { title: "Happy Classrooms", image: "/images/school/classroom.svg", description: "Bright, colorful spaces that inspire curiosity and creativity." },
            { title: "Outdoor Play Areas", image: "/images/school/playground.svg", description: "Safe outdoor spaces for physical activity, play, and exploration." },
          ].map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-charcoal-dark">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{item.description}</p>
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
    "Modern, well-equipped classrooms",
    "Computer laboratory for digital learning",
    "Library with a rich collection of books",
    "Outdoor playground and sports area",
    "Clean, safe restroom facilities",
    "Cafeteria / eating area",
    "First aid and health services",
    "Secure campus with supervision",
  ];
  return (
    <section className="bg-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <SectionHeading eyebrow="Facilities" title="Everything Children Need to Thrive" align="left" />
            <div className="-mt-4 grid gap-3 sm:grid-cols-2">
              {facilities.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-white p-4 text-sm font-medium text-charcoal-dark shadow-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/school/computer-lab.svg" alt="Computer laboratory" className="aspect-square w-full rounded-2xl object-cover shadow-lg" />
              <img src="/images/school/library.svg" alt="School library" className="mt-8 aspect-square w-full rounded-2xl object-cover shadow-lg" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Our Community"
            title="A Strong, Supportive School Community"
            subtitle="At Wisdom Instruction School, parents, teachers, and students work together as one family."
          />
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: "Parent Partnership", description: "We believe parents are essential partners in every child's education. We maintain open, ongoing communication and encourage active involvement." },
            { title: "Inclusive Environment", description: "We welcome and celebrate students and families from diverse backgrounds, fostering mutual respect and understanding." },
            { title: "Community Engagement", description: "We connect our students with the wider community through events, projects, and service opportunities." },
          ].map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-gray-100 bg-cream p-8 shadow-sm transition-shadow hover:shadow-lg">
                <h3 className="mb-3 font-serif text-xl font-semibold text-charcoal-dark">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  const achievements = [
    "Consistent academic excellence across all classes",
    "Active participation in local academic and cultural events",
    "A growing, dedicated team of qualified educators",
    "A safe, nurturing environment recognized by families",
    "Students developing strong character and leadership skills",
    "Growing school community in Rubavu, Rwanda",
  ];
  return (
    <section className="gradient-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Achievements" title="Milestones We're Proud Of" />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <FadeIn key={item} delay={index * 0.05}>
              <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <Trophy className="h-6 w-6 shrink-0 text-gold-400" />
                <p className="text-sm leading-relaxed text-white/90">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-white/50">
          Note: Specific statistics and awards are shown as placeholders pending official information from the school.
        </p>
      </div>
    </section>
  );
}
