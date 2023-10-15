import React from "react";
import { motion } from "framer-motion";

const Domains = () => {
  return (
    <div className="flex flex-col h-auto md:h-96 justify-center items-center bg-black py-5">
      <h1 className="text-white text-4xl md:text-5xl mb-4 font-black">
        Domains
      </h1>
      <div className="flex flex-wrap justify-center">
        <motion.div
          whileHover={{
            scale: 1.05,
            backgroundColor: "red",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
          }}
          className="w-48 h-48 md:w-56 md:h-56 bg-red-500 rounded-full mx-2 my-2 md:mx-4 md:my-4 flex flex-col items-center justify-center border-gray-700 border-8 hover:border-gray-600"
        >
          <p className="text-white">WEB DEVELOPMENT</p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
            backgroundColor: "yellow",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
          }}
          className="w-48 h-48 md:w-56 md:h-56 bg-yellow-500 rounded-full mx-2 my-2 md:mx-4 md:my-4 flex flex-col items-center justify-center border-gray-700 border-8 hover:border-gray-600"
        >
          <p className="text-white">APP DEVELOPMENT</p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
            backgroundColor: "green",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
          }}
          className="w-48 h-48 md:w-56 md:h-56 bg-green-500 rounded-full mx-2 my-2 md:mx-4 md:my-4 flex flex-col items-center justify-center border-gray-700 border-8 hover:border-gray-600"
        >
          <p className="text-white">AI/ML</p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
            backgroundColor: "blue",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
          }}
          className="w-48 h-48 md:w-56 md:h-56 bg-blue-600 rounded-full mx-2 my-2 md:mx-4 md:my-4 flex flex-col items-center justify-center border-gray-700 border-8 hover:border-gray-600"
        >
          <p className="text-white">BLOCKCHAIN</p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
            backgroundColor: "purple",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
          }}
          className="w-48 h-48 md:w-56 md:h-56 bg-purple-500 rounded-full mx-2 my-2 md:mx-4 md:my-4 flex flex-col items-center justify-center border-gray-700 border-8 hover:border-gray-600"
        >
          <p className="text-white">GAME DEVELOPMENT</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Domains;
