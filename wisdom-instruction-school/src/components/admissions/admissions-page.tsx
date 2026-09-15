"use client";

import {
  ClipboardList,
  FileText,
  UserCheck,
  GraduationCap,
  Calendar,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

export default function AdmissionsPage() {
  return (
    <div>
      <AdmissionsHero />
      <ProcessSection />
      <Requirements />
      <FeesNote />
      <WhyJoin />
      <ContactSection />
    </div>
  );
}

function AdmissionsHero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <FadeIn direction="up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-semibold text-gold-300 ring-1 ring-gold-500/30">
            <GraduationCap className="h-4 w-4" />
            Admissions
          </span>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Admissions at Wisdom Instruction School
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            We are delighted that you are considering Wisdom Instruction School for your child.
            Here you'll find everything you need to know about joining our school community.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 rounded-full gradient-gold px-8 py-4 text-base font-semibold text-charcoal-dark transition-transform hover:scale-105"
            >
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#process"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Process
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { icon: ClipboardList, title: "Submit Application", description: "Complete our online application form with your child's and family's details." },
    { icon: FileText, title: "Upload Documents", description: "Provide required documents such as birth certificate and previous school records." },
    { icon: UserCheck, title: "Review & Assessment", description: "Our admissions team reviews your application. An assessment may be arranged." },
    { icon: MessageSquare, title: "Decision & Confirmation", description: "You'll receive our decision. Upon acceptance, complete enrollment to confirm your place." },
  ];
  return (
    <section className="py-20 md:py-28" id="process">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Admission Process"
            title="Steps to Joining Our School"
            subtitle="Our admissions process is simple and transparent. Follow these steps to apply for your child."
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.05}>
              <div className="relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-2xl bg-primary p-4">
                    <step.icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="font-serif text-4xl font-bold text-primary/20">{index + 1}</span>
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-charcoal-dark">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 text-primary lg:block" />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Requirements() {
  const requirements = [
    "Completed application form",
    "Copy of child's birth certificate",
    "Previous school report card (if applicable)",
    "Recent passport photo of the child",
    "Parent/guardian identification",
    "Immunization/health records (where available)",
  ];
  return (
    <section className="bg-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <SectionHeading eyebrow="Requirements" title="Documents Needed for Admission" align="left" />
            <div className="-mt-4 grid gap-3 sm:grid-cols-2">
              {requirements.map((req) => (
                <div key={req} className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm font-medium text-charcoal-dark shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {req}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Please note: The admissions office may request additional documents as needed. All
              documents are kept confidential.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img src="/images/school/students.svg" alt="Students at Wisdom Instruction School" className="aspect-[4/3] w-full object-cover" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function FeesNote() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-3xl border border-gray-100 bg-cream p-8 text-center md:p-12">
            <div className="mx-auto mb-4 inline-flex rounded-2xl bg-primary p-4">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-4 font-serif text-2xl font-bold text-charcoal-dark md:text-3xl">School Fees</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              For information about school fees, payment plans, and the academic year, please
              contact our admissions office directly. We are happy to provide full transparency
              about our fee structure.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="tel:+250788000000" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105">
                <Phone className="h-4 w-4" />
                +250 788 000 000
              </a>
              <a href="mailto:admissions@wisdominstruction.edu.rw" className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white">
                <Mail className="h-4 w-4" />
                Email Admissions
              </a>
            </div>
            <p className="mt-6 text-xs text-gray-400">
              Note: Fee details shown here are placeholders. Contact the school office for accurate, current information.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function WhyJoin() {
  const reasons = [
    { title: "Quality Education", description: "A strong, well-rounded academic program." },
    { title: "Caring Teachers", description: "Dedicated educators who know every child." },
    { title: "Safe Environment", description: "A secure, nurturing place to learn and grow." },
    { title: "Holistic Development", description: "Academics, character, arts, and sports." },
    { title: "Strong Community", description: "Supportive families and school community." },
    { title: "Modern Facilities", description: "Classrooms and resources for great learning." },
  ];
  return (
    <section className="gradient-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Why Join Us" title="Remember Why Families Choose Us" />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <FadeIn key={reason.title} delay={index * 0.05}>
              <div className="h-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="mb-2 font-serif text-lg font-semibold text-white">{reason.title}</h3>
                <p className="text-sm text-white/80">{reason.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <HelpCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="mb-4 font-serif text-3xl font-bold text-charcoal-dark">Questions About Admissions?</h2>
          <p className="mx-auto mb-8 max-w-xl text-gray-600">
            Our friendly admissions team is here to help you through every step of the process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              View FAQ
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
