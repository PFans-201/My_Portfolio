import React from 'react';
import Testimonial from '@/components/Testimonial';
import { FiMail, FiCode, FiDatabase, FiCloud } from 'react-icons/fi';
import {LinkedInIcon, GitHubIcon} from '@/icons/socialIcons';
import Card from '@/components/Card';

//TODO maybe remove motions, plus 60 MB, maybe it's enough with css transitions

// Custom components
const SectionHeader = ({ children }) => (
  <h2 className="text-3xl font-bold mb-12 text-center relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-16 after:h-1 after:bg-blue-500 after:transform after:-translate-x-1/2">
    {children}
  </h2>
);

const SkillCard = ({ icon, title, level }) => (
  <Card
    className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:translate-y-[-2px]"
    shadow
    hoverEffect
  >
    <div className="text-4xl text-blue-500 mb-4">{icon}</div>
    <Card.Title className="text-xl font-semibold mb-2">{title}</Card.Title>
    <div className="w-full  rounded-full h-2">
      <div 
        className="bg-blue-500 h-2 rounded-full" 
        style={{ width: `${level}%` }}
      />
    </div>
  </Card>
);

const ProjectCard = ({ title, description, image }) => (
  <div className="relative overflow-hidden rounded-xl group">
    <img 
      src={image} 
      alt={title}
      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const Home = () => (
  <div className="space-y-20">
    {/* Hero Section */}
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-100 to-blue-500 bg-clip-text text-transparent">
          Pedro Fanica
        </h1>
        {/*TODO change color of my name*/}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Building digital experiences with modern web technologies & data science
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <GitHubIcon className="round-icon" />
          <LinkedInIcon className="round-icon" />
          <a href="mailto:info@pedrofanica.com" className="round-icon">
            <FiMail className="text-2xl" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard 
            icon={<FiCode />} 
            title="Web Development" 
            level={90} 
          />
          <SkillCard 
            icon={<FiDatabase />} 
            title="Data Science" 
            level={85} 
          />
          <SkillCard 
            icon={<FiCloud />} 
            title="Cloud Computing" 
            level={80} 
          />
        </div>
      </div>
    </section>

    {/* Featured Projects */}
    <section className="px-4">
      <SectionHeader>Featured Projects</SectionHeader>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <ProjectCard
          title="AI-Powered Analytics Platform"
          description="Machine learning platform for real-time business insights"
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        />
        <ProjectCard
          title="E-commerce Optimization System"
          description="Full-stack solution with personalized recommendations"
          image="https://images.unsplash.com/photo-1556742205-e10c0346c8a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        />
      </div>
    </section>

    {/* Testimonials */}
    <section className="px-4">
      <SectionHeader>What People Say</SectionHeader>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Testimonial
          author="Alice Johnson"
          role="Tech Lead @ TechCorp"
          content="Pedro's technical expertise and problem-solving skills helped us deliver our project 2 weeks ahead of schedule."
          avatar="https://randomuser.me/api/portraits/women/1.jpg"
        />
        <Testimonial
          author="Bob Smith"
          role="CTO @ StartupX"
          content="Exceptional full-stack development skills combined with deep data science knowledge. A true asset to any team."
          avatar="https://randomuser.me/api/portraits/men/1.jpg"
        />
        <Testimonial
          author="Carol White"
          role="Project Manager @ BigTech"
          content="Reliable, communicative, and technically brilliant. Delivered beyond our expectations."
          avatar="https://randomuser.me/api/portraits/women/2.jpg"
        />
      </div>
    </section>
  </div>
);

export default Home;
