import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.png";

export function Logo({
  className = "",
  variant = "default",
  showWordmark = true,
}: {
  className?: string;
  variant?: "default" | "inverse";
  showWordmark?: boolean;
}) {
  return (
    <Link
      to="/"
      className={cn(
        "group flex items-center outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 rounded-lg",
        className,
      )}
    >
      <img
        src={logoImg}
        alt="JifunzeHub"
        className={cn(
          "h-9 w-auto object-contain transition-transform duration-300 group-hover:-translate-y-0.5",
          variant === "inverse" ? "brightness-0 invert" : "",
        )}
      />
    </Link>
  );
}
