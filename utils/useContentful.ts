import { createClient } from "contentful";
import { ProjectInterface } from "./types";

const useContentful = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACEID as string,
    accessToken: process.env.NEXT_PUBLIC_CONTENT_API as string,
  });
  const getProjects = async () => {
    try {
      const projects: any = await client.getEntries();
      const sanatizedProjects: ProjectInterface[] = projects.items.map(
        (project: any) => {
          const img = `https:${project.fields.thumbnail.fields.file.url}`;
          return {
            ...project.fields,
            image: img,
          };
        }
      );
      return sanatizedProjects;
    } catch (error) {
      console.log(error);
    }
  };
  return { getProjects };
};

export default useContentful;
