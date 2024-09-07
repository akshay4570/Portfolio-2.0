/* eslint-disable react/prop-types */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { motion } from "framer-motion";

const ProjectCard = ({
  image,
  title,
  description,
  tags,
  liveURL,
  githubURL,
  publicationURL,
}) => {
  const handleURL = (url) => {
    window.open(url, "_blank");
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="flex flex-wrap w-full m-2 justify-center p-2 rounded-2xl card shadow-md shadow-gray-100 lg:w-96 md:w-1/3"
    >
      <div className="w-1/2 m-2 justify-center lg:w-full lg:m-4 ">
        <img src={image} alt="Image" className="w-100 h-60 rounded-2xl" />
      </div>
      <div className="justify-center mb-4 w-full p-2">
        <h2 className="text-2xl text-center mb-4">{title}</h2>
        <h4 className="mb-4">{description}</h4>
        <p className="flex flex-wrap gap-2">
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="bg-neutral-900 rounded-md p-1 text-purple-800 hover:transform hover:scale-105"
              >
                {tag}
              </span>
            );
          })}
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mb-4 p-2 mt-auto">
        {liveURL && (
          <button
            className="bg-purple-900 p-4 text-md rounded-lg flex flex-wrap gap-2"
            onClick={() => handleURL(liveURL)}
          >
            <FaEye size={25} />
            <span>Live Demo</span>
          </button>
        )}
        {githubURL && (
          <button
            className="bg-purple-900 p-4 text-md rounded-lg flex flex-wrap gap-2"
            onClick={() => handleURL(githubURL)}
          >
            <FaGithub size={25} />
            <span>Code</span>
          </button>
        )}
        {publicationURL && (
          <button
            className="bg-purple-900 p-4 text-md rounded-lg flex flex-wrap gap-2"
            onClick={() => handleURL(publicationURL)}
          >
            <GiArchiveResearch size={25} />
            <span>Published</span>
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
