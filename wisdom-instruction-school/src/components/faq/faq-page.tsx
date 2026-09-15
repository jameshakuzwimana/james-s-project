"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Search } from "lucide-react";
import FadeIn from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const faqCategories = ["All", "Admissions", "Academics", "Fees", "School Life", "Application", "General"];

const faqs = [
  { question: "What ages does Wisdom Instruction School cater to?", answer: "We cater to children from ages 3 to 12, covering nursery (playgroup through nursery 2) and primary (primary 1 through primary 6) education.", category: "General" },
  { question: "How do I apply for admission?", answer: "You can apply online through our website by clicking 'Apply Now' and completing the application form. You'll need to provide your child's and family's details and upload required documents.", category: "Application" },
  { question: "What documents are required for admission?", answer: "A completed application form, copy of the child's birth certificate, previous school report card (if applicable), recent passport photo, and parent/guardian identification.", category: "Admissions" },
  { question: "When is the application deadline?", answer: "We accept applications throughout the academic year, subject to availability. We encourage applying early for the upcoming academic year. Contact the admissions office for current availability.", category: "Admissions" },
  { question: "What is the academic calendar?", answer: "The academic year is divided into three terms: Term 1 (September - December), Term 2 (January - April), and Term 3 (April - July).", category: "Academics" },
  { question: "What subjects do you teach?", answer: "We teach English, Kinyarwanda, Mathematics, Science & Technology, Social Studies, Creative Arts, Music, and Physical Education, among others.", category: "Academics" },
  { question: "How can I find out about school fees?", answer: "Please contact our admissions office directly or email admissions@wisdominstruction.edu.rw for detailed and current information about school fees.", category: "Fees" },
  { question: "What is the student-teacher ratio?", answer: "We maintain small class sizes to ensure individualized attention for every child. Please contact the school for specific class sizes.", category: "School Life" },
  { question: "Do you provide meals?", answer: "Yes, we provide a healthy lunch and snacks as part of our commitment to student well-being. Contact us for more details.", category: "School Life" },
  { question: "How do I track my child's progress?", answer: "We provide regular report cards, hold parent-teacher meetings, and give parents access to the parent portal where they can view attendance and academic results.", category: "Academics" },
  { question: "Is your school day structured?", answer: "Yes, we follow a structured daily schedule balancing academics, play, rest, meals, and activities to support the whole child.", category: "School Life" },
  { question: "How do I contact the school?", answer: "You can call us, email us, or visit us in Rubavu, Rwanda. Visit our Contact page for full details and a contact form.", category: "General" },
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <FaqHero />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" subtitle="Find quick answers to common questions about our school." />
          </FadeIn>

          <div className="mb-8 flex flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search questions..."
                className="w-full rounded-full border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {faqCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-white text-gray-600 hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="flex flex-col items-center rounded-2xl border border-dashed border-gray-200 py-16 text-center">
              <HelpCircle className="mb-4 h-12 w-12 text-gray-300" />
              <h3 className="font-semibold text-gray-700">No matching questions</h3>
              <p className="text-sm text-gray-500">Try a different search or category.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map((faq, index) => (
                <FadeIn key={faq.question} delay={index * 0.03}>
                  <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-cream"
                      aria-expanded={openIndex === index}
                    >
                      <span className="font-medium text-charcoal-dark">{faq.question}</span>
                      <span className="flex shrink-0 items-center justify-center">
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 text-primary transition-transform",
                            openIndex === index && "rotate-180"
                          )}
                        />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="border-t border-gray-100 p-5 text-sm leading-relaxed text-gray-600">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function FaqHero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <FadeIn direction="up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-semibold text-gold-300 ring-1 ring-gold-500/30">
            <HelpCircle className="h-4 w-4" />
            FAQ
          </span>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Quick answers to the questions families most often ask about Wisdom Instruction School.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
