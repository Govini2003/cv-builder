import React from 'react';
import { FileText, Heart, Mail, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 mr-2 text-primary-400" />
              <h2 className="text-xl font-display font-bold text-white">CV by Maya</h2>
            </div>
            <p className="text-sm mb-4">
              Create professional resumes in minutes with CV by Maya. Stand out from the crowd and land your dream job.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Govini2003" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:govinirajapakse2003@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                 <Mail className="h-5 w-5" />
              </a>

            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Resume Builder</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PDF Export</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ATS-Friendly</a></li>
            </ul>
          </div>
          

          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© 2025 CV By Maya. All rights reserved.</p>
          <p className="text-sm flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Govini Rajapakse
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;