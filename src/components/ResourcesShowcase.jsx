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
      // Web
      title: "Udemy Course",
      description: "Full Stack Development",
      link: "https://www.udemy.com/course/the-web-developer-bootcamp/",
      category: "webDevelopment",
    },
    {
      title: "HTML and CSS",
      description: "Learn the basics of HTML and CSS.",
      link: "https://youtu.be/a_iQb1lnAEQ",
      category: "webDevelopment",
    },
    {
      title: "Full Course on JavaScript",
      description: "Learn the basics of JavaScript.",
      link: "https://youtu.be/jS4aFq5-91M",
      category: "webDevelopment",
    },
    {
      title: "Full Course on NextJS 13",
      description: "Learn everything about NextJS.",
      link: "https://youtu.be/NgayZAuTgwM",
      category: "webDevelopment",
    },
    {
      title: "Full Stack Web Development",
      description: "HTML, CSS, JS, Node, MongoDB",
      link: "https://youtu.be/nu_pCVPKzTk",
      category: "webDevelopment",
    },
    {
      title: "Node and Express JS",
      description: "Backend",
      link: "https://youtu.be/Oe421EPjeBE",
      category: "webDevelopment",
    },
    {
      title: "Restful API using Node and Express",
      description: "Backend",
      link: "https://youtu.be/o3ka5fYysBM",
      category: "webDevelopment",
    },
    {
      title: "TypeScript tutorial for beginners",
      description: "TypeScript",
      link: "https://www.youtube.com/watch?v=d56mG7DezGs",
      category: "webDevelopment",
    },
    {
      title: "TypeScript for NextJS",
      description: "TypeScript",
      link: "https://www.youtube.com/watch?v=WlxcujsvcIY&t=19s",
      category: "webDevelopment",
    },
    {
      title: "React, Redux, React Router, Next",
      description: "Udemy",
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
      category: "webDevelopment",
    },
    {
      title: "React Full Course",
      description: "ReactJS",
      link: "https://youtu.be/bMknfKXIFA8",
      category: "webDevelopment",
    },
    {
      title: "Full Stack project with Next",
      description: "Project",
      link: "https://www.youtube.com/watch?v=pUNSHPyVryU",
      category: "webDevelopment",
    },
    {
      title: "Bun Crash Course",
      description: "BunJS",
      link: "https://www.youtube.com/watch?v=zNE5H6nOeCI",
      category: "webDevelopment",
    },
    {
      title: "MySQL, Node, Express",
      description: "Backend",
      link: "https://www.youtube.com/watch?v=Hej48pi_lOc",
      category: "webDevelopment",
    },
    {
      title: "MySQL Tutorial For Beginners",
      description: "Databases",
      link: "https://www.youtube.com/watch?v=7S_tz1z_5bA",
      category: "webDevelopment",
    },
    {
      title: "A Beginner's Guide to WebSockets",
      description: "WebSockets",
      link: "https://youtu.be/8ARodQ4Wlf4",
      category: "webDevelopment",
    },
    {
      title: "Socket.io + ReactJS",
      description: "WebSockets",
      link: "https://youtu.be/djMy4QsPWiI",
      category: "webDevelopment",
    },
    {
      title: "Socket.io",
      description: "WebSockets",
      link: "https://youtu.be/tVUE_JiPU-k",
      category: "webDevelopment",
    },
    {
      title: "Build a realtime chat application",
      description: "Project",
      link: "https://youtu.be/NU-HfZY3ATQ",
      category: "webDevelopment",
    },
    {
      title: "WebRTC Tutorial",
      description: "WebRTC",
      link: "https://youtu.be/8I2axE6j204",
      category: "webDevelopment",
    },
    {
      title: "AgoraSDK",
      description: "Agora",
      link: "https://youtu.be/HX6AM_1-jNM",
      category: "webDevelopment",
    },
    // App Development
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
    // Game Development
    {
      title: "Introduction to Unity",
      description: "Learn the basics of Unity.",
      link: "https://www.examplegameDevelopmentcom/html",
      category: "gameDevelopment",
    },
    // ML
    {
      title: "Domains of AI",
      description:
        "An overview of the domains in the field of Artificial Intelligence, gives you a gist of what you will be getting into and the future prospects and the current developments in the field.",
      link: "https://suryamaddula.medium.com/domains-of-artificial-intelligence-8046d0778f1a",
      category: "ml",
    },
    {
      title: "Supervised Learning",
      description: "What is Supervised Learning?",
      link: "https://www.ibm.com/topics/supervised-learning#:~:text=Supervised%20learning%2C%20also%20known%20as,data%20or%20predict%20outcomes%20accurately.",
      category: "ml",
    },
    {
      title: "Examples of Supervised Learning",
      description: "Supervised Learning?",
      link: "https://www.javatpoint.com/supervised-machine-learning",
      category: "ml",
    },
    {
      title: "Unsupervised Learning",
      description: "What is Unsupervised Learning?",
      link: "https://www.ibm.com/topics/unsupervised-learning#:~:text=Unsupervised%20learning%2C%20also%20known%20as,the%20need%20for%20human%20intervention.",
      category: "ml",
    },
    {
      title: "Reinforcement Learning",
      description: "What is Reinforcement Learning?",
      link: "https://www.analyticsvidhya.com/blog/2021/02/introduction-to-reinforcement-learning-for-beginners/",
      category: "ml",
    },
    {
      title: "Pandas",
      description:
        "Pandas is a dataset manipulation library used to manipulate tabular data and provide operations for data analysis. NumPy is used to manipulate data which is stored in the form as a numpy array(think of it as a datatype).Eg: Pixels of an image.",
      link: "https://pandas.pydata.org/docs/",
      category: "ml",
    },
    {
      title: "Numpy",
      description:
        "NumPy is used to manipulate data which is stored in the form as a numpy array(think of it as a datatype).Eg: Pixels of an image.",
      link: "https://numpy.org/doc/stable/",
      category: "ml",
    },
    {
      title: "Sci-kit learn",
      description:
        "Machine learning library consisting various classification, regression and clustering algorithms. Along with that preprocessing operations to manipulate datasets are also present.",
      link: "https://scikit-learn.org/stable/user_guide.html",
      category: "ml",
    },
    {
      title: "House Prices Dataset",
      description: "Traning Dataset for Regression problems",
      link: "https://www.kaggle.com/datasets/yasserh/housing-prices-dataset",
      category: "ml",
    },
    {
      title: "Titanic Dataset",
      description: "Traning Dataset for Regression problems",
      link: "https://www.kaggle.com/competitions/titanic",
      category: "ml",
    },
    {
      title: "Red Wine Quality Dataset",
      description: "Traning Dataset for Regression problems",
      link: "https://www.kaggle.com/datasets/uciml/red-wine-quality-cortez-et-al-2009",
      category: "ml",
    },
    {
      title: "TensorFlow",
      description:
        "TensorFlow along with Keras is a really powerful combo to build a full-fledged ML model which can be furnished to be applied in industries.The TensorFlow platform helps you implement best practices for data automation, model tracking, performance monitoring, and model retraining. Keras is an API which works on TensorFlow and it makes implementation of your model easier.",
      link: "https://www.tensorflow.org/",
      category: "ml",
    },
    {
      title: "Keras",
      description:
        "TensorFlow along with Keras is a really powerful combo to build a full-fledged ML model which can be furnished to be applied in industries.The TensorFlow platform helps you implement best practices for data automation, model tracking, performance monitoring, and model retraining. Keras is an API which works on TensorFlow and it makes implementation of your model easier.",
      link: "https://keras.io/",
      category: "ml",
    },
    {
      title: "PyTorch",
      description:
        "It is an extensive library equipped with a variety of modules which can be used to build models in deep learning which are very easy to modify. Torchvision is another library created by PyTorch devs which consists of popular datasets, model architectures, and image transformations for computer vision.",
      link: "",
      category: "ml",
    },
    {
      title: "Popular domains",
      description:
        "These domains are popular in the field of AI/ML and there are an immense number of projects available to try on the internet and many more problems whose solutions lie in one of these domains.",
      link: "https://pytorch.org/",
      category: "ml",
    },
    {
      title: "Computer Vision",
      description:
        "Using image and videos as the basic data type and processing them using various libraries and then using them in models.",
      link: "https://azure.microsoft.com/en-in/resources/cloud-computing-dictionary/what-is-computer-vision/#:~:text=Computer%20vision%20is%20a%20field,tasks%20that%20replicate%20human%20capabilities.",
      category: "ml",
    },
    {
      title: "NLP",
      description:
        "Creating models to understand human languages and create chatbots and the most popular chat gpt from it.",
      link: "",
      category: "ml",
    },
    {
      title: "Time Series Analysis",
      description:
        "Using previous time-stamped data or real-time data to make predictions.",
      link: "",
      category: "ml",
    },
    {
      title: "Quantum+ML",
      description: "",
      link: "",
      category: "ml",
    },
    // Blockchain
    {
      title: "Blockchain",
      description: "Learn the basics of Blockchain.",
      link: "https://youtube.com/playlist?list=PLgPmWS2dQHW-BRQCQCNYgmHUfCN115pn0&si=yIMc8ps_iv_SJcZI",
      category: "blockchain",
    },
    {
      title: "Ethereum",
      description: "To get started with the concepts of Ethereum.",
      link: "https://youtube.com/playlist?list=PLgPmWS2dQHW9FmqNqug3M5ooNuRqP-alu&si=Yj2RPPxz4tYOvr3V",
      category: "blockchain",
    },
    {
      title: "Solidity Course (Beginner)",
      description: "Learn Solidity",
      link: "https://youtube.com/playlist?list=PLWUCKsxdKl0oksYr6IG_wRsaSUySQC0ck&si=y2R9R73AFqBikCEE",
      category: "blockchain",
    },
    {
      title: "Hardhat Course",
      description: "Learn the basics of Hardhat.",
      link: "https://youtube.com/playlist?list=PLgPmWS2dQHW9mucRpDVe16j9Qn74ZXqcD&si=xQ_vudtWcV1ED4kE",
      category: "blockchain",
    },
    {
      title: "Hardhat Documentation",
      description: "Hardhat Official Docs",
      link: "https://hardhat.org/docs",
      category: "blockchain",
    },
    {
      title: "Ether.js Course",
      description: "Learn about ether.js",
      link: "https://youtu.be/NjeVQFSKi5A?si=KvCxDsW_m0v3B5bQ",
      category: "blockchain",
    },
    {
      title: "EtherJS Documentation",
      description: "EtherJS Official Docs",
      link: "https://docs.ethers.org/v5/",
      category: "blockchain",
    },
    {
      title: "Most Complete Course on Solidity, Ethereum and Web3",
      description: "All in One Course",
      link: "https://youtu.be/gyMwXuJrbJQ?si=37sxSwF_tqdO26ur",
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
            onClick={() => handleCategoryChange("ml")}
            className={`px-3 md:px-4 py-2 rounded-lg ${
              selectedCategory === "ml"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            }`}
          >
            Machine Learning
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

      <div className="mx-4 py-3 md:py-7">
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
