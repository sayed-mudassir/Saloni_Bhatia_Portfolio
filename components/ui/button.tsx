import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-[var(--foreground)] text-[var(--background)] shadow-lg shadow-black/10 hover:-translate-y-0.5",
  secondary:
    "glass text-[var(--foreground)] hover:-translate-y-0.5",
  ghost:
    "text-[var(--foreground)] hover:bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)]"
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: React.ComponentProps<typeof Link> & { variant?: "primary" | "secondary" | "ghost" }) {
  return (
    <Link
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
