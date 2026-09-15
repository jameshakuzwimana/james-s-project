import type { Metadata } from "next";
import { GraduationCap, FileText, MessageSquare } from "lucide-react";
import ApplicationForm from "@/components/apply/application-form";
import ApplicationStatusCheck from "@/components/apply/application-status";
import FadeIn from "@/components/shared/fade-in";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Online Application",
  description:
    "Apply online to Wisdom Instruction School, a nursery and primary school in Rwanda.",
};

export default function Apply() {
  return (
    <div className="bg-cream">
      <Hero />
      <HowItWorks />
      <section id="apply" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-gold-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-700">
              Online Application
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal-dark md:text-4xl">
              Begin Your Application
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              Complete the form below to apply for admission. It takes just a few minutes.
            </p>
          </div>
        </FadeIn>
        <ApplicationForm />
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <ApplicationStatusCheck />
      </section>
      <HelpSection />
    </div>
  );
}

function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <FadeIn direction="up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-semibold text-gold-300 ring-1 ring-gold-500/30">
            <GraduationCap className="h-4 w-4" />
            Admissions 2027
          </span>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Apply to Wisdom Instruction School
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            We are delighted that you are considering our school for your child. Complete the
            online application, submit your details, and track progress every step of the way.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-full gradient-gold px-8 py-4 text-base font-semibold text-charcoal-dark transition-transform hover:scale-105"
            >
              Start Application
            </a>
            <a
              href="#track"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Check Application Status
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: FileText, title: "Submit the Form", description: "Fill in your child's and family's details online." },
    { icon: MessageSquare, title: "We Review", description: "Our admissions team reviews your application." },
    { icon: GraduationCap, title: "Track Progress", description: "Use your application number to track status." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <FadeIn key={step.title} delay={index * 0.05}>
            <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-4 rounded-2xl bg-primary p-4">
                <step.icon className="h-7 w-7 text-white" />
              </div>
              <span className="mx-auto mb-2 font-serif text-4xl font-bold text-primary/20">{index + 1}</span>
              <h3 className="mb-2 font-serif text-xl font-semibold text-charcoal-dark">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function HelpSection() {
  return (
    <section className="bg-cream-dark py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-charcoal-dark">Need Help With Your Application?</h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-600">
          Our admissions team is here to assist you with any questions throughout the process.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            {siteConfig.phone}
          </a>
          <a
            href="mailto:admissions@wisdominstruction.edu.rw"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Email Admissions
          </a>
        </div>
      </div>
    </section>
  );
}
