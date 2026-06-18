"use client";

import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
// import { blogs, categories } from "@/lib/blogs";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import  {gsap} from "gsap";




type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  coverImage: string;
  publishedAt: string;
};

interface BlogListingProps {
  blogs: Blog[];
  categories: string[];
}

const PAGE_SIZE = 6;
export function BlogListing({
  blogs,
  categories,
}: BlogListingProps) {

  const gridRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);


  const filtered = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory = category === "All" || blog.category === category;
      const haystack = `${blog.title} ${blog.excerpt} ${blog.category}`.toLowerCase();
      return matchesCategory && haystack.includes(query.toLowerCase());
    });
  }, [blogs, category, query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

useEffect(() => {
  if (!gridRef.current) return;

  const cards = gridRef.current.querySelectorAll(".stagger-item");

  gsap.killTweensOf(cards);

  gsap.fromTo(
    cards,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.out",
    }
  );
}, [currentPage, category, query]);

  function updateCategory(nextCategory: string) {
    setCategory(nextCategory);
    setPage(1);
  }



  return (
    <section className="section-shell py-12">
      <div className="glass reveal rounded-[8px] p-4">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" size={18} />
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder="Search articles"
              className="h-12 w-full rounded-[8px] border border-[var(--border)] bg-transparent pl-11 pr-4 font-semibold outline-none transition focus:border-[var(--accent)]"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => updateCategory(item)}
                className={cn(
                  "h-10 rounded-full border border-[var(--border)] px-4 text-sm font-bold transition",
                  category === item
                    ? "bg-[var(--foreground)] text-[var(--background)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

     
        <div
          ref={gridRef}
          className="stagger-group mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      

      {visible.length === 0 && (
        <div className="glass mt-10 rounded-[8px] p-10 text-center">
          <p className="text-xl font-black">No articles found.</p>
          <p className="mt-2 text-[var(--muted)]">Try a different category or search term.</p>
        </div>
      )}

      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        <Button variant="secondary" disabled={currentPage === 1} onClick={() => setPage((value) => Math.max(1, value - 1))}>
          Previous
        </Button>
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] text-sm font-black transition",
              currentPage === index + 1 && "bg-[var(--foreground)] text-[var(--background)]"
            )}
          >
            {index + 1}
          </button>
        ))}
        <Button variant="secondary" disabled={currentPage === pageCount} onClick={() => setPage((value) => Math.min(pageCount, value + 1))}>
          Next
        </Button>
      </div>
    </section>
  );
}
