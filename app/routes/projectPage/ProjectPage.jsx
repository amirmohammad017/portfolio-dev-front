import { useMemo } from "react";
import { useRouteLoaderData } from "react-router";
import ProjectCard from "../../components/project/ProjectCard";

const ProjectPage = () => {
  const loaderData = useRouteLoaderData("root") || {};
  const { projects = [] } = loaderData;

  const sortedProjects = useMemo(() => {
    return [...projects].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [projects]);

  return (
    <div
      className="max-w-5xl mx-auto grid 
      grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 
      justify-center gap-6 px-4"
    >
      {sortedProjects.map((item) => (
        <ProjectCard key={item.slug} data={item} />
      ))}
    </div>
  );
};

export default ProjectPage;
