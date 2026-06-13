import { useRouteLoaderData } from "react-router";
import { useState, useMemo } from "react";
import BlogCard from "../../components/blog/BlogCard";

const BlogPage = () => {
  const loaderData = useRouteLoaderData("root") || {};
  const { blogs = [] } = loaderData;

  const [search, setSearch] = useState("");

  const filteredBlogs = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return [...blogs]
      .sort(
        (a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      )
      .filter((item) => {
        const title = item.title?.toLowerCase() || "";
        const excerpt = item.excerpt?.toLowerCase() || "";

        return (
          title.includes(normalizedSearch) ||
          excerpt.includes(normalizedSearch)
        );
      });
  }, [blogs, search]);

  return (
    <div className="space-y-8 px-4">

      {/* Search Input */}
      <div className="w-full backdrop-blur-xs mx-auto max-w-5xl">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          className="w-full rounded-lg border border-gray-400 bg-transparent px-4 py-3 focus:outline-none focus:border-gray-200"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Blog Grid */}
      <div
        className="max-w-5xl mx-auto grid 
        grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 
        justify-center gap-6"
      >
        {filteredBlogs.map((item) => (
          <BlogCard key={item.slug} data={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
