"use client";

import {
  GraduationCap,
  BookOpen,
  Calculator,
  Globe,
  Music,
  Palette,
  ClipboardList,
  Calendar,
  Library,
  Lightbulb,
  CheckCircle2,
  ChevronRight,
  Download,
  FileText,
  Users,
  Clock,
  Sparkles,
} from "lucide-react";
import FadeIn from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

export default function AcademicsPage() {
  return (
    <div>
      <AcademicsHero />
      <NurseryProgram />
      <PrimaryProgram />
      <ClassesSection />
      <SubjectsSection />
      <CurriculumSection />
      <LearningApproach />
      <ExaminationSection />
      <AcademicCalendar />
      <LearningResources />
    </div>
  );
}

function AcademicsHero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <FadeIn direction="up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-semibold text-gold-300 ring-1 ring-gold-500/30">
            <GraduationCap className="h-4 w-4" />
            Academics
          </span>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Academics at Wisdom Instruction School
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Explore our nursery and primary programs, curriculum, and the engaging learning
            approach that helps every student thrive.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function NurseryProgram() {
  const blocks = [
    { title: "Early Literacy", description: "Phonics, letter recognition, and the joy of reading" },
    { title: "Early Numeracy", description: "Numbers, counting, shapes, and patterns through play" },
    { title: "Creative Arts", description: "Drawing, painting, music, and imaginative play" },
    { title: "Physical Development", description: "Active play, coordination, and motor skills" },
    { title: "Social Skills", description: "Sharing, cooperation, and making friends" },
    { title: "Discovery & Exploration", description: "Curiosity-led learning about the world" },
  ];
  return (
    <section className="py-20 md:py-28" id="nursery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img src="/images/school/nursery.svg" alt="Nursery students at Wisdom Instruction School" className="aspect-[4/3] w-full object-cover" />
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <SectionHeading eyebrow="Nursery Program" title="Nursery Education (Ages 3-5)" align="left" />
            <div className="-mt-6 space-y-4 text-gray-600">
              <p>
                Our nursery program provides a warm, safe, and stimulating environment where our
                youngest learners develop the skills and confidence they need for a smooth
                transition into primary education. Through play-based learning and hands-on
                activities, children are encouraged to explore, question, and discover.
              </p>
              <p>
                Our caring teachers focus on the whole child — supporting early academic skills
                while nurturing social, emotional, and physical development.
              </p>
            </div>
          </FadeIn>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block, index) => (
            <FadeIn key={block.title} delay={index * 0.05}>
              <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="shrink-0 rounded-xl bg-primary/10 p-3">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-dark">{block.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{block.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrimaryProgram() {
  const subjects = [
    { name: "English", icon: BookOpen },
    { name: "Kinyarwanda", icon: Globe },
    { name: "Mathematics", icon: Calculator },
    { name: "Science & Technology", icon: Lightbulb },
    { name: "Social Studies", icon: Globe },
    { name: "Art & Creativity", icon: Palette },
    { name: "Music", icon: Music },
    { name: "Physical Education", icon: Users },
  ];
  return (
    <section className="gradient-primary py-20 md:py-28" id="primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="up" className="order-2 text-white lg:order-1">
            <SectionHeading eyebrow="Primary Program" title="Primary Education (Ages 6-12)" align="left" />
            <div className="-mt-6 space-y-4 text-white/85">
              <p>
                Our primary program offers a comprehensive, well-rounded education that builds
                strong foundations in core subjects while encouraging critical thinking, creativity,
                and character development.
              </p>
              <p>
                We prepare our students not only for academic success but also to be confident,
                responsible, and compassionate members of their community.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {subjects.map((subject) => (
                <div key={subject.name} className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm">
                  <subject.icon className="h-6 w-6 text-gold-400" />
                  <span className="text-xs font-medium text-white">{subject.name}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn direction="up" className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img src="/images/school/classroom.svg" alt="Primary students in a classroom at Wisdom Instruction School" className="aspect-[4/3] w-full object-cover" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ClassesSection() {
  const classes = [
    { name: "Playgroup", level: "Nursery", age: "3 years", description: "Foundation of social and early learning skills." },
    { name: "Nursery 1", level: "Nursery", age: "4 years", description: "Early literacy, numeracy, and creative exploration." },
    { name: "Nursery 2", level: "Nursery", age: "5 years", description: "Building readiness for primary school." },
    { name: "Primary 1", level: "Primary", age: "6 years", description: "Core skills in reading, writing, and math." },
    { name: "Primary 2", level: "Primary", age: "7 years", description: "Building confidence and subject foundations." },
    { name: "Primary 3", level: "Primary", age: "8 years", description: "Deepening comprehension and problem-solving." },
    { name: "Primary 4", level: "Primary", age: "9 years", description: "Expanding knowledge and critical thinking." },
    { name: "Primary 5", level: "Primary", age: "10 years", description: "Advanced skills and independent learning." },
    { name: "Primary 6", level: "Primary", age: "11-12 years", description: "Preparation for national examinations and secondary." },
  ];
  return (
    <section className="bg-cream-dark py-20 md:py-28" id="classes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Classes"
            title="Our Classes"
            subtitle="From playgroup through primary six, each class is thoughtfully structured for the developmental stage and needs of our students."
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((classItem, index) => (
            <FadeIn key={classItem.name} delay={index * 0.03}>
              <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <GraduationCap className="h-3.5 w-3.5" />
                    {classItem.level}
                  </span>
                  <span className="text-xs font-medium text-gray-500">Age: {classItem.age}</span>
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-charcoal-dark">{classItem.name}</h3>
                <p className="text-sm text-gray-600">{classItem.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubjectsSection() {
  const subjects = [
    { name: "English", icon: BookOpen, description: "Reading, writing, speaking, and listening skills." },
    { name: "Kinyarwanda", icon: Globe, description: "Our national language and cultural heritage." },
    { name: "Mathematics", icon: Calculator, description: "Numbers, operations, geometry, and problem-solving." },
    { name: "Science & Technology", icon: Lightbulb, description: "Exploring the natural world and digital literacy." },
    { name: "Social Studies", icon: Globe, description: "Understanding our community, country, and world." },
    { name: "Creative Arts", icon: Palette, description: "Art, craft, and self-expression." },
    { name: "Music & Movement", icon: Music, description: "Rhythm, song, and joyful expression." },
    { name: "Physical Education", icon: Users, description: "Fitness, coordination, and teamwork." },
  ];
  return (
    <section className="bg-white py-20 md:py-28" id="subjects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Subjects"
            title="A Balanced, Engaging Curriculum"
            subtitle="We offer a rich range of subjects that develop the whole child — academically, creatively, and physically."
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject, index) => (
            <FadeIn key={subject.name} delay={index * 0.03}>
              <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-cream p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 inline-flex w-fit rounded-xl bg-primary p-3">
                  <subject.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 font-semibold text-charcoal-dark">{subject.name}</h3>
                <p className="text-sm text-gray-600">{subject.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CurriculumSection() {
  return (
    <section className="gradient-primary py-20 md:py-28" id="curriculum">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Curriculum" title="A Comprehensive Learning Approach" subtitle="Our curriculum follows established educational standards while embracing modern, child-centered teaching methods." />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Knowledge-based", icon: BookOpen, description: "Solid foundations in core academic subjects following the national curriculum." },
            { title: "Child-centered", icon: Users, description: "Teaching adapted to each child's needs, interests, and learning pace." },
            { title: "Skill-focused", icon: Lightbulb, description: "Critical thinking, communication, creativity, and collaboration skills." },
          ].map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <div className="h-full rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                <div className="mb-4 inline-flex rounded-xl bg-gold-500 p-3">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/85">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningApproach() {
  const approaches = [
    { title: "Active Learning", description: "Students learn by doing, questioning, and exploring." },
    { title: "Inquiry-Based", description: "We encourage curiosity and guide students to find answers." },
    { title: "Differentiated Instruction", description: "Lessons adapted to individual learning needs." },
    { title: "Play & Exploration", description: "Especially in nursery, learning is joyful and hands-on." },
    { title: "Positive Discipline", description: "We guide behavior with respect and encouragement." },
    { title: "Technology Integration", description: "Age-appropriate use of digital tools to enhance learning." },
  ];
  return (
    <section className="bg-cream-dark py-20 md:py-28" id="approach">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Learning Approach"
            title="How We Teach"
            subtitle="Our teaching methods are designed to make learning engaging, meaningful, and effective for every child."
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {approaches.map((approach, index) => (
            <FadeIn key={approach.title} delay={index * 0.05}>
              <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm">
                <div className="shrink-0 rounded-xl bg-primary p-3">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-dark">{approach.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{approach.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExaminationSection() {
  return (
    <section className="bg-white py-20 md:py-28" id="examinations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <SectionHeading eyebrow="Examinations" title="Assessment & Examinations" align="left" />
            <div className="-mt-6 space-y-4 text-gray-600">
              <p>
                Student progress is assessed through a combination of continuous assessment,
                classwork, homework, projects, and formal examinations. This balanced approach
                gives a complete picture of each child's development and ensures no student is left
                behind.
              </p>
              <p>
                In the primary level, students sit for termly examinations, and our Primary 6
                learners are prepared for the national primary leaving examinations.
              </p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Continuous assessment",
                "Classwork & homework",
                "Termly examinations",
                "Project-based assessments",
                "Teacher feedback & reports",
                "National exam preparation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-cream p-3 text-sm font-medium text-charcoal-dark">
                  <ClipboardList className="h-5 w-5 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img src="/images/school/classroom.svg" alt="Students taking an examination at Wisdom Instruction School" className="aspect-[4/3] w-full object-cover" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function AcademicCalendar() {
  const terms = [
    { name: "Term 1", period: "September - December", highlight: "New academic year begins" },
    { name: "Term 2", period: "January - April", highlight: "Mid-year assessments and events" },
    { name: "Term 3", period: "April - July", highlight: "Final examinations and end of year" },
  ];
  return (
    <section className="gradient-primary py-20 md:py-28" id="calendar">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Academic Calendar" title="Our School Year" subtitle="The academic year is organized into three terms, each filled with learning, activities, and milestones." />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {terms.map((term, index) => (
            <FadeIn key={term.name} delay={index * 0.05}>
              <div className="h-full rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-1.5 text-sm font-semibold text-charcoal-dark">
                  <Calendar className="h-4 w-4" />
                  {term.name}
                </div>
                <h3 className="mb-2 font-serif text-2xl font-bold text-white">{term.period}</h3>
                <p className="text-sm text-white/80">{term.highlight}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-white/50">
          Note: Exact dates are placeholders pending the official school calendar.
        </p>
      </div>
    </section>
  );
}

function LearningResources() {
  const resources = [
    { title: "Workbooks & Textbooks", description: "Approved learning materials for all classes." },
    { title: "Reading Library", description: "A growing collection of books for all ages." },
    { title: "Digital Learning", description: "Computer lab and educational tools." },
    { title: "Learning Materials", description: "Manipulatives and resources for hands-on learning." },
    { title: "Homework Support", description: "Guided practice and parent guidance." },
    { title: "Study Resources", description: "Revision materials for examinations." },
  ];
  return (
    <section className="bg-cream-dark py-20 md:py-28" id="resources">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Learning Resources"
            title="Resources That Support Learning"
            subtitle="We provide a wide range of resources to support every student's learning journey."
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <FadeIn key={resource.title} delay={index * 0.05}>
              <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
                <div className="shrink-0 rounded-xl bg-primary p-3">
                  <Library className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-dark">{resource.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{resource.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
