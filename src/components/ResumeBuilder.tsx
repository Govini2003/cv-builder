import React, { useState } from 'react';
import { initialResumeData } from '../data/initialData';
import { ResumeData } from '../types';
import { usePDF } from 'react-to-pdf';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs';
import { Download } from 'lucide-react';  // Removed Eye import

// Form Components
import PersonalInfoForm from './form/PersonalInfoForm';
import EducationForm from './form/EducationForm';
import ExperienceForm from './form/ExperienceForm';
import SkillsForm from './form/SkillsForm';
import ProjectsForm from './form/ProjectsForm';

// Resume Preview
import ResumePreview from './resume/ResumePreview';

const ResumeBuilder: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [activeTab, setActiveTab] = useState<'personal' | 'education' | 'experience' | 'skills' | 'projects'>('personal');
  const { toPDF, targetRef } = usePDF({
    filename: `${resumeData.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.pdf`,
  });

  const updatePersonalInfo = (personalInfo: ResumeData['personalInfo']) => {
    setResumeData({ ...resumeData, personalInfo });
  };

  const updateEducation = (education: ResumeData['education']) => {
    setResumeData({ ...resumeData, education });
  };

  const updateExperience = (experience: ResumeData['experience']) => {
    setResumeData({ ...resumeData, experience });
  };

  const updateSkillCategories = (skillCategories: ResumeData['skillCategories']) => {
    setResumeData({ ...resumeData, skillCategories });
  };

  const updateProjects = (projects: ResumeData['projects']) => {
    setResumeData({ ...resumeData, projects });
  };

  const prevTab: Record<string, string> = {
    personal: 'projects',
    education: 'personal',
    experience: 'education',
    skills: 'experience',
    projects: 'skills',
  };

  const nextTab: Record<string, string> = {
    personal: 'education',
    education: 'experience',
    experience: 'skills',
    skills: 'projects',
    projects: 'personal',
  };

  return (
    <section id="builder" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Build Your Resume</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fill in your details below to create a professional resume. See your changes in real-time with our live preview.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div>
            <Tabs value={activeTab} onValueChange={(value: 'personal' | 'education' | 'experience' | 'skills' | 'projects') => setActiveTab(value)}>
              <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-6">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal">
                <PersonalInfoForm 
                  personalInfo={resumeData.personalInfo} 
                  updatePersonalInfo={updatePersonalInfo} 
                />
              </TabsContent>
              
              <TabsContent value="education">
                <EducationForm 
                  education={resumeData.education} 
                  updateEducation={updateEducation} 
                />
              </TabsContent>
              
              <TabsContent value="experience">
                <ExperienceForm 
                  experience={resumeData.experience} 
                  updateExperience={updateExperience} 
                />
              </TabsContent>
              
              <TabsContent value="skills">
                <SkillsForm 
                  skillCategories={resumeData.skillCategories} 
                  updateSkillCategories={updateSkillCategories} 
                />
              </TabsContent>
              
              <TabsContent value="projects">
                <ProjectsForm 
                  projects={resumeData.projects} 
                  updateProjects={updateProjects} 
                />
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={() => {
                  setActiveTab(prevTab[activeTab as keyof typeof prevTab]);
                }}
                className="btn-outline"
              >
                Previous
              </button>
              
              <button
                type="button"
                onClick={() => {
                  setActiveTab(nextTab[activeTab as keyof typeof nextTab]);
                }}
                className="btn-primary"
              >
                Next
              </button>
            </div>
          </div>
          
          {/* Preview Section */}
          <div>
            <div className="sticky top-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Preview</h3>
                <button
                  onClick={() => toPDF()}
                  className="btn-accent flex items-center"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </button>
              </div>
              
              <div ref={targetRef}>
                <ResumePreview data={resumeData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeBuilder;
