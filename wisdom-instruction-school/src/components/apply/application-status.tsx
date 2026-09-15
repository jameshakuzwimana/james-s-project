"use client";

import { useState } from "react";
import { Search, FileText, CheckCircle2, Clock } from "lucide-react";
import FadeIn from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "@/components/ui/toast";
import { APPLICATION_STATUSES, GRADE_LABELS } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface ApplicationResult {
  applicationNo: string;
  status: string;
  gradeLevel: string;
  childFirstName: string;
  childLastName: string;
  childDob: string;
  parentFirstName: string;
  parentLastName: string;
  parentEmail: string;
  createdAt: string;
  updatedAt: string;
}

const STATUS_ORDER = ["PENDING", "UNDER_REVIEW", "SHORTLISTED", "ACCEPTED"];

export default function ApplicationStatusCheck() {
  const [applicationNo, setApplicationNo] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ApplicationResult | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();

    const clean = applicationNo.trim().toUpperCase();
    if (!clean) {
      toast.error("Missing application number", "Please enter your application number.");
      return;
    }

    setLoading(true);
    setNotFound(false);
    setResult(null);

    try {
      const res = await fetch(`/api/applications/${encodeURIComponent(clean)}`);
      const data = await res.json();

      if (!res.ok) {
        setNotFound(true);
        return;
      }

      setResult(data.application);
    } catch {
      toast.error("Lookup failed", "Unable to reach the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="track">
      <Toaster />
      <FadeIn direction="up">
        <div className="mx-auto max-w-3xl rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-10">
          <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal-dark">Track Application</h2>
              <p className="mt-1 text-sm text-gray-500">
                Enter the application number you received to see your status.
              </p>
            </div>
            <Button variant="outline" onClick={() => window.location.hash = "#apply"}>
              <FileText className="h-4 w-4" />
              New Application
            </Button>
          </div>

          <form onSubmit={handleCheck} className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                value={applicationNo}
                onChange={(e) => setApplicationNo(e.target.value)}
                placeholder="e.g. WIS-2026-1234"
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 font-mono text-sm uppercase focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                disabled={loading}
              />
            </div>
            <Button type="submit" isLoading={loading} disabled={loading}>
              {loading ? "Checking..." : "Check Status"}
            </Button>
          </form>

          {notFound && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              We could not find an application with that number. Please double-check the number
              you entered, or contact the admissions office for assistance.
            </div>
          )}

          {result && !notFound && <StatusResult result={result} />}
        </div>
      </FadeIn>
    </div>
  );
}

function StatusResult({ result }: { result: ApplicationResult }) {
  const statusKey = result.status as keyof typeof APPLICATION_STATUSES;
  const statusConfig = APPLICATION_STATUSES[statusKey] ?? {
    label: result.status,
    color: "bg-gray-100 text-gray-700",
  };
  const currentIndex = STATUS_ORDER.indexOf(statusKey);
  const isRejected = statusKey === "REJECTED";
  const isWaitlisted = statusKey === "WAITLISTED";

  const childName = `${result.childFirstName} ${result.childLastName}`;
  const parentName = `${result.parentFirstName} ${result.parentLastName}`;
  const grade = GRADE_LABELS[result.gradeLevel] ?? result.gradeLevel;

  return (
    <div className="mt-8 space-y-6">
      {/* Status banner */}
      <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-gray-100 bg-cream p-5 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="font-mono text-lg font-bold tracking-wide text-charcoal-dark">
              {result.applicationNo}
            </p>
            <p className="text-xs text-gray-500">
              Submitted {new Date(result.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
        <span className={cn("rounded-full px-4 py-1.5 text-sm font-semibold", statusConfig.color)}>
          {statusConfig.label}
        </span>
      </div>

      {/* Progress timeline */}
      <div className="rounded-2xl border border-gray-100 p-6">
        {!isRejected && !isWaitlisted ? (
          <div className="flex items-center">
            {STATUS_ORDER.map((step, index) => {
              const reached = index <= currentIndex;
              const isCurrent = index === currentIndex;
              return (
                <div key={step} className={cn("flex items-center", index < STATUS_ORDER.length - 1 && "flex-1")}>
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-full border-2",
                        reached
                          ? "border-primary bg-primary text-white"
                          : "border-gray-200 bg-white text-gray-300"
                      )}
                    >
                      {reached ? <CheckCircle2 className="h-5 w-5" /> : String(index + 1)}
                    </div>
                    <span
                      className={cn(
                        "mt-2 text-xs font-medium",
                        isCurrent ? "text-primary" : reached ? "text-charcoal-dark" : "text-gray-400"
                      )}
                    >
                      {APPLICATION_STATUSES[step as keyof typeof APPLICATION_STATUSES].label}
                    </span>
                  </div>
                  {index < STATUS_ORDER.length - 1 && (
                    <div
                      className={cn(
                        "mx-2 mb-6 h-1 flex-1 rounded-full",
                        index < currentIndex ? "bg-primary" : "bg-gray-200"
                      )}
                    />
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className={cn(
              "rounded-xl p-4 text-sm",
              isRejected
                ? "bg-red-50 text-red-700"
                : "bg-orange-50 text-orange-700"
            )}
          >
            {isRejected
              ? "We have reviewed your application and regret to inform you that we are unable to offer a place at this time. Please contact admissions for more details."
              : "Your application has been placed on our waiting list. We will contact you if a place becomes available."}
          </div>
        )}
      </div>

      {/* Summary */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-gray-100 bg-cream p-5">
          <h3 className="mb-3 font-semibold text-charcoal-dark">Applicant</h3>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-gray-500">Child</dt>
              <dd className="font-medium text-charcoal-dark">{childName}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">Grade</dt>
              <dd className="font-medium text-charcoal-dark">{grade}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">Date of Birth</dt>
              <dd className="font-medium text-charcoal-dark">
                {new Date(result.childDob).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </dd>
            </div>
          </dl>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-cream p-5">
          <h3 className="mb-3 font-semibold text-charcoal-dark">Contact</h3>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-gray-500">Guardian</dt>
              <dd className="font-medium text-charcoal-dark">{parentName}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">Email</dt>
              <dd className="font-medium text-charcoal-dark">{result.parentEmail}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">Last Updated</dt>
              <dd className="font-medium text-charcoal-dark">
                {new Date(result.updatedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400">
        Questions? Contact our admissions office at{" "}
        <a href="mailto:admissions@wisdominstruction.edu.rw" className="text-primary underline underline-offset-2">
          admissions@wisdominstruction.edu.rw
        </a>
      </p>
    </div>
  );
}