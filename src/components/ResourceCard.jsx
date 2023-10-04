import React from "react";
import { motion } from "framer-motion";

const ResourceCard = ({ title, description, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg p-4 shadow-md"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-blue-500 hover:underline"
      >
        Learn More
      </a>
    </motion.div>
  );
};

export default ResourceCard;
