import BlogListing from "@/components/blog/BlogListing";
import { getAllBlogPosts } from "@/lib/blog";

const Blog = () => {
  const posts = getAllBlogPosts();

  return <BlogListing posts={posts} />;
};

export default Blog;
