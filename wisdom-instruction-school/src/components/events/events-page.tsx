"use client";

import { Calendar, Clock, MapPin, Tag, CalendarDays } from "lucide-react";
import FadeIn from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { useState } from "react";

const events = [
  { id: 1, title: "Academic Year Opening", date: "2026-09-15", startTime: "8:00 AM", endTime: "12:00 PM", location: "School Campus", category: "School Event", description: "Welcome ceremony marking the start of the new academic year for all students and families." },
  { id: 2, title: "Parent-Teacher Meeting", date: "2026-09-30", startTime: "10:00 AM", endTime: "2:00 PM", location: "School Hall", category: "Meeting", description: "An opportunity to discuss your child's progress and goals with their teachers." },
  { id: 3, title: "Sports Day", date: "2026-10-20", startTime: "9:00 AM", endTime: "4:00 PM", location: "Sports Field", category: "Sports", description: "A fun day of sports, games, and friendly competition for all students." },
  { id: 4, title: "Cultural Day", date: "2026-11-05", startTime: "9:00 AM", endTime: "3:00 PM", location: "School Campus", category: "Culture", description: "Celebrating the rich cultural heritage of Rwanda and our diverse community." },
  { id: 5, title: "Open Day", date: "2026-11-20", startTime: "10:00 AM", endTime: "4:00 PM", location: "School Campus", category: "School Event", description: "An open day for prospective families to tour the school and meet our team." },
  { id: 6, title: "End of Year Celebration", date: "2026-07-10", startTime: "9:00 AM", endTime: "1:00 PM", location: "School Hall", category: "Celebration", description: "Celebrating our students' achievements and the close of the academic year." },
];

const categories = ["All", "School Event", "Meeting", "Sports", "Culture", "Celebration"];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredEvents = events.filter((event) => activeCategory === "All" || event.category === activeCategory);

  return (
    <div>
      <EventsHero />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading eyebrow="Events" title="Upcoming & School Events" subtitle="Join us at the exciting events happening throughout the school year." />
          </FadeIn>

          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === category ? "bg-primary text-white" : "bg-white text-gray-600 hover:bg-primary/10 hover:text-primary"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredEvents.length === 0 ? (
            <div className="flex flex-col items-center rounded-2xl border border-dashed border-gray-200 py-16 text-center">
              <CalendarDays className="mb-4 h-12 w-12 text-gray-300" />
              <h3 className="font-semibold text-gray-700">No events found</h3>
              <p className="text-sm text-gray-500">Try a different category.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event, index) => (
                <FadeIn key={event.id} delay={index * 0.05}>
                  <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700">
                        {event.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                        <Calendar className="h-4 w-4" />
                        {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                    </div>
                    <h3 className="mb-3 font-serif text-xl font-semibold text-charcoal-dark">{event.title}</h3>
                    <p className="mb-4 flex-1 text-sm text-gray-600">{event.description}</p>
                    <div className="space-y-2 border-t border-gray-100 pt-4 text-sm text-gray-600">
                      <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {event.startTime} - {event.endTime}</p>
                      <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {event.location}</p>
                      <p className="flex items-center gap-2"><Tag className="h-4 w-4 text-primary" /> {event.category}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}

          <p className="mt-10 text-center text-sm text-gray-400">
            Note: Event dates shown are placeholders pending the official school calendar.
          </p>
        </div>
      </section>
    </div>
  );
}

function EventsHero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <FadeIn direction="up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-semibold text-gold-300 ring-1 ring-gold-500/30">
            <CalendarDays className="h-4 w-4" />
            Events
          </span>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            School Events
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Discover the events and celebrations happening at Wisdom Instruction School.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
