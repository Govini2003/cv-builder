import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
      <motion.h1
        className="text-4xl font-extrabold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 max-w-2xl mb-6 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Hi, I'm&nbsp;
        <strong className="bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">
          Govini Vimaya Rajapakse
        </strong>, the creator of <strong>CV by Maya</strong>. <br />
        I'm a second-year Software Engineering student at the University of Westminster, passionate about building modern, user-friendly applications. I specialize in React, Java, and other technologies to develop innovative solutions that enhance digital experiences.
      </motion.p>
      <motion.button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-accent-500 text-white font-semibold rounded-lg shadow-md hover:bg-accent-600 transition-transform transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        Go Back to Home
      </motion.button>
    </div>
  );
};

export default About;