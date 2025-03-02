import { ResumeData } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: 'Alex Johnson',
    jobTitle: 'Senior Frontend Developer',
    email: 'alex.johnson@example.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    website: 'alexjohnson.dev',
    linkedin: 'linkedin.com/in/alexjohnson',
    github: 'github.com/alexjohnson',
    summary: 'Passionate frontend developer with 5+ years of experience building responsive, user-friendly web applications. Specialized in React, TypeScript, and modern CSS frameworks. Strong focus on accessibility and performance optimization.'
  },
  education: [
    {
      id: uuidv4(),
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      fieldOfStudy: 'Computer Science',
      startDate: '2014-09',
      endDate: '2018-05',
      description: 'Graduated with honors. Relevant coursework: Data Structures, Algorithms, Web Development, Human-Computer Interaction.'
    }
  ],
  experience: [
    {
      id: uuidv4(),
      company: 'TechCorp Inc.',
      position: 'Senior Frontend Developer',
      location: 'San Francisco, CA',
      startDate: '2021-03',
      endDate: '',
      current: true,
      description: 'Lead frontend development for the company\'s flagship product, a SaaS platform serving over 500,000 users.',
      achievements: [
        'Reduced page load time by 40% through code splitting and lazy loading techniques',
        'Implemented comprehensive UI component library used across multiple products',
        'Mentored junior developers and conducted code reviews to ensure quality standards'
      ]
    },
    {
      id: uuidv4(),
      company: 'WebSolutions LLC',
      position: 'Frontend Developer',
      location: 'San Francisco, CA',
      startDate: '2018-06',
      endDate: '2021-02',
      current: false,
      description: 'Developed and maintained multiple client websites and web applications.',
      achievements: [
        'Built responsive interfaces for 20+ client projects using React and TypeScript',
        'Collaborated with designers to implement pixel-perfect UIs from Figma designs',
        'Integrated RESTful APIs and implemented state management using Redux'
      ]
    }
  ],
  skillCategories: [
    {
      id: uuidv4(),
      name: 'Frontend Development',
      skills: [
        { id: uuidv4(), name: 'React', level: 5 },
        { id: uuidv4(), name: 'TypeScript', level: 4 },
        { id: uuidv4(), name: 'HTML/CSS', level: 5 },
        { id: uuidv4(), name: 'Tailwind CSS', level: 4 }
      ]
    },
    {
      id: uuidv4(),
      name: 'Tools & Technologies',
      skills: [
        { id: uuidv4(), name: 'Git', level: 4 },
        { id: uuidv4(), name: 'Webpack', level: 3 },
        { id: uuidv4(), name: 'Jest', level: 4 },
        { id: uuidv4(), name: 'CI/CD', level: 3 }
      ]
    }
  ],
  projects: [
    {
      id: uuidv4(),
      name: 'E-commerce Platform',
      description: 'A full-featured online store with product catalog, shopping cart, and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      link: 'github.com/alexjohnson/ecommerce'
    },
    {
      id: uuidv4(),
      name: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and team collaboration.',
      technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
      link: 'github.com/alexjohnson/taskmanager'
    }
  ],
  certificates: [
    {
      id: uuidv4(),
      name: 'Advanced React and Redux',
      issuer: 'Udemy',
      date: '2020-05',
      link: 'udemy.com/certificate/advanced-react'
    },
    {
      id: uuidv4(),
      name: 'Web Accessibility',
      issuer: 'Google',
      date: '2019-11',
      link: 'google.com/certificate/web-accessibility'
    }
  ],
  languages: [
    {
      id: uuidv4(),
      name: 'English',
      proficiency: 'Native/Bilingual'
    },
    {
      id: uuidv4(),
      name: 'Spanish',
      proficiency: 'Professional Working'
    }
  ],
  references: [
    {
      id: uuidv4(),
      name: 'Sarah Chen',
      company: 'TechCorp Inc.',
      position: 'Engineering Manager',
      email: 'sarah.chen@techcorp.com',
      phone: '(555) 987-6543'
    }
  ],
  template: 'modern',
  color: 'blue'
};