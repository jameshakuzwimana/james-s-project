"use client";

import { useState } from "react";
import { Bell, Megaphone, Clock } from "lucide-react";
import FadeIn from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type Priority = "low" | "medium" | "high" | "urgent";

const announcements: { id: number; title: string; content: string; priority: Priority; date: string }[] = [
  { id: 1, title: "Admissions Open for New Academic Year", content: "We are now accepting applications for the upcoming academic year. Interested families should apply early as spaces are limited.", priority: "urgent", date: "September 8, 2026" },
  { id: 2, title: "Parent-Teacher Meeting Schedule", content: "Our upcoming parent-teacher meeting will be held on the dates announced in the school calendar. Please check your child's diary for your appointment time.", priority: "high", date: "September 1, 2026" },
  { id: 3, title: "Term 1 Begins", content: "Welcome back! Term 1 of the new academic year begins. We look forward to seeing all our students.", priority: "medium", date: "September 15, 2026" },
  { id: 4, title: "School Uniform Reminder", content: "Please ensure your child wears the correct school uniform every day. For enquiries, contact the school office.", priority: "low", date: "August 20, 2026" },
];

const priorityStyles: Record<Priority, { label: string; className: string }> = {
  low: { label: "Low", className: "bg-gray-100 text-gray-600" },
  medium: { label: "Medium", className: "bg-blue-100 text-blue-700" },
  high: { label: "High", className: "bg-yellow-100 text-yellow-700" },
  urgent: { label: "Urgent", className: "bg-red-100 text-red-700" },
};

export default function AnnouncementsPage() {
  const [filter, setFilter] = useState<"All" | Priority>("All");
  const filtered = announcements.filter((a) => filter === "All" || a.priority === filter);

  return (
    <div>
      <AnnouncementsHero />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading eyebrow="Announcements" title="Official Announcements" subtitle="Important updates and notices for our school community." />
          </FadeIn>

          <div className="mb-8 flex flex-wrap gap-2">
            {(["All", "urgent", "high", "medium", "low"] as const).map((p) => (
              <button
                key={p}
                onClick={() => setFilter(p as "All" | Priority)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors",
                  filter === p ? "bg-primary text-white" : "bg-white text-gray-600 hover:bg-primary/10 hover:text-primary"
                )}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((announcement, index) => {
              const style = priorityStyles[announcement.priority];
              return (
                <FadeIn key={announcement.id} delay={index * 0.03}>
                  <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
                    <div className="shrink-0 rounded-xl bg-primary p-3">
                      <Megaphone className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <h3 className="font-serif text-lg font-semibold text-charcoal-dark">{announcement.title}</h3>
                        <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-medium capitalize", style.className)}>
                          {style.label}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{announcement.content}</p>
                      <p className="mt-3 flex items-center gap-1.5 text-xs text-gray-400">
                        <Clock className="h-3.5 w-3.5" /> {announcement.date}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function AnnouncementsHero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <FadeIn direction="up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-semibold text-gold-300 ring-1 ring-gold-500/30">
            <Bell className="h-4 w-4" />
            Announcements
          </span>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Announcements
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Official notices and important updates from Wisdom Instruction School.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
