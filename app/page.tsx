import { ArrowRight, BarChart3, CheckCircle2, Mail, MessageSquareText, Search, Sparkles } from "lucide-react";
import { AnimationRig } from "@/components/animations";
import { BlogCard } from "@/components/blog-card";
import { ContactForm } from "@/components/contact-form";
import { FeaturedCarousel } from "@/components/featured-carousel";
import { ButtonLink } from "@/components/ui/button";
import { getAllBlogs } from "@/lib/blog-loader";

const stats = [
  ["7", "+", "Years Experience"],
  ["200", "+", "Articles Written"],
  ["50", "+", "Clients Served"],
  ["1", "M+", "Words Published"]
];

const timeline = [
  ["2018", "Started writing long-form SEO blogs for founders and small teams."],
  ["2020", "Expanded into website copy, landing pages, and content strategy."],
  ["2023", "Built editorial systems for SaaS, wellness, finance, and creator brands."],
  ["Now", "Partnering with ambitious businesses on content that earns attention and trust."]
];

const skills = [
  "SEO Writing",
  "Copywriting",
  "Blog Writing",
  "Website Content",
  "Content Strategy",
  "Keyword Research",
  "Landing Pages",
  "Email Copy"
];

const testimonials = [
  {
    quote:
      "Saloni turned our scattered expertise into a content engine that finally sounds like us and ranks for the terms that matter.",
    name: "Aarav Mehta",
    role: "Founder, SaaS Studio"
  },
  {
    quote:
      "Her writing has this rare mix of clarity, warmth, and commercial instinct. Every draft felt strategic from the first line.",
    name: "Riya Kapoor",
    role: "Marketing Lead, Wellness Brand"
  },
  {
    quote:
      "We needed copy that could simplify a complex offer. Saloni gave us messaging our sales team still uses every day.",
    name: "Kabir Sethi",
    role: "Director, Growth Consulting"
  }
];

export default function Home() {
  const blogs = getAllBlogs();
  return (
    <main>
      <AnimationRig />
      {/* hero section */}
      <section id="home" className="relative min-h-screen overflow-hidden pb-16 pt-32">
        <div className="premium-grid absolute inset-0 -z-10" />
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="stagger-group">
            <p className="stagger-item mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-bold text-[var(--muted)] backdrop-blur-xl">
              <Sparkles size={16} className="text-[var(--accent)]" />
              Premium content strategy for ambitious brands
            </p>
            <h1 className="stagger-item text-balance text-5xl font-black leading-[0.95] tracking-normal md:text-7xl">
              Saloni Bhatia
            </h1>
            <p className="stagger-item mt-5 text-2xl font-semibold text-[var(--accent-2)] md:text-3xl">
              SEO Content Writer & Copywriter
            </p>
            <p className="stagger-item mt-6 max-w-2xl text-xl leading-8 text-[var(--muted)] text-pretty">
              Crafting content that ranks, engages, and converts. Helping brands grow through strategic content,
              SEO blogs, website copy, and conversion-focused writing.
            </p>
            <div className="stagger-item mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#work">
                Explore My Work <ArrowRight size={18} />
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Contact Me <Mail size={18} />
              </ButtonLink>
            </div>
          </div>

          <div className="relative min-h-[520px]" data-parallax="-8">
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color-mix(in_srgb,var(--accent)_22%,transparent)] blur-3xl" />
            <div className="tilt-card glass absolute left-4 top-10 w-[78%] rounded-[8px] p-5 md:left-8">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[var(--muted)]">Content Performance</span>
                <BarChart3 className="text-[var(--accent-2)]" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {["Rank", "Clicks", "Leads"].map((label, index) => (
                  <div key={label} className="rounded-[8px] border border-[var(--border)] p-3">
                    <p className="text-xs text-[var(--muted)]">{label}</p>
                    <p className="mt-2 text-2xl font-black">{index === 0 ? "#3" : index === 1 ? "42K" : "318"}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 h-28 rounded-[8px] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_26%,transparent),color-mix(in_srgb,var(--accent-2)_22%,transparent))] p-4">
                <div className="h-full rounded-[8px] border border-white/20 bg-white/20" />
              </div>
            </div>
            <div className="tilt-card glass absolute bottom-16 right-0 w-[72%] rounded-[8px] p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[var(--foreground)] text-[var(--background)]">
                  <Search size={20} />
                </div>
                <div>
                  <p className="font-bold">SEO Brief Ready</p>
                  <p className="text-sm text-[var(--muted)]">Intent mapped, outline approved.</p>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {["Audience pain points", "SERP angle", "Conversion bridge"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-semibold">
                    <CheckCircle2 size={16} className="text-[var(--accent-2)]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="tilt-card glass absolute bottom-2 left-0 w-64 rounded-[8px] p-5">
              <MessageSquareText className="text-[var(--accent)]" />
              <p className="mt-4 text-lg font-black leading-tight">Words that make expert brands easier to trust.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell reveal grid gap-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, suffix, label]) => (
          <div key={label} className="glass rounded-[8px] p-6">
            <p className="count-up text-4xl font-black" data-value={value} data-suffix={suffix}>
              0{suffix}
            </p>
            <p className="mt-2 font-semibold text-[var(--muted)]">{label}</p>
          </div>
        ))}
      </section>

      {/* about section */}
      <section id="about" className="section-shell grid gap-12 py-24 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="reveal">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent)]">About</p>
          <h2 className="mt-4 text-balance text-4xl font-black md:text-5xl">Editorial clarity with conversion instinct.</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[var(--muted)] text-pretty">
            <p>
              Saloni helps brands explain what they do, why it matters, and why their audience should care now.
              Her work blends SEO research, narrative structure, and clean copywriting so content feels useful
              before it feels promotional.
            </p>
            <p>
              She has written across SaaS, wellness, finance, education, professional services, and creator-led
              businesses. Her philosophy is simple: content should respect the reader's intelligence and still make
              the next step unmistakably clear.
            </p>
          </div>
        </div>
        <div className="stagger-group relative">
          {timeline.map(([year, text]) => (
            <div key={year} className="stagger-item relative border-l border-[var(--border)] pb-8 pl-8 last:pb-0">
              <span className="absolute -left-3 top-0 grid h-6 w-6 place-items-center rounded-full bg-[var(--accent)] text-xs font-black text-white" />
              <p className="text-sm font-black text-[var(--accent-2)]">{year}</p>
              <p className="mt-2 text-xl font-bold leading-7">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="reveal flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent)]">Skills</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">Built for the full content journey.</h2>
          </div>
        </div>
        <div className="stagger-group mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill} className="tilt-card glass stagger-item rounded-[8px] p-6">
              <Sparkles size={18} className="text-[var(--accent)]" />
              <p className="mt-6 text-xl font-black">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* work section */}
      <section id="work" className="section-shell py-24">
        <div className="reveal flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent)]">Featured Work</p>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl font-black md:text-5xl">
              A portfolio of strategy, story, and search performance.
            </h2>
          </div>
          <ButtonLink href="/blog" variant="secondary">
            View Blog <ArrowRight size={18} />
          </ButtonLink>
        </div>
        <div className="stagger-group mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs
          .filter((blog: any) => blog.featured)
          .slice(0, 6)
          .map((blog: any) => (
            <BlogCard
              key={blog.slug}
              blog={blog}
            />
          ))}
        </div>
      </section>

      <FeaturedCarousel />

      <section className="section-shell py-24">
        <div className="reveal">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent)]">Testimonials</p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">Trusted for thoughtful, commercially sharp writing.</h2>
        </div>
        <div className="stagger-group mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="glass stagger-item rounded-[8px] p-6">
              <blockquote className="text-lg font-semibold leading-8 text-pretty">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6">
                <p className="font-black">{testimonial.name}</p>
                <p className="text-sm text-[var(--muted)]">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell grid gap-10 py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent)]">Contact</p>
          <h2 className="mt-4 text-balance text-4xl font-black md:text-5xl">Let’s turn your expertise into content people remember.</h2>
          <div className="mt-8 space-y-4 text-lg font-semibold text-[var(--muted)]">
            <p>hello@salonibhatia.com</p>
            <p>linkedin.com/in/salonibhatia</p>
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
