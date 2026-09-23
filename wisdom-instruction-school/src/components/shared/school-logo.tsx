import { GraduationCap, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface SchoolLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "dark" | "light" | "color";
  showText?: boolean;
}

const sizeMap = {
  sm: { box: "h-9 w-9", icon: "h-5 w-5", text: "text-sm", tagline: "text-[10px]" },
  md: { box: "h-11 w-11", icon: "h-6 w-6", text: "text-base", tagline: "text-[11px]" },
  lg: { box: "h-14 w-14", icon: "h-8 w-8", text: "text-xl", tagline: "text-xs" },
  xl: { box: "h-16 w-16", icon: "h-9 w-9", text: "text-2xl", tagline: "text-sm" },
};

export function SchoolLogo({
  className,
  size = "md",
  variant = "color",
  showText = true,
}: SchoolLogoProps) {
  const s = sizeMap[size];
  const textColor = variant === "light" ? "text-white" : "text-charcoal-dark";
  const accentColor = variant === "light" ? "text-gold-400" : "text-gold-600";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative flex shrink-0 items-center justify-center rounded-2xl gradient-primary shadow-school",
          s.box
        )}
        aria-hidden="true"
      >
        <GraduationCap className={cn(s.icon, "text-white")} />
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full gradient-gold">
          <Sparkles className="h-2.5 w-2.5 text-charcoal-dark" />
        </span>
      </div>
      {showText && (
        <div className="leading-tight">
          <p className={cn("font-serif font-bold", s.text, textColor)}>
            {siteConfig.name}
          </p>
          <p className={cn("font-medium uppercase tracking-wider opacity-80", s.tagline, accentColor)}>
            {siteConfig.tagline}
          </p>
        </div>
      )}
    </div>
  );
}

export default SchoolLogo;
