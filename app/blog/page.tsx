import { AnimationRig } from "@/components/animations";
import BlogListingWrapper from "@/components/blog-listing-wrapper";

export const metadata = {
  title: "Blog | Saloni Bhatia",
  description: "Demo article archive for Saloni Bhatia's writing portfolio."
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32">
      <AnimationRig />
      <section className="section-shell reveal">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent)]">Blog</p>
        <h1 className="mt-4 max-w-3xl text-balance text-5xl font-black leading-tight md:text-7xl">
          Strategic writing for search, story, and sales.
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-[var(--muted)]">
          Explore demo articles across SEO strategy, copywriting, brand voice, content systems, and conversion.
        </p>
      </section>
     <BlogListingWrapper />
    </main>
  );
}
