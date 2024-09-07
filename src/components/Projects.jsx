import React from "react";
import { PROJECTS } from "../constants";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="flex flex-wrap gap-2 w-full">
        {PROJECTS.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              tags={project.technologies}
              liveURL={project.liveURL}
              githubURL={project.githubURL}
              publicationURL={project.publicationURL}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
