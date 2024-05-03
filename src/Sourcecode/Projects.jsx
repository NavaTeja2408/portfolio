import React from "react";
import ProjectCard from "./Components/ProjectCard";
import project1 from "./Images/project1.png";
import project2 from "./Images/project2.png";

const Projects = () => {
  return (
    <div className="max-w-full h-screen p-4 sm:mt-14 " id="projects">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-4xl font-bold ">PROJECTS</h1>
      </div>
      <div className="w-full h-96 flex flex-wrap ">
        <ProjectCard
          image={project1}
          name="ShinTexT"
          website="https://shin-text.vercel.app"
          git="https://github.com/NavaTeja2408/shintext"
        />
        <ProjectCard
          image={project2}
          name="To-Do App"
          website="https://to-do-ten-pearl.vercel.app"
          git="https://github.com/NavaTeja2408/to-do"
        />
      </div>
    </div>
  );
};

export default Projects;
