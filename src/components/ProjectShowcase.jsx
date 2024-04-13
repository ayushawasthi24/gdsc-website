import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: " Voice Controlled Maze Game",
    domain: "Game Development",
    members: " Rajat, Pratik",
    imageUrl: "https://th.bing.com/th/id/OIP.Umcri_62nL2wC1ZC1-C2GQHaEo?w=301&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Develop a maze game where players navigate through a maze using voice commands. Integrate Google's Speech-to-Text API for recognizing and processing the player's voice commands to move through the maze.", 
    demoUrl: "https://demo-url.com",
    githubUrl: "https://demo-url.com",
  },
  {
    title: " ChatGPT Chrome Extension",
    domain: "Chrome Extension",
    members: "Harsh, Vedant",
    imageUrl: "data:image/jpeg;base64,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",
    description: " Develop a chrome extension for ChatGPT to increase user productivity as they can use ChatGPT without changing tabs. You can also customize it by including multiple models such as gpt-turbo, da-vinci etc. Additionally, you can include image generation functionality by adding the dall-e API.", 
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/DSC-IITI/ChromeGPT-2",
  },
  {
    title: "Stock Market Chrome Extension",
    domain: "Chrome Extension",
    members: "Harsh, Vedant",
    imageUrl: "https://th.bing.com/th/id/OIP.I2KsQMkR_xeJATmuamGbUAHaE8?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Build an extension that assists users in extracting and saving information from web pages. Users can define custom scraping rules, and the extension can organize the extracted data.", 
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/DSC-IITI/Stock_Market_Chrome_Extension.git",
  },
  {
    title: "Lost and Found App",
    domain: "App Development + AI/ML",
    members: "Shivam Sharma, Lovely, Darryl",
    imageUrl: "https://th.bing.com/th/id/OIP.FNIcgSRW_k9twYNmIqJBAgHaEv?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Develop an application for the Lost and Found Facility of IIT Indore, using which anyone can click a picture of any object and the app will give the object name, the location it was found, the date and time and automatically draft and send an email to all students.",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/DSC-IITI/Lost-and-Found-App",
  },
  {
    title: "Virtual Try-On for Accessories",
    domain: "Web Development + AI/ML",
    members: "Soham, Anushkha, Deepesh",
    imageUrl: "https://plugins-media.makeupar.com/smb/blog/post/2022-05-27/ccd45232-87b7-43d4-8ccd-28b7acd82d70.jpg",
    description: " Build a web application that allows users to virtually try on accessories like sunglasses, hats, or jewelry using GAN-based augmented reality. The system overlays the accessories on live camera feeds or uploaded photos.",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://demo-url.com",
  },
  {
    title: "Smart Expense Tracker",
    domain: "Web Development + AI/ML",
    members: "Akanksha, Rishi, Ayush",
    imageUrl: "https://cdn.dribbble.com/users/8372493/screenshots/15965669/media/c8265f57dca36bc52e0d44e3d981eeb2.jpg?resize=400x300&vertical=center", 
    description: " Develop an expense tracker application using MERN stack. Implement machine learning algorithms to categorize expenses automatically. Provide insights and predictions on spending patterns based on historic user data. Additionally, you can turn it into a Finance Advisor.",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/DSC-IITI/Smart-Expense-Tracker",
  },
  {
    title: " Dynamic Video Backgrounds for Video Calls",
    domain: "Web Development + AI/ML",
    members: "Arnav, Aman, Nimish",
    imageUrl: "https://blog.agmsolutions.com/wp-content/uploads/2020/06/virtual-backgrounds-banner-1200x628-1-1024x536.jpg",
    description: "Develop an app that uses GANs to generate dynamic and realistic video backgrounds for video conferencing. Users can choose different scenes or upload their own preferences", 
    demoUrl: "https://demo-url.com",
    githubUrl: "https://demo-url.com",
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
