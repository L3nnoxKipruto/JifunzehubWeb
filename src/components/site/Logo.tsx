import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  className = "",
  variant = "default",
  showWordmark = true,
}: {
  className?: string;
  variant?: "default" | "inverse";
  showWordmark?: boolean;
}) {
  const inverse = variant === "inverse";

  return (
    <Link
      to="/"
      className={cn(
        "group flex items-center gap-2.5 outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 rounded-lg",
        inverse ? "focus-visible:ring-offset-0" : "focus-visible:ring-offset-background",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl p-px shadow-md transition-transform duration-300 group-hover:-translate-y-0.5",
          inverse
            ? "bg-gradient-to-br from-white/25 to-white/5 ring-1 ring-white/15"
            : "bg-gradient-to-br from-primary to-accent shadow-primary/25",
        )}
      >
        <div
          className={cn(
            "flex h-full w-full items-center justify-center rounded-[11px] text-sm font-semibold italic",
            inverse ? "bg-sidebar text-white" : "bg-[#020617] text-white",
          )}
        >
          J
        </div>
        <span
          className={cn(
            "absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 shadow-sm animate-jh-shimmer",
            inverse ? "border-sidebar bg-emerald-400" : "border-[#020617] bg-emerald-500",
          )}
          aria-hidden
        />
      </div>
      {showWordmark && (
        <span
          className={cn(
            "text-[17px] font-semibold tracking-tight transition-colors",
            inverse ? "text-sidebar-foreground" : "text-foreground group-hover:text-primary",
          )}
        >
          JifunzeHub
        </span>
      )}
    </Link>
  );
}
