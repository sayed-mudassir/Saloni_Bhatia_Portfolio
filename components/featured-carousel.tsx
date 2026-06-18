import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllBlogs } from "@/lib/blog-loader";

export function FeaturedCarousel() {
  const blogs = getAllBlogs();

  const featured = blogs
    .filter((blog: any) => blog.featured)
    .slice(0, 3);

  const items = [...featured, ...featured];

  return (
    <section className="overflow-hidden border-y border-[var(--border)] py-16">
      <div className="section-shell reveal mb-8">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent)]">Featured Articles</p>
        <h2 className="mt-4 text-4xl font-black md:text-5xl">The strategy shelf.</h2>
      </div>
      <div className="carousel-track flex w-max gap-6 px-4">
        {items.map((blog, index) => (
          <Link
            key={`${blog.slug}-${index}`}
            href={`/blog/${blog.slug}`}
            className="glass group grid w-[340px] overflow-hidden rounded-[8px] md:w-[460px]"
          >
            <div className="relative aspect-[16/9]">
              <Image src={blog.coverImage} alt="" fill sizes="460px" className="object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <p className="text-sm font-black text-[var(--accent-2)]">{blog.category}</p>
              <h3 className="mt-2 text-2xl font-black leading-tight">{blog.title}</h3>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold">
                Read article <ArrowUpRight size={16} />
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
