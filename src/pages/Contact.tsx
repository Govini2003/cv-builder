import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
      <motion.h1
        className="text-4xl font-extrabold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 max-w-2xl mb-6 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Feel free to reach out if you have any questions, feedback, or inquiries. I am always happy to help!
      </motion.p>
      
      <motion.div
        className="space-y-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-lg text-gray-700">Email: <a href="mailto:govinirajapakse2003@gmail.com" className="text-blue-500 hover:underline">govinirajapakse2003@gmail.com</a></p>
        <p className="text-lg text-gray-700">Phone: <a href="tel:+94701711372" className="text-blue-500 hover:underline">+94(0) 70 171 1372</a></p>
        <p className="text-lg text-gray-700">LinkedIn: <a href="https://www.linkedin.com/in/govini-rajapakse" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Govini Rajapakse</a></p>
        <p className="text-lg text-gray-700">GitHub: <a href="https://github.com/Govini2003" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Govini2003</a></p>
      </motion.div>
      
      <motion.button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-accent-500 text-white font-semibold rounded-lg shadow-md hover:bg-accent-600 transition-transform transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        Go Back to Home
      </motion.button>
    </div>
  );
};

export default Contact;
