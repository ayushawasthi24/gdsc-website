import React, { useState } from "react";
import QRCode from "qrcode.react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BlogDetails = () => {
  const blogDetails = {
    title: "GDSC Blog",
    url: "#",
    description:
      "Explore our blog for the latest tech updates and educational content.",
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };

  const contentVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  const qrCodeVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <div
      ref={ref}
      className="flex flex-col items-center lg:flex-row justify-center p-5 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30"
    >
      <div
        className="lg:w-1/2"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <motion.h2
          className="text-3xl font-semibold text-red-700 mb-4"
          variants={contentVariants}
        >
          {blogDetails.title}
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg mb-2"
          variants={contentVariants}
        >
          {blogDetails.description}
        </motion.p>
        <motion.p
          className="text-gray-600 text-lg mb-4"
          variants={contentVariants}
        >
          Stay up-to-date with our exciting content.
        </motion.p>
        <motion.a
        target="_blank"
          href={blogDetails.url}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full text-lg inline-block transition duration-300"
          variants={contentVariants}
        >
          Scan this QR Code to check it out!!
        </motion.a>
      </div>
      {inView && (
        <motion.div variants={qrCodeVariants} className="flex items-center justify-center">
          <img src="images/QR.png" alt="" className="w-1/2 h-1/2 mt-2" />
        </motion.div>
      )}
    </div>
  );
};

export default BlogDetails;
