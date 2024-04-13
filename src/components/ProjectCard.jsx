import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title,domain,members, description, imageUrl, demoUrl, githubUrl }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="max-w-xs rounded-lg overflow-hidden shadow-lg mx-4 my-6 pb-4"
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-40 object-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2">{title}</div>
        <div className="text-gray-700 text-l mb-2"><b>Domain :</b> {domain}</div>
        <p className="text-gray-700 text-base h-60 mb-1"><b>Description :</b> {description}</p>
        <div className="font-semibold text-gray-700 text-l ">Members : {members}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
        >
          Demo
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
