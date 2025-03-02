import React from 'react';
import { ResumeData } from '../../types';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Calendar, ExternalLink } from 'lucide-react';

interface CreativeTemplateProps {
  data: ResumeData;
}

const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ data }) => {
  const { personalInfo, education, experience, skillCategories, projects } = data;
  
  const getColorClass = (color: ResumeData['color']) => {
    switch (color) {
      case 'blue': return 'bg-primary-600';
      case 'purple': return 'bg-secondary-600';
      case 'green': return 'bg-emerald-600';
      case 'orange': return 'bg-accent-500';
      case 'red': return 'bg-red-600';
      default: return 'bg-primary-600';
    }
  };
  
  const getTextColorClass = (color: ResumeData['color']) => {
    switch (color) {
      case 'blue': return 'text-primary-600';
      case 'purple': return 'text-secondary-600';
      case 'green': return 'text-emerald-600';
      case 'orange': return 'text-accent-500';
      case 'red': return 'text-red-600';
      default: return 'text-primary-600';
    }
  };

  const sidebarColorClass = getColorClass(data.color);
  const accentTextColorClass = getTextColorClass(data.color);

  return (
    <div className="resume-page font-sans text-gray-800 flex -mx-20 -my-20">
      {/* Sidebar */}
      <div className={`w-1/3 ${sidebarColorClass} text-white p-6`}>
        <div className="sticky top-6">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold">{personalInfo.fullName}</h1>
            <p className="text-lg mt-1 text-white/90">{personalInfo.jobTitle}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-3 border-b border-white/20 pb-1">Contact</h2>
            
            <div className="space-y-2 text-sm">
              {personalInfo.email && (
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>{personalInfo.email}</span>
                </div>
              )}
              
              {personalInfo.phone && (
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              
              {personalInfo.location && (
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{personalInfo.location}</span>
                </div>
              )}
              
              {personalInfo.website && (
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  <span>{personalInfo.website}</span>
                </div>
              )}
              
              {personalInfo.linkedin && (
                <div className="flex items-center">
                  <Linkedin className="h-4 w-4 mr-2" />
                  <span>{personalInfo.linkedin}</span>
                </div>
              )}
              
              {personalInfo.github && (
                <div className="flex items-center">
                  <Github className="h-4 w-4 mr-2" />
                  <span>{personalInfo.github}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Skills */}
          {skillCategories.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-3 border-b border-white/20 pb-1">Skills</h2>
              
              {skillCategories.map((category) => (
                <div key={category.id} className="mb-4">
                  <h3 className="font-medium text-sm mb-2">{category.name}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill.id} className="text-sm">
                        <div className="flex justify-between mb-1">
                          <span>{skill.name}</span>
                          <span>{skill.level * 20}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-white" 
                            style={{ width: `${skill.level * 20}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          

        </div>
      </div>
      
      {/* Main Content */}
      <div className="w-2/3 bg-white p-6">
        {/* Summary */}
        {personalInfo.summary && (
          <section className="mb-6">
            <h2 className={`text-lg font-bold mb-2 ${accentTextColorClass}`}>About Me</h2>
            <p className="text-sm">{personalInfo.summary}</p>
          </section>
        )}
        
        {/* Experience */}
        {experience.length > 0 && (
          <section className="mb-6">
            <h2 className={`text-lg font-bold mb-3 ${accentTextColorClass}`}>Work Experience</h2>
            
            {experience.map((exp) => (
              <div key={exp.id} className="mb-4 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:rounded-full before:bg-gray-300 before:z-10 after:content-[''] after:absolute after:left-1.5 after:top-4 after:bottom-0 after:w-[1px] after:bg-gray-300 last:after:hidden">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-base">{exp.position}</h3>
                    <p className="text-sm font-medium">{exp.company}, {exp.location}</p>
                  </div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm mt-1">{exp.description}</p>
                
                {exp.achievements.length > 0 && (
                  <ul className="mt-2 text-sm list-disc list-inside">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}
        
        {/* Education */}
        {education.length > 0 && (
          <section className="mb-6">
            <h2 className={`text-lg font-bold mb-3 ${accentTextColorClass}`}>Education</h2>
            
            {education.map((edu) => (
              <div key={edu.id} className="mb-4 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:rounded-full before:bg-gray-300 before:z-10 after:content-[''] after:absolute after:left-1.5 after:top-4 after:bottom-0 after:w-[1px] after:bg-gray-300 last:after:hidden">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-base">{edu.degree} in {edu.fieldOfStudy}</h3>
                    <p className="text-sm font-medium">{edu.institution}</p>
                  </div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </div>
                </div>
                
                {edu.description && <p className="text-sm mt-1">{edu.description}</p>}
              </div>
            ))}
          </section>
        )}
        
        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <h2 className={`text-lg font-bold mb-3 ${accentTextColorClass}`}>Projects</h2>
            
            <div className="grid grid-cols-1 gap-3">
              {projects.map((project) => (
                <div key={project.id} className="mb-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-base">{project.name}</h3>
                    {project.link && (
                      <a href={project.link} className="text-sm flex items-center text-gray-600">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Link
                      </a>
                    )}
                  </div>
                  <p className="text-sm mt-1">{project.description}</p>
                  
                  {project.technologies.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className={`px-2 py-0.5 text-xs rounded-full ${sidebarColorClass} text-white`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default CreativeTemplate;