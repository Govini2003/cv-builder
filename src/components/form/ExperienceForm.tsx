import React from 'react';
import { Experience } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { Briefcase, Calendar, MapPin, Plus, Trash2, Check } from 'lucide-react';

interface ExperienceFormProps {
  experience: Experience[];
  updateExperience: (experience: Experience[]) => void;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ experience, updateExperience }) => {
  const handleChange = (id: string, field: keyof Experience, value: string | boolean | string[]) => {
    const updatedExperience = experience.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    updateExperience(updatedExperience);
  };

  const handleCurrentChange = (id: string, checked: boolean) => {
    const updatedExperience = experience.map(exp => 
      exp.id === id ? { ...exp, current: checked, endDate: checked ? '' : exp.endDate } : exp
    );
    updateExperience(updatedExperience);
  };

  const handleAchievementChange = (expId: string, index: number, value: string) => {
    const updatedExperience = experience.map(exp => {
      if (exp.id === expId) {
        const newAchievements = [...exp.achievements];
        newAchievements[index] = value;
        return { ...exp, achievements: newAchievements };
      }
      return exp;
    });
    updateExperience(updatedExperience);
  };

  const addAchievement = (id: string) => {
    const updatedExperience = experience.map(exp => {
      if (exp.id === id) {
        return { ...exp, achievements: [...exp.achievements, ''] };
      }
      return exp;
    });
    updateExperience(updatedExperience);
  };

  const removeAchievement = (expId: string, index: number) => {
    const updatedExperience = experience.map(exp => {
      if (exp.id === expId) {
        const newAchievements = [...exp.achievements];
        newAchievements.splice(index, 1);
        return { ...exp, achievements: newAchievements };
      }
      return exp;
    });
    updateExperience(updatedExperience);
  };

  const addExperience = () => {
    const newExperience: Experience = {
      id: uuidv4(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      achievements: ['']
    };
    updateExperience([...experience, newExperience]);
  };

  const removeExperience = (id: string) => {
    const updatedExperience = experience.filter(exp => exp.id !== id);
    updateExperience(updatedExperience);
  };

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="section-title">Work Experience</h2>
        <button 
          type="button" 
          onClick={addExperience}
          className="btn-primary flex items-center"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Experience
        </button>
      </div>
      
      {experience.length === 0 ? (
        <div className="text-center py-6 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <Briefcase className="h-10 w-10 mx-auto text-gray-400 mb-2" />
          <p className="text-gray-500">No work experience added yet</p>
          <button 
            type="button" 
            onClick={addExperience}
            className="mt-3 btn-outline text-sm"
          >
            Add Experience
          </button>
        </div>
      ) : (
        experience.map((exp, index) => (
          <div 
            key={exp.id} 
            className={`p-4 border border-gray-200 rounded-lg ${index > 0 ? 'mt-6' : ''}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 text-primary-600 mr-2" />
                <h3 className="font-medium">Experience #{index + 1}</h3>
              </div>
              <button 
                type="button" 
                onClick={() => removeExperience(exp.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label className="form-label">Company/Organization</label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => handleChange(exp.id, 'company', e.target.value)}
                  className="input-field"
                  placeholder="Company Name"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Position/Title</label>
                <input
                  type="text"
                  value={exp.position}
                  onChange={(e) => handleChange(exp.id, 'position', e.target.value)}
                  className="input-field"
                  placeholder="Job Title"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  Location
                </label>
                <input
                  type="text"
                  value={exp.location}
                  onChange={(e) => handleChange(exp.id, 'location', e.target.value)}
                  className="input-field"
                  placeholder="City, State or Remote"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Start Date
                  </label>
                  <input
                    type="month"
                    value={exp.startDate}
                    onChange={(e) => handleChange(exp.id, 'startDate', e.target.value)}
                    className="input-field"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    End Date
                  </label>
                  <input
                    type="month"
                    value={exp.endDate}
                    onChange={(e) => handleChange(exp.id, 'endDate', e.target.value)}
                    className="input-field"
                    disabled={exp.current}
                  />
                </div>
              </div>
            </div>
            
            <div className="form-group mt-2">
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`current-${exp.id}`}
                  checked={exp.current}
                  onChange={(e) => handleCurrentChange(exp.id, e.target.checked)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor={`current-${exp.id}`} className="ml-2 text-sm text-gray-700">
                  I currently work here
                </label>
              </div>
            </div>
            
            <div className="form-group mt-2">
              <label className="form-label">Job Description</label>
              <textarea
                value={exp.description}
                onChange={(e) => handleChange(exp.id, 'description', e.target.value)}
                className="input-field h-24"
                placeholder="Describe your responsibilities and role..."
              />
            </div>
            
            <div className="mt-4">
              <label className="form-label">Key Achievements</label>
              
              {exp.achievements.map((achievement, i) => (
                <div key={i} className="flex items-start mb-2">
                  <Check className="h-5 w-5 text-primary-600 mt-2 mr-2 flex-shrink-0" />
                  <div className="flex-grow">
                    <textarea
                      value={achievement}
                      onChange={(e) => handleAchievementChange(exp.id, i, e.target.value)}
                      className="input-field h-20"
                      placeholder="Describe a key achievement or responsibility..."
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeAchievement(exp.id, i)}
                    className="ml-2 mt-2 text-red-500 hover:text-red-700"
                    disabled={exp.achievements.length === 1}
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
              
              <button
                type="button"
                onClick={() => addAchievement(exp.id)}
                className="btn-outline text-sm mt-2"
              >
                <Plus className="h-4 w-4 mr-1 inline" />
                Add Achievement
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ExperienceForm;