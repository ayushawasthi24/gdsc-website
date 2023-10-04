import React, { useState } from "react";
import ResourceCard from "./ResourceCard";
import { motion } from "framer-motion";

const ResourcesShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("webDevelopment"); // Default category

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const resources = [
    {
      title: "Introduction to HTML",
      description: "Learn the basics of HTML.",
      link: "https://www.example.com/html",
      category: "webDevelopment",
    },
    {
      title: "Introduction to CSS",
      description: "Learn the basics of CSS.",
      link: "https://www.example.com/html",
      category: "webDevelopment",
    },
    {
      title: "Introduction to JavaScript",
      description: "Learn the basics of JavaScript.",
      link: "https://www.example.com/html",
      category: "webDevelopment",
    },
    {
      title: "Introduction to ReactJS",
      description: "Learn the basics of ReactJS.",
      link: "https://www.example.com/html",
      category: "webDevelopment",
    },
    {
      title: "Introduction to Flutter",
      description: "Learn the basics of Flutter.",
      link: "https://www.example.com/html",
      category: "appDevelopment",
    },
    {
      title: "Introduction to React Native",
      description: "Learn the basics of React Native.",
      link: "https://www.example.com/html",
      category: "appDevelopment",
    },
    {
      title: "Introduction to Unity",
      description: "Learn the basics of Unity.",
      link: "https://www.examplegameDevelopmentcom/html",
      category: "gameDevelopment",
    },
    {
      title: "Introduction to Blockchain",
      description: "Learn the basics of Blockchain.",
      link: "https://www.examplegameDevelopmentcom/html",
      category: "blockchain",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-400 via-green-500 to-yellow-500 min-h-screen">
      <div className="py-10 md:py-10 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
          Choose a Category
        </h1>
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 m-1">
          <button
            onClick={() => handleCategoryChange("webDevelopment")}
            className={`px-3 md:px-3 md:px-4 py-2 rounded-lg ${
              selectedCategory === "webDevelopment"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => handleCategoryChange("appDevelopment")}
            className={`px-3 md:px-4 py-2 rounded-lg ${
              selectedCategory === "appDevelopment"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            }`}
          >
            App Development
          </button>
          <button
            onClick={() => handleCategoryChange("gameDevelopment")}
            className={`px-3 md:px-4 py-2 rounded-lg ${
              selectedCategory === "gameDevelopment"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            }`}
          >
            Game Development
          </button>
          <button
            onClick={() => handleCategoryChange("blockchain")}
            className={`px-3 md:px-4 py-2 rounded-lg ${
              selectedCategory === "blockchain"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            }`}
          >
            Blockchain
          </button>
        </div>
      </div>

      <div className="container mx-auto py-3 md:py-7 ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
          }}
          className="mx-auto my-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {resources
            .filter((resource) => resource.category === selectedCategory)
            .map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ResourcesShowcase;
