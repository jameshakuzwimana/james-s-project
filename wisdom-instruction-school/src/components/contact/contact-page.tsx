"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import FadeIn from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { toast } from "@/components/ui/toast";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1000));
      setSubmitted(true);
      toast.success("Message sent", "Thank you for contacting us. We'll respond soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong", "Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-300 focus:ring-red-200"
        : "border-gray-200 focus:border-primary focus:ring-primary/20"
    }`;

  return (
    <div>
      <ContactHero />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Contact Us"
              title="We'd Love to Hear From You"
              subtitle="Whether you have a question about admissions, academics, or anything else, our team is here to help."
            />
          </FadeIn>
          <div className="grid gap-10 lg:grid-cols-5">
            <FadeIn direction="left" className="lg:col-span-2">
              <div className="space-y-4">
                <ContactCard icon={Phone} title="Call Us" value="+250 788 000 000" sub="Mon - Fri, 8am - 5pm" />
                <ContactCard icon={Mail} title="Email Us" value="info@wisdominstruction.edu.rw" sub="We reply within 48 hours" />
                <ContactCard icon={MapPin} title="Visit Us" value="Rubavu, Rwanda" sub="Find us in the heart of the community" />
                <ContactCard icon={Clock} title="Office Hours" value="Mon - Fri: 8:00 AM - 5:00 PM" sub="Saturday: 9:00 AM - 1:00 PM" />
                <div className="rounded-2xl bg-primary p-6 text-white">
                  <h3 className="mb-3 font-serif text-lg font-semibold">Connect With Us</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, label: "Facebook", href: "#" },
                      { icon: Instagram, label: "Instagram", href: "#" },
                      { icon: Youtube, label: "YouTube", href: "#" },
                      { icon: Twitter, label: "Twitter", href: "#" },
                    ].map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-gold-500 hover:text-charcoal-dark"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.1} className="lg:col-span-3">
              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                {submitted ? (
                  <div className="flex flex-col items-center py-12 text-center">
                    <CheckCircle2 className="mb-4 h-16 w-16 text-primary" />
                    <h3 className="mb-2 font-serif text-2xl font-bold text-charcoal-dark">Message Sent!</h3>
                    <p className="max-w-md text-gray-600">
                      Thank you for reaching out. Our team will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-5 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal-dark">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={inputClass("name")}
                          placeholder="Your full name"
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal-dark">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={inputClass("email")}
                          placeholder="you@example.com"
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="mb-5">
                      <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-charcoal-dark">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className={inputClass("subject")}
                        placeholder="How can we help you?"
                        aria-invalid={!!errors.subject}
                      />
                      {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal-dark">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={inputClass("message")}
                        placeholder="Write your message here..."
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary-dark disabled:opacity-60 sm:w-auto"
                    >
                      {loading ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-cream p-6">
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 text-sm text-gray-600">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>
                  <strong>Wisdom Instruction School</strong> · Located in Rubavu, Rwanda. Use the
                  map or contact us for detailed directions.
                </span>
              </div>
              {/* Placeholder map */}
              <div className="mt-4 flex aspect-[21/9] items-center justify-center rounded-2xl bg-primary/5">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 h-10 w-10 text-primary" />
                  <p className="text-sm font-medium text-primary">Interactive Map (coming soon)</p>
                  <p className="text-xs text-gray-500">Rubavu, Rwanda</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

function ContactCard({ icon: Icon, title, value, sub }: { icon: React.ComponentType<{ className?: string }>; title: string; value: string; sub?: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">
      <div className="shrink-0 rounded-xl bg-primary p-3">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-gray-500">{title}</p>
        <p className="font-semibold text-charcoal-dark">{value}</p>
        {sub && <p className="text-xs text-gray-500">{sub}</p>}
      </div>
    </div>
  );
}

function ContactHero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <FadeIn direction="up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-semibold text-gold-300 ring-1 ring-gold-500/30">
            <MessageSquare className="h-4 w-4" />
            Contact
          </span>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Contact Wisdom Instruction School
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Get in touch with us for any questions about our school, admissions, or to schedule a visit.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
