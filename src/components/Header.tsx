import React from 'react';
import { FileText,Github } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <FileText className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-display font-bold">CV by Maya</h1>
        </div>
        
        <nav className="flex items-center space-x-4">
          <a 
            href="https://github.com/Govini2003/cv-builder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-primary-100 transition-colors"
          >
            <Github className="h-5 w-5 mr-1" />
            <span className="text-sm">GitHub</span>
          </a>

         

        </nav>
      </div>
    </header>
  );
};

export default Header;