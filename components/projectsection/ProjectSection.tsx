import { useEffect, useState } from "react";
import { ProjectInterface } from "../../utils/types";
import useContentful from "../../utils/useContentful";
import SectionHeader from "../SectionHeader";
import ProjectRow from "./ProjectRow";

const ProjectSection = () => {
  const { getProjects } = useContentful();
  const [projects, setProjects] = useState<ProjectInterface[]>([]);
  useEffect(() => {
    getProjects().then((projects) => setProjects(projects!));
  }, []);
  return (
    <section id="projects_container" className="mx-auto max-w-7xl">
      <SectionHeader title="Projects" />
      {projects.map((project, index) => {
        return (
          <ProjectRow key={project.title} project={project} index={index} />
        );
      })}
    </section>
  );
};

export default ProjectSection;
