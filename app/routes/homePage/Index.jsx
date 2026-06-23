import { useMemo } from "react";
import { NavLink, useRouteLoaderData } from "react-router";
import ProjectCard from "../../components/project/ProjectCard";
import BlogCard from "../../components/blog/BlogCard";

export function meta() {
  return [
    { title: "amirmohammad-dev" },
    { name: "description", content: "Welcome to my portfolio website!" },
  ];
}

const BUTTON_CLASS =
  "backdrop-blur-md text-blue-400 border border-blue-400 font-bold px-4 py-2 rounded-lg hover:border-blue-500 hover:text-blue-500 transition text-md";

export default function Index() {
  const loaderData = useRouteLoaderData("root") || {};
  const { blogs = [], projects = [] } = loaderData;

  const featuredProjects = useMemo(() => {
    return [...projects]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .filter((item) => item.featured);
  }, [projects]);

  const latestBlogs = useMemo(() => {
    return [...blogs]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }, [blogs]);

  return (
    <div className="min-h-screen space-y-20 py-6 px-6 max-w-7xl mx-auto">
      {/* Section 1: Hero */}
      <section
        id="hero"
        className="text-center px-6 py-10 bg-gray-500/10 backdrop-blur-md rounded-lg"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Amirmohammad Ghofrani
        </h1>
        <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          Junior Front-End Developer passionate about building modern,
          responsive, and high-performance web applications using React and
          Tailwind CSS.
        </p>
      </section>

      {/* Section 2: Featured Projects */}
      <section id="projects">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl md:text-3xl font-bold text-white">Featured Projects</h2>
          <NavLink className={BUTTON_CLASS} to="/project">
            View All
          </NavLink>
        </div>

        {/* Grid: Mobile 1 | Tablet/Desktop 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((item) => (
            <ProjectCard key={item.slug} data={item} />
          ))}
        </div>
      </section>

      {/* Section 3: Latest Blogs */}
      <section id="blogs">
        <div className="flex justify-between items-start mb-10">
          <h2 className="text-xl md:text-3xl font-bold text-white">Latest Blogs</h2>
          <NavLink className={BUTTON_CLASS} to="/blog">
            Read More
          </NavLink>
        </div>

        {/* Grid: Mobile 1 | Tablet 2 | Desktop 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestBlogs.map((item) => (
            <BlogCard key={item.slug} data={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
