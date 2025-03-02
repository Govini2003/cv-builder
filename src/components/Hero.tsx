import React from 'react';
import { FileText,CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-4">
              Create a Professional Resume in Minutes
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Stand out from the crowd with a beautifully designed, ATS-friendly resume that showcases your skills and experience.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent-400 mr-2 flex-shrink-0 mt-0.5" />
                <p>Choose from professionally designed templates</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent-400 mr-2 flex-shrink-0 mt-0.5" />
                <p>Easy-to-use builder with real-time preview</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent-400 mr-2 flex-shrink-0 mt-0.5" />
                <p>Download as PDF and start applying today</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#builder" className="btn-accent text-center flex items-center justify-center">
                <FileText className="h-5 w-5 mr-2" />
                Create Your Resume
              </a>

            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-secondary-500 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-accent-500 rounded-lg"></div>
              <div className="relative bg-white rounded-lg shadow-elegant overflow-hidden animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Resume example" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;