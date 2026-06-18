import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(
  process.cwd(),
  "content/blogs"
);

export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  coverImage: string;
  publishedAt: string;
  featured?: boolean;
  content: string;
};

export function getAllBlogs(): Blog[] {
  const files = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"));

  return files.map((file) => {
    const slug = file.replace(".md", "");

    const fullPath = path.join(
      postsDirectory,
      file
    );

    const fileContent = fs.readFileSync(
      fullPath,
      "utf8"
    );

    const { data, content } =
      matter(fileContent);

    return {
      slug,
      ...(data as Omit<
        Blog,
        "slug" | "content"
      >),
      content,
    };
  });
}

export function getBlog(slug: string): Blog {
  const fullPath = path.join(
    postsDirectory,
    `${slug}.md`
  );

  const fileContent = fs.readFileSync(
    fullPath,
    "utf8"
  );

  const { data, content } = matter(fileContent);

  return {
    slug,
    ...(data as Omit<Blog, "slug" | "content">),
    content,
  };
}

export function getRelatedBlogs(
  currentSlug: string,
  limit = 3
) {
  return getAllBlogs()
    .filter((blog: any) => blog.slug !== currentSlug)
    .slice(0, limit);
}

export function getCategories() {
  const blogs = getAllBlogs();

  return [
    "All",
    ...new Set(
      blogs.map((blog: any) => blog.category)
    ),
  ];
}

export function getHeadings(content: string) {
  const matches = content.match(/^##\s+(.*)$/gm) || [];

  return matches.map((heading) =>
    heading.replace(/^##\s+/, "")
  );
}