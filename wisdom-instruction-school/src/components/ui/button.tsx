"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold" | "link";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  fullWidth?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  isLoading = false,
  fullWidth = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const variants: Record<string, string> = {
    primary:
      "bg-primary hover:bg-primary-dark text-white shadow-school focus-visible:ring-primary/50",
    secondary:
      "bg-secondary hover:bg-secondary-dark text-white shadow-gold focus-visible:ring-secondary/50",
    gold:
      "bg-gold-500 hover:bg-gold-600 text-charcoal-dark shadow-gold focus-visible:ring-gold-500/50",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary/50",
    ghost: "text-primary hover:bg-primary/10 focus-visible:ring-primary/20",
    link: "text-primary underline-offset-4 hover:underline focus-visible:ring-primary/20",
  };

  const sizes: Record<string, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      )}
      {children}
    </button>
  );
}
