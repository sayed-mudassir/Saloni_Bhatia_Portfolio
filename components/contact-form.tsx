"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="glass reveal rounded-[8px] p-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-bold">
          Name
          <input
            required
            className="h-12 rounded-[8px] border border-[var(--border)] bg-transparent px-4 outline-none transition focus:border-[var(--accent)]"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Email
          <input
            required
            type="email"
            className="h-12 rounded-[8px] border border-[var(--border)] bg-transparent px-4 outline-none transition focus:border-[var(--accent)]"
            placeholder="you@company.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Message
          <textarea
            required
            rows={6}
            className="resize-none rounded-[8px] border border-[var(--border)] bg-transparent p-4 outline-none transition focus:border-[var(--accent)]"
            placeholder="Tell me about the project, audience, and content goals."
          />
        </label>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit">
          Send Message <Send size={17} />
        </Button>
        {submitted && <p className="text-sm font-semibold text-[var(--accent-2)]">Thanks. This demo form has been submitted.</p>}
      </div>
    </form>
  );
}
