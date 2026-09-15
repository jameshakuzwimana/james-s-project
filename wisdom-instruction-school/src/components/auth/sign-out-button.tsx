"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="inline-flex items-center gap-2 rounded-full bg-charcoal-dark px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-charcoal"
    >
      <LogOut className="h-4 w-4" />
      Sign Out
    </button>
  );
}