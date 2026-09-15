import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import type { Metadata } from "next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { Card, CardContent } from "@/components/ui/card";
import { APPLICATION_STATUSES } from "@/lib/utils";
import { GraduationCap, LayoutDashboard, Search } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portal",
};

const roleLabels: Record<string, string> = {
  ADMIN: "Administrator",
  STAFF: "School Staff",
  PARENT: "Parent / Guardian",
  APPLICANT: "Applicant",
};

export default async function PortalPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  const initials = session.user.name
    ? session.user.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "US";

  const isApplicant = session.user.role === "APPLICANT";

  const applications = isApplicant
    ? await prisma.application.findMany({
        where: { parentEmail: session.user.email?.toLowerCase() },
        orderBy: { createdAt: "desc" },
        take: 5,
      })
    : [];

  return (
    <div className="gradient-hero flex min-h-screen flex-col">
      <header className="flex items-center justify-between border-b border-white/10 px-6 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 font-bold text-charcoal-dark">
            {initials}
          </div>
          <div>
            <p className="font-semibold text-white">{session.user.name}</p>
            <p className="text-xs text-white/60">{roleLabels[session.user.role] ?? session.user.role}</p>
          </div>
        </div>
        <SignOutButton />
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        <div className="mb-10">
          <div className="mb-2 flex items-center gap-3 text-gold-400">
            <LayoutDashboard className="h-6 w-6" />
            <h1 className="font-serif text-3xl font-bold text-white md:text-4xl">
              {isApplicant ? "Applicant Portal" : "Parent Portal"}
            </h1>
          </div>
          <p className="text-white/70">
            {isApplicant
              ? "Track the status of your admission applications."
              : "Welcome back. Your school account is active."}
          </p>
        </div>

        {isApplicant ? (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-charcoal-dark transition-transform hover:scale-105"
              >
                <GraduationCap className="h-4 w-4" />
                New Application
              </Link>
              <Link
                href="/apply#track"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Search className="h-4 w-4" />
                Track a New Number
              </Link>
            </div>

            {applications.length === 0 ? (
              <Card>
                <CardContent>
                  <h2 className="font-semibold text-charcoal-dark">No Applications Yet</h2>
                  <p className="mt-1 text-sm text-gray-500">
                    You haven&apos;t submitted any applications. Start one to get your application number.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {applications.map((app) => {
                  const status =
                    APPLICATION_STATUSES[app.status as keyof typeof APPLICATION_STATUSES] ?? {
                      label: app.status,
                      color: "bg-gray-100 text-gray-700",
                    };
                  return (
                    <Card key={app.id} hover>
                      <CardContent>
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <p className="font-mono text-lg font-bold text-charcoal-dark">{app.applicationNo}</p>
                            <p className="text-sm text-gray-500">
                              {app.childFirstName} {app.childLastName} ·{" "}
                              {new Date(app.createdAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${status.color}`}>
                            {status.label}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent>
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-semibold text-charcoal-dark">Account</h2>
                <p className="mt-1 text-sm text-gray-500">
                  <span className="block">{session.user.email}</span>
                  Account type: {roleLabels[session.user.role] ?? session.user.role}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h2 className="font-semibold text-charcoal-dark">Announcements</h2>
                <p className="mt-1 text-sm text-gray-500">
                  No announcements yet. School updates will appear here.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h2 className="font-semibold text-charcoal-dark">Child&apos;s Progress</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Reports and attendance are coming soon.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}