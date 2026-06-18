import { getAllBlogs, getCategories } from "@/lib/blog-loader";
import { BlogListing } from "./blog-listing";

export default function BlogListingWrapper() {
  const blogs = getAllBlogs();
  const categories = getCategories();

  return (
    <BlogListing
      blogs={blogs}
      categories={categories}
    />
  );
}