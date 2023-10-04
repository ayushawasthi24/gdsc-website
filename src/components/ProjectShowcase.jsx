import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Project 1",
    description: "Description for Project 1",
    imageUrl: "project1.jpg", // Replace with actual image URL
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 2",
    description: "Description for Project 2",
    imageUrl: "project2.jpg", // Replace with actual image URL
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    title: "Project 1",
    description: "Description for Project 1",
    imageUrl: "project1.jpg", // Replace with actual image URL
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 2",
    description: "Description for Project 2",
    imageUrl: "project2.jpg", // Replace with actual image URL
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    title: "Project 1",
    description: "Description for Project 1",
    imageUrl: "project1.jpg", // Replace with actual image URL
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 2",
    description: "Description for Project 2",
    imageUrl: "project2.jpg", // Replace with actual image URL
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
];

const ProjectShowcase = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Define the scroll offset at which the animation starts
      const triggerOffset = windowHeight * 0.7;

      if (scrollY > triggerOffset) {
        controls.start({ opacity: 1 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 text-gray-800 py-12"
    >
      <div className="mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Our Projects
        </h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
          }}
          className="flex flex-wrap justify-center"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectShowcase;
