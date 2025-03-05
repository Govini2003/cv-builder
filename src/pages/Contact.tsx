import React from "react";
import { useNavigate } from "react-router-dom";

const Contact: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Me</h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        Feel free to reach out if you have any questions, feedback, or inquiries. 
        I am always happy to help!
      </p>

      {/* Contact Information */}
      <div className="space-y-4 mb-6">
        <p className="text-lg text-gray-700">Email: <a href="mailto:govinirajapakse2003@gmail.com" className="text-blue-500 hover:underline">govinirajapakse2003@gmail.com</a></p>
        <p className="text-lg text-gray-700">Phone: <a href="tel:+94701711372" className="text-blue-500 hover:underline">+94(0) 70 171 1372</a></p>
        <p className="text-lg text-gray-700">LinkedIn: <a href="https://www.linkedin.com/in/govini-rajapakse" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Govini Rajapakse</a></p>
        <p className="text-lg text-gray-700">GitHub: <a href="https://github.com/Govini2003" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Govini2003</a></p>
      </div>

      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")} 
        className="px-6 py-2 bg-accent-500 text-white font-semibold rounded-lg shadow-md hover:bg-accent-600 transition"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default Contact;
