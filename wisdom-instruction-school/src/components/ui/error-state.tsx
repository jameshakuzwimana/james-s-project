"use client";

import { AlertTriangle, Inbox, WifiOff, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorState({
  title = "Something went wrong",
  message = "We couldn't load this content. Please try again.",
  onRetry,
  className,
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center rounded-2xl border border-red-100 bg-red-50/50 px-6 py-16 text-center",
        className
      )}
      role="alert"
    >
      <div className="mb-4 rounded-full bg-red-100 p-3">
        <AlertTriangle className="h-8 w-8 text-red-600" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mb-6 max-w-md text-sm text-gray-600">{message}</p>
      {onRetry && (
        <Button variant="outline" onClick={onRetry}>
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
      )}
    </div>
  );
}

interface EmptyStateProps {
  title?: string;
  message?: string;
  action?: React.ReactNode;
  icon?: "empty" | "offline";
  className?: string;
}

export function EmptyState({
  title = "Nothing here yet",
  message = "This section is empty. Check back soon for updates.",
  action,
  icon = "empty",
  className,
}: EmptyStateProps) {
  const Icon = icon === "offline" ? WifiOff : Inbox;
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 px-6 py-16 text-center",
        className
      )}
    >
      <div className="mb-4 rounded-full bg-gray-100 p-3">
        <Icon className="h-8 w-8 text-gray-400" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mb-6 max-w-md text-sm text-gray-500">{message}</p>
      {action}
    </div>
  );
}
