"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Moon, PenLine, Sun, X } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = ["home", "about", "work", "contact"];
      const current = sections.findLast((id) => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top <= 160 : false;
      });
      if (current) setActive(current.charAt(0).toUpperCase() + current.slice(1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <nav
        className={cn(
          "navbar-shell mx-auto flex max-w-6xl translate-y-[-12px] items-center justify-between rounded-full border px-4 py-3 opacity-0 transition-all duration-300",
          scrolled
            ? "border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_78%,transparent)] shadow-2xl shadow-black/10 backdrop-blur-2xl md:max-w-5xl md:py-2"
            : "border-transparent bg-transparent"
        )}
      >
        <Link href="/#home" className="flex items-center gap-2 font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--foreground)] text-[var(--background)]">
            <PenLine size={18} />
          </span>
          Saloni Bhatia
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--foreground)]",
                active === item.label && "bg-[color-mix(in_srgb,var(--foreground)_9%,transparent)] text-[var(--foreground)]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] transition hover:bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)]"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="glass mx-auto mt-3 grid max-w-6xl gap-2 rounded-[8px] p-3 md:hidden">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-[8px] px-3 py-3 font-semibold">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
