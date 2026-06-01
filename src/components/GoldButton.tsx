import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline";

export function GoldButton({
  children,
  variant = "solid",
  className,
  ...props
}: { children: ReactNode; variant?: Variant } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs tracking-[0.25em] uppercase transition-all duration-500",
        variant === "solid" &&
          "bg-gradient-gold text-ink shadow-[0_0_30px_-8px_oklch(0.82_0.15_80_/_0.7)] hover:shadow-[0_0_50px_-6px_oklch(0.82_0.15_80_/_0.9)] hover:-translate-y-0.5",
        variant === "outline" &&
          "border border-gold/60 text-gold hover:bg-gold/10 hover:border-gold",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
