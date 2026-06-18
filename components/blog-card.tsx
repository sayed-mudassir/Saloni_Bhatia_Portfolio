import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
// import { Blog } from "@/lib/blogs";
import { ButtonLink } from "@/components/ui/button";

type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  coverImage: string;
  publishedAt: string;
  featured?: boolean;
};

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="tilt-card glass stagger-item group overflow-hidden rounded-[8px]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={blog.coverImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/86 px-3 py-1 text-xs font-bold text-stone-950">
          {blog.category}
        </span>
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-[var(--muted)]">
          <Clock size={14} />
          {blog.readTime}
        </div>
        <h3 className="text-xl font-bold leading-tight text-balance">{blog.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)] text-pretty">{blog.excerpt}</p>
        <ButtonLink href={`/blog/${blog.slug}`} variant="ghost" className="mt-5 px-0">
          Read More <ArrowUpRight size={16} />
        </ButtonLink>
      </div>
    </article>
  );
}
