"use client";

import { useState } from "react";
import {
  User,
  Users,
  ClipboardCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import FadeIn from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "@/components/ui/toast";
import { GRADE_LABELS } from "@/lib/utils";
import { cn } from "@/lib/utils";

const GRADE_OPTIONS = [
  { value: "NURSERY_1", label: "Nursery 1", ages: "Age 3" },
  { value: "NURSERY_2", label: "Nursery 2", ages: "Age 4" },
  { value: "NURSERY_3", label: "Nursery 3", ages: "Age 5" },
  { value: "P1", label: "Primary 1", ages: "Age 6" },
  { value: "P2", label: "Primary 2", ages: "Age 7" },
  { value: "P3", label: "Primary 3", ages: "Age 8" },
  { value: "P4", label: "Primary 4", ages: "Age 9" },
  { value: "P5", label: "Primary 5", ages: "Age 10" },
  { value: "P6", label: "Primary 6", ages: "Age 11" },
] as const;

type GradeValue = (typeof GRADE_OPTIONS)[number]["value"];

const RELATION_OPTIONS = ["Mother", "Father", "Guardian", "Grandparent", "Other"];

interface FormData {
  childFirstName: string;
  childLastName: string;
  childGender: string;
  childDob: string;
  gradeLevel: GradeValue | "";
  previousSchool: string;
  medicalNotes: string;
  parentFirstName: string;
  parentLastName: string;
  parentRelation: string;
  parentEmail: string;
  parentPhone: string;
  parentAddress: string;
  occupation: string;
}

const initialForm: FormData = {
  childFirstName: "",
  childLastName: "",
  childGender: "",
  childDob: "",
  gradeLevel: "",
  previousSchool: "",
  medicalNotes: "",
  parentFirstName: "",
  parentLastName: "",
  parentRelation: "",
  parentEmail: "",
  parentPhone: "",
  parentAddress: "",
  occupation: "",
};

interface FieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  textarea?: boolean;
  options?: readonly string[];
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
  required = false,
  textarea = false,
  options,
}: FieldProps) {
  const baseClass =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-colors";
  const stateClass = error
    ? "border-red-300 focus:border-red-400 focus:ring-red-100"
    : "border-gray-200 focus:border-primary focus:ring-primary/20";

  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-charcoal-dark">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className={cn(baseClass, stateClass)}
        />
      ) : options ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(baseClass, stateClass, !value && "text-gray-400")}
        >
          <option value="">Select...</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(baseClass, stateClass)}
        />
      )}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

const stepMeta = [
  { title: "Child Information", icon: User, description: "Details about the prospective student." },
  { title: "Parent / Guardian", icon: Users, description: "Contact and family information." },
  { title: "Review & Submit", icon: ClipboardCheck, description: "Confirm everything looks correct." },
];

export default function ApplicationForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<{
    applicationNo: string;
    childName: string;
    gradeLevel: string;
  } | null>(null);

  const setField = (key: keyof FormData) => (value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const validateChild = () => {
    const next: Record<string, string> = {};
    if (!data.childFirstName.trim()) next.childFirstName = "First name is required.";
    if (!data.childLastName.trim()) next.childLastName = "Last name is required.";
    if (!data.childGender) next.childGender = "Please select a gender.";
    if (!data.childDob) {
      next.childDob = "Date of birth is required.";
    } else {
      const dob = new Date(data.childDob);
      const now = new Date();
      const age = (now.getTime() - dob.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
      if (Number.isNaN(dob.getTime())) next.childDob = "Please enter a valid date.";
      else if (age < 2 || age > 14) next.childDob = "Age must be between 2 and 14 years.";
      else if (dob > now) next.childDob = "Date of birth cannot be in the future.";
    }
    if (!data.gradeLevel) next.gradeLevel = "Please select a grade level.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const validateParent = () => {
    const next: Record<string, string> = {};
    if (!data.parentFirstName.trim()) next.parentFirstName = "First name is required.";
    if (!data.parentLastName.trim()) next.parentLastName = "Last name is required.";
    if (!data.parentRelation) next.parentRelation = "Please select a relationship.";
    if (!data.parentEmail.trim()) {
      next.parentEmail = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.parentEmail)) {
      next.parentEmail = "Please enter a valid email address.";
    }
    if (!data.parentPhone.trim()) {
      next.parentPhone = "Phone number is required.";
    } else if (!/^[+\d][\d\s-]{6,}$/.test(data.parentPhone.trim())) {
      next.parentPhone = "Please enter a valid phone number.";
    }
    if (!data.parentAddress.trim()) next.parentAddress = "Address is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const nextStep = () => {
    const valid = step === 0 ? validateChild() : step === 1 ? validateParent() : true;
    if (valid) setStep((s) => Math.min(s + 1, 2));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const gradeLabel = GRADE_OPTIONS.find((g) => g.value === data.gradeLevel)?.label ?? "";

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error("Submission failed", result.error ?? "Something went wrong.");
        return;
      }

      setSubmitted({
        applicationNo: result.application.applicationNo,
        childName: `${result.application.childFirstName} ${result.application.childLastName}`,
        gradeLevel: GRADE_LABELS[result.application.gradeLevel] ?? result.application.gradeLevel,
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      toast.error("Submission failed", "Unable to reach the server. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return <SuccessScreen submission={submitted} />;
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <Toaster />

      {/* Step indicator */}
      <div className="mb-10 flex items-center justify-center">
        {stepMeta.map((item, index) => {
          const isActive = index === step;
          const isDone = index < step;
          return (
            <div key={item.title} className="flex items-center">
              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => index < step && setStep(index)}
                  disabled={index >= step}
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all",
                    isDone && "border-primary bg-primary text-white",
                    isActive && "border-primary bg-white text-primary ring-4 ring-primary/10",
                    !isActive && !isDone && "border-gray-200 bg-white text-gray-400"
                  )}
                  aria-label={item.title}
                >
                  {isDone ? <CheckCircle2 className="h-5 w-5" /> : <item.icon className="h-5 w-5" />}
                </button>
                <span
                  className={cn(
                    "mt-2 hidden text-xs font-medium sm:block",
                    isActive ? "text-primary" : isDone ? "text-charcoal-dark" : "text-gray-400"
                  )}
                >
                  {item.title}
                </span>
              </div>
              {index < stepMeta.length - 1 && (
                <div
                  className={cn(
                    "mx-2 mb-6 hidden h-0.5 w-12 sm:block md:w-16",
                    index < step ? "bg-primary" : "bg-gray-200"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>

      <FadeIn key={step} direction={step === 2 ? "none" : "up"} duration={0.35}>
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-10">
          {step === 0 && (
            <div className="space-y-5">
              <div className="mb-6">
                <h2 className="font-serif text-2xl font-bold text-charcoal-dark">Child Information</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Tell us about the child you are applying for.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Child's First Name"
                  value={data.childFirstName}
                  onChange={setField("childFirstName")}
                  error={errors.childFirstName}
                  required
                  placeholder="e.g. Divine"
                />
                <Field
                  label="Child's Last Name"
                  value={data.childLastName}
                  onChange={setField("childLastName")}
                  error={errors.childLastName}
                  required
                  placeholder="e.g. Mugisha"
                />
                <Field
                  label="Date of Birth"
                  type="date"
                  value={data.childDob}
                  onChange={setField("childDob")}
                  error={errors.childDob}
                  required
                />
                <Field
                  label="Gender"
                  value={data.childGender}
                  onChange={setField("childGender")}
                  error={errors.childGender}
                  required
                  options={["Female", "Male"]}
                />
              </div>
              <div>
                <Field
                  label="Applying for Grade Level"
                  value={data.gradeLevel}
                  onChange={setField("gradeLevel")}
                  error={errors.gradeLevel}
                  required
                  options={GRADE_OPTIONS.map((g) => g.value)}
                />
                {data.gradeLevel && (
                  <p className="mt-1 text-xs text-gray-500">
                    {gradeLabel}
                  </p>
                )}
              </div>
              <Field
                label="Previous School (if any)"
                value={data.previousSchool}
                onChange={setField("previousSchool")}
                placeholder="School name and level, if applicable"
              />
              <Field
                label="Medical Notes / Allergies"
                value={data.medicalNotes}
                onChange={setField("medicalNotes")}
                textarea
                placeholder="Any health conditions, allergies, or notes (optional)"
              />
            </div>
          )}

          {step === 1 && (
            <div className="space-y-5">
              <div className="mb-6">
                <h2 className="font-serif text-2xl font-bold text-charcoal-dark">Parent / Guardian</h2>
                <p className="mt-1 text-sm text-gray-500">
                  How can the school reach you about your application?
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="First Name"
                  value={data.parentFirstName}
                  onChange={setField("parentFirstName")}
                  error={errors.parentFirstName}
                  required
                  placeholder="e.g. Jean"
                />
                <Field
                  label="Last Name"
                  value={data.parentLastName}
                  onChange={setField("parentLastName")}
                  error={errors.parentLastName}
                  required
                  placeholder="e.g. Habimana"
                />
                <Field
                  label="Relationship to Child"
                  value={data.parentRelation}
                  onChange={setField("parentRelation")}
                  error={errors.parentRelation}
                  required
                  options={RELATION_OPTIONS}
                />
                <Field
                  label="Occupation"
                  value={data.occupation}
                  onChange={setField("occupation")}
                  placeholder="Profession (optional)"
                />
                <Field
                  label="Email Address"
                  type="email"
                  value={data.parentEmail}
                  onChange={setField("parentEmail")}
                  error={errors.parentEmail}
                  required
                  placeholder="you@example.com"
                />
                <Field
                  label="Phone Number"
                  type="tel"
                  value={data.parentPhone}
                  onChange={setField("parentPhone")}
                  error={errors.parentPhone}
                  required
                  placeholder="+250 7XX XXX XXX"
                />
              </div>
              <Field
                label="Home Address"
                value={data.parentAddress}
                onChange={setField("parentAddress")}
                error={errors.parentAddress}
                required
                placeholder="District, Sector, Cell..."
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="mb-6">
                <h2 className="font-serif text-2xl font-bold text-charcoal-dark">Review Your Application</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Please check that all details are correct before submitting.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <ReviewCard
                  title="Child"
                  icon={GraduationCap}
                  rows={[
                    ["Name", `${data.childFirstName} ${data.childLastName}`],
                    ["Date of Birth", formatDate(data.childDob)],
                    ["Gender", data.childGender],
                    ["Applying for", gradeLabel],
                    ["Previous School", data.previousSchool || "—"],
                  ]}
                />
                <ReviewCard
                  title="Parent / Guardian"
                  icon={Users}
                  rows={[
                    ["Name", `${data.parentFirstName} ${data.parentLastName}`],
                    ["Relationship", data.parentRelation],
                    ["Occupation", data.occupation || "—"],
                  ]}
                />
                <div className="sm:col-span-2">
                  <ReviewCard
                    title="Contact"
                    icon={Phone}
                    rows={[
                      ["Email", data.parentEmail],
                      ["Phone", data.parentPhone],
                      ["Address", data.parentAddress],
                    ]}
                    showIcons
                  />
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-gold-200 bg-gold-50 p-4 text-sm text-gold-800">
                By submitting this application, you confirm that the information provided is
                accurate and agree to be contacted by Wisdom Instruction School regarding admissions.
              </div>
            </div>
          )}
        </div>
      </FadeIn>

      <div className="mt-8 flex items-center justify-between">
        <div className="w-36">
          <Button variant="outline" onClick={prevStep} disabled={step === 0} fullWidth>
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
        <div className="w-40">
          {step < 2 ? (
            <Button onClick={nextStep} fullWidth>
              Continue
              <ChevronRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} isLoading={submitting} fullWidth>
              {submitting ? "Submitting..." : "Submit Application"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function formatDate(value: string): string {
  if (!value) return "—";
  const d = new Date(value);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function ReviewCard({
  title,
  icon: Icon,
  rows,
  showIcons = false,
}: {
  title: string;
  icon: typeof Users;
  rows: [string, string][];
  showIcons?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-cream p-5">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <Icon className="h-4 w-4 text-white" />
        </div>
        <h3 className="font-semibold text-charcoal-dark">{title}</h3>
      </div>
      <dl className="space-y-2">
        {rows.map(([label, value]) => (
          <div key={label} className="flex gap-2 text-sm">
            <dt className="w-32 shrink-0 text-gray-500">{label}</dt>
            <dd className="flex-1 break-words font-medium text-charcoal-dark">
              {label === "Email" && showIcons ? (
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-primary" />
                  {value}
                </span>
              ) : label === "Phone" && showIcons ? (
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-primary" />
                  {value}
                </span>
              ) : label === "Address" && showIcons ? (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {value}
                </span>
              ) : (
                value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function SuccessScreen({ submission }: { submission: { applicationNo: string; childName: string; gradeLevel: string } }) {
  return (
    <FadeIn direction="up">
      <div className="mx-auto max-w-2xl rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm md:p-12">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-9 w-9 text-green-600" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-charcoal-dark">Application Submitted!</h2>
        <p className="mx-auto mt-3 max-w-md text-gray-600">
          Thank you. Your application for <strong>{submission.childName}</strong> ({submission.gradeLevel}) has been received by our admissions team.
        </p>
        <div className="mx-auto mt-8 max-w-sm rounded-2xl border-2 border-dashed border-primary/40 bg-primary/5 p-6">
          <p className="text-sm text-gray-500">Your application number</p>
          <p className="mt-1 font-mono text-2xl font-bold tracking-wider text-primary">
            {submission.applicationNo}
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Keep this number safe. You can use it to{" "}
            <a href="#track" className="font-medium text-primary underline underline-offset-2">
              track your application status
            </a>{" "}
            on this page.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#track"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Track Application Status
          </a>
          <a
            href="/home"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Back to Website
          </a>
        </div>
      </div>
    </FadeIn>
  );
}