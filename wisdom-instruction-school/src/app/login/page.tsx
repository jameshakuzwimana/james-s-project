"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import SchoolLogo from "@/components/shared/school-logo";
import { Toaster, toast } from "@/components/ui/toast";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Missing fields", "Please enter both your email and password.");
      return;
    }

    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Sign in failed", "Invalid email or password. Please try again.");
        return;
      }

      toast.success("Welcome back", "You have been signed in successfully.");
      const callbackUrl = searchParams.get("callbackUrl") ?? "/portal";
      router.push(callbackUrl);
      router.refresh();
    } catch {
      toast.error("Sign in failed", "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal-dark">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
      <div>
        <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-charcoal-dark">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-12 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-gray-600">
          <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
          Remember me
        </label>
        <Link href="/contact" className="font-medium text-primary hover:underline">
          Forgot password?
        </Link>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-primary py-3 font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className="gradient-hero flex min-h-screen items-center justify-center px-4 py-16">
      <Toaster />
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <SchoolLogo variant="light" size="lg" />
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-2xl">
          <h1 className="mb-1 font-serif text-2xl font-bold text-charcoal-dark">Welcome Back</h1>
          <p className="mb-6 text-sm text-gray-500">Sign in to your portal account</p>
          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
          <div className="mt-6 border-t border-gray-100 pt-5 text-center text-sm">
            <p className="text-gray-500">Portal access is provided by the school.</p>
            <p className="mt-2 text-xs text-gray-400">
              Don&apos;t have an account?{" "}
              <Link href="/contact" className="font-medium text-primary hover:underline">
                Contact the school
              </Link>
            </p>
          </div>
        </div>
        <p className="mt-6 text-center">
          <Link href="/home" className="text-sm text-white/70 hover:text-white">
            ← Back to Website
          </Link>
        </p>
      </div>
    </div>
  );
}