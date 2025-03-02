import React from 'react';
import { Project } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { FolderGit2, Plus, Trash2, Link, Tag } from 'lucide-react';

interface ProjectsFormProps {
  projects: Project[];
  updateProjects: (projects: Project[]) => void;
}

const ProjectsForm: React.FC<ProjectsFormProps> = ({ projects, updateProjects }) => {
  const handleChange = (id: string, field: keyof Project, value: string | string[]) => {
    const updatedProjects = projects.map(project => 
      project.id === id ? { ...project, [field]: value } : project
    );
    updateProjects(updatedProjects);
  };

  const handleTechChange = (id: string, value: string) => {
    const updatedProjects = projects.map(project => {
      if (project.id === id) {
        // Split by commas and trim whitespace
        const technologies = value.split(',').map(tech => tech.trim()).filter(tech => tech !== '');
        return { ...project, technologies };
      }
      return project;
    });
    updateProjects(updatedProjects);
  };

  const addProject = () => {
    const newProject: Project = {
      id: uuidv4(),
      name: '',
      description: '',
      technologies: [],
      link: ''
    };
    updateProjects([...projects, newProject]);
  };

  const removeProject = (id: string) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    updateProjects(updatedProjects);
  };

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="section-title">Projects</h2>
        <button 
          type="button" 
          onClick={addProject}
          className="btn-primary flex items-center"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Project
        </button>
      </div>
      
      {projects.length === 0 ? (
        <div className="text-center py-6 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <FolderGit2 className="h-10 w-10 mx-auto text-gray-400 mb-2" />
          <p className="text-gray-500">No projects added yet</p>
          <button 
            type="button" 
            onClick={addProject}
            className="mt-3 btn-outline text-sm"
          >
            Add Project
          </button>
        </div>
      ) : (
        projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`p-4 border border-gray-200 rounded-lg ${index > 0 ? 'mt-6' : ''}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <FolderGit2 className="h-5 w-5 text-primary-600 mr-2" />
                <h3 className="font-medium">Project #{index + 1}</h3>
              </div>
              <button 
                type="button" 
                onClick={() => removeProject(project.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label className="form-label">Project Name</label>
                <input
                  type="text"
                  value={project.name}
                  onChange={(e) => handleChange(project.id, 'name', e.target.value)}
                  className="input-field"
                  placeholder="e.g., E-commerce Website, Mobile App"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label flex items-center">
                  <Link className="h-4 w-4 mr-1" />
                  Project Link (optional)
                </label>
                <input
                  type="url"
                  value={project.link || ''}
                  onChange={(e) => handleChange(project.id, 'link', e.target.value)}
                  className="input-field"
                  placeholder="https://github.com/username/project"
                />
              </div>
            </div>
            
            <div className="form-group mt-2">
              <label className="form-label">Project Description</label>
              <textarea
                value={project.description}
                onChange={(e) => handleChange(project.id, 'description', e.target.value)}
                className="input-field h-24"
                placeholder="Describe the project, its purpose, and your role..."
              />
            </div>
            
            <div className="form-group mt-2">
              <label className="form-label flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                Technologies Used
              </label>
              <input
                type="text"
                value={project.technologies.join(', ')}
                onChange={(e) => handleTechChange(project.id, e.target.value)}
                className="input-field"
                placeholder="e.g., React, Node.js, MongoDB (comma separated)"
              />
              {project.technologies.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectsForm;