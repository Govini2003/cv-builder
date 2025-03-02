import React from 'react';
import { PersonalInfo } from '../../types';
import { User, Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo;
  updatePersonalInfo: (info: PersonalInfo) => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ personalInfo, updatePersonalInfo }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updatePersonalInfo({
      ...personalInfo,
      [name]: value
    });
  };

  return (
    <div className="card">
      <h2 className="section-title">Personal Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <label htmlFor="fullName" className="form-label flex items-center">
            <User className="h-4 w-4 mr-1" />
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={personalInfo.fullName}
            onChange={handleChange}
            className="input-field"
            placeholder="John Doe"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="jobTitle" className="form-label">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={personalInfo.jobTitle}
            onChange={handleChange}
            className="input-field"
            placeholder="Frontend Developer"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label flex items-center">
            <Mail className="h-4 w-4 mr-1" />
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={personalInfo.email}
            onChange={handleChange}
            className="input-field"
            placeholder="john.doe@example.com"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone" className="form-label flex items-center">
            <Phone className="h-4 w-4 mr-1" />
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={personalInfo.phone}
            onChange={handleChange}
            className="input-field"
            placeholder="(123) 456-7890"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="location" className="form-label flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={personalInfo.location}
            onChange={handleChange}
            className="input-field"
            placeholder="New York, NY"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="website" className="form-label flex items-center">
            <Globe className="h-4 w-4 mr-1" />
            Website (optional)
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={personalInfo.website || ''}
            onChange={handleChange}
            className="input-field"
            placeholder="johndoe.com"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="linkedin" className="form-label flex items-center">
            <Linkedin className="h-4 w-4 mr-1" />
            LinkedIn (optional)
          </label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            value={personalInfo.linkedin || ''}
            onChange={handleChange}
            className="input-field"
            placeholder="linkedin.com/in/johndoe"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="github" className="form-label flex items-center">
            <Github className="h-4 w-4 mr-1" />
            GitHub (optional)
          </label>
          <input
            type="text"
            id="github"
            name="github"
            value={personalInfo.github || ''}
            onChange={handleChange}
            className="input-field"
            placeholder="github.com/johndoe"
          />
        </div>
      </div>
      
      <div className="form-group mt-4">
        <label htmlFor="summary" className="form-label">Professional Summary</label>
        <textarea
          id="summary"
          name="summary"
          value={personalInfo.summary}
          onChange={handleChange}
          className="input-field h-32"
          placeholder="A brief summary of your professional background and key strengths..."
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;