import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Linkedin, Mail, Twitter } from "lucide-react";
import { AnimationRig } from "@/components/animations";
import { BlogCard } from "@/components/blog-card";
import { ReadingProgress } from "@/components/reading-progress";
import { ButtonLink } from "@/components/ui/button";
import {
  getAllBlogs,
  getBlog,
  getRelatedBlogs,
  getHeadings,
} from "@/lib/blog-loader";
import ReactMarkdown from "react-markdown";

export function generateStaticParams() {
  return getAllBlogs().map((blog: any) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlog(slug);
  return {
    title: blog ? `${blog.title} | Saloni Bhatia` : "Article | Saloni Bhatia",
    description: blog?.excerpt
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) notFound();
console.log("Slug:", slug);
console.log("Blog:", getBlog(slug));
  
  const related = getRelatedBlogs(blog.slug);
  const headings = getHeadings(blog.content);

  return (
    <main className="min-h-screen pt-24">
      <AnimationRig />
      <ReadingProgress />
      <article>
        <header className="section-shell py-10">
          <ButtonLink href="/blog" variant="ghost" className="mb-8 px-0">
            <ArrowLeft size={18} /> Back to blogs
          </ButtonLink>
          <div className="article-reveal">
            <div className="flex flex-wrap stagger-item items-center gap-3 text-sm font-black text-[var(--muted)]">
              <span className="rounded-full bg-[var(--foreground)] px-3 py-1 text-[var(--background)]">{blog.category}</span>
              <span>{blog.readTime}</span>
              <span>{new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(blog.publishedAt))}</span>
            </div>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-black leading-tight md:text-7xl">{blog.title}</h1>
            <p className="mt-6 max-w-3xl  text-xl leading-8 text-[var(--muted)]">{blog.excerpt}</p>
          </div>
          <div className="article-reveal relative mt-10 aspect-[16/8] overflow-hidden rounded-[8px]">
            <Image src={blog.coverImage} alt="" fill priority sizes="100vw" className="object-cover" />
          </div>
        </header>

        <div className="section-shell grid gap-10 pb-20 lg:grid-cols-[180px_minmax(0,1fr)_220px]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-3">
              {[
                ["mailto:?subject=Saloni Bhatia article", Mail],
                ["https://www.linkedin.com", Linkedin],
                ["https://twitter.com", Twitter]
              ].map(([href, Icon]) => (
                <Link
                  key={String(href)}
                  href={String(href)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] transition hover:bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)]"
                >
                  {/* <Icon size={18} /> */}
                </Link>
              ))}
            </div>
          </aside>

          <div className="glass article-reveal rounded-[8px] p-6 md:p-10">
            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-black prose-a:text-[var(--accent-2)] prose-img:rounded-xl prose-blockquote:border-l-4 prose-blockquote:border-[var(--accent)]">
              <ReactMarkdown  components={{
                  h2: ({ children }) => {
                    const id = String(children)
                      .toLowerCase()
                      .replace(/[^\w\s-]/g, "")
                      .replace(/\s+/g, "-");

                    return <h2 id={id}>{children}</h2>;
                  },
                }}>
                {blog.content}
              </ReactMarkdown>
            </div>
          </div>


{/* 
          */}
          <aside className="hidden lg:block">
  <div className="sticky top-28">
    <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[var(--accent)]">
      Contents
    </p>

    <nav className="grid gap-3 text-sm font-bold text-[var(--muted)]">
      {headings.map((heading) => {
        const id = heading
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");

        return (
          <Link
            key={heading}
            href={`#${id}`}
            className="hover:text-[var(--foreground)]"
          >
            {heading}
          </Link>
        );
      })}
    </nav>
  </div>
</aside>
        </div>
      </article>

      <section className="section-shell pb-24">
        <div className="reveal mb-8">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent)]">Related</p>
          <h2 className="mt-4 text-4xl font-black">Keep reading.</h2>
        </div>
        <div className="stagger-group grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <BlogCard key={item.slug} blog={item} />
          ))}
        </div>
      </section>
      
    </main>
  );
}
