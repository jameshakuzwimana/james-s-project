"use client";

import { GraduationCap, ArrowRight, FileText, ClipboardCheck } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/shared/fade-in";

export default function ApplyComingSoon() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <FadeIn direction="up">
        <div className="mb-6 inline-flex rounded-2xl bg-primary p-6">
          <GraduationCap className="h-12 w-12 text-white" />
        </div>
        <h1 className="mb-4 font-serif text-4xl font-bold text-charcoal-dark md:text-5xl">
          Online Application
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-gray-600">
          Our online application system is being finalized and will be available shortly. We
          appreciate your patience and interest in joining Wisdom Instruction School.
        </p>
        <div className="mx-auto mb-8 grid max-w-2xl gap-4 text-left sm:grid-cols-3">
          {[
            { icon: FileText, title: "Fill Details", description: "Submit your child's and family's information." },
            { icon: ClipboardCheck, title: "Upload Documents", description: "Provide birth certificate and records." },
            { icon: ArrowRight, title: "Track Status", description: "Monitor your application progress online." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-100 bg-white p-5">
              <item.icon className="mb-3 h-7 w-7 text-primary" />
              <h3 className="mb-1 font-semibold text-charcoal-dark">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/admissions" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105">
            Learn About Admissions
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white">
            Contact Admissions
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
