export type Blog = {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  coverImage: string;
  slug: string;
  publishedAt: string;
  featured?: boolean;
  content: string[];
};

export const blogs: Blog[] = [
  {
  title: "Ultimate Guide to Spiti Valley Motorcycle Tour 2026",
  excerpt:
    "Discover the best routes, travel tips, permits, bike recommendations, and the best time for a Spiti Valley motorcycle tour in 2026.",
  category: "Travel",
  readTime: "8 min read",
  coverImage:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  slug: "ultimate-guide-spiti-valley-motorcycle-tour-2026",
  publishedAt: "2026-06-17",
  featured: true,
  content: [
    "A Spiti Valley motorcycle tour is one of India's most thrilling riding experiences. From rugged mountain roads and high-altitude passes to ancient monasteries and remote Himalayan villages, the journey combines adventure, culture, and breathtaking landscapes. Riders from across the world visit Spiti every year to challenge themselves on roads that test both skill and endurance.",

    "The best time for a Spiti Valley trip is between May and September when roads reopen after winter and weather conditions remain relatively stable. Riders looking for quieter roads and beautiful autumn colors can also plan their journey during September and October. Winter travel is only recommended for experienced adventurers due to extreme snowfall and sub-zero temperatures.",

    "There are multiple routes available for a Spiti Valley bike trip. The Shimla–Kaza route is ideal for gradual acclimatization and scenic riding, while the Manali–Kaza route offers more challenging terrain and adventure. For riders seeking the ultimate Himalayan experience, the Chamba–Killar–Spiti circuit combines the raw beauty of both Pangi and Spiti Valley with some of the most exciting roads in northern India.",

    "Before starting your journey, ensure your motorcycle is fully serviced and equipped with quality tyres and brakes. Carry all necessary permits, identification documents, a medical kit, and extra fuel since petrol stations are limited throughout the region. Proper preparation significantly improves both safety and overall riding experience.",

    "A Spiti Valley motorcycle tour is much more than a road trip. It is a journey through some of the most remote and beautiful landscapes in the Himalayas. Whether you're chasing adventure, photography, culture, or personal achievement, Spiti offers an unforgettable experience that remains with riders long after they return home."
  ]
},
  {
    title: "Writing Landing Page Copy That Feels Clear, Not Pushy",
    excerpt:
      "A conversion copy framework for brands that want persuasive website pages without sounding loud or generic.",
    category: "Copywriting",
    readTime: "6 min read",
    coverImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    slug: "landing-page-copy-clear-not-pushy",
    publishedAt: "2026-04-28",
    featured: true,
    content: [
      "High-performing landing page copy starts with a promise the audience already wants to believe. It then earns that belief through proof, specificity, and sequencing.",
      "The page should move like a conversation: name the pain, show the better outcome, prove the method, remove the objection, and make the call to action feel low-friction.",
      "Clarity is the premium move. When readers understand the offer quickly, the brand feels more confident and the conversion path becomes easier to follow."
    ]
  },
  {
    title: "The Editorial Calendar That Keeps SEO Teams Focused",
    excerpt:
      "A lean planning model for balancing keyword opportunities, brand authority, and content production capacity.",
    category: "Content Strategy",
    readTime: "8 min read",
    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    slug: "editorial-calendar-seo-teams",
    publishedAt: "2026-04-10",
    featured: true,
    content: [
      "An editorial calendar should be more than a publishing checklist. It should show strategic intent, funnel coverage, topic ownership, and the operational rhythm behind growth.",
      "The best calendars group content by business outcome. Some pieces win traffic, some build topical authority, some support sales conversations, and some refresh aging assets.",
      "When every assignment has a role, writers make better decisions and stakeholders stop treating content as a queue of isolated articles."
    ]
  },
  {
    title: "A Brand Voice System for Founders Who Sound Like Everyone Else",
    excerpt:
      "A guide to turning personality, positioning, and customer language into a practical voice system.",
    category: "Brand Voice",
    readTime: "5 min read",
    coverImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
    slug: "brand-voice-system-founders",
    publishedAt: "2026-03-22",
    content: [
      "Brand voice becomes useful when it leaves the mood board and enters daily writing decisions. It needs rules, examples, and boundaries.",
      "Start with customer language, not adjectives. The phrases people use to describe their problems are often more distinctive than the words brands choose for themselves.",
      "A practical voice system gives teams permission to write with consistency while leaving enough flexibility for channel, context, and emotion."
    ]
  },
  {
    title: "Refreshing Old Blog Posts Without Losing What Already Works",
    excerpt:
      "A content refresh checklist for improving rankings, relevance, and conversion without flattening the original article.",
    category: "SEO Strategy",
    readTime: "6 min read",
    coverImage:
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1400&q=80",
    slug: "refreshing-old-blog-posts",
    publishedAt: "2026-02-19",
    content: [
      "Refreshing content is an editing discipline. Before changing a sentence, identify which queries, sections, backlinks, and snippets already drive performance.",
      "The safest improvements usually come from adding missing context, updating examples, strengthening internal links, and tightening the introduction around current intent.",
      "A strong refresh respects the asset's history while making it more useful for the reader and more complete for search engines."
    ]
  },
  {
    title: "Email Copy That Earns the Click Before the Offer",
    excerpt:
      "How to use subject lines, open loops, and message architecture to make email campaigns feel worth reading.",
    category: "Email Copy",
    readTime: "4 min read",
    coverImage:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=80",
    slug: "email-copy-earns-click",
    publishedAt: "2026-01-31",
    content: [
      "Email copy works when every line earns the next one. The subject line creates curiosity, the opening validates attention, and the body makes the offer feel relevant.",
      "The mistake many campaigns make is asking for commitment too early. Lead with context, consequence, or a useful shift in perspective before presenting the ask.",
      "When the email respects the inbox, the call to action becomes a natural continuation instead of an interruption."
    ]
  },
  {
    title: "Turning Expert Interviews Into Authority Content",
    excerpt:
      "A repeatable workflow for extracting insight from subject matter experts and shaping it into publishable stories.",
    category: "Blog Writing",
    readTime: "7 min read",
    coverImage:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
    slug: "expert-interviews-authority-content",
    publishedAt: "2025-12-12",
    content: [
      "Expert-led content is valuable because it contains judgment, not just information. The interviewer's job is to uncover the tradeoffs, failures, and decision patterns behind the advice.",
      "The strongest questions ask for contrast: what changed, what most people miss, what the expert would do differently, and where generic best practices fail.",
      "After the call, structure the piece around insight density. Preserve the expert's thinking, but translate it into a narrative readers can act on."
    ]
  },
  {
    title: "Website Copy Audits: What to Fix Before Redesigning",
    excerpt:
      "A diagnostic approach to identifying message gaps, trust leaks, and conversion blockers across a website.",
    category: "Website Content",
    readTime: "6 min read",
    coverImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
    slug: "website-copy-audits-before-redesigning",
    publishedAt: "2025-11-21",
    content: [
      "Before redesigning a website, audit the message. Many conversion problems come from unclear positioning, vague proof, weak page hierarchy, or calls to action that arrive too late.",
      "A copy audit follows the reader's path from first impression to decision. Each page should answer what this is, why it matters, why to trust it, and what to do next.",
      "Fixing copy first often makes design decisions cleaner because the site finally knows what it needs to communicate."
    ]
  },
  {
    title: "Keyword Research for Niche Service Businesses",
    excerpt:
      "A focused method for finding search opportunities when volume looks small but purchase intent is high.",
    category: "Keyword Research",
    readTime: "5 min read",
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    slug: "keyword-research-niche-service-businesses",
    publishedAt: "2025-10-30",
    content: [
      "Niche service keywords often hide behind low-volume estimates. The real value is in specificity, urgency, and the commercial clarity of the searcher.",
      "Research should combine search tools with sales calls, competitor pages, support questions, and review mining. The language customers use rarely fits neatly inside a dashboard.",
      "A smart keyword map prioritizes pages that answer high-intent questions and builds supporting articles around objections, comparisons, and use cases."
    ]
  },
  {
    title: "Thought Leadership Without the Empty Big Ideas",
    excerpt:
      "How to write executive content that feels original, useful, and grounded in lived business experience.",
    category: "Thought Leadership",
    readTime: "8 min read",
    coverImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    slug: "thought-leadership-without-empty-ideas",
    publishedAt: "2025-09-18",
    content: [
      "Thought leadership fails when it confuses altitude with originality. Big themes only matter when they are supported by specific experience, tension, and a real point of view.",
      "The strongest executive pieces often begin with a contrarian observation, a hard-won lesson, or a pattern the leader sees before the market has named it.",
      "Originality does not require being loud. It requires evidence, conviction, and the courage to say something precise enough to be useful."
    ]
  }
];

export const categories = ["All", ...Array.from(new Set(blogs.map((blog) => blog.category)))];

export function getBlog(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}

export function getRelatedBlogs(slug: string) {
  const current = getBlog(slug);
  return blogs
    .filter((blog) => blog.slug !== slug && blog.category === current?.category)
    .concat(blogs.filter((blog) => blog.slug !== slug && blog.category !== current?.category))
    .slice(0, 3);
}
