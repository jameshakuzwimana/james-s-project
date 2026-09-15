"use client";

import { useState, useEffect, useCallback } from "react";
import { CheckCircle2, XCircle, Info, AlertTriangle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastType = "success" | "error" | "info" | "warning";

interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
}

interface ToastStore {
  toasts: Toast[];
  show: (type: ToastType, title: string, message?: string) => void;
  dismiss: (id: string) => void;
}

const listeners = new Set<(toasts: Toast[]) => void>();
let store: Toast[] = [];

function emit() {
  listeners.forEach((listener) => listener(store));
}

function showToast(type: ToastType, title: string, message?: string) {
  const id = Math.random().toString(36).slice(2);
  store = [...store, { id, type, title, message }];
  emit();
  setTimeout(() => dismissToast(id), 5000);
}

function dismissToast(id: string) {
  store = store.filter((t) => t.id !== id);
  emit();
}

export const toast = {
  success: (title: string, message?: string) => showToast("success", title, message),
  error: (title: string, message?: string) => showToast("error", title, message),
  info: (title: string, message?: string) => showToast("info", title, message),
  warning: (title: string, message?: string) => showToast("warning", title, message),
  dismiss: dismissToast,
};

const toastStyles: Record<ToastType, { icon: React.ReactNode; className: string }> = {
  success: {
    icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
    className: "border-green-200 bg-white text-green-900",
  },
  error: {
    icon: <XCircle className="h-5 w-5 text-red-500" />,
    className: "border-red-200 bg-white text-red-900",
  },
  info: {
    icon: <Info className="h-5 w-5 text-blue-500" />,
    className: "border-blue-200 bg-white text-blue-900",
  },
  warning: {
    icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
    className: "border-yellow-200 bg-white text-yellow-900",
  },
};

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const listener = (next: Toast[]) => setToasts(next);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const dismiss = useCallback((id: string) => dismissToast(id), []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-4 z-[100] flex flex-col items-center gap-2 px-4 sm:items-end sm:pr-4"
      aria-live="polite"
      aria-atomic="false"
    >
      {toasts.map((toast) => {
        const config = toastStyles[toast.type];
        return (
          <div
            key={toast.id}
            className={cn(
              "pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-xl border shadow-lg",
              config.className
            )}
            role="alert"
          >
            <div className="mt-3 ml-3 shrink-0">{config.icon}</div>
            <div className="flex-1 py-3 pr-2">
              <p className="text-sm font-semibold">{toast.title}</p>
              {toast.message && <p className="mt-0.5 text-sm opacity-80">{toast.message}</p>}
            </div>
            <button
              onClick={() => dismiss(toast.id)}
              className="m-2 shrink-0 rounded-lg p-1 text-current opacity-50 transition-opacity hover:opacity-100"
              aria-label="Dismiss notification"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
