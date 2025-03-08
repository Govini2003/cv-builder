import React from "react";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
  const navigate = useNavigate();

  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">About Me</h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        Hi, I'm&nbsp;  
        <strong className="bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">
          Govini Vimaya Rajapakse
        </strong>, the creator of <strong>CV by Maya</strong>.  
        I'm a second-year Software Engineering student at the University of Westminster,  
        passionate about building modern, user-friendly applications.  
        I specialize in Python, React, Java, and other technologies to develop innovative solutions  
        that enhance digital experiences.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-accent-500 text-white font-semibold rounded-lg shadow-md hover:bg-accent-600 transition"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default About;
