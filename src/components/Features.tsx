import React from 'react';
import { FileText, Download, Clock, Layout, Shield, Zap } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Why Choose CV by Maya?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our resume builder combines beautiful design with powerful features to help you create a professional resume that gets results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card transition-all duration-300 hover:shadow-elegant">
            <div className="rounded-full bg-primary-100 p-3 w-14 h-14 flex items-center justify-center mb-4">
              <Clock className="h-7 w-7 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quick & Easy</h3>
            <p className="text-gray-600">
              Create a professional resume in just minutes with our intuitive builder. No design skills required.
            </p>
          </div>
          

          <div className="card transition-all duration-300 hover:shadow-elegant">
            <div className="rounded-full bg-accent-100 p-3 w-14 h-14 flex items-center justify-center mb-4">
              <Shield className="h-7 w-7 text-accent-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">ATS-Friendly</h3>
            <p className="text-gray-600">
              Our resumes are optimized to pass through Applicant Tracking Systems and reach human recruiters.
            </p>
          </div>
          
          <div className="card transition-all duration-300 hover:shadow-elegant">
            <div className="rounded-full bg-emerald-100 p-3 w-14 h-14 flex items-center justify-center mb-4">
              <Download className="h-7 w-7 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">PDF Download</h3>
            <p className="text-gray-600">
              Download your resume as a professional PDF file that's ready to share with potential employers.
            </p>
          </div>
          
          <div className="card transition-all duration-300 hover:shadow-elegant">
            <div className="rounded-full bg-purple-100 p-3 w-14 h-14 flex items-center justify-center mb-4">
              <Zap className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Real-time Preview</h3>
            <p className="text-gray-600">
              See changes to your resume in real-time as you edit, ensuring your resume looks perfect.
            </p>
          </div>
          
          <div className="card transition-all duration-300 hover:shadow-elegant">
            <div className="rounded-full bg-red-100 p-3 w-14 h-14 flex items-center justify-center mb-4">
              <FileText className="h-7 w-7 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Content Suggestions</h3>
            <p className="text-gray-600">
              Get helpful suggestions for skills, achievements, and job descriptions to enhance your resume.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;