import Link from "next/link";
import { Linkedin, Mail, PenLine } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--foreground)] text-[var(--background)]">
              <PenLine size={18} />
            </span>
            Saloni Bhatia
          </div>
          <p className="mt-3 max-w-md text-sm text-[var(--muted)]">
            SEO content writer and copywriter helping brands turn ideas into searchable, persuasive stories.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[var(--muted)]">
          <Link href="/#about">About</Link>
          <Link href="/#work">Work</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="mailto:hello@salonibhatia.com" aria-label="Email">
            <Mail size={18} />
          </Link>
          {/* <Link href="https://www.linkedin.com" aria-label="LinkedIn">
            <Linkedin size={18} />
          </Link> */}
        </div>
        <p className="text-sm text-[var(--muted)]">© 2026 Saloni Bhatia. Demo showcase.</p>
      </div>
    </footer>
  );
}
