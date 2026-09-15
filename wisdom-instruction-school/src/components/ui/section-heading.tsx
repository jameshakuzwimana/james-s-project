import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 space-y-3",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block rounded-full bg-gold-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-700">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl font-bold text-charcoal-dark md:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      {subtitle && <p className="text-lg leading-relaxed text-gray-600">{subtitle}</p>}
    </div>
  );
}
