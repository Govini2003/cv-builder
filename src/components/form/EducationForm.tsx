import React from 'react';
import { Education } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { GraduationCap, Calendar, Plus, Trash2 } from 'lucide-react';

interface EducationFormProps {
  education: Education[];
  updateEducation: (education: Education[]) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ education, updateEducation }) => {
  const handleChange = (id: string, field: keyof Education, value: string) => {
    const updatedEducation = education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    updateEducation(updatedEducation);
  };

  const addEducation = () => {
    const newEducation: Education = {
      id: uuidv4(),
      institution: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    updateEducation([...education, newEducation]);
  };

  const removeEducation = (id: string) => {
    const updatedEducation = education.filter(edu => edu.id !== id);
    updateEducation(updatedEducation);
  };

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="section-title">Education</h2>
        <button 
          type="button" 
          onClick={addEducation}
          className="btn-primary flex items-center"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Education
        </button>
      </div>
      
      {education.length === 0 ? (
        <div className="text-center py-6 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <GraduationCap className="h-10 w-10 mx-auto text-gray-400 mb-2" />
          <p className="text-gray-500">No education added yet</p>
          <button 
            type="button" 
            onClick={addEducation}
            className="mt-3 btn-outline text-sm"
          >
            Add Education
          </button>
        </div>
      ) : (
        education.map((edu, index) => (
          <div 
            key={edu.id} 
            className={`p-4 border border-gray-200 rounded-lg ${index > 0 ? 'mt-6' : ''}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <GraduationCap className="h-5 w-5 text-primary-600 mr-2" />
                <h3 className="font-medium">Education #{index + 1}</h3>
              </div>
              <button 
                type="button" 
                onClick={() => removeEducation(edu.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label className="form-label">Institution</label>
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => handleChange(edu.id, 'institution', e.target.value)}
                  className="input-field"
                  placeholder="University or School Name"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Degree</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => handleChange(edu.id, 'degree', e.target.value)}
                  className="input-field"
                  placeholder="Bachelor of Science, Master's, etc."
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Field of Study</label>
                <input
                  type="text"
                  value={edu.fieldOfStudy}
                  onChange={(e) => handleChange(edu.id, 'fieldOfStudy', e.target.value)}
                  className="input-field"
                  placeholder="Computer Science, Business, etc."
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
                    value={edu.startDate}
                    onChange={(e) => handleChange(edu.id, 'startDate', e.target.value)}
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
                    value={edu.endDate}
                    onChange={(e) => handleChange(edu.id, 'endDate', e.target.value)}
                    className="input-field"
                  />
                </div>
              </div>
            </div>
            
            <div className="form-group mt-2">
              <label className="form-label">Description (optional)</label>
              <textarea
                value={edu.description || ''}
                onChange={(e) => handleChange(edu.id, 'description', e.target.value)}
                className="input-field h-24"
                placeholder="Relevant coursework, achievements, or other details..."
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default EducationForm;