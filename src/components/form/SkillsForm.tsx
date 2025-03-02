import React from 'react';
import { SkillCategory, Skill } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { Code, Plus, Trash2 } from 'lucide-react';

interface SkillsFormProps {
  skillCategories: SkillCategory[];
  updateSkillCategories: (categories: SkillCategory[]) => void;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ skillCategories, updateSkillCategories }) => {
  const handleCategoryChange = (id: string, name: string) => {
    const updatedCategories = skillCategories.map(category => 
      category.id === id ? { ...category, name } : category
    );
    updateSkillCategories(updatedCategories);
  };

  const handleSkillChange = (categoryId: string, skillId: string, field: keyof Skill, value: string | number) => {
    const updatedCategories = skillCategories.map(category => {
      if (category.id === categoryId) {
        const updatedSkills = category.skills.map(skill => 
          skill.id === skillId ? { ...skill, [field]: field === 'level' ? Number(value) : value } : skill
        );
        return { ...category, skills: updatedSkills };
      }
      return category;
    });
    updateSkillCategories(updatedCategories);
  };

  const addCategory = () => {
    const newCategory: SkillCategory = {
      id: uuidv4(),
      name: '',
      skills: [{ id: uuidv4(), name: '', level: 3 }]
    };
    updateSkillCategories([...skillCategories, newCategory]);
  };

  const removeCategory = (id: string) => {
    const updatedCategories = skillCategories.filter(category => category.id !== id);
    updateSkillCategories(updatedCategories);
  };

  const addSkill = (categoryId: string) => {
    const updatedCategories = skillCategories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          skills: [...category.skills, { id: uuidv4(), name: '', level: 3 }]
        };
      }
      return category;
    });
    updateSkillCategories(updatedCategories);
  };

  const removeSkill = (categoryId: string, skillId: string) => {
    const updatedCategories = skillCategories.map(category => {
      if (category.id === categoryId) {
        const updatedSkills = category.skills.filter(skill => skill.id !== skillId);
        return { ...category, skills: updatedSkills };
      }
      return category;
    });
    updateSkillCategories(updatedCategories);
  };

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="section-title">Skills</h2>
        <button 
          type="button" 
          onClick={addCategory}
          className="btn-primary flex items-center"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Category
        </button>
      </div>
      
      {skillCategories.length === 0 ? (
        <div className="text-center py-6 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <Code className="h-10 w-10 mx-auto text-gray-400 mb-2" />
          <p className="text-gray-500">No skill categories added yet</p>
          <button 
            type="button" 
            onClick={addCategory}
            className="mt-3 btn-outline text-sm"
          >
            Add Skill Category
          </button>
        </div>
      ) : (
        skillCategories.map((category, index) => (
          <div 
            key={category.id} 
            className={`p-4 border border-gray-200 rounded-lg ${index > 0 ? 'mt-6' : ''}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-grow">
                <label className="form-label">Category Name</label>
                <input
                  type="text"
                  value={category.name}
                  onChange={(e) => handleCategoryChange(category.id, e.target.value)}
                  className="input-field"
                  placeholder="e.g., Programming Languages, Design Tools, Soft Skills"
                />
              </div>
              <button 
                type="button" 
                onClick={() => removeCategory(category.id)}
                className="ml-4 text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <label className="form-label">Skills</label>
                <button
                  type="button"
                  onClick={() => addSkill(category.id)}
                  className="btn-outline text-xs py-1"
                >
                  <Plus className="h-3 w-3 mr-1 inline" />
                  Add Skill
                </button>
              </div>
              
              {category.skills.map((skill) => (
                <div key={skill.id} className="flex items-center mb-3">
                  <div className="flex-grow mr-4">
                    <input
                      type="text"
                      value={skill.name}
                      onChange={(e) => handleSkillChange(category.id, skill.id, 'name', e.target.value)}
                      className="input-field"
                      placeholder="e.g., JavaScript, Photoshop, Leadership"
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <label className="text-sm text-gray-600 mr-2 whitespace-nowrap">Proficiency:</label>
                    <select
                      value={skill.level}
                      onChange={(e) => handleSkillChange(category.id, skill.id, 'level', e.target.value)}
                      className="input-field py-1"
                    >
                      <option value={1}>Beginner</option>
                      <option value={2}>Elementary</option>
                      <option value={3}>Intermediate</option>
                      <option value={4}>Advanced</option>
                      <option value={5}>Expert</option>
                    </select>
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => removeSkill(category.id, skill.id)}
                    className="ml-2 text-red-500 hover:text-red-700"
                    disabled={category.skills.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SkillsForm;
